"""Build the public Pages artifact and generate its matching offline manifest."""
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys

root = Path(__file__).resolve().parent.parent
dist = root / "dist"
if dist.exists():
    shutil.rmtree(dist)
dist.mkdir()
for name in ("index.html", "style.css", "app.js", "cloud.js", "model.js", "updates.js",
             "manifest.json", "firebase-config.js", "build_release.py", "sw.template.txt"):
    shutil.copy2(root / name, dist / name)
for name in ("data", "icons", "images"):
    if (root / name).exists():
        shutil.copytree(root / name, dist / name)

raw_config = os.getenv("FIREBASE_WEB_CONFIG")
if raw_config:
    config = json.loads(raw_config)
    required = {"apiKey", "authDomain", "projectId", "appId"}
    allowed = required | {"databaseURL", "storageBucket", "messagingSenderId", "measurementId"}
    if not isinstance(config, dict) or not required <= config.keys() <= allowed or not all(
        isinstance(value, str) and value.strip() for value in config.values()
    ):
        raise ValueError("FIREBASE_WEB_CONFIG must contain only Firebase Web SDK configuration fields")
    (dist / "firebase-config.js").write_text("export default " + json.dumps(config) + ";\n")

version = "4.0.0"
if os.getenv("GITHUB_SHA"):
    version += "+" + os.environ["GITHUB_SHA"][:12]
subprocess.run([sys.executable, str(dist / "build_release.py"), version], check=True)
for name in ("build_release.py", "sw.template.txt"):
    (dist / name).unlink()
(dist / ".nojekyll").touch()

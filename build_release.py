from pathlib import Path
import hashlib,json,datetime,sys,os
root=Path(__file__).resolve().parent
version=sys.argv[1] if len(sys.argv)>1 else '4.0.0'
files=[p for p in root.rglob('*') if p.is_file() and (p.parent==root and p.name in ['index.html','app.js','updates.js','style.css','manifest.json','firebase-config.js','cloud.js','model.js'] or p.relative_to(root).parts[0] in ['data','icons','images'])]
assets={p.relative_to(root).as_posix():hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(files)}
release={'version':version,'date':datetime.datetime.fromtimestamp(int(os.environ["SOURCE_DATE_EPOCH"]), datetime.timezone.utc).date().isoformat() if "SOURCE_DATE_EPOCH" in os.environ else datetime.date.today().isoformat(),'assets':assets}
release['digest']=hashlib.sha256(json.dumps(assets, sort_keys=True).encode()).hexdigest()[:20]
(root/'release.json').write_text(json.dumps(release,ensure_ascii=False,indent=2))
worker=(root/'sw.template.txt').read_text().replace('__RELEASE__',json.dumps(release,ensure_ascii=False))
(root/'sw.js').write_text(worker)

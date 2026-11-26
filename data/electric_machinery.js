// 題庫規範：id 永久唯一；type: past 或 mock；year: 民國年（無則 null）；mock: 1~5（無則 null）；unit: 單元；question: 題幹；options: 四個字串；answer: 0~3；explanation: 純文字詳解；image: 選填本機相對路徑；source: 來源。公式可使用 Unicode。以下為原創模擬題，非官方歷屆原題。
self.QUESTION_BANKS ||= {};
self.QUESTION_BANKS.electric_machinery =
[
  {
    "id": "em-demo-001",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "理想變壓器一次側 600 匝、二次側 150 匝，一次電壓 220 V，二次電壓為何？",
    "options": [
      "55 V",
      "110 V",
      "440 V",
      "880 V"
    ],
    "answer": 0,
    "explanation": "V₂/V₁ = N₂/N₁ = 150/600，因此 V₂ = 55 V。理想變壓器電壓與匝數成正比。",
    "source": "原創統測風格模擬題"
  },
  {
    "id": "em-demo-002",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "變壓器輸出 900 W，總損失 100 W，效率為何？",
    "options": [
      "80%",
      "90%",
      "95%",
      "100%"
    ],
    "answer": 1,
    "explanation": "輸入功率 = 900 + 100 = 1000 W。η = Pout/Pin × 100% = 90%。",
    "source": "原創統測風格模擬題"
  },
  {
    "id": "em-demo-003",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "感應電動機",
    "question": "60 Hz、四極三相感應電動機的同步轉速為何？",
    "options": [
      "900 rpm",
      "1200 rpm",
      "1800 rpm",
      "3600 rpm"
    ],
    "answer": 2,
    "explanation": "Nₛ = 120f/P = 120 × 60/4 = 1800 rpm。P 為總極數。",
    "source": "原創統測風格模擬題"
  },
  {
    "id": "em-demo-004",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "感應電動機",
    "question": "同步轉速 1800 rpm，轉子轉速 1710 rpm，滑差率為何？",
    "options": [
      "2%",
      "3%",
      "4%",
      "5%"
    ],
    "answer": 3,
    "explanation": "s = (Nₛ − Nᵣ)/Nₛ = 90/1800 = 0.05，即 5%。",
    "source": "原創統測風格模擬題"
  },
  {
    "id": "em-demo-005",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "同步機",
    "question": "六極同步發電機轉速 1200 rpm，頻率為何？",
    "options": [
      "50 Hz",
      "60 Hz",
      "100 Hz",
      "120 Hz"
    ],
    "answer": 1,
    "explanation": "f = PN/120 = 6 × 1200/120 = 60 Hz。",
    "source": "原創統測風格模擬題"
  },
  {
    "id": "em-demo-006",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "同步機",
    "question": "同步電動機過激磁運轉時，通常呈現何種功率因數？",
    "options": [
      "超前",
      "落後",
      "零",
      "必定為 1"
    ],
    "answer": 0,
    "explanation": "在固定負載下，過激磁同步電動機通常吸收超前電流，可用於改善感性負載功率因數。",
    "source": "原創統測風格模擬題"
  },
  {
    "id": "em-demo-007",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "直流機",
    "question": "直流電動機端電壓 110 V，電樞電流 10 A，電樞電阻 0.5 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "100 V",
      "105 V",
      "110 V",
      "115 V"
    ],
    "answer": 1,
    "explanation": "E = V − IₐRₐ = 110 − 10 × 0.5 = 105 V。",
    "source": "原創統測風格模擬題"
  },
  {
    "id": "em-demo-008",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "直流機",
    "question": "直流電動機磁通固定，電樞電流增加為原來兩倍，電磁轉矩如何變化？",
    "options": [
      "減半",
      "不變",
      "兩倍",
      "四倍"
    ],
    "answer": 2,
    "explanation": "T = kΦIₐ。磁通 Φ 固定時，轉矩與電樞電流成正比。",
    "source": "原創統測風格模擬題"
  },
  {
    "id": "em-demo-009",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "變壓器",
    "question": "變壓器在額定電壓與頻率下，負載電流減半，銅損約為滿載銅損的多少？",
    "options": [
      "1/2",
      "1/3",
      "1/4",
      "不變"
    ],
    "answer": 2,
    "explanation": "銅損 Pcu = I²R。電流減半且電阻不變時，銅損為 (1/2)² = 1/4。",
    "source": "原創統測風格模擬題"
  },
  {
    "id": "em-demo-010",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "感應電動機",
    "question": "60 Hz 感應電動機滑差率為 4%，轉子電流頻率為何？",
    "options": [
      "1.2 Hz",
      "2.4 Hz",
      "4 Hz",
      "60 Hz"
    ],
    "answer": 1,
    "explanation": "轉子頻率 f₂ = sf₁ = 0.04 × 60 = 2.4 Hz。",
    "source": "原創統測風格模擬題"
  },
  {
    "id": "em-v2-1-03",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 150 V、電樞電流 3 A、電樞電阻 0.5 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "150 V",
      "74.25 V",
      "148.5 V",
      "151.5 V"
    ],
    "answer": 2,
    "explanation": "E = V − IₐRₐ = 150 − 3×0.5 = 148.5 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-04",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 150 V、電樞電流 3 A、電樞電阻 0.5 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "148.5 V",
      "151.5 V",
      "74.25 V",
      "150 V"
    ],
    "answer": 0,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 150 − 3×0.5 = 148.5 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-05",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 2:1，一次電壓 120 V，二次電壓為何？",
    "options": [
      "60 V",
      "240 V",
      "30 V",
      "120 V"
    ],
    "answer": 0,
    "explanation": "V₂ = V₁/a = 120/2 = 60 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-06",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "變壓器輸出 500 W，總損失 25 W，效率約為何？",
    "options": [
      "4.7619 %",
      "95.2381 %",
      "100 %",
      "85.2381 %"
    ],
    "answer": 1,
    "explanation": "η = Pout/(Pout+損失)×100% = 500/(500+25)×100% ≈ 95.238%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-07",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "感應電動機",
    "question": "60 Hz、4 極感應電動機滑差率 2%，轉子轉速約為何？",
    "options": [
      "1836 rpm",
      "1800 rpm",
      "1764 rpm",
      "36 rpm"
    ],
    "answer": 2,
    "explanation": "Nₛ = 120×60/4 = 1800 rpm；Nᵣ = Nₛ(1−s) = 1764 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-08",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "感應電動機",
    "question": "電源頻率 60 Hz，滑差率 2% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "2.4 Hz",
      "1.2 Hz",
      "60 Hz",
      "58.8 Hz"
    ],
    "answer": 1,
    "explanation": "f₂ = sf₁ = 0.02×60 = 1.2 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-09",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "同步機",
    "question": "4 極同步發電機以 180 rpm 旋轉，發電頻率為何？",
    "options": [
      "18 Hz",
      "3 Hz",
      "12 Hz",
      "6 Hz"
    ],
    "answer": 3,
    "explanation": "f = PN/120 = 4×180/120 = 6 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-10",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "特殊電機",
    "question": "步進電動機每步 0.9°，輸入 50 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "45 °",
      "180 °",
      "90 °",
      "22.5 °"
    ],
    "answer": 0,
    "explanation": "累計角度 = 步距角×脈波數 = 0.9×50 = 45°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-11",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 160 V、電樞電流 4 A、電樞電阻 0.5 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "162 V",
      "158 V",
      "79 V",
      "160 V"
    ],
    "answer": 1,
    "explanation": "E = V − IₐRₐ = 160 − 4×0.5 = 158.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-12",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 160 V、電樞電流 4 A、電樞電阻 0.5 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "160 V",
      "158 V",
      "162 V",
      "79 V"
    ],
    "answer": 1,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 160 − 4×0.5 = 158.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-13",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 3:1，一次電壓 120 V，二次電壓為何？",
    "options": [
      "40 V",
      "120 V",
      "360 V",
      "20 V"
    ],
    "answer": 0,
    "explanation": "V₂ = V₁/a = 120/3 = 40 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-14",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "變壓器輸出 600 W，總損失 50 W，效率約為何？",
    "options": [
      "82.3077 %",
      "92.3077 %",
      "7.69231 %",
      "100 %"
    ],
    "answer": 1,
    "explanation": "η = Pout/(Pout+損失)×100% = 600/(600+50)×100% ≈ 92.308%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-15",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "感應電動機",
    "question": "60 Hz、6 極感應電動機滑差率 3%，轉子轉速約為何？",
    "options": [
      "1200 rpm",
      "1164 rpm",
      "1236 rpm",
      "36 rpm"
    ],
    "answer": 1,
    "explanation": "Nₛ = 120×60/6 = 1200 rpm；Nᵣ = Nₛ(1−s) = 1164 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-16",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "感應電動機",
    "question": "電源頻率 60 Hz，滑差率 3% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "60 Hz",
      "1.8 Hz",
      "58.2 Hz",
      "3.6 Hz"
    ],
    "answer": 1,
    "explanation": "f₂ = sf₁ = 0.03×60 = 1.8 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-17",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "同步機",
    "question": "6 極同步發電機以 240 rpm 旋轉，發電頻率為何？",
    "options": [
      "24 Hz",
      "12 Hz",
      "36 Hz",
      "6 Hz"
    ],
    "answer": 1,
    "explanation": "f = PN/120 = 6×240/120 = 12 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-18",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "特殊電機",
    "question": "步進電動機每步 1.8°，輸入 60 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "432 °",
      "54 °",
      "216 °",
      "108 °"
    ],
    "answer": 3,
    "explanation": "累計角度 = 步距角×脈波數 = 1.8×60 = 108°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-19",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 170 V、電樞電流 5 A、電樞電阻 0.5 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "83.75 V",
      "167.5 V",
      "170 V",
      "172.5 V"
    ],
    "answer": 1,
    "explanation": "E = V − IₐRₐ = 170 − 5×0.5 = 167.5 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-20",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 170 V、電樞電流 5 A、電樞電阻 0.5 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "167.5 V",
      "83.75 V",
      "170 V",
      "172.5 V"
    ],
    "answer": 0,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 170 − 5×0.5 = 167.5 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-21",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 4:1，一次電壓 120 V，二次電壓為何？",
    "options": [
      "30 V",
      "15 V",
      "480 V",
      "120 V"
    ],
    "answer": 0,
    "explanation": "V₂ = V₁/a = 120/4 = 30 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-22",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "變壓器輸出 700 W，總損失 75 W，效率約為何？",
    "options": [
      "80.3226 %",
      "9.67742 %",
      "100 %",
      "90.3226 %"
    ],
    "answer": 3,
    "explanation": "η = Pout/(Pout+損失)×100% = 700/(700+75)×100% ≈ 90.323%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-23",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "感應電動機",
    "question": "60 Hz、8 極感應電動機滑差率 4%，轉子轉速約為何？",
    "options": [
      "900 rpm",
      "936 rpm",
      "864 rpm",
      "36 rpm"
    ],
    "answer": 2,
    "explanation": "Nₛ = 120×60/8 = 900 rpm；Nᵣ = Nₛ(1−s) = 864 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-24",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "感應電動機",
    "question": "電源頻率 60 Hz，滑差率 4% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "60 Hz",
      "4.8 Hz",
      "2.4 Hz",
      "57.6 Hz"
    ],
    "answer": 2,
    "explanation": "f₂ = sf₁ = 0.04×60 = 2.4 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-25",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "同步機",
    "question": "8 極同步發電機以 300 rpm 旋轉，發電頻率為何？",
    "options": [
      "60 Hz",
      "20 Hz",
      "40 Hz",
      "10 Hz"
    ],
    "answer": 1,
    "explanation": "f = PN/120 = 8×300/120 = 20 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-26",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "特殊電機",
    "question": "步進電動機每步 3.6°，輸入 70 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "126 °",
      "504 °",
      "252 °",
      "1008 °"
    ],
    "answer": 2,
    "explanation": "累計角度 = 步距角×脈波數 = 3.6×70 = 252°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-27",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 180 V、電樞電流 6 A、電樞電阻 0.5 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "177 V",
      "180 V",
      "88.5 V",
      "183 V"
    ],
    "answer": 0,
    "explanation": "E = V − IₐRₐ = 180 − 6×0.5 = 177.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-28",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 180 V、電樞電流 6 A、電樞電阻 0.5 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "180 V",
      "88.5 V",
      "183 V",
      "177 V"
    ],
    "answer": 3,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 180 − 6×0.5 = 177.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-29",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 5:1，一次電壓 120 V，二次電壓為何？",
    "options": [
      "600 V",
      "120 V",
      "24 V",
      "12 V"
    ],
    "answer": 2,
    "explanation": "V₂ = V₁/a = 120/5 = 24 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-30",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "變壓器輸出 800 W，總損失 100 W，效率約為何？",
    "options": [
      "88.8889 %",
      "11.1111 %",
      "100 %",
      "78.8889 %"
    ],
    "answer": 0,
    "explanation": "η = Pout/(Pout+損失)×100% = 800/(800+100)×100% ≈ 88.889%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-31",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "感應電動機",
    "question": "60 Hz、10 極感應電動機滑差率 5%，轉子轉速約為何？",
    "options": [
      "684 rpm",
      "720 rpm",
      "756 rpm",
      "36 rpm"
    ],
    "answer": 0,
    "explanation": "Nₛ = 120×60/10 = 720 rpm；Nᵣ = Nₛ(1−s) = 684 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-32",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "感應電動機",
    "question": "電源頻率 60 Hz，滑差率 5% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "6 Hz",
      "3 Hz",
      "60 Hz",
      "57 Hz"
    ],
    "answer": 1,
    "explanation": "f₂ = sf₁ = 0.05×60 = 3 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-33",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "同步機",
    "question": "10 極同步發電機以 360 rpm 旋轉，發電頻率為何？",
    "options": [
      "15 Hz",
      "60 Hz",
      "90 Hz",
      "30 Hz"
    ],
    "answer": 3,
    "explanation": "f = PN/120 = 10×360/120 = 30 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-34",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "特殊電機",
    "question": "步進電動機每步 7.2°，輸入 80 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "576 °",
      "288 °",
      "2304 °",
      "1152 °"
    ],
    "answer": 0,
    "explanation": "累計角度 = 步距角×脈波數 = 7.2×80 = 576°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-35",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "直流發電機",
    "question": "直流發電機的換向器主要功能為何？",
    "options": [
      "消除全部銅損",
      "降低轉速",
      "增加磁極數",
      "將電樞內部交流電勢轉為外部直流"
    ],
    "answer": 3,
    "explanation": "換向器配合電刷進行機械整流。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-36",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "直流電動機",
    "question": "直流串激電動機為何不可空載運轉？",
    "options": [
      "磁通減弱可能使轉速過高",
      "轉速必為零",
      "電樞電流必定最大",
      "磁通必定飽和"
    ],
    "answer": 0,
    "explanation": "空載電流小，串激磁通弱，轉速可能大幅升高。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-37",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "變壓器鐵心採用疊片主要減少何種損失？",
    "options": [
      "風摩損",
      "負載銅損",
      "渦流損",
      "電刷損"
    ],
    "answer": 2,
    "explanation": "絕緣疊片切斷大面積渦流路徑，提高渦流電阻。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-38",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "感應電動機",
    "question": "三相感應電動機要反轉，通常如何處理？",
    "options": [
      "增加磁極數",
      "任意交換兩條電源相線",
      "交換全部三條相線的循環順序",
      "只降低頻率"
    ],
    "answer": 1,
    "explanation": "交換兩相改變相序，使旋轉磁場反向。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-39",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "同步機",
    "question": "同步發電機併聯前，哪一項必須一致？",
    "options": [
      "機械外殼顏色",
      "轉子重量",
      "額定容量",
      "相序"
    ],
    "answer": 3,
    "explanation": "併聯須核對相序、頻率、電壓大小及相位。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-40",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "單相感應電動機",
    "question": "理想單相感應電動機只有主繞組時，靜止起動轉矩為何？",
    "options": [
      "最大轉矩",
      "額定轉矩兩倍",
      "與電壓無關的正值",
      "零"
    ],
    "answer": 3,
    "explanation": "脈動磁場可分解為兩個反向旋轉磁場，靜止時轉矩互抵。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-41",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "特殊電機",
    "question": "步進電動機在未失步時，位移主要由何者決定？",
    "options": [
      "電源線長度",
      "電源相序",
      "外殼溫度",
      "輸入脈波數"
    ],
    "answer": 3,
    "explanation": "每個有效步進脈波對應固定步距角。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-42",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "電工機械實習",
    "question": "測量馬達繞組對機殼的絕緣電阻，應使用何種儀表？",
    "options": [
      "絕緣電阻計",
      "頻率計",
      "轉速計",
      "一般功率計"
    ],
    "answer": 0,
    "explanation": "設備斷電、隔離敏感電子元件後，使用適當測試電壓的絕緣電阻計。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-43",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "變壓器短路試驗在額定電流下主要量得何種損失？",
    "options": [
      "滿載銅損（近似）",
      "機械輸出",
      "風摩損",
      "額定鐵損"
    ],
    "answer": 0,
    "explanation": "短路試驗施加低電壓，鐵損很小，輸入功率近似額定電流銅損。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-44",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "同步機",
    "question": "並聯於固定頻率電網的同步電動機，穩定運轉時增加機械負載主要改變何者？",
    "options": [
      "負載角",
      "電網頻率",
      "同步轉速",
      "磁極數"
    ],
    "answer": 0,
    "explanation": "同步速度由頻率及極數決定，負載增加時負載角通常增加。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-45",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 200 W，負載電流為額定的 25%，假設電阻不變，銅損為何？",
    "options": [
      "50 W",
      "3.125 W",
      "200 W",
      "12.5 W"
    ],
    "answer": 3,
    "explanation": "Pcu = x²Pcu,FL = 0.25²×200 = 12.5 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-46",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 300 W，負載電流為額定的 50%，假設電阻不變，銅損為何？",
    "options": [
      "37.5 W",
      "150 W",
      "300 W",
      "75 W"
    ],
    "answer": 3,
    "explanation": "Pcu = x²Pcu,FL = 0.5²×300 = 75 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-47",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 400 W，負載電流為額定的 75%，假設電阻不變，銅損為何？",
    "options": [
      "225 W",
      "400 W",
      "300 W",
      "168.75 W"
    ],
    "answer": 0,
    "explanation": "Pcu = x²Pcu,FL = 0.75²×400 = 225 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-48",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 500 W，負載電流為額定的 80%，假設電阻不變，銅損為何？",
    "options": [
      "500 W",
      "400 W",
      "320 W",
      "256 W"
    ],
    "answer": 2,
    "explanation": "Pcu = x²Pcu,FL = 0.8²×500 = 320 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-49",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 600 W，負載電流為額定的 60%，假設電阻不變，銅損為何？",
    "options": [
      "600 W",
      "360 W",
      "129.6 W",
      "216 W"
    ],
    "answer": 3,
    "explanation": "Pcu = x²Pcu,FL = 0.6²×600 = 216 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-1-50",
    "type": "mock",
    "year": null,
    "mock": 1,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 700 W，負載電流為額定的 40%，假設電阻不變，銅損為何？",
    "options": [
      "700 W",
      "280 W",
      "44.8 W",
      "112 W"
    ],
    "answer": 3,
    "explanation": "Pcu = x²Pcu,FL = 0.4²×700 = 112 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-03",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 190 V、電樞電流 3 A、電樞電阻 1.0 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "187 V",
      "190 V",
      "193 V",
      "93.5 V"
    ],
    "answer": 0,
    "explanation": "E = V − IₐRₐ = 190 − 3×1.0 = 187.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-04",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 190 V、電樞電流 3 A、電樞電阻 1.0 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "193 V",
      "187 V",
      "190 V",
      "93.5 V"
    ],
    "answer": 1,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 190 − 3×1.0 = 187.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-05",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 2:1，一次電壓 240 V，二次電壓為何？",
    "options": [
      "480 V",
      "120 V",
      "240 V",
      "60 V"
    ],
    "answer": 1,
    "explanation": "V₂ = V₁/a = 240/2 = 120 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-06",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "變壓器",
    "question": "變壓器輸出 900 W，總損失 25 W，效率約為何？",
    "options": [
      "2.7027 %",
      "100 %",
      "97.2973 %",
      "87.2973 %"
    ],
    "answer": 2,
    "explanation": "η = Pout/(Pout+損失)×100% = 900/(900+25)×100% ≈ 97.297%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-07",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "感應電動機",
    "question": "50 Hz、4 極感應電動機滑差率 3%，轉子轉速約為何？",
    "options": [
      "45 rpm",
      "1545 rpm",
      "1455 rpm",
      "1500 rpm"
    ],
    "answer": 2,
    "explanation": "Nₛ = 120×50/4 = 1500 rpm；Nᵣ = Nₛ(1−s) = 1455 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-08",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "感應電動機",
    "question": "電源頻率 50 Hz，滑差率 3% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "50 Hz",
      "48.5 Hz",
      "3 Hz",
      "1.5 Hz"
    ],
    "answer": 3,
    "explanation": "f₂ = sf₁ = 0.03×50 = 1.5 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-09",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "同步機",
    "question": "4 極同步發電機以 300 rpm 旋轉，發電頻率為何？",
    "options": [
      "10 Hz",
      "20 Hz",
      "30 Hz",
      "5 Hz"
    ],
    "answer": 0,
    "explanation": "f = PN/120 = 4×300/120 = 10 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-10",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "特殊電機",
    "question": "步進電動機每步 0.9°，輸入 90 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "324 °",
      "40.5 °",
      "162 °",
      "81 °"
    ],
    "answer": 3,
    "explanation": "累計角度 = 步距角×脈波數 = 0.9×90 = 81°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-11",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 200 V、電樞電流 4 A、電樞電阻 1.0 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "204 V",
      "196 V",
      "200 V",
      "98 V"
    ],
    "answer": 1,
    "explanation": "E = V − IₐRₐ = 200 − 4×1.0 = 196.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-12",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 200 V、電樞電流 4 A、電樞電阻 1.0 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "196 V",
      "200 V",
      "204 V",
      "98 V"
    ],
    "answer": 0,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 200 − 4×1.0 = 196.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-13",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 3:1，一次電壓 240 V，二次電壓為何？",
    "options": [
      "40 V",
      "720 V",
      "80 V",
      "240 V"
    ],
    "answer": 2,
    "explanation": "V₂ = V₁/a = 240/3 = 80 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-14",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "變壓器",
    "question": "變壓器輸出 1000 W，總損失 50 W，效率約為何？",
    "options": [
      "100 %",
      "95.2381 %",
      "4.7619 %",
      "85.2381 %"
    ],
    "answer": 1,
    "explanation": "η = Pout/(Pout+損失)×100% = 1000/(1000+50)×100% ≈ 95.238%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-15",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "感應電動機",
    "question": "50 Hz、6 極感應電動機滑差率 4%，轉子轉速約為何？",
    "options": [
      "40 rpm",
      "1000 rpm",
      "1040 rpm",
      "960 rpm"
    ],
    "answer": 3,
    "explanation": "Nₛ = 120×50/6 = 1000 rpm；Nᵣ = Nₛ(1−s) = 960 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-16",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "感應電動機",
    "question": "電源頻率 50 Hz，滑差率 4% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "4 Hz",
      "50 Hz",
      "48 Hz",
      "2 Hz"
    ],
    "answer": 3,
    "explanation": "f₂ = sf₁ = 0.04×50 = 2 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-17",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "同步機",
    "question": "6 極同步發電機以 360 rpm 旋轉，發電頻率為何？",
    "options": [
      "18 Hz",
      "36 Hz",
      "54 Hz",
      "9 Hz"
    ],
    "answer": 0,
    "explanation": "f = PN/120 = 6×360/120 = 18 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-18",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "特殊電機",
    "question": "步進電動機每步 1.8°，輸入 100 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "720 °",
      "360 °",
      "90 °",
      "180 °"
    ],
    "answer": 3,
    "explanation": "累計角度 = 步距角×脈波數 = 1.8×100 = 180°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-19",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 210 V、電樞電流 5 A、電樞電阻 1.0 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "102.5 V",
      "215 V",
      "205 V",
      "210 V"
    ],
    "answer": 2,
    "explanation": "E = V − IₐRₐ = 210 − 5×1.0 = 205.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-20",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 210 V、電樞電流 5 A、電樞電阻 1.0 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "210 V",
      "205 V",
      "102.5 V",
      "215 V"
    ],
    "answer": 1,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 210 − 5×1.0 = 205.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-21",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 4:1，一次電壓 240 V，二次電壓為何？",
    "options": [
      "30 V",
      "240 V",
      "960 V",
      "60 V"
    ],
    "answer": 3,
    "explanation": "V₂ = V₁/a = 240/4 = 60 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-22",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "變壓器",
    "question": "變壓器輸出 1100 W，總損失 75 W，效率約為何？",
    "options": [
      "83.617 %",
      "6.38298 %",
      "100 %",
      "93.617 %"
    ],
    "answer": 3,
    "explanation": "η = Pout/(Pout+損失)×100% = 1100/(1100+75)×100% ≈ 93.617%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-23",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "感應電動機",
    "question": "50 Hz、8 極感應電動機滑差率 5%，轉子轉速約為何？",
    "options": [
      "712.5 rpm",
      "750 rpm",
      "787.5 rpm",
      "37.5 rpm"
    ],
    "answer": 0,
    "explanation": "Nₛ = 120×50/8 = 750 rpm；Nᵣ = Nₛ(1−s) = 712.5 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-24",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "感應電動機",
    "question": "電源頻率 50 Hz，滑差率 5% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "47.5 Hz",
      "5 Hz",
      "50 Hz",
      "2.5 Hz"
    ],
    "answer": 3,
    "explanation": "f₂ = sf₁ = 0.05×50 = 2.5 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-25",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "同步機",
    "question": "8 極同步發電機以 420 rpm 旋轉，發電頻率為何？",
    "options": [
      "14 Hz",
      "84 Hz",
      "28 Hz",
      "56 Hz"
    ],
    "answer": 2,
    "explanation": "f = PN/120 = 8×420/120 = 28 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-26",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "特殊電機",
    "question": "步進電動機每步 3.6°，輸入 110 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "1584 °",
      "396 °",
      "198 °",
      "792 °"
    ],
    "answer": 1,
    "explanation": "累計角度 = 步距角×脈波數 = 3.6×110 = 396°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-27",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 220 V、電樞電流 6 A、電樞電阻 1.0 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "220 V",
      "107 V",
      "226 V",
      "214 V"
    ],
    "answer": 3,
    "explanation": "E = V − IₐRₐ = 220 − 6×1.0 = 214.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-28",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 220 V、電樞電流 6 A、電樞電阻 1.0 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "226 V",
      "214 V",
      "220 V",
      "107 V"
    ],
    "answer": 1,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 220 − 6×1.0 = 214.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-29",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 5:1，一次電壓 240 V，二次電壓為何？",
    "options": [
      "1200 V",
      "48 V",
      "24 V",
      "240 V"
    ],
    "answer": 1,
    "explanation": "V₂ = V₁/a = 240/5 = 48 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-30",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "變壓器",
    "question": "變壓器輸出 1200 W，總損失 100 W，效率約為何？",
    "options": [
      "82.3077 %",
      "7.69231 %",
      "92.3077 %",
      "100 %"
    ],
    "answer": 2,
    "explanation": "η = Pout/(Pout+損失)×100% = 1200/(1200+100)×100% ≈ 92.308%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-31",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "感應電動機",
    "question": "50 Hz、10 極感應電動機滑差率 6%，轉子轉速約為何？",
    "options": [
      "36 rpm",
      "636 rpm",
      "564 rpm",
      "600 rpm"
    ],
    "answer": 2,
    "explanation": "Nₛ = 120×50/10 = 600 rpm；Nᵣ = Nₛ(1−s) = 564 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-32",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "感應電動機",
    "question": "電源頻率 50 Hz，滑差率 6% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "47 Hz",
      "50 Hz",
      "6 Hz",
      "3 Hz"
    ],
    "answer": 3,
    "explanation": "f₂ = sf₁ = 0.06×50 = 3 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-33",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "同步機",
    "question": "10 極同步發電機以 480 rpm 旋轉，發電頻率為何？",
    "options": [
      "40 Hz",
      "120 Hz",
      "80 Hz",
      "20 Hz"
    ],
    "answer": 0,
    "explanation": "f = PN/120 = 10×480/120 = 40 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-34",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "特殊電機",
    "question": "步進電動機每步 7.2°，輸入 120 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "432 °",
      "864 °",
      "1728 °",
      "3456 °"
    ],
    "answer": 1,
    "explanation": "累計角度 = 步距角×脈波數 = 7.2×120 = 864°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-35",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "直流發電機",
    "question": "直流發電機的換向器主要功能為何？",
    "options": [
      "增加磁極數",
      "消除全部銅損",
      "降低轉速",
      "將電樞內部交流電勢轉為外部直流"
    ],
    "answer": 3,
    "explanation": "換向器配合電刷進行機械整流。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-36",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "直流電動機",
    "question": "直流串激電動機為何不可空載運轉？",
    "options": [
      "電樞電流必定最大",
      "磁通必定飽和",
      "磁通減弱可能使轉速過高",
      "轉速必為零"
    ],
    "answer": 2,
    "explanation": "空載電流小，串激磁通弱，轉速可能大幅升高。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-37",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "變壓器",
    "question": "變壓器鐵心採用疊片主要減少何種損失？",
    "options": [
      "風摩損",
      "負載銅損",
      "電刷損",
      "渦流損"
    ],
    "answer": 3,
    "explanation": "絕緣疊片切斷大面積渦流路徑，提高渦流電阻。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-38",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "感應電動機",
    "question": "三相感應電動機要反轉，通常如何處理？",
    "options": [
      "交換全部三條相線的循環順序",
      "增加磁極數",
      "只降低頻率",
      "任意交換兩條電源相線"
    ],
    "answer": 3,
    "explanation": "交換兩相改變相序，使旋轉磁場反向。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-39",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "同步機",
    "question": "同步發電機併聯前，哪一項必須一致？",
    "options": [
      "機械外殼顏色",
      "相序",
      "轉子重量",
      "額定容量"
    ],
    "answer": 1,
    "explanation": "併聯須核對相序、頻率、電壓大小及相位。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-40",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "單相感應電動機",
    "question": "理想單相感應電動機只有主繞組時，靜止起動轉矩為何？",
    "options": [
      "零",
      "最大轉矩",
      "與電壓無關的正值",
      "額定轉矩兩倍"
    ],
    "answer": 0,
    "explanation": "脈動磁場可分解為兩個反向旋轉磁場，靜止時轉矩互抵。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-41",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "特殊電機",
    "question": "步進電動機在未失步時，位移主要由何者決定？",
    "options": [
      "電源線長度",
      "外殼溫度",
      "輸入脈波數",
      "電源相序"
    ],
    "answer": 2,
    "explanation": "每個有效步進脈波對應固定步距角。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-42",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "電工機械實習",
    "question": "測量馬達繞組對機殼的絕緣電阻，應使用何種儀表？",
    "options": [
      "轉速計",
      "一般功率計",
      "頻率計",
      "絕緣電阻計"
    ],
    "answer": 3,
    "explanation": "設備斷電、隔離敏感電子元件後，使用適當測試電壓的絕緣電阻計。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-43",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "變壓器",
    "question": "變壓器短路試驗在額定電流下主要量得何種損失？",
    "options": [
      "機械輸出",
      "滿載銅損（近似）",
      "額定鐵損",
      "風摩損"
    ],
    "answer": 1,
    "explanation": "短路試驗施加低電壓，鐵損很小，輸入功率近似額定電流銅損。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-44",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "同步機",
    "question": "並聯於固定頻率電網的同步電動機，穩定運轉時增加機械負載主要改變何者？",
    "options": [
      "磁極數",
      "負載角",
      "同步轉速",
      "電網頻率"
    ],
    "answer": 1,
    "explanation": "同步速度由頻率及極數決定，負載增加時負載角通常增加。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-45",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 300 W，負載電流為額定的 25%，假設電阻不變，銅損為何？",
    "options": [
      "4.6875 W",
      "75 W",
      "18.75 W",
      "300 W"
    ],
    "answer": 2,
    "explanation": "Pcu = x²Pcu,FL = 0.25²×300 = 18.75 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-46",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 400 W，負載電流為額定的 50%，假設電阻不變，銅損為何？",
    "options": [
      "100 W",
      "200 W",
      "400 W",
      "50 W"
    ],
    "answer": 0,
    "explanation": "Pcu = x²Pcu,FL = 0.5²×400 = 100 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-47",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 500 W，負載電流為額定的 75%，假設電阻不變，銅損為何？",
    "options": [
      "375 W",
      "210.938 W",
      "500 W",
      "281.25 W"
    ],
    "answer": 3,
    "explanation": "Pcu = x²Pcu,FL = 0.75²×500 = 281.25 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-48",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 600 W，負載電流為額定的 80%，假設電阻不變，銅損為何？",
    "options": [
      "600 W",
      "307.2 W",
      "480 W",
      "384 W"
    ],
    "answer": 3,
    "explanation": "Pcu = x²Pcu,FL = 0.8²×600 = 384 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-49",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 700 W，負載電流為額定的 60%，假設電阻不變，銅損為何？",
    "options": [
      "700 W",
      "151.2 W",
      "420 W",
      "252 W"
    ],
    "answer": 3,
    "explanation": "Pcu = x²Pcu,FL = 0.6²×700 = 252 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-2-50",
    "type": "mock",
    "year": null,
    "mock": 2,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 800 W，負載電流為額定的 40%，假設電阻不變，銅損為何？",
    "options": [
      "800 W",
      "320 W",
      "128 W",
      "51.2 W"
    ],
    "answer": 2,
    "explanation": "Pcu = x²Pcu,FL = 0.4²×800 = 128 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-03",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 230 V、電樞電流 3 A、電樞電阻 1.5 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "234.5 V",
      "112.75 V",
      "230 V",
      "225.5 V"
    ],
    "answer": 3,
    "explanation": "E = V − IₐRₐ = 230 − 3×1.5 = 225.5 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-04",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 230 V、電樞電流 3 A、電樞電阻 1.5 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "225.5 V",
      "112.75 V",
      "234.5 V",
      "230 V"
    ],
    "answer": 0,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 230 − 3×1.5 = 225.5 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-05",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 2:1，一次電壓 360 V，二次電壓為何？",
    "options": [
      "360 V",
      "180 V",
      "720 V",
      "90 V"
    ],
    "answer": 1,
    "explanation": "V₂ = V₁/a = 360/2 = 180 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-06",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "變壓器",
    "question": "變壓器輸出 1300 W，總損失 25 W，效率約為何？",
    "options": [
      "98.1132 %",
      "88.1132 %",
      "1.88679 %",
      "100 %"
    ],
    "answer": 0,
    "explanation": "η = Pout/(Pout+損失)×100% = 1300/(1300+25)×100% ≈ 98.113%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-07",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "感應電動機",
    "question": "60 Hz、4 極感應電動機滑差率 4%，轉子轉速約為何？",
    "options": [
      "1872 rpm",
      "1728 rpm",
      "72 rpm",
      "1800 rpm"
    ],
    "answer": 1,
    "explanation": "Nₛ = 120×60/4 = 1800 rpm；Nᵣ = Nₛ(1−s) = 1728 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-08",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "感應電動機",
    "question": "電源頻率 60 Hz，滑差率 4% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "60 Hz",
      "2.4 Hz",
      "57.6 Hz",
      "4.8 Hz"
    ],
    "answer": 1,
    "explanation": "f₂ = sf₁ = 0.04×60 = 2.4 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-09",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "同步機",
    "question": "4 極同步發電機以 420 rpm 旋轉，發電頻率為何？",
    "options": [
      "7 Hz",
      "42 Hz",
      "28 Hz",
      "14 Hz"
    ],
    "answer": 3,
    "explanation": "f = PN/120 = 4×420/120 = 14 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-10",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "特殊電機",
    "question": "步進電動機每步 0.9°，輸入 130 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "234 °",
      "468 °",
      "117 °",
      "58.5 °"
    ],
    "answer": 2,
    "explanation": "累計角度 = 步距角×脈波數 = 0.9×130 = 117°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-11",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 240 V、電樞電流 4 A、電樞電阻 1.5 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "240 V",
      "246 V",
      "117 V",
      "234 V"
    ],
    "answer": 3,
    "explanation": "E = V − IₐRₐ = 240 − 4×1.5 = 234.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-12",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 240 V、電樞電流 4 A、電樞電阻 1.5 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "117 V",
      "240 V",
      "234 V",
      "246 V"
    ],
    "answer": 2,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 240 − 4×1.5 = 234.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-13",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 3:1，一次電壓 360 V，二次電壓為何？",
    "options": [
      "60 V",
      "120 V",
      "1080 V",
      "360 V"
    ],
    "answer": 1,
    "explanation": "V₂ = V₁/a = 360/3 = 120 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-14",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "變壓器",
    "question": "變壓器輸出 1400 W，總損失 50 W，效率約為何？",
    "options": [
      "100 %",
      "3.44828 %",
      "96.5517 %",
      "86.5517 %"
    ],
    "answer": 2,
    "explanation": "η = Pout/(Pout+損失)×100% = 1400/(1400+50)×100% ≈ 96.552%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-15",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "感應電動機",
    "question": "60 Hz、6 極感應電動機滑差率 5%，轉子轉速約為何？",
    "options": [
      "1200 rpm",
      "60 rpm",
      "1260 rpm",
      "1140 rpm"
    ],
    "answer": 3,
    "explanation": "Nₛ = 120×60/6 = 1200 rpm；Nᵣ = Nₛ(1−s) = 1140 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-16",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "感應電動機",
    "question": "電源頻率 60 Hz，滑差率 5% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "6 Hz",
      "60 Hz",
      "3 Hz",
      "57 Hz"
    ],
    "answer": 2,
    "explanation": "f₂ = sf₁ = 0.05×60 = 3 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-17",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "同步機",
    "question": "6 極同步發電機以 480 rpm 旋轉，發電頻率為何？",
    "options": [
      "24 Hz",
      "48 Hz",
      "12 Hz",
      "72 Hz"
    ],
    "answer": 0,
    "explanation": "f = PN/120 = 6×480/120 = 24 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-18",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "特殊電機",
    "question": "步進電動機每步 1.8°，輸入 140 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "126 °",
      "504 °",
      "1008 °",
      "252 °"
    ],
    "answer": 3,
    "explanation": "累計角度 = 步距角×脈波數 = 1.8×140 = 252°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-19",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 250 V、電樞電流 5 A、電樞電阻 1.5 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "250 V",
      "121.25 V",
      "242.5 V",
      "257.5 V"
    ],
    "answer": 2,
    "explanation": "E = V − IₐRₐ = 250 − 5×1.5 = 242.5 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-20",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 250 V、電樞電流 5 A、電樞電阻 1.5 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "250 V",
      "121.25 V",
      "242.5 V",
      "257.5 V"
    ],
    "answer": 2,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 250 − 5×1.5 = 242.5 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-21",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 4:1，一次電壓 360 V，二次電壓為何？",
    "options": [
      "90 V",
      "1440 V",
      "45 V",
      "360 V"
    ],
    "answer": 0,
    "explanation": "V₂ = V₁/a = 360/4 = 90 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-22",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "變壓器",
    "question": "變壓器輸出 1500 W，總損失 75 W，效率約為何？",
    "options": [
      "95.2381 %",
      "85.2381 %",
      "4.7619 %",
      "100 %"
    ],
    "answer": 0,
    "explanation": "η = Pout/(Pout+損失)×100% = 1500/(1500+75)×100% ≈ 95.238%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-23",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "感應電動機",
    "question": "60 Hz、8 極感應電動機滑差率 6%，轉子轉速約為何？",
    "options": [
      "54 rpm",
      "900 rpm",
      "846 rpm",
      "954 rpm"
    ],
    "answer": 2,
    "explanation": "Nₛ = 120×60/8 = 900 rpm；Nᵣ = Nₛ(1−s) = 846 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-24",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "感應電動機",
    "question": "電源頻率 60 Hz，滑差率 6% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "3.6 Hz",
      "56.4 Hz",
      "7.2 Hz",
      "60 Hz"
    ],
    "answer": 0,
    "explanation": "f₂ = sf₁ = 0.06×60 = 3.6 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-25",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "同步機",
    "question": "8 極同步發電機以 540 rpm 旋轉，發電頻率為何？",
    "options": [
      "72 Hz",
      "36 Hz",
      "18 Hz",
      "108 Hz"
    ],
    "answer": 1,
    "explanation": "f = PN/120 = 8×540/120 = 36 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-26",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "特殊電機",
    "question": "步進電動機每步 3.6°，輸入 150 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "2160 °",
      "540 °",
      "1080 °",
      "270 °"
    ],
    "answer": 1,
    "explanation": "累計角度 = 步距角×脈波數 = 3.6×150 = 540°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-27",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 260 V、電樞電流 6 A、電樞電阻 1.5 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "260 V",
      "269 V",
      "251 V",
      "125.5 V"
    ],
    "answer": 2,
    "explanation": "E = V − IₐRₐ = 260 − 6×1.5 = 251.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-28",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 260 V、電樞電流 6 A、電樞電阻 1.5 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "125.5 V",
      "269 V",
      "260 V",
      "251 V"
    ],
    "answer": 3,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 260 − 6×1.5 = 251.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-29",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 5:1，一次電壓 360 V，二次電壓為何？",
    "options": [
      "36 V",
      "72 V",
      "360 V",
      "1800 V"
    ],
    "answer": 1,
    "explanation": "V₂ = V₁/a = 360/5 = 72 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-30",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "變壓器",
    "question": "變壓器輸出 1600 W，總損失 100 W，效率約為何？",
    "options": [
      "94.1176 %",
      "5.88235 %",
      "84.1176 %",
      "100 %"
    ],
    "answer": 0,
    "explanation": "η = Pout/(Pout+損失)×100% = 1600/(1600+100)×100% ≈ 94.118%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-31",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "感應電動機",
    "question": "60 Hz、10 極感應電動機滑差率 7%，轉子轉速約為何？",
    "options": [
      "50.4 rpm",
      "770.4 rpm",
      "720 rpm",
      "669.6 rpm"
    ],
    "answer": 3,
    "explanation": "Nₛ = 120×60/10 = 720 rpm；Nᵣ = Nₛ(1−s) = 669.6 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-32",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "感應電動機",
    "question": "電源頻率 60 Hz，滑差率 7% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "4.2 Hz",
      "55.8 Hz",
      "60 Hz",
      "8.4 Hz"
    ],
    "answer": 0,
    "explanation": "f₂ = sf₁ = 0.07×60 = 4.2 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-33",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "同步機",
    "question": "10 極同步發電機以 600 rpm 旋轉，發電頻率為何？",
    "options": [
      "100 Hz",
      "50 Hz",
      "25 Hz",
      "150 Hz"
    ],
    "answer": 1,
    "explanation": "f = PN/120 = 10×600/120 = 50 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-34",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "特殊電機",
    "question": "步進電動機每步 7.2°，輸入 160 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "4608 °",
      "576 °",
      "2304 °",
      "1152 °"
    ],
    "answer": 3,
    "explanation": "累計角度 = 步距角×脈波數 = 7.2×160 = 1152°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-35",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "直流發電機",
    "question": "直流發電機的換向器主要功能為何？",
    "options": [
      "降低轉速",
      "消除全部銅損",
      "將電樞內部交流電勢轉為外部直流",
      "增加磁極數"
    ],
    "answer": 2,
    "explanation": "換向器配合電刷進行機械整流。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-36",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "直流電動機",
    "question": "直流串激電動機為何不可空載運轉？",
    "options": [
      "轉速必為零",
      "電樞電流必定最大",
      "磁通必定飽和",
      "磁通減弱可能使轉速過高"
    ],
    "answer": 3,
    "explanation": "空載電流小，串激磁通弱，轉速可能大幅升高。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-37",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "變壓器",
    "question": "變壓器鐵心採用疊片主要減少何種損失？",
    "options": [
      "電刷損",
      "風摩損",
      "渦流損",
      "負載銅損"
    ],
    "answer": 2,
    "explanation": "絕緣疊片切斷大面積渦流路徑，提高渦流電阻。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-38",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "感應電動機",
    "question": "三相感應電動機要反轉，通常如何處理？",
    "options": [
      "增加磁極數",
      "任意交換兩條電源相線",
      "交換全部三條相線的循環順序",
      "只降低頻率"
    ],
    "answer": 1,
    "explanation": "交換兩相改變相序，使旋轉磁場反向。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-39",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "同步機",
    "question": "同步發電機併聯前，哪一項必須一致？",
    "options": [
      "轉子重量",
      "機械外殼顏色",
      "額定容量",
      "相序"
    ],
    "answer": 3,
    "explanation": "併聯須核對相序、頻率、電壓大小及相位。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-40",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "單相感應電動機",
    "question": "理想單相感應電動機只有主繞組時，靜止起動轉矩為何？",
    "options": [
      "最大轉矩",
      "零",
      "額定轉矩兩倍",
      "與電壓無關的正值"
    ],
    "answer": 1,
    "explanation": "脈動磁場可分解為兩個反向旋轉磁場，靜止時轉矩互抵。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-41",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "特殊電機",
    "question": "步進電動機在未失步時，位移主要由何者決定？",
    "options": [
      "電源相序",
      "輸入脈波數",
      "電源線長度",
      "外殼溫度"
    ],
    "answer": 1,
    "explanation": "每個有效步進脈波對應固定步距角。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-42",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "電工機械實習",
    "question": "測量馬達繞組對機殼的絕緣電阻，應使用何種儀表？",
    "options": [
      "一般功率計",
      "頻率計",
      "絕緣電阻計",
      "轉速計"
    ],
    "answer": 2,
    "explanation": "設備斷電、隔離敏感電子元件後，使用適當測試電壓的絕緣電阻計。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-43",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "變壓器",
    "question": "變壓器短路試驗在額定電流下主要量得何種損失？",
    "options": [
      "額定鐵損",
      "滿載銅損（近似）",
      "風摩損",
      "機械輸出"
    ],
    "answer": 1,
    "explanation": "短路試驗施加低電壓，鐵損很小，輸入功率近似額定電流銅損。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-44",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "同步機",
    "question": "並聯於固定頻率電網的同步電動機，穩定運轉時增加機械負載主要改變何者？",
    "options": [
      "電網頻率",
      "負載角",
      "同步轉速",
      "磁極數"
    ],
    "answer": 1,
    "explanation": "同步速度由頻率及極數決定，負載增加時負載角通常增加。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-45",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 400 W，負載電流為額定的 25%，假設電阻不變，銅損為何？",
    "options": [
      "400 W",
      "6.25 W",
      "25 W",
      "100 W"
    ],
    "answer": 2,
    "explanation": "Pcu = x²Pcu,FL = 0.25²×400 = 25 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-46",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 500 W，負載電流為額定的 50%，假設電阻不變，銅損為何？",
    "options": [
      "62.5 W",
      "500 W",
      "125 W",
      "250 W"
    ],
    "answer": 2,
    "explanation": "Pcu = x²Pcu,FL = 0.5²×500 = 125 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-47",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 600 W，負載電流為額定的 75%，假設電阻不變，銅損為何？",
    "options": [
      "337.5 W",
      "253.125 W",
      "600 W",
      "450 W"
    ],
    "answer": 0,
    "explanation": "Pcu = x²Pcu,FL = 0.75²×600 = 337.5 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-48",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 700 W，負載電流為額定的 80%，假設電阻不變，銅損為何？",
    "options": [
      "700 W",
      "560 W",
      "448 W",
      "358.4 W"
    ],
    "answer": 2,
    "explanation": "Pcu = x²Pcu,FL = 0.8²×700 = 448 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-49",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 800 W，負載電流為額定的 60%，假設電阻不變，銅損為何？",
    "options": [
      "480 W",
      "288 W",
      "800 W",
      "172.8 W"
    ],
    "answer": 1,
    "explanation": "Pcu = x²Pcu,FL = 0.6²×800 = 288 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-3-50",
    "type": "mock",
    "year": null,
    "mock": 3,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 900 W，負載電流為額定的 40%，假設電阻不變，銅損為何？",
    "options": [
      "360 W",
      "57.6 W",
      "900 W",
      "144 W"
    ],
    "answer": 3,
    "explanation": "Pcu = x²Pcu,FL = 0.4²×900 = 144 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-03",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 270 V、電樞電流 3 A、電樞電阻 2.0 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "132 V",
      "264 V",
      "276 V",
      "270 V"
    ],
    "answer": 1,
    "explanation": "E = V − IₐRₐ = 270 − 3×2.0 = 264.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-04",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 270 V、電樞電流 3 A、電樞電阻 2.0 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "276 V",
      "270 V",
      "132 V",
      "264 V"
    ],
    "answer": 3,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 270 − 3×2.0 = 264.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-05",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 2:1，一次電壓 480 V，二次電壓為何？",
    "options": [
      "480 V",
      "240 V",
      "960 V",
      "120 V"
    ],
    "answer": 1,
    "explanation": "V₂ = V₁/a = 480/2 = 240 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-06",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "變壓器",
    "question": "變壓器輸出 1700 W，總損失 25 W，效率約為何？",
    "options": [
      "1.44928 %",
      "98.5507 %",
      "100 %",
      "88.5507 %"
    ],
    "answer": 1,
    "explanation": "η = Pout/(Pout+損失)×100% = 1700/(1700+25)×100% ≈ 98.551%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-07",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "感應電動機",
    "question": "50 Hz、4 極感應電動機滑差率 5%，轉子轉速約為何？",
    "options": [
      "75 rpm",
      "1500 rpm",
      "1425 rpm",
      "1575 rpm"
    ],
    "answer": 2,
    "explanation": "Nₛ = 120×50/4 = 1500 rpm；Nᵣ = Nₛ(1−s) = 1425 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-08",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "感應電動機",
    "question": "電源頻率 50 Hz，滑差率 5% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "2.5 Hz",
      "5 Hz",
      "47.5 Hz",
      "50 Hz"
    ],
    "answer": 0,
    "explanation": "f₂ = sf₁ = 0.05×50 = 2.5 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-09",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "同步機",
    "question": "4 極同步發電機以 540 rpm 旋轉，發電頻率為何？",
    "options": [
      "36 Hz",
      "18 Hz",
      "54 Hz",
      "9 Hz"
    ],
    "answer": 1,
    "explanation": "f = PN/120 = 4×540/120 = 18 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-10",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "特殊電機",
    "question": "步進電動機每步 0.9°，輸入 170 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "612 °",
      "306 °",
      "76.5 °",
      "153 °"
    ],
    "answer": 3,
    "explanation": "累計角度 = 步距角×脈波數 = 0.9×170 = 153°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-11",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 280 V、電樞電流 4 A、電樞電阻 2.0 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "288 V",
      "280 V",
      "272 V",
      "136 V"
    ],
    "answer": 2,
    "explanation": "E = V − IₐRₐ = 280 − 4×2.0 = 272.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-12",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 280 V、電樞電流 4 A、電樞電阻 2.0 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "272 V",
      "136 V",
      "280 V",
      "288 V"
    ],
    "answer": 0,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 280 − 4×2.0 = 272.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-13",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 3:1，一次電壓 480 V，二次電壓為何？",
    "options": [
      "80 V",
      "480 V",
      "160 V",
      "1440 V"
    ],
    "answer": 2,
    "explanation": "V₂ = V₁/a = 480/3 = 160 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-14",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "變壓器",
    "question": "變壓器輸出 1800 W，總損失 50 W，效率約為何？",
    "options": [
      "100 %",
      "87.2973 %",
      "97.2973 %",
      "2.7027 %"
    ],
    "answer": 2,
    "explanation": "η = Pout/(Pout+損失)×100% = 1800/(1800+50)×100% ≈ 97.297%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-15",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "感應電動機",
    "question": "50 Hz、6 極感應電動機滑差率 6%，轉子轉速約為何？",
    "options": [
      "1060 rpm",
      "940 rpm",
      "1000 rpm",
      "60 rpm"
    ],
    "answer": 1,
    "explanation": "Nₛ = 120×50/6 = 1000 rpm；Nᵣ = Nₛ(1−s) = 940 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-16",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "感應電動機",
    "question": "電源頻率 50 Hz，滑差率 6% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "6 Hz",
      "47 Hz",
      "50 Hz",
      "3 Hz"
    ],
    "answer": 3,
    "explanation": "f₂ = sf₁ = 0.06×50 = 3 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-17",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "同步機",
    "question": "6 極同步發電機以 600 rpm 旋轉，發電頻率為何？",
    "options": [
      "90 Hz",
      "60 Hz",
      "15 Hz",
      "30 Hz"
    ],
    "answer": 3,
    "explanation": "f = PN/120 = 6×600/120 = 30 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-18",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "特殊電機",
    "question": "步進電動機每步 1.8°，輸入 180 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "648 °",
      "324 °",
      "162 °",
      "1296 °"
    ],
    "answer": 1,
    "explanation": "累計角度 = 步距角×脈波數 = 1.8×180 = 324°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-19",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 290 V、電樞電流 5 A、電樞電阻 2.0 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "280 V",
      "290 V",
      "140 V",
      "300 V"
    ],
    "answer": 0,
    "explanation": "E = V − IₐRₐ = 290 − 5×2.0 = 280.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-20",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 290 V、電樞電流 5 A、電樞電阻 2.0 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "290 V",
      "140 V",
      "280 V",
      "300 V"
    ],
    "answer": 2,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 290 − 5×2.0 = 280.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-21",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 4:1，一次電壓 480 V，二次電壓為何？",
    "options": [
      "120 V",
      "480 V",
      "1920 V",
      "60 V"
    ],
    "answer": 0,
    "explanation": "V₂ = V₁/a = 480/4 = 120 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-22",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "變壓器",
    "question": "變壓器輸出 1900 W，總損失 75 W，效率約為何？",
    "options": [
      "100 %",
      "96.2025 %",
      "86.2025 %",
      "3.79747 %"
    ],
    "answer": 1,
    "explanation": "η = Pout/(Pout+損失)×100% = 1900/(1900+75)×100% ≈ 96.203%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-23",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "感應電動機",
    "question": "50 Hz、8 極感應電動機滑差率 7%，轉子轉速約為何？",
    "options": [
      "802.5 rpm",
      "52.5 rpm",
      "697.5 rpm",
      "750 rpm"
    ],
    "answer": 2,
    "explanation": "Nₛ = 120×50/8 = 750 rpm；Nᵣ = Nₛ(1−s) = 697.5 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-24",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "感應電動機",
    "question": "電源頻率 50 Hz，滑差率 7% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "3.5 Hz",
      "46.5 Hz",
      "50 Hz",
      "7 Hz"
    ],
    "answer": 0,
    "explanation": "f₂ = sf₁ = 0.07×50 = 3.5 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-25",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "同步機",
    "question": "8 極同步發電機以 660 rpm 旋轉，發電頻率為何？",
    "options": [
      "88 Hz",
      "132 Hz",
      "22 Hz",
      "44 Hz"
    ],
    "answer": 3,
    "explanation": "f = PN/120 = 8×660/120 = 44 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-26",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "特殊電機",
    "question": "步進電動機每步 3.6°，輸入 190 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "342 °",
      "684 °",
      "2736 °",
      "1368 °"
    ],
    "answer": 1,
    "explanation": "累計角度 = 步距角×脈波數 = 3.6×190 = 684°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-27",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 300 V、電樞電流 6 A、電樞電阻 2.0 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "300 V",
      "144 V",
      "288 V",
      "312 V"
    ],
    "answer": 2,
    "explanation": "E = V − IₐRₐ = 300 − 6×2.0 = 288.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-28",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 300 V、電樞電流 6 A、電樞電阻 2.0 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "288 V",
      "300 V",
      "312 V",
      "144 V"
    ],
    "answer": 0,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 300 − 6×2.0 = 288.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-29",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 5:1，一次電壓 480 V，二次電壓為何？",
    "options": [
      "480 V",
      "2400 V",
      "96 V",
      "48 V"
    ],
    "answer": 2,
    "explanation": "V₂ = V₁/a = 480/5 = 96 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-30",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "變壓器",
    "question": "變壓器輸出 2000 W，總損失 100 W，效率約為何？",
    "options": [
      "100 %",
      "95.2381 %",
      "4.7619 %",
      "85.2381 %"
    ],
    "answer": 1,
    "explanation": "η = Pout/(Pout+損失)×100% = 2000/(2000+100)×100% ≈ 95.238%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-31",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "感應電動機",
    "question": "50 Hz、10 極感應電動機滑差率 8%，轉子轉速約為何？",
    "options": [
      "648 rpm",
      "48 rpm",
      "552 rpm",
      "600 rpm"
    ],
    "answer": 2,
    "explanation": "Nₛ = 120×50/10 = 600 rpm；Nᵣ = Nₛ(1−s) = 552 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-32",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "感應電動機",
    "question": "電源頻率 50 Hz，滑差率 8% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "4 Hz",
      "8 Hz",
      "46 Hz",
      "50 Hz"
    ],
    "answer": 0,
    "explanation": "f₂ = sf₁ = 0.08×50 = 4 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-33",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "同步機",
    "question": "10 極同步發電機以 720 rpm 旋轉，發電頻率為何？",
    "options": [
      "30 Hz",
      "180 Hz",
      "120 Hz",
      "60 Hz"
    ],
    "answer": 3,
    "explanation": "f = PN/120 = 10×720/120 = 60 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-34",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "特殊電機",
    "question": "步進電動機每步 7.2°，輸入 200 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "720 °",
      "2880 °",
      "5760 °",
      "1440 °"
    ],
    "answer": 3,
    "explanation": "累計角度 = 步距角×脈波數 = 7.2×200 = 1440°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-35",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "直流發電機",
    "question": "直流發電機的換向器主要功能為何？",
    "options": [
      "將電樞內部交流電勢轉為外部直流",
      "增加磁極數",
      "降低轉速",
      "消除全部銅損"
    ],
    "answer": 0,
    "explanation": "換向器配合電刷進行機械整流。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-36",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "直流電動機",
    "question": "直流串激電動機為何不可空載運轉？",
    "options": [
      "磁通減弱可能使轉速過高",
      "轉速必為零",
      "電樞電流必定最大",
      "磁通必定飽和"
    ],
    "answer": 0,
    "explanation": "空載電流小，串激磁通弱，轉速可能大幅升高。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-37",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "變壓器",
    "question": "變壓器鐵心採用疊片主要減少何種損失？",
    "options": [
      "風摩損",
      "電刷損",
      "負載銅損",
      "渦流損"
    ],
    "answer": 3,
    "explanation": "絕緣疊片切斷大面積渦流路徑，提高渦流電阻。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-38",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "感應電動機",
    "question": "三相感應電動機要反轉，通常如何處理？",
    "options": [
      "只降低頻率",
      "交換全部三條相線的循環順序",
      "增加磁極數",
      "任意交換兩條電源相線"
    ],
    "answer": 3,
    "explanation": "交換兩相改變相序，使旋轉磁場反向。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-39",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "同步機",
    "question": "同步發電機併聯前，哪一項必須一致？",
    "options": [
      "機械外殼顏色",
      "額定容量",
      "轉子重量",
      "相序"
    ],
    "answer": 3,
    "explanation": "併聯須核對相序、頻率、電壓大小及相位。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-40",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "單相感應電動機",
    "question": "理想單相感應電動機只有主繞組時，靜止起動轉矩為何？",
    "options": [
      "零",
      "額定轉矩兩倍",
      "最大轉矩",
      "與電壓無關的正值"
    ],
    "answer": 0,
    "explanation": "脈動磁場可分解為兩個反向旋轉磁場，靜止時轉矩互抵。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-41",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "特殊電機",
    "question": "步進電動機在未失步時，位移主要由何者決定？",
    "options": [
      "輸入脈波數",
      "電源相序",
      "電源線長度",
      "外殼溫度"
    ],
    "answer": 0,
    "explanation": "每個有效步進脈波對應固定步距角。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-42",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "電工機械實習",
    "question": "測量馬達繞組對機殼的絕緣電阻，應使用何種儀表？",
    "options": [
      "絕緣電阻計",
      "轉速計",
      "一般功率計",
      "頻率計"
    ],
    "answer": 0,
    "explanation": "設備斷電、隔離敏感電子元件後，使用適當測試電壓的絕緣電阻計。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-43",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "變壓器",
    "question": "變壓器短路試驗在額定電流下主要量得何種損失？",
    "options": [
      "風摩損",
      "滿載銅損（近似）",
      "額定鐵損",
      "機械輸出"
    ],
    "answer": 1,
    "explanation": "短路試驗施加低電壓，鐵損很小，輸入功率近似額定電流銅損。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-44",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "同步機",
    "question": "並聯於固定頻率電網的同步電動機，穩定運轉時增加機械負載主要改變何者？",
    "options": [
      "磁極數",
      "負載角",
      "電網頻率",
      "同步轉速"
    ],
    "answer": 1,
    "explanation": "同步速度由頻率及極數決定，負載增加時負載角通常增加。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-45",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 500 W，負載電流為額定的 25%，假設電阻不變，銅損為何？",
    "options": [
      "7.8125 W",
      "125 W",
      "500 W",
      "31.25 W"
    ],
    "answer": 3,
    "explanation": "Pcu = x²Pcu,FL = 0.25²×500 = 31.25 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-46",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 600 W，負載電流為額定的 50%，假設電阻不變，銅損為何？",
    "options": [
      "300 W",
      "150 W",
      "75 W",
      "600 W"
    ],
    "answer": 1,
    "explanation": "Pcu = x²Pcu,FL = 0.5²×600 = 150 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-47",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 700 W，負載電流為額定的 75%，假設電阻不變，銅損為何？",
    "options": [
      "295.312 W",
      "525 W",
      "393.75 W",
      "700 W"
    ],
    "answer": 2,
    "explanation": "Pcu = x²Pcu,FL = 0.75²×700 = 393.75 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-48",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 800 W，負載電流為額定的 80%，假設電阻不變，銅損為何？",
    "options": [
      "409.6 W",
      "800 W",
      "640 W",
      "512 W"
    ],
    "answer": 3,
    "explanation": "Pcu = x²Pcu,FL = 0.8²×800 = 512 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-49",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 900 W，負載電流為額定的 60%，假設電阻不變，銅損為何？",
    "options": [
      "900 W",
      "540 W",
      "194.4 W",
      "324 W"
    ],
    "answer": 3,
    "explanation": "Pcu = x²Pcu,FL = 0.6²×900 = 324 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-4-50",
    "type": "mock",
    "year": null,
    "mock": 4,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 1000 W，負載電流為額定的 40%，假設電阻不變，銅損為何？",
    "options": [
      "1000 W",
      "64 W",
      "400 W",
      "160 W"
    ],
    "answer": 3,
    "explanation": "Pcu = x²Pcu,FL = 0.4²×1000 = 160 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-03",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 310 V、電樞電流 3 A、電樞電阻 2.5 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "302.5 V",
      "310 V",
      "151.25 V",
      "317.5 V"
    ],
    "answer": 0,
    "explanation": "E = V − IₐRₐ = 310 − 3×2.5 = 302.5 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-04",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 310 V、電樞電流 3 A、電樞電阻 2.5 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "310 V",
      "302.5 V",
      "317.5 V",
      "151.25 V"
    ],
    "answer": 1,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 310 − 3×2.5 = 302.5 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-05",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 2:1，一次電壓 600 V，二次電壓為何？",
    "options": [
      "300 V",
      "1200 V",
      "150 V",
      "600 V"
    ],
    "answer": 0,
    "explanation": "V₂ = V₁/a = 600/2 = 300 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-06",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "變壓器",
    "question": "變壓器輸出 2100 W，總損失 25 W，效率約為何？",
    "options": [
      "98.8235 %",
      "88.8235 %",
      "100 %",
      "1.17647 %"
    ],
    "answer": 0,
    "explanation": "η = Pout/(Pout+損失)×100% = 2100/(2100+25)×100% ≈ 98.824%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-07",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "感應電動機",
    "question": "60 Hz、4 極感應電動機滑差率 6%，轉子轉速約為何？",
    "options": [
      "108 rpm",
      "1800 rpm",
      "1908 rpm",
      "1692 rpm"
    ],
    "answer": 3,
    "explanation": "Nₛ = 120×60/4 = 1800 rpm；Nᵣ = Nₛ(1−s) = 1692 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-08",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "感應電動機",
    "question": "電源頻率 60 Hz，滑差率 6% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "3.6 Hz",
      "7.2 Hz",
      "56.4 Hz",
      "60 Hz"
    ],
    "answer": 0,
    "explanation": "f₂ = sf₁ = 0.06×60 = 3.6 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-09",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "同步機",
    "question": "4 極同步發電機以 660 rpm 旋轉，發電頻率為何？",
    "options": [
      "22 Hz",
      "44 Hz",
      "66 Hz",
      "11 Hz"
    ],
    "answer": 0,
    "explanation": "f = PN/120 = 4×660/120 = 22 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-10",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "特殊電機",
    "question": "步進電動機每步 0.9°，輸入 210 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "378 °",
      "756 °",
      "189 °",
      "94.5 °"
    ],
    "answer": 2,
    "explanation": "累計角度 = 步距角×脈波數 = 0.9×210 = 189°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-11",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 320 V、電樞電流 4 A、電樞電阻 2.5 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "310 V",
      "320 V",
      "330 V",
      "155 V"
    ],
    "answer": 0,
    "explanation": "E = V − IₐRₐ = 320 − 4×2.5 = 310.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-12",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 320 V、電樞電流 4 A、電樞電阻 2.5 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "330 V",
      "155 V",
      "310 V",
      "320 V"
    ],
    "answer": 2,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 320 − 4×2.5 = 310.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-13",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 3:1，一次電壓 600 V，二次電壓為何？",
    "options": [
      "200 V",
      "600 V",
      "100 V",
      "1800 V"
    ],
    "answer": 0,
    "explanation": "V₂ = V₁/a = 600/3 = 200 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-14",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "變壓器",
    "question": "變壓器輸出 2200 W，總損失 50 W，效率約為何？",
    "options": [
      "100 %",
      "87.7778 %",
      "2.22222 %",
      "97.7778 %"
    ],
    "answer": 3,
    "explanation": "η = Pout/(Pout+損失)×100% = 2200/(2200+50)×100% ≈ 97.778%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-15",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "感應電動機",
    "question": "60 Hz、6 極感應電動機滑差率 7%，轉子轉速約為何？",
    "options": [
      "1200 rpm",
      "84 rpm",
      "1284 rpm",
      "1116 rpm"
    ],
    "answer": 3,
    "explanation": "Nₛ = 120×60/6 = 1200 rpm；Nᵣ = Nₛ(1−s) = 1116 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-16",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "感應電動機",
    "question": "電源頻率 60 Hz，滑差率 7% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "4.2 Hz",
      "55.8 Hz",
      "8.4 Hz",
      "60 Hz"
    ],
    "answer": 0,
    "explanation": "f₂ = sf₁ = 0.07×60 = 4.2 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-17",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "同步機",
    "question": "6 極同步發電機以 720 rpm 旋轉，發電頻率為何？",
    "options": [
      "72 Hz",
      "36 Hz",
      "108 Hz",
      "18 Hz"
    ],
    "answer": 1,
    "explanation": "f = PN/120 = 6×720/120 = 36 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-18",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "特殊電機",
    "question": "步進電動機每步 1.8°，輸入 220 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "1584 °",
      "396 °",
      "198 °",
      "792 °"
    ],
    "answer": 1,
    "explanation": "累計角度 = 步距角×脈波數 = 1.8×220 = 396°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-19",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 330 V、電樞電流 5 A、電樞電阻 2.5 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "330 V",
      "317.5 V",
      "342.5 V",
      "158.75 V"
    ],
    "answer": 1,
    "explanation": "E = V − IₐRₐ = 330 − 5×2.5 = 317.5 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-20",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 330 V、電樞電流 5 A、電樞電阻 2.5 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "330 V",
      "342.5 V",
      "317.5 V",
      "158.75 V"
    ],
    "answer": 2,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 330 − 5×2.5 = 317.5 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-21",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 4:1，一次電壓 600 V，二次電壓為何？",
    "options": [
      "150 V",
      "75 V",
      "600 V",
      "2400 V"
    ],
    "answer": 0,
    "explanation": "V₂ = V₁/a = 600/4 = 150 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-22",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "變壓器",
    "question": "變壓器輸出 2300 W，總損失 75 W，效率約為何？",
    "options": [
      "96.8421 %",
      "100 %",
      "3.15789 %",
      "86.8421 %"
    ],
    "answer": 0,
    "explanation": "η = Pout/(Pout+損失)×100% = 2300/(2300+75)×100% ≈ 96.842%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-23",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "感應電動機",
    "question": "60 Hz、8 極感應電動機滑差率 8%，轉子轉速約為何？",
    "options": [
      "72 rpm",
      "900 rpm",
      "828 rpm",
      "972 rpm"
    ],
    "answer": 2,
    "explanation": "Nₛ = 120×60/8 = 900 rpm；Nᵣ = Nₛ(1−s) = 828 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-24",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "感應電動機",
    "question": "電源頻率 60 Hz，滑差率 8% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "9.6 Hz",
      "4.8 Hz",
      "60 Hz",
      "55.2 Hz"
    ],
    "answer": 1,
    "explanation": "f₂ = sf₁ = 0.08×60 = 4.8 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-25",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "同步機",
    "question": "8 極同步發電機以 780 rpm 旋轉，發電頻率為何？",
    "options": [
      "52 Hz",
      "156 Hz",
      "104 Hz",
      "26 Hz"
    ],
    "answer": 0,
    "explanation": "f = PN/120 = 8×780/120 = 52 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-26",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "特殊電機",
    "question": "步進電動機每步 3.6°，輸入 230 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "1656 °",
      "828 °",
      "3312 °",
      "414 °"
    ],
    "answer": 1,
    "explanation": "累計角度 = 步距角×脈波數 = 3.6×230 = 828°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-27",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "直流電動機",
    "question": "直流電動機端電壓 340 V、電樞電流 6 A、電樞電阻 2.5 Ω，忽略電刷壓降，反電勢為何？",
    "options": [
      "325 V",
      "162.5 V",
      "340 V",
      "355 V"
    ],
    "answer": 0,
    "explanation": "E = V − IₐRₐ = 340 − 6×2.5 = 325.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-28",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "直流發電機",
    "question": "他激直流發電機感應電勢 340 V、電樞電流 6 A、電樞電阻 2.5 Ω，忽略電刷壓降，端電壓為何？",
    "options": [
      "340 V",
      "162.5 V",
      "355 V",
      "325 V"
    ],
    "answer": 3,
    "explanation": "發電機端電壓 Vₜ = E − IₐRₐ = 340 − 6×2.5 = 325.0 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-29",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "變壓器",
    "question": "理想變壓器一次與二次匝數比為 5:1，一次電壓 600 V，二次電壓為何？",
    "options": [
      "120 V",
      "60 V",
      "600 V",
      "3000 V"
    ],
    "answer": 0,
    "explanation": "V₂ = V₁/a = 600/5 = 120 V。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-30",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "變壓器",
    "question": "變壓器輸出 2400 W，總損失 100 W，效率約為何？",
    "options": [
      "96 %",
      "4 %",
      "86 %",
      "100 %"
    ],
    "answer": 0,
    "explanation": "η = Pout/(Pout+損失)×100% = 2400/(2400+100)×100% ≈ 96.000%。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-31",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "感應電動機",
    "question": "60 Hz、10 極感應電動機滑差率 9%，轉子轉速約為何？",
    "options": [
      "720 rpm",
      "655.2 rpm",
      "64.8 rpm",
      "784.8 rpm"
    ],
    "answer": 1,
    "explanation": "Nₛ = 120×60/10 = 720 rpm；Nᵣ = Nₛ(1−s) = 655.2 rpm。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-32",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "感應電動機",
    "question": "電源頻率 60 Hz，滑差率 9% 的感應電動機，其轉子電流頻率為何？",
    "options": [
      "10.8 Hz",
      "60 Hz",
      "54.6 Hz",
      "5.4 Hz"
    ],
    "answer": 3,
    "explanation": "f₂ = sf₁ = 0.09×60 = 5.4 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-33",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "同步機",
    "question": "10 極同步發電機以 840 rpm 旋轉，發電頻率為何？",
    "options": [
      "210 Hz",
      "140 Hz",
      "70 Hz",
      "35 Hz"
    ],
    "answer": 2,
    "explanation": "f = PN/120 = 10×840/120 = 70 Hz。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-34",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "特殊電機",
    "question": "步進電動機每步 7.2°，輸入 240 個完整步進脈波且無失步，累計轉角為何（不取餘數）？",
    "options": [
      "3456 °",
      "864 °",
      "6912 °",
      "1728 °"
    ],
    "answer": 3,
    "explanation": "累計角度 = 步距角×脈波數 = 7.2×240 = 1728°。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-35",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "直流發電機",
    "question": "直流發電機的換向器主要功能為何？",
    "options": [
      "降低轉速",
      "增加磁極數",
      "消除全部銅損",
      "將電樞內部交流電勢轉為外部直流"
    ],
    "answer": 3,
    "explanation": "換向器配合電刷進行機械整流。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-36",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "直流電動機",
    "question": "直流串激電動機為何不可空載運轉？",
    "options": [
      "轉速必為零",
      "磁通減弱可能使轉速過高",
      "電樞電流必定最大",
      "磁通必定飽和"
    ],
    "answer": 1,
    "explanation": "空載電流小，串激磁通弱，轉速可能大幅升高。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-37",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "變壓器",
    "question": "變壓器鐵心採用疊片主要減少何種損失？",
    "options": [
      "風摩損",
      "渦流損",
      "負載銅損",
      "電刷損"
    ],
    "answer": 1,
    "explanation": "絕緣疊片切斷大面積渦流路徑，提高渦流電阻。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-38",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "感應電動機",
    "question": "三相感應電動機要反轉，通常如何處理？",
    "options": [
      "交換全部三條相線的循環順序",
      "增加磁極數",
      "只降低頻率",
      "任意交換兩條電源相線"
    ],
    "answer": 3,
    "explanation": "交換兩相改變相序，使旋轉磁場反向。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-39",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "同步機",
    "question": "同步發電機併聯前，哪一項必須一致？",
    "options": [
      "機械外殼顏色",
      "額定容量",
      "相序",
      "轉子重量"
    ],
    "answer": 2,
    "explanation": "併聯須核對相序、頻率、電壓大小及相位。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-40",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "單相感應電動機",
    "question": "理想單相感應電動機只有主繞組時，靜止起動轉矩為何？",
    "options": [
      "最大轉矩",
      "與電壓無關的正值",
      "零",
      "額定轉矩兩倍"
    ],
    "answer": 2,
    "explanation": "脈動磁場可分解為兩個反向旋轉磁場，靜止時轉矩互抵。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-41",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "特殊電機",
    "question": "步進電動機在未失步時，位移主要由何者決定？",
    "options": [
      "輸入脈波數",
      "電源相序",
      "電源線長度",
      "外殼溫度"
    ],
    "answer": 0,
    "explanation": "每個有效步進脈波對應固定步距角。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-42",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "電工機械實習",
    "question": "測量馬達繞組對機殼的絕緣電阻，應使用何種儀表？",
    "options": [
      "絕緣電阻計",
      "頻率計",
      "一般功率計",
      "轉速計"
    ],
    "answer": 0,
    "explanation": "設備斷電、隔離敏感電子元件後，使用適當測試電壓的絕緣電阻計。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-43",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "變壓器",
    "question": "變壓器短路試驗在額定電流下主要量得何種損失？",
    "options": [
      "滿載銅損（近似）",
      "機械輸出",
      "風摩損",
      "額定鐵損"
    ],
    "answer": 0,
    "explanation": "短路試驗施加低電壓，鐵損很小，輸入功率近似額定電流銅損。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-44",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "同步機",
    "question": "並聯於固定頻率電網的同步電動機，穩定運轉時增加機械負載主要改變何者？",
    "options": [
      "電網頻率",
      "負載角",
      "同步轉速",
      "磁極數"
    ],
    "answer": 1,
    "explanation": "同步速度由頻率及極數決定，負載增加時負載角通常增加。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-45",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 600 W，負載電流為額定的 25%，假設電阻不變，銅損為何？",
    "options": [
      "600 W",
      "150 W",
      "37.5 W",
      "9.375 W"
    ],
    "answer": 2,
    "explanation": "Pcu = x²Pcu,FL = 0.25²×600 = 37.5 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-46",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 700 W，負載電流為額定的 50%，假設電阻不變，銅損為何？",
    "options": [
      "87.5 W",
      "700 W",
      "175 W",
      "350 W"
    ],
    "answer": 2,
    "explanation": "Pcu = x²Pcu,FL = 0.5²×700 = 175 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-47",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 800 W，負載電流為額定的 75%，假設電阻不變，銅損為何？",
    "options": [
      "450 W",
      "337.5 W",
      "800 W",
      "600 W"
    ],
    "answer": 0,
    "explanation": "Pcu = x²Pcu,FL = 0.75²×800 = 450 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-48",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 900 W，負載電流為額定的 80%，假設電阻不變，銅損為何？",
    "options": [
      "900 W",
      "576 W",
      "460.8 W",
      "720 W"
    ],
    "answer": 1,
    "explanation": "Pcu = x²Pcu,FL = 0.8²×900 = 576 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-49",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 1000 W，負載電流為額定的 60%，假設電阻不變，銅損為何？",
    "options": [
      "1000 W",
      "216 W",
      "360 W",
      "600 W"
    ],
    "answer": 2,
    "explanation": "Pcu = x²Pcu,FL = 0.6²×1000 = 360 W。",
    "source": "原創統測風格模擬題（V2）"
  },
  {
    "id": "em-v2-5-50",
    "type": "mock",
    "year": null,
    "mock": 5,
    "unit": "變壓器",
    "question": "變壓器滿載銅損 1100 W，負載電流為額定的 40%，假設電阻不變，銅損為何？",
    "options": [
      "176 W",
      "70.4 W",
      "1100 W",
      "440 W"
    ],
    "answer": 0,
    "explanation": "Pcu = x²Pcu,FL = 0.4²×1100 = 176 W。",
    "source": "原創統測風格模擬題（V2）"
  }
];

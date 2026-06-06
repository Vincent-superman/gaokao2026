// 中英双语字典 + 翻译查找表
window.I18N = {
  zh: {
    documentTitle: "2026 高考考前指南 · 6 月 7 日开考",
    nav: {
      countdown: "倒计时", schedule: "时间表", checklist: "必备清单",
      rules: "考场须知", emergency: "应急锦囊", mind: "心理调节",
      weather: "考期天气", provinces: "分省专区", news: "最新资讯"
    },
    langSwitch: { zh: "中文", en: "English" },
    hero: {
      kicker: "2026 · 全国普通高等学校招生统一考试",
      title1: "愿你笔下生风", title2: "所写皆为热爱",
      lede: "明天 6 月 7 日 9:00，全国 1290 万考生同步开考。深呼吸，你已经走过最长的那段路。",
      days: "天", hours: "小时", minutes: "分", seconds: "秒",
      target: "距 2026 年 6 月 7 日 09:00 语文开考",
      targetReached: "高考已开始，全力以赴！",
      stat1Num: "万", stat1Label: "2026 报名人数",
      stat2Num: "省", stat2Label: "新高考首届落地",
      stat3Num: "天", stat3Label: "新高考考程"
    },
    schedule: {
      badge: "全国通用", title: "考试时间表",
      sub: "默认显示全国通用安排。新高考省份具体科目时间请下滑切换至『分省专区』。"
    },
    checklist: {
      badge: "出门前最后一遍", title: "考前必备清单",
      sub: "今晚 22:00 前完成自查，所有物品集中放进透明文具袋 + 准考证夹。",
      cards: [
        { title: "必带证件", type: "must", items: ["准考证（建议彩色打印 2 份，分别放包里和家长处）", "身份证（核对有效期，过期立刻办临时身份证）", "本省要求的其他证件（如健康卡、副证）"] },
        { title: "文具用品", type: "must", items: ["2B 铅笔 2 支（已削好，不带卷笔刀）", "0.5mm 黑色签字笔 2 支（建议同款，避免临时换笔）", "橡皮（不带铅笔刀刃式）", "直尺、三角板、圆规（数学需要）", "透明文具袋（必须透明，硬质袋禁带）"] },
        { title: "禁止携带", type: "warn", cross: true, items: ["手机、智能手表、蓝牙耳机、电子手环", "计算器（除特殊省份允许外）", "带有金属配件的服装、首饰、皮带", "修正带、修正液（部分省份禁用）", "纸巾包装请去掉外塑料膜"] },
        { title: "建议携带", type: "tip", items: ["透明水杯（撕掉标签）", "纸巾（散装、无包装）", "风油精 / 清凉油（防困提神）", "一次性雨衣（小折叠款）", "巧克力 / 糖（中午快速补充能量）"] },
        { title: "家长后备", type: "tip", items: ["准考证、身份证复印件备份", "晕车药、藿香正气水（不含酒精款）", "女生应急卫生用品", "充足现金 + 出租车软件", "家长在考场外保持手机畅通"] },
        { title: "提前踩点", type: "tip", items: ["今天下午 3-5 点同步骤前往考场", "记下教室位置、洗手间、饮水点", "测算实际通勤时间，预留 30 分钟冗余", "查看明天天气，准备雨具或防晒"] }
      ]
    },
    rules: {
      badge: "考场规则", title: "入场与考场须知",
      timeline: [
        { time: "开考前 60 分钟", title: "到达考点", desc: "按学校安排集合，避开早高峰。提前查看考场分布图，确认楼栋和教室。" },
        { time: "开考前 30 分钟", title: "进入考场", desc: "开始安检（金属探测 + 人脸识别）。确认座位号后立即上厕所、整理文具。" },
        { time: "开考前 15 分钟", title: "停止入场（外语科目）", desc: "外语科目开考前 15 分钟禁止入场。其他科目开考 15 分钟后禁止入场。" },
        { time: "开考前 5 分钟", title: "分发试卷", desc: "核对试卷份数、印刷是否完整，发现问题立即举手报告。开考铃响才能动笔。" },
        { time: "开考后", title: "答题规范", desc: "姓名、准考证号必须填涂双重确认。答题写在指定区域，超出框线无效。" },
        { time: "考试结束前 15 分钟", title: "提示音", desc: "抓紧检查涂卡、答题卡定位点是否完整。结束前不允许提前交卷离场。" }
      ]
    },
    emergency: {
      badge: "把意外变小事", title: "突发状况应急锦囊",
      cards: [
        { title: "忘带准考证 / 身份证", body: "<b>不要折返。</b>立即向监考老师说明，由考点联系学校或户籍派出所开具临时身份证明，多数省份允许『先考试后补证』。" },
        { title: "路上堵车 / 交通故障", body: "立即拨打 <b>110</b>，警车可帮助开道。或就近换乘地铁、出租车。绝大多数城市考试期间设有<b>高考绿色通道</b>。" },
        { title: "身体不适 / 发烧", body: "考点设有备用隔离考场。轻微不适举手向监考老师说明；女生提前服用经期调节药物或带卫生用品备用。" },
        { title: "涂卡涂错位 / 漏题", body: "发现立即用橡皮擦干净重涂，<b>不要慌乱中划掉</b>。剩余时间不足时，先补完客观题再回头复查主观题。" },
        { title: "试卷印刷模糊 / 缺页", body: "开考前 5 分钟检查试卷时立即举手反映，由监考老师统一更换。开考后才发现的问题同样可以申请。" },
        { title: "手抖 / 大脑空白", body: "停下笔，闭眼深呼吸 4 次（4 秒吸 + 7 秒屏 + 8 秒呼）。先做有把握的题目找回手感，难题先标记跳过。" }
      ]
    },
    mind: {
      badge: "考前最后一夜", title: "心理 · 作息 · 饮食",
      cards: [
        { title: "今晚怎么睡", items: ["22:30 准时上床，比平时提前 30 分钟", "不要刷手机、不要查疑难题，知识点已经在你脑子里了", "睡不着不用焦虑，闭眼平躺也是休息，研究表明躺 6 小时即可保证次日发挥", "可喝一杯温牛奶，避免咖啡和浓茶", "定 2 个闹钟，请家长辅助叫醒"] },
        { title: "明天怎么吃", items: ["<b>早餐</b>：清淡好消化 — 粥/面 + 鸡蛋 + 少量蔬菜，七分饱", "<b>午餐</b>：避免油腻和生冷，主食 + 瘦肉 + 蔬菜，控制水分", "<b>不吃</b>：海鲜、新水果、街边小吃、冷饮、辛辣", "考前 30 分钟可吃一小块巧克力 / 半根香蕉", "饮水适量，别让自己考到一半急上厕所"] },
        { title: "考场紧张怎么办", items: ["4-7-8 呼吸法：吸 4 秒 → 屏 7 秒 → 呼 8 秒，重复 3 轮", "从最有把握的题开始做，建立信心", "把『考好』换成『把会的题做对』，目标更可控", "感到走神时，写下一个简单数字让自己回到当下"] },
        { title: "科目之间的间隔", items: ["不和同学对答案，立刻翻篇", "下一科要用的资料只看 5-10 分钟，找回手感即可", "午休尽量小睡 30 分钟，闹钟设两道", "家长不要追问题目，只聊轻松话题"] }
      ]
    },
    provinces: {
      badge: "分省专区", title: "选择你所在的省份",
      sub: "2026 年共有 <b>9 个省份</b>新高考首届落地（山西/河南/陕西/四川/云南/广西/江西/青海/宁夏 等），考程延长至 4 天，请重点核对本省时间。",
      pickerLabel: "省 / 自治区 / 直辖市",
      selectDefault: "— 请选择 —",
      modeLabel: "选科模式：",
      notesTitle: "本省特别提示",
      officialLink: "前往本省教育考试院 →"
    },
    weather: {
      badge: "考期天气",
      title: "高考期间天气速查",
      sub: "授权浏览器一键定位，自动获取你所在城市 6/7–6/10 每日预报与考试时段（上午/下午）的天气提示。所有数据通过 Open-Meteo 公开 API 获取，不会上传任何个人信息。",
      btnLocate: "📍 使用我的位置",
      btnLocating: "正在定位…",
      btnRetry: "重试定位",
      orLabel: "或手动搜索城市：",
      searchPlaceholder: "输入城市名（如 北京 / Beijing / Shanghai）",
      btnSearch: "搜索",
      btnSearching: "搜索中…",
      btnClear: "清除",
      cityLabel: "当前城市",
      coordLabel: "经纬度",
      changeCity: "不是这里？换一个城市",
      examDay: "高考",
      morningSlot: "上午 09:00–11:30",
      afternoonSlot: "下午 15:00–17:00",
      tempHigh: "最高",
      tempLow: "最低",
      precip: "降水概率",
      wind: "风力",
      uv: "紫外线",
      sunrise: "日出",
      sunset: "日落",
      tip: "贴心提示",
      tipHotMorning: "上午高温 ≥ 32℃，建议提前 30 分钟到达，准备清凉油 / 风油精与备用 T 恤。",
      tipHotAfternoon: "下午高温炎热，进入考场前别狂喝水，以免中途内急。",
      tipRainHigh: "降水概率高，<b>务必带伞 + 一次性雨衣</b>。准考证用密封袋保护。",
      tipRainMid: "可能有阵雨，包里放一把折叠伞最稳妥。",
      tipColdMorning: "清晨较凉，外搭一件薄外套上阵，避免空调房着凉。",
      tipUVHigh: "紫外线偏强，到考点路上戴帽子或防晒。",
      tipWindStrong: "风力较大，请妥善保管准考证、答题卡，避免被风吹散。",
      tipNormal: "天气适宜，按平日装束即可，集中精力发挥水平。",
      errors: {
        denied: "你已拒绝定位授权。可点击下方手动搜索城市。",
        unavailable: "无法获取你的位置，请尝试手动搜索。",
        timeout: "定位超时，请检查网络后重试。",
        noGeo: "当前浏览器不支持地理定位。",
        insecure: "浏览器要求页面通过 HTTPS 才能定位，请手动搜索城市。",
        network: "天气数据请求失败，请检查网络连接。",
        notFound: "未找到匹配的城市，请换一个关键字。"
      },
      weatherCodes: {
        0: "晴", 1: "晴间多云", 2: "多云", 3: "阴",
        45: "雾", 48: "冻雾",
        51: "毛毛雨", 53: "中度毛毛雨", 55: "强毛毛雨",
        56: "冻毛毛雨", 57: "强冻毛毛雨",
        61: "小雨", 63: "中雨", 65: "大雨",
        66: "冻雨", 67: "强冻雨",
        71: "小雪", 73: "中雪", 75: "大雪", 77: "霰",
        80: "阵雨", 81: "中阵雨", 82: "强阵雨",
        85: "阵雪", 86: "强阵雪",
        95: "雷阵雨", 96: "雷阵雨伴小冰雹", 99: "雷阵雨伴大冰雹"
      }
    },
    news: {
      badge: "官方动态", title: "2026 高考最新资讯",
      sub: "综合新华社、教育部及各省教育考试院公开报道整理。",
      sourceLabel: "来源：",
      items: [
        { date: "6/3", title: "2026 全国高考报名 1290 万人 教育部部署平安高考", desc: "教育部宣布 2026 年全国高考报名人数达 1290 万人，6 月 7 日开考。会同公安、网信等部门重点打击考试作弊、试题泄露与替考行为。", source: "新华社" },
        { date: "6/5", title: "9 省份 2026 年新高考首届落地 采用 3+1+2 模式", desc: "山西、河南、陕西、四川、云南、广西、江西、青海、宁夏等省份首届新高考考生迎来高考，考试时长延长至 4 天。", source: "各省教育考试院" },
        { date: "6/4", title: "多地启动『高考绿色通道』 公安部门保障考生赴考", desc: "北京、上海、广州、武汉等多地交警部门开启高考护航行动，考生持准考证可优先通行。如遇路况问题立即拨打 110。" },
        { date: "6/2", title: "河南考生人数全国第一 各考点配置标准化考场", desc: "河南作为高考人口大省并迎来新高考首届，全省考场已完成 5G 信号屏蔽、智能安检门、人脸识别等标准化部署。" },
        { date: "6/1", title: "今年外语听力含听说一体化测试 部分省份须留意", desc: "北京、天津、上海等地外语科目含听力部分，开考前 15 分钟禁止入场。其他省份请以本省考试院通知为准。" },
        { date: "5/30", title: "考前『松弦不松气』 心理专家建议保持规律作息", desc: "多位心理学专家提示考生不必刻意调整生物钟，保持原有作息更有助于发挥。考前一周以巩固为主，不刷新题。" }
      ]
    },
    cheer: {
      title: "愿你披荆斩棘",
      body: "愿你写下的每一笔都问心无愧<br/>愿你走出考场时，能自信地拥抱明天",
      signoff: "—— 2026 届考生加油 ——"
    },
    foot: {
      disclaimer: "本页为考前指南聚合页，信息综合公开来源整理，<b>最终安排请以本省教育考试院官方公告为准</b>。",
      meta: "页面生成于 2026 年 6 月 6 日 · 离线可用 · 无外部依赖"
    },
    weekday: { "周日": "周日", "周一": "周一", "周二": "周二", "周三": "周三", "周四": "周四", "周五": "周五", "周六": "周六" },
    tagFirst: "首届"
  },

  en: {
    documentTitle: "Gaokao 2026 Survival Guide · Starts June 7",
    nav: {
      countdown: "Countdown", schedule: "Schedule", checklist: "Checklist",
      rules: "Exam Rules", emergency: "Emergency", mind: "Mindset",
      weather: "Weather", provinces: "By Province", news: "News"
    },
    langSwitch: { zh: "中文", en: "English" },
    hero: {
      kicker: "2026 · National College Entrance Examination of China",
      title1: "May your pen flow with confidence",
      title2: "and every word you write reflect your passion",
      lede: "Tomorrow at 9:00 AM on June 7, 12.9 million candidates will sit the exam together. Take a deep breath — the longest stretch is already behind you.",
      days: "Days", hours: "Hours", minutes: "Min", seconds: "Sec",
      target: "Until 9:00 AM, June 7, 2026 — Chinese exam begins",
      targetReached: "Gaokao has begun. Give it everything you've got!",
      stat1Num: "M", stat1Label: "2026 Candidates",
      stat2Num: "", stat2Label: "Provinces · New Gaokao First Year",
      stat3Num: "Days", stat3Label: "New Gaokao Schedule"
    },
    schedule: {
      badge: "National Overview", title: "Exam Schedule",
      sub: "Default view shows the nationwide schedule. For exact subject times in New Gaokao provinces, scroll down to the 'By Province' section."
    },
    checklist: {
      badge: "Final Pre-Exam Check", title: "Must-Pack Checklist",
      sub: "Complete this self-check before 22:00 tonight. Pack everything into a transparent pencil pouch + admission ticket folder.",
      cards: [
        { title: "Required Documents", type: "must", items: ["Admission ticket (print 2 color copies — one in your bag, one with parents)", "ID card (check expiry; renew immediately if expired)", "Other province-specific documents (e.g. health card)"] },
        { title: "Stationery", type: "must", items: ["2 × 2B pencils (pre-sharpened, no sharpener inside)", "2 × 0.5mm black gel pens (same model — avoid switching mid-exam)", "Eraser (no blade-style)", "Ruler, triangle, compass (for math)", "Transparent pouch (must be transparent; rigid cases banned)"] },
        { title: "Forbidden Items", type: "warn", cross: true, items: ["Phones, smart watches, Bluetooth earphones, fitness bands", "Calculators (unless your province explicitly allows)", "Clothing/accessories with metal parts, belts", "Correction tape/fluid (banned in some provinces)", "Tissues — remove plastic wrappers"] },
        { title: "Recommended", type: "tip", items: ["Transparent water bottle (peel off labels)", "Loose tissues (no packaging)", "Cooling balm / mint oil to stay alert", "Disposable raincoat (foldable)", "Chocolate / candy for quick energy"] },
        { title: "Parents' Backup Kit", type: "tip", items: ["Photocopies of admission ticket and ID", "Motion-sickness pills, herbal soothers (alcohol-free)", "Sanitary supplies for female candidates", "Cash + ride-hailing app ready", "Keep phone reachable outside the exam venue"] },
        { title: "Site Recon", type: "tip", items: ["Visit exam site 3–5 PM today, same route", "Locate classroom, restrooms, water fountains", "Time the actual commute, add 30 min buffer", "Check tomorrow's weather; pack umbrella or sun gear"] }
      ]
    },
    rules: {
      badge: "On-Site Rules", title: "Entry & Exam Hall Procedures",
      timeline: [
        { time: "60 min before start", title: "Arrive at venue", desc: "Gather as your school instructed, avoid morning rush. Review the venue map; confirm building and classroom." },
        { time: "30 min before start", title: "Enter exam hall", desc: "Security check begins (metal detector + face recognition). Confirm seat number, then use the restroom and arrange stationery." },
        { time: "15 min before start", title: "Entry closes (foreign language)", desc: "For the foreign language exam, no entry permitted 15 minutes before start. Other subjects: no entry 15 min after start." },
        { time: "5 min before start", title: "Papers distributed", desc: "Verify page count and print quality; raise hand immediately for issues. Do not write until the start bell rings." },
        { time: "After start", title: "Answer rules", desc: "Fill in name and ID number with double-check. Write inside designated zones — anything outside the boundary is invalid." },
        { time: "15 min before end", title: "Final warning", desc: "Verify bubble sheet markings and answer-card alignment dots. No early submission allowed before the end bell." }
      ]
    },
    emergency: {
      badge: "Turn surprises into small bumps", title: "Emergency Playbook",
      cards: [
        { title: "Forgot admission ticket / ID", body: "<b>Don't go back home.</b> Inform the proctor immediately. The venue can contact your school or local police for a temporary ID. Most provinces allow 'sit first, verify after'." },
        { title: "Traffic jam / breakdown", body: "Call <b>110</b> at once — patrol cars can escort you. Or switch to subway or taxi. Most cities open a 'Gaokao Green Channel' on exam days." },
        { title: "Feeling unwell / fever", body: "Venues have backup isolation rooms. Tell the proctor for mild discomfort. Female candidates can pre-take menstrual relief medication and pack supplies." },
        { title: "Misaligned bubbles / skipped item", body: "Erase cleanly and re-fill — <b>don't cross out in panic</b>. If time is short, finish all multiple-choice first, then return to written sections." },
        { title: "Blurry or missing pages", body: "Raise your hand during the 5-min pre-check; the proctor will issue a replacement. Issues found later can still be reported." },
        { title: "Shaking hands / blank mind", body: "Pause, close your eyes, breathe 4 times (inhale 4s, hold 7s, exhale 8s). Start with questions you know to rebuild rhythm. Mark hard ones and skip." }
      ]
    },
    mind: {
      badge: "The Night Before", title: "Mind · Sleep · Diet",
      cards: [
        { title: "How to sleep tonight", items: ["Bed at 22:30 — 30 min earlier than usual", "No phone, no last-minute problem-solving — what you know is already in your head", "Can't sleep? Don't panic. Lying still with eyes closed is rest. Studies show 6h horizontal is enough for next-day performance.", "A cup of warm milk is fine; avoid coffee and strong tea", "Set 2 alarms; ask parents to back you up"] },
        { title: "What to eat tomorrow", items: ["<b>Breakfast</b>: light and easy — porridge/noodles + egg + a little veg, 70% full", "<b>Lunch</b>: avoid greasy/cold food — staple + lean meat + veg, moderate fluids", "<b>Avoid</b>: seafood, unfamiliar fruits, street food, cold drinks, spicy", "30 min before exam: a small piece of chocolate or half a banana", "Drink water moderately — don't get caught mid-exam needing the restroom"] },
        { title: "If you panic in the hall", items: ["4-7-8 breathing: inhale 4s → hold 7s → exhale 8s, repeat 3 rounds", "Start from the questions you're most confident about — build momentum", "Reframe 'do well' as 'get the ones I know right' — more controllable", "If your mind drifts, write a simple number on scratch paper to anchor back"] },
        { title: "Between subjects", items: ["Don't compare answers with classmates — turn the page immediately", "Skim notes for the next subject only 5–10 min — just enough to warm up", "Try a 30-min nap at noon; set two alarms", "Parents: don't quiz them on the questions, talk about light topics only"] }
      ]
    },
    provinces: {
      badge: "By Province", title: "Choose your province",
      sub: "In 2026, <b>9 provinces</b> begin their first New Gaokao year (Shanxi, Henan, Shaanxi, Sichuan, Yunnan, Guangxi, Jiangxi, Qinghai, Ningxia). The exam now spans 4 days — please confirm your local schedule.",
      pickerLabel: "Province / Region / Municipality",
      selectDefault: "— Please select —",
      modeLabel: "Subject Mode: ",
      notesTitle: "Province-Specific Notes",
      officialLink: "Visit Provincial Exam Authority →"
    },
    weather: {
      badge: "Exam-Day Weather",
      title: "Weather During the Gaokao",
      sub: "Allow the browser to share your location and instantly see daily forecasts for June 7–10 plus exam-time slot tips. Powered by Open-Meteo's free public API — no personal data is uploaded.",
      btnLocate: "📍 Use my location",
      btnLocating: "Locating…",
      btnRetry: "Retry locating",
      orLabel: "Or search a city manually:",
      searchPlaceholder: "Type a city name (e.g. Beijing, Shanghai, Henan)",
      btnSearch: "Search",
      btnSearching: "Searching…",
      btnClear: "Clear",
      cityLabel: "Current city",
      coordLabel: "Coordinates",
      changeCity: "Wrong place? Pick another city",
      examDay: "Exam",
      morningSlot: "Morning 09:00–11:30",
      afternoonSlot: "Afternoon 15:00–17:00",
      tempHigh: "High",
      tempLow: "Low",
      precip: "Precip. chance",
      wind: "Wind",
      uv: "UV index",
      sunrise: "Sunrise",
      sunset: "Sunset",
      tip: "Tips",
      tipHotMorning: "Morning high ≥ 32°C — arrive 30 min early, bring cooling balm and a spare shirt.",
      tipHotAfternoon: "Hot afternoon — don't chug water right before the exam to avoid restroom interruptions.",
      tipRainHigh: "High chance of rain — <b>bring an umbrella plus a disposable raincoat</b>. Seal your admission ticket in a zip bag.",
      tipRainMid: "Possible showers — a foldable umbrella in your bag is the safest bet.",
      tipColdMorning: "Cool morning — wear a light jacket; the air-conditioned exam hall can get chilly.",
      tipUVHigh: "Strong UV — wear a hat or apply sunscreen on the way to the venue.",
      tipWindStrong: "Strong wind — secure your admission ticket and answer sheets carefully.",
      tipNormal: "Comfortable weather — dress as usual and focus on the exam.",
      errors: {
        denied: "Location permission denied. Please use the manual search below.",
        unavailable: "Unable to determine your location. Try the manual search.",
        timeout: "Locating timed out. Check your connection and retry.",
        noGeo: "Your browser does not support geolocation.",
        insecure: "Browsers require HTTPS for geolocation. Please search a city manually.",
        network: "Failed to fetch weather data. Check your network connection.",
        notFound: "No matching city found. Try a different keyword."
      },
      weatherCodes: {
        0: "Clear", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
        45: "Fog", 48: "Rime fog",
        51: "Light drizzle", 53: "Moderate drizzle", 55: "Dense drizzle",
        56: "Freezing drizzle", 57: "Heavy freezing drizzle",
        61: "Light rain", 63: "Moderate rain", 65: "Heavy rain",
        66: "Freezing rain", 67: "Heavy freezing rain",
        71: "Light snow", 73: "Moderate snow", 75: "Heavy snow", 77: "Snow grains",
        80: "Rain showers", 81: "Moderate showers", 82: "Violent showers",
        85: "Snow showers", 86: "Heavy snow showers",
        95: "Thunderstorm", 96: "Thunderstorm w/ small hail", 99: "Thunderstorm w/ heavy hail"
      }
    },
    news: {
      badge: "Official Updates", title: "Latest 2026 Gaokao News",
      sub: "Compiled from public reports of Xinhua, the Ministry of Education, and provincial exam authorities.",
      sourceLabel: "Source: ",
      items: [
        { date: "6/3", title: "12.9M candidates registered for 2026 Gaokao; MOE deploys 'Safe Gaokao' plan", desc: "The Ministry of Education announced 12.9 million candidates will sit the 2026 Gaokao on June 7. It is working with police and cyberspace authorities to crack down on cheating, leaks, and impersonation.", source: "Xinhua" },
        { date: "6/5", title: "9 provinces begin first New Gaokao year with the 3+1+2 model", desc: "Shanxi, Henan, Shaanxi, Sichuan, Yunnan, Guangxi, Jiangxi, Qinghai, and Ningxia welcome their first cohort of New Gaokao candidates. The exam now spans 4 days.", source: "Provincial Exam Authorities" },
        { date: "6/4", title: "Cities open 'Gaokao Green Channel' — police escort candidates", desc: "Traffic police in Beijing, Shanghai, Guangzhou, Wuhan and other cities have launched Gaokao escort programs. Candidates with admission tickets get priority. Call 110 in case of issues." },
        { date: "6/2", title: "Henan tops candidate count; venues fully standardized", desc: "Henan, the largest Gaokao-population province, is also entering its first New Gaokao year. All provincial venues are equipped with 5G blockers, smart security gates, and face recognition." },
        { date: "6/1", title: "Foreign language listening varies by province — check local rules", desc: "Beijing, Tianjin, Shanghai and others include listening sections in the foreign language exam. No entry 15 min before start. Other provinces: refer to local exam authority." },
        { date: "5/30", title: "Stay sharp, but stay calm — psychologists urge regular routines", desc: "Experts advise candidates not to deliberately reset their biological clock — sticking to your existing routine helps performance more. Final week: review knowledge, don't tackle new problems." }
      ]
    },
    cheer: {
      title: "May you cut through every thicket",
      body: "May every stroke of your pen be one you stand behind<br/>May you walk out of the hall ready to embrace tomorrow",
      signoff: "—— Cheering for the Class of 2026 ——"
    },
    foot: {
      disclaimer: "This page is an aggregated guide. Information is compiled from public sources. <b>Final arrangements always follow the official notice from your provincial exam authority</b>.",
      meta: "Generated June 6, 2026 · Works offline · No external dependencies"
    },
    weekday: { "周日": "Sun", "周一": "Mon", "周二": "Tue", "周三": "Wed", "周四": "Thu", "周五": "Fri", "周六": "Sat" },
    tagFirst: "First Year"
  }
};

// 主题映射：把数据里的中文短语翻成英文（schedule subject、tag、mode、province name、notes 等）
window.I18N_MAPS = {
  // 日期 6月7日 → June 7
  date: { "6月7日": "June 7", "6月8日": "June 8", "6月9日": "June 9", "6月10日": "June 10" },

  // 时间字段（含特殊文字段）
  time: {
    "新高考省份选考首日": "New Gaokao Day 1 (electives)",
    "新高考省份选考次日": "New Gaokao Day 2 (electives)",
    "上午": "Morning", "下午": "Afternoon"
  },

  // 科目 / 关键词翻译（按 includes 命中替换）
  subject: [
    ["语文", "Chinese"], ["数学", "Mathematics"], ["外语", "Foreign Language"],
    ["物理", "Physics"], ["化学", "Chemistry"], ["生物", "Biology"],
    ["政治", "Politics"], ["思想政治", "Politics"], ["历史", "History"], ["地理", "Geography"],
    ["文综 / 理综（传统高考省份）", "Liberal/Science Comprehensive (traditional provinces)"],
    ["文综 / 理综", "Liberal/Science Comprehensive"],
    ["首选：物理 / 历史", "Primary: Physics / History"],
    ["物理 / 历史 等首选科目", "Primary subjects: Physics / History"],
    ["再选科目（化学、生物、政治、地理）", "Electives: Chem/Bio/Politics/Geography"],
    ["再选科目一", "Elective 1"], ["再选科目二", "Elective 2"], ["再选科目三", "Elective 3"],
    ["选考科目（7 选 3）", "Electives (3 of 7)"], ["选考科目", "Electives"],
    ["化学 / 地理", "Chemistry / Geography"], ["思想政治 / 生物", "Politics / Biology"],
    ["外语（含听力）", "Foreign Language (with listening)"],
    ["外语（笔试）", "Foreign Language (written)"]
  ],

  // 模式
  mode: {
    "3+3": "3+3", "3+1+2": "3+1+2",
    "新高考分省命题（部分省份使用全国卷）": "New Gaokao — provincial papers (some use the national paper)"
  },

  // 标签
  tag: { "新高考": "New Gaokao", "新高考首届": "New Gaokao · First Year" },

  // 省份名称
  province: {
    "北京": "Beijing", "上海": "Shanghai", "天津": "Tianjin", "重庆": "Chongqing",
    "浙江": "Zhejiang", "江苏": "Jiangsu", "广东": "Guangdong", "山东": "Shandong",
    "湖南": "Hunan", "湖北": "Hubei", "河北": "Hebei", "河南": "Henan",
    "山西": "Shanxi", "陕西": "Shaanxi", "四川": "Sichuan", "云南": "Yunnan",
    "福建": "Fujian", "辽宁": "Liaoning", "安徽": "Anhui", "贵州": "Guizhou",
    "甘肃": "Gansu", "广西": "Guangxi", "江西": "Jiangxi", "黑龙江": "Heilongjiang",
    "吉林": "Jilin", "青海": "Qinghai", "宁夏": "Ningxia", "内蒙古": "Inner Mongolia",
    "新疆": "Xinjiang", "海南": "Hainan"
  },

  // 各省 notes 的英文版（按 province id 索引）
  provinceNotes: {
    beijing: ["3+3 model — pick 3 from 6 electives.", "Foreign language includes a listening section.", "Two security checks at entry; no electronic devices allowed."],
    shanghai: ["3+3 model; level-graded electives were completed in May.", "Foreign language has two annual sittings; the higher score counts.", "Speaking/listening test held separately."],
    zhejiang: ["3+3 model — 3 of 7 (Phys/Chem/Bio/Pol/Hist/Geo/Tech) — 'Technology' is unique to Zhejiang.", "Foreign language and electives offered twice a year; higher score counts."],
    jiangsu: ["3+1+2 model: choose Physics or History; pick 2 of 4 from Chem/Bio/Pol/Geo.", "Chinese exam runs slightly longer — pace yourself."],
    guangdong: ["3+1+2 model with level-based scaling for electives.", "Metal detectors at venues; smart watches forbidden."],
    shandong: ["3+3 model with level-based scaling.", "Enter 30 min early; no entry 15 min after start."],
    hunan: ["3+1+2 model.", "Listening section runs 20 min before the foreign language written part."],
    hubei: ["3+1+2 model."],
    hebei: ["3+1+2 model."],
    henan: ["First New Gaokao year for Henan in 2026 — 3+1+2 model.", "Largest candidate population in China; venues are crowded — scout in advance."],
    shanxi: ["First New Gaokao year for Shanxi in 2026 — 3+1+2 model."],
    sichuan: ["First New Gaokao year for Sichuan in 2026 — 3+1+2 model."],
    yunnan: ["First New Gaokao year for Yunnan in 2026 — 3+1+2 model."],
    shaanxi: ["First New Gaokao year for Shaanxi in 2026 — 3+1+2 model."],
    fujian: ["3+1+2 model."],
    liaoning: ["3+1+2 model."],
    chongqing: ["3+1+2 model."],
    anhui: ["3+1+2 model."],
    guizhou: ["First New Gaokao year for Guizhou in 2026 — 3+1+2 model. 434,000 candidates registered."],
    gansu: ["First New Gaokao year for Gansu in 2026 — 3+1+2 model."],
    guangxi: ["First New Gaokao year for Guangxi in 2026 — 3+1+2 model."],
    jiangxi: ["First New Gaokao year for Jiangxi in 2026 — 3+1+2 model."],
    heilongjiang: ["First New Gaokao year for Heilongjiang in 2026 — 3+1+2 model."],
    jilin: ["First New Gaokao year for Jilin in 2026 — 3+1+2 model."],
    qinghai: ["First New Gaokao year for Qinghai in 2026 — 3+1+2 model."],
    ningxia: ["First New Gaokao year for Ningxia in 2026 — 3+1+2 model."],
    neimenggu: ["First New Gaokao year for Inner Mongolia in 2026 — 3+1+2 model."],
    xinjiang: ["First New Gaokao year for Xinjiang in 2026 — 3+1+2 model."],
    tianjin: ["3+3 model with level-based scaling.", "Foreign language includes listening; speaking/listening offered twice a year."],
    hainan: ["3+3 model with level-based scaling."]
  }
};

// 翻译函数：把数据里的中文文字按 lang 转换
window.tr = function(text, lang, kind) {
  if (lang === 'zh' || !text) return text;
  const M = window.I18N_MAPS;
  if (kind === 'date' && M.date[text]) return M.date[text];
  if (kind === 'time' && M.time[text]) return M.time[text];
  if (kind === 'mode' && M.mode[text]) return M.mode[text];
  if (kind === 'tag' && M.tag[text]) return M.tag[text];
  if (kind === 'province' && M.province[text]) return M.province[text];
  if (kind === 'subject') {
    for (const [zh, en] of M.subject) if (text === zh) return en;
    for (const [zh, en] of M.subject) if (text.includes(zh)) return text.replace(zh, en);
    return text;
  }
  if (kind === 'time') {
    // 时间字符串如 "09:00 - 11:30"，可能含『上午』『下午』，做替换
    let s = text;
    Object.keys(M.time).forEach(k => { s = s.replace(k, M.time[k]); });
    return s;
  }
  return text;
};

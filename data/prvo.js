window.GAOKAO_DATA = 
{
  "_meta": {
    "year": 2026,
    "source": "根据各省教育考试院 2026 年高考改革方案整理，仅供参考，最终请以省考试院公告为准。",
    "modes": {
      "3+3": "语数外 + 任选 3 门（含浙江 7 选 3、上海 6 选 3）",
      "3+1+2": "语数外 + 物理/历史 二选一 + 化生政地 4 选 2",
      "传统": "语数外 + 文综 / 理综"
    }
  },
  "national": {
    "name": "全国通用",
    "mode": "新高考分省命题（部分省份使用全国卷）",
    "schedule": [
      { "date": "6月7日", "weekday": "周日", "items": [
        { "time": "09:00 - 11:30", "subject": "语文" },
        { "time": "15:00 - 17:00", "subject": "数学" }
      ]},
      { "date": "6月8日", "weekday": "周一", "items": [
        { "time": "09:00 - 11:30", "subject": "文综 / 理综（传统高考省份）" },
        { "time": "15:00 - 17:00", "subject": "外语" }
      ]},
      { "date": "6月9日", "weekday": "周二", "items": [
        { "time": "新高考省份选考首日", "subject": "物理 / 历史 等首选科目" }
      ]},
      { "date": "6月10日", "weekday": "周三", "items": [
        { "time": "新高考省份选考次日", "subject": "再选科目（化学、生物、政治、地理）" }
      ]}
    ],
    "notes": [
      "新高考省份具体科目时间以本省考试院公告为准。",
      "外语含听力的省份请提前到达考场，迟到不得入场。"
    ]
  },
  "provinces": [
    {
      "id": "beijing",
      "name": "北京",
      "mode": "3+3",
      "tag": "新高考",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "15:00-17:00", "subject": "外语（含听力）" }] },
        { "date": "6月9日", "items": [{ "time": "08:00-09:30", "subject": "物理" }, { "time": "11:00-12:30", "subject": "化学" }, { "time": "15:30-17:00", "subject": "政治" }] },
        { "date": "6月10日", "items": [{ "time": "08:00-09:30", "subject": "历史" }, { "time": "11:00-12:30", "subject": "生物" }, { "time": "15:30-17:00", "subject": "地理" }] }
      ],
      "notes": [
        "采用 3+3 模式，6 选 3。",
        "外语含听力，听力安排在外语笔试中进行。",
        "进入考场需经过两次安检，禁止携带任何电子设备。"
      ],
      "officialUrl": "https://www.bjeea.cn/"
    },
    {
      "id": "shanghai",
      "name": "上海",
      "mode": "3+3",
      "tag": "新高考",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "15:00-17:00", "subject": "外语（笔试）" }] }
      ],
      "notes": [
        "采用 3+3 模式，6 选 3，等级考已于 5 月完成。",
        "外语一年两考，取较高一次成绩计入高考。",
        "听说测试单独进行。"
      ],
      "officialUrl": "https://www.shmeea.edu.cn/"
    },
    {
      "id": "zhejiang",
      "name": "浙江",
      "mode": "3+3",
      "tag": "新高考",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "上午", "subject": "选考科目（7 选 3）" }, { "time": "下午", "subject": "选考科目（7 选 3）" }] },
        { "date": "6月10日", "items": [{ "time": "上午", "subject": "选考科目（7 选 3）" }] }
      ],
      "notes": [
        "采用 3+3 模式，物化生政史地技 7 选 3，含『技术』科目为浙江特色。",
        "外语和选考一年两考，取较高分。"
      ],
      "officialUrl": "https://www.zjzs.net/"
    },
    {
      "id": "jiangsu",
      "name": "江苏",
      "mode": "3+1+2",
      "tag": "新高考",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "再选科目一" }, { "time": "11:00-12:15", "subject": "再选科目二" }, { "time": "14:30-15:45", "subject": "再选科目三" }] }
      ],
      "notes": [
        "采用 3+1+2 模式，物理/历史二选一，再选科目化生政地 4 选 2。",
        "语文加考时长，注意答题节奏。"
      ],
      "officialUrl": "https://www.jseea.cn/"
    },
    {
      "id": "guangdong",
      "name": "广东",
      "mode": "3+1+2",
      "tag": "新高考",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": [
        "3+1+2 模式，再选科目采用等级赋分。",
        "考场配备金属探测仪，禁止携带智能手表。"
      ],
      "officialUrl": "https://eea.gd.gov.cn/"
    },
    {
      "id": "shandong",
      "name": "山东",
      "mode": "3+3",
      "tag": "新高考",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:00-09:30", "subject": "物理" }, { "time": "11:00-12:30", "subject": "政治" }, { "time": "15:30-17:00", "subject": "化学" }] },
        { "date": "6月10日", "items": [{ "time": "08:00-09:30", "subject": "历史" }, { "time": "11:00-12:30", "subject": "生物" }, { "time": "15:30-17:00", "subject": "地理" }] }
      ],
      "notes": [
        "3+3 模式，等级赋分。",
        "考前 30 分钟入场，开考 15 分钟后禁止入场。"
      ],
      "officialUrl": "https://cx.sdzk.cn/"
    },
    {
      "id": "hunan",
      "name": "湖南",
      "mode": "3+1+2",
      "tag": "新高考",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["3+1+2 模式。", "外语听力安排在笔试前 20 分钟。"],
      "officialUrl": "https://www.hneao.cn/"
    },
    {
      "id": "hubei",
      "name": "湖北",
      "mode": "3+1+2",
      "tag": "新高考",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["3+1+2 模式。"],
      "officialUrl": "https://www.hbea.edu.cn/"
    },
    {
      "id": "hebei",
      "name": "河北",
      "mode": "3+1+2",
      "tag": "新高考",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["3+1+2 模式。"],
      "officialUrl": "http://www.hebeea.edu.cn/"
    },
    {
      "id": "henan",
      "name": "河南",
      "mode": "3+1+2",
      "tag": "新高考首届",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": [
        "2026 年河南新高考首届落地，采用 3+1+2 模式。",
        "考生人数全国第一，考场紧张，务必提前踩点。"
      ],
      "officialUrl": "http://www.heao.com.cn/"
    },
    {
      "id": "shanxi",
      "name": "山西",
      "mode": "3+1+2",
      "tag": "新高考首届",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["2026 年山西新高考首届落地，采用 3+1+2 模式。"],
      "officialUrl": "http://www.sxkszx.cn/"
    },
    {
      "id": "sichuan",
      "name": "四川",
      "mode": "3+1+2",
      "tag": "新高考首届",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["2026 年四川新高考首届落地，采用 3+1+2 模式。"],
      "officialUrl": "https://www.sceea.cn/"
    },
    {
      "id": "yunnan",
      "name": "云南",
      "mode": "3+1+2",
      "tag": "新高考首届",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["2026 年云南新高考首届落地，采用 3+1+2 模式。"],
      "officialUrl": "https://www.ynzs.cn/"
    },
    {
      "id": "shaanxi",
      "name": "陕西",
      "mode": "3+1+2",
      "tag": "新高考首届",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["2026 年陕西新高考首届落地，采用 3+1+2 模式。"],
      "officialUrl": "http://www.sneea.cn/"
    },
    {
      "id": "fujian",
      "name": "福建",
      "mode": "3+1+2",
      "tag": "新高考",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["3+1+2 模式。"],
      "officialUrl": "https://www.eeafj.cn/"
    },
    {
      "id": "liaoning",
      "name": "辽宁",
      "mode": "3+1+2",
      "tag": "新高考",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["3+1+2 模式。"],
      "officialUrl": "https://www.lnzsks.com/"
    },
    {
      "id": "chongqing",
      "name": "重庆",
      "mode": "3+1+2",
      "tag": "新高考",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["3+1+2 模式。"],
      "officialUrl": "https://www.cqksy.cn/"
    },
    {
      "id": "anhui",
      "name": "安徽",
      "mode": "3+1+2",
      "tag": "新高考",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["3+1+2 模式。"],
      "officialUrl": "https://www.ahzsks.cn/"
    },
    {
      "id": "guizhou",
      "name": "贵州",
      "mode": "3+1+2",
      "tag": "新高考首届",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["2026 年贵州新高考首届落地，采用 3+1+2 模式，报名总人数 43.4 万。"],
      "officialUrl": "http://zsksy.guizhou.gov.cn/"
    },
    {
      "id": "gansu",
      "name": "甘肃",
      "mode": "3+1+2",
      "tag": "新高考首届",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["2026 年甘肃新高考首届落地，采用 3+1+2 模式。"],
      "officialUrl": "https://www.ganseea.cn/"
    },
    {
      "id": "guangxi",
      "name": "广西",
      "mode": "3+1+2",
      "tag": "新高考首届",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["2026 年广西新高考首届落地，采用 3+1+2 模式。"],
      "officialUrl": "https://www.gxeea.cn/"
    },
    {
      "id": "jiangxi",
      "name": "江西",
      "mode": "3+1+2",
      "tag": "新高考首届",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["2026 年江西新高考首届落地，采用 3+1+2 模式。"],
      "officialUrl": "http://www.jxeea.cn/"
    },
    {
      "id": "heilongjiang",
      "name": "黑龙江",
      "mode": "3+1+2",
      "tag": "新高考首届",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["2026 年黑龙江新高考首届落地，采用 3+1+2 模式。"],
      "officialUrl": "https://www.lzk.hl.cn/"
    },
    {
      "id": "jilin",
      "name": "吉林",
      "mode": "3+1+2",
      "tag": "新高考首届",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["2026 年吉林新高考首届落地，采用 3+1+2 模式。"],
      "officialUrl": "http://www.jleea.com.cn/"
    },
    {
      "id": "qinghai",
      "name": "青海",
      "mode": "3+1+2",
      "tag": "新高考首届",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["2026 年青海新高考首届落地，采用 3+1+2 模式。"],
      "officialUrl": "http://www.qhjyks.com/"
    },
    {
      "id": "ningxia",
      "name": "宁夏",
      "mode": "3+1+2",
      "tag": "新高考首届",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["2026 年宁夏新高考首届落地，采用 3+1+2 模式。"],
      "officialUrl": "https://www.nxjyks.cn/"
    },
    {
      "id": "neimenggu",
      "name": "内蒙古",
      "mode": "3+1+2",
      "tag": "新高考首届",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["2026 年内蒙古新高考首届落地，采用 3+1+2 模式。"],
      "officialUrl": "https://www.nm.zsks.cn/"
    },
    {
      "id": "xinjiang",
      "name": "新疆",
      "mode": "3+1+2",
      "tag": "新高考首届",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "09:00-10:15", "subject": "首选：物理 / 历史" }, { "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "08:30-09:45", "subject": "化学 / 地理" }, { "time": "11:00-12:15", "subject": "思想政治 / 生物" }] }
      ],
      "notes": ["2026 年新疆新高考首届落地，采用 3+1+2 模式。"],
      "officialUrl": "http://www.xjzk.gov.cn/"
    },
    {
      "id": "tianjin",
      "name": "天津",
      "mode": "3+3",
      "tag": "新高考",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "15:00-17:00", "subject": "外语（含听力）" }] },
        { "date": "6月9日", "items": [{ "time": "08:00-09:30", "subject": "物理" }, { "time": "11:00-12:30", "subject": "化学" }, { "time": "15:30-17:00", "subject": "政治" }] },
        { "date": "6月10日", "items": [{ "time": "08:00-09:30", "subject": "历史" }, { "time": "11:00-12:30", "subject": "生物" }, { "time": "15:30-17:00", "subject": "地理" }] }
      ],
      "notes": ["3+3 模式，等级赋分。", "外语含听力，听说一年两考。"],
      "officialUrl": "http://www.zhaokao.net/"
    },
    {
      "id": "hainan",
      "name": "海南",
      "mode": "3+3",
      "tag": "新高考",
      "schedule": [
        { "date": "6月7日", "items": [{ "time": "09:00-11:30", "subject": "语文" }, { "time": "15:00-17:00", "subject": "数学" }] },
        { "date": "6月8日", "items": [{ "time": "15:00-17:00", "subject": "外语" }] },
        { "date": "6月9日", "items": [{ "time": "上午", "subject": "选考科目" }, { "time": "下午", "subject": "选考科目" }] },
        { "date": "6月10日", "items": [{ "time": "上午", "subject": "选考科目" }] }
      ],
      "notes": ["3+3 模式，等级赋分。"],
      "officialUrl": "http://ea.hainan.gov.cn/"
    }
  ]
}
;

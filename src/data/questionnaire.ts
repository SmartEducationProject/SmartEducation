import { IQuestion } from 'types/question';

const data: IQuestion[] = [
  {
    questionId: 0,
    value: 'Motivation',
    content: '考研动机',
    options: [
      {
        optionId: 1,
        content: '提高学历，有利于更好就业'
      },
      {
        optionId: 2,
        content: '获得更多知识，提高自身文化修养'
      },
      {
        optionId: 3,
        content: '留恋校园生活'
      },
      {
        optionId: 4,
        content: '其他'
      }
    ]
  },
  {
    questionId: 1,
    value: 'solo',
    content: '考研期间是否一个人备考',
    options: [
      {
        optionId: 1,
        content: '自己一个人备考'
      },
      {
        optionId: 2,
        content: '与同学或者研友一起备考'
      }
    ]
  },
  {
    questionId: 2,
    value: 'family_support',
    content: '家人是否支持你考研',
    options: [
      {
        optionId: 1,
        content: '是'
      },
      {
        optionId: 2,
        content: '否'
      }
    ]
  },
  {
    questionId: 3,
    value: 'start_time',
    content: '考研备考开始的时间',
    options: [
      {
        optionId: 1,
        content: '3月之前'
      },
      {
        optionId: 2,
        content: '3月-4月'
      },
      {
        optionId: 3,
        content: '5月-6月'
      },
      {
        optionId: 4,
        content: '7月-8月'
      },
      {
        optionId: 5,
        content: '9月及以后'
      }
    ]
  },
  {
    questionId: 4,
    value: 'daily_start_time',
    content: '每日早上开始学习的时间段',
    options: [
      {
        optionId: 1,
        content: '8:00以前'
      },
      {
        optionId: 2,
        content: '8:00-8:59'
      },
      {
        optionId: 3,
        content: '9:00-9:59'
      },
      {
        optionId: 4,
        content: '10:00-10:59'
      },
      {
        optionId: 5,
        content: '11:00以后'
      }
    ]
  },
  {
    questionId: 5,
    value: 'daily_end_time',
    content: '每日学习结束的时间段',
    options: [
      {
        optionId: 1,
        content: '18:00以前'
      },
      {
        optionId: 2,
        content: '18:00-19:59'
      },
      {
        optionId: 3,
        content: '20:00-21:59'
      },
      {
        optionId: 4,
        content: '22:00以后'
      }
    ]
  },
  {
    questionId: 6,
    value: 'place',
    content: '主要备考场所',
    options: [
      {
        optionId: 1,
        content: '老图'
      },
      {
        optionId: 2,
        content: '数字图书馆'
      },
      {
        optionId: 3,
        content: '教学楼'
      },
      {
        optionId: 4,
        content: '寝室'
      },
      {
        optionId: 5,
        content: '外出租房'
      }
    ]
  },
  {
    questionId: 7,
    content: '数学开始备考的时间段（数学二则概率论选“无”）',
    composition: true,
    subQuestions: [
      {
        questionId: 0,
        value: 'math_start_time',
        content: '高等数学'
      },
      {
        questionId: 1,
        value: 'Linear_Algebra',
        content: '线性代数'
      },
      {
        questionId: 2,
        value: 'Probability_theory',
        content: '概率论'
      }
    ],
    options: [
      {
        optionId: 1,
        content: '3月之前'
      },
      {
        optionId: 2,
        content: '3月-4月'
      },
      {
        optionId: 3,
        content: '5月-6月'
      },
      {
        optionId: 4,
        content: '7月-8月'
      },
      {
        optionId: 5,
        content: '9月及以后'
      },
      {
        optionId: 6,
        content: '无'
      }
    ]
  },
  {
    questionId: 8,
    value: 'math_first_round_time',
    content: '数学一轮复习完成的时间',
    options: [
      {
        optionId: 1,
        content: '6月以前'
      },
      {
        optionId: 2,
        content: '6月'
      },
      {
        optionId: 3,
        content: '7月-8月'
      },
      {
        optionId: 4,
        content: '9月及以后'
      }
    ]
  },
  {
    questionId: 9,
    value: 'math_second_round_time',
    content: '数学二轮复习完成的时间',
    options: [
      {
        optionId: 1,
        content: '无二轮复习'
      },
      {
        optionId: 2,
        content: '7月-8月'
      },
      {
        optionId: 3,
        content: '9月-10月'
      },
      {
        optionId: 4,
        content: '11月及以后'
      }
    ]
  },
  {
    questionId: 10,
    value: 'english_start_time',
    content: '英语开始备考的时间段',
    options: [
      {
        optionId: 1,
        content: '3月以前'
      },
      {
        optionId: 2,
        content: '3月-4月'
      },
      {
        optionId: 3,
        content: '5月-6月'
      },
      {
        optionId: 4,
        content: '7月-8月'
      },
      {
        optionId: 5,
        content: '9月及以后'
      }
    ]
  },
  {
    questionId: 11,
    value: 'english_word_num',
    content: '英语每天背单词的数量',
    options: [
      {
        optionId: 1,
        content: '20-50个'
      },
      {
        optionId: 2,
        content: '50-100个'
      },
      {
        optionId: 3,
        content: '100-200个'
      },
      {
        optionId: 4,
        content: '200个以上'
      }
    ]
  },
  {
    questionId: 12,
    value: 'Politics_start_time',
    content: '政治开始备考的时间段',
    options: [
      {
        optionId: 1,
        content: '5月以前'
      },
      {
        optionId: 2,
        content: '5月-6月'
      },
      {
        optionId: 3,
        content: '7月-8月'
      },
      {
        optionId: 4,
        content: '9月-10月'
      },
      {
        optionId: 5,
        content: '11月及以后'
      }
    ]
  },
  {
    questionId: 13,
    content: '专业课开始备考的时间段',
    composition: true,
    subQuestions: [
      {
        questionId: 0,
        value: 'Specialized_Courses_start_time',
        content: '数据结构'
      },
      {
        questionId: 1,
        value: 'Computer_networks',
        content: '计算机网络'
      },
      {
        questionId: 2,
        value: 'Operating_systems',
        content: '操作系统'
      },
      {
        questionId: 3,
        value: 'Computer_Composition',
        content: '计算机组成原理'
      }
    ],
    options: [
      {
        optionId: 1,
        content: '5月之前'
      },
      {
        optionId: 2,
        content: '5月-6月'
      },
      {
        optionId: 3,
        content: '7月-8月'
      },
      {
        optionId: 4,
        content: '9月-10月'
      },
      {
        optionId: 5,
        content: '11月及以后'
      },
      {
        optionId: 6,
        content: '无'
      }
    ]
  },
  {
    questionId: 14,
    content: '考研数学跟随的老师',
    multiple: 3,
    composition: true,
    subQuestions: [
      {
        questionId: 0,
        value: '',
        content: '高等数学'
      },
      {
        questionId: 1,
        value: 'linear',
        content: '线性代数'
      },
      {
        questionId: 2,
        value: 'Probability',
        content: '概率论'
      }
    ],
    options: [
      {
        optionId: 1,
        value: 'tangjiafeng',
        content: '汤家凤'
      },
      {
        optionId: 2,
        value: 'zhangyu',
        content: '张宇'
      },
      {
        optionId: 3,
        value: 'wuzhongxiang',
        content: '武忠祥'
      },
      {
        optionId: 4,
        value: 'liyongle',
        content: '李永乐'
      },
      {
        optionId: 5,
        value: 'lilin',
        content: '李林'
      },
      {
        optionId: 6,
        value: 'yubinsen',
        content: '余丙森'
      },
      {
        optionId: 7,
        value: 'yangchao',
        content: '杨超'
      },
      {
        optionId: 8,
        value: 'wu',
        content: '无'
      }
    ]
  },
  {
    questionId: 15,
    content: '考研英语跟随的老师',
    multiple: 3,
    composition: true,
    subQuestions: [
      {
        questionId: 0,
        value: 'english',
        content: '英语'
      }
    ],
    options: [
      {
        optionId: 1,
        value: 'hekaiwen',
        content: '何凯文'
      },
      {
        optionId: 2,
        value: 'wangjiangtao',
        content: '王江涛'
      },
      {
        optionId: 3,
        value: 'zhuwei',
        content: '朱伟'
      },
      {
        optionId: 4,
        value: 'tangchi',
        content: '唐迟'
      },
      {
        optionId: 5,
        value: 'tangjing',
        content: '唐静'
      },
      {
        optionId: 6,
        value: 'tianjing',
        content: '田静'
      },
      {
        optionId: 7,
        value: 'liuxiaoyan',
        content: '刘晓燕'
      },
      {
        optionId: 8,
        value: 'other',
        content: '其他'
      }
    ]
  },
  {
    questionId: 16,
    content: '考研政治跟随的老师',
    multiple: 2,
    composition: true,
    subQuestions: [
      {
        questionId: 0,
        value: 'politics',
        content: '政治'
      }
    ],
    options: [
      {
        optionId: 1,
        value: 'xiaoxiurong',
        content: '肖秀荣'
      },
      {
        optionId: 2,
        value: 'tuijie',
        content: '陆寓丰(腿姐)'
      },
      {
        optionId: 3,
        value: 'xutao',
        content: '徐涛'
      },
      {
        optionId: 4,
        value: 'other',
        content: '其他'
      }
    ]
  },
  {
    questionId: 17,
    value: 'noon_time',
    content: '备考期间午休',
    options: [
      {
        optionId: 1,
        content: '图书馆午休'
      },
      {
        optionId: 2,
        content: '教室午休'
      },
      {
        optionId: 3,
        content: '回寝室午休'
      },
      {
        optionId: 4,
        content: '不午休'
      }
    ]
  },
  {
    questionId: 18,
    value: 'exercise_time',
    content: '每周锻炼时长',
    options: [
      {
        optionId: 1,
        content: '2小时以下'
      },
      {
        optionId: 2,
        content: '2-5小时'
      },
      {
        optionId: 3,
        content: '5-10小时'
      },
      {
        optionId: 4,
        content: '10小时以上'
      }
    ]
  }
];

export default data;

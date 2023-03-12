module.exports = {
  title: `joong8812.github.io`,
  description: `최중재(aziel)의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://joong8812.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `joong8812/joong8812.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `최중재`,
    bio: {
      role: `개발자`,
      description: ['사람을 좋아하는', '열정적으로 일하는', '유익을 만드는'],
      thumbnail: 'Jungjae_memoticon.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/joong8812`, // `https://github.com/joong8812`,
      linkedIn: `https://www.linkedin.com/in/joong8812/`, // `https://www.linkedin.com/in/joong8812/`,
      email: `joong8812@gmail.com`, // `joong8812@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.08 ~ present',
        activity: '유섭',
        links: {},
      },
      {
        date: '2022.07 ~ 08',
        activity: '원티드 프리온보딩 - 프론트엔드 5기',
        links: {},
      },
      {
        date: '2022.04 ~ 05',
        activity: 'DeepBrainAI 풀스택 아카데미 3기',
        links: {},
      },
      {
        date: '2021.12 ~ 2022.04',
        activity: '스파르타코딩클럽 AI 웹개발 1기',
        links: {},
      },
      {
        date: '2021.12 ~',
        activity: '개인 블로그 운영',
        links: {
          post: '/TIL/TIL-2021-12/TIL-211213/',
          github: 'https://github.com/joong8812/joong8812.github.io',
          demo: 'https://joong8812.github.io',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '무야호 - 팀프로젝트',
        description:
          '등산에 관심이 있는 모든 이들에게 산림청 선정 대한민국 100대 명산 정보와 등산로, 주변맛집 뿐 아니라 관심있을 산 추천까지 해줍니다. 더 나아가 유저들과 소통할 수 있는 소셜기능도 담아 보았습니다. 스파르타 내배캠 최종프로젝트로 유저 피드백 및 개선 기간을 포함하여 5주간 배운 것들을 최대한 활용하려 했습니다. 팀장으로 팀을 리드했습니다. 해당 프로젝트를 통해 프론트엔드 개발에 관심을 갖게 되었고, 유저와 맞닿는 최전선에서 최고의 경험을 줄 수 있도록 프론트 기술 및 엔지니어링을 학습하고 있습니다.',
        techStack: ['Javascript', 'CSS', 'HTML', 'AWS', 'Python', 'Django'],
        thumbnailUrl: 'mooyaho.png',
        links: {
          post: '/Project/team-project-5',
          github: 'https://github.com/joong8812/mooyaho',
          demo: 'https://www.youtube.com/watch?v=yeTPDyd0Q14',
        },
      },
      {
        title: '미정의 스케치북 - 팀프로젝트',
        description:
          'NST(Neural Style Tranfer) 기술을 사용하여 유저가 올린 이미지에 선택 된 명화의 스타일을 입혀주는 서비스. 자신이 만든 새로운 명화를 저장하고 공유할 수도 있습니다. 주로 프론트를 담당하였고, 해당 프로젝트에서 두 서버(앱<->AI)간 통신을 경험 하였습니다.',
        techStack: [
          'Javascript',
          'CSS',
          'HTML',
          'AWS',
          'Tensorflow',
          'Python',
          'Django',
          'Django Ninja',
        ],
        thumbnailUrl: 'x-sketchbook.png',
        links: {
          post: '/Project/team-project-4',
          github: 'https://github.com/joong8812/project_3team_mijung_sketch_book',
          demo: 'https://www.youtube.com/watch?v=4c4UyY9BV5w',
        },
      },
      {
        title: '설날에 뭐보지? - 팀프로젝트',
        description:
          '2005년 이후 개봉한 약 1600여개의 국내영화를 기반으로 유저가 좋아할 만한 영화를 추천해 줍니다. 네이버 영화 크롤링 및 해당 데이터로 아이템 기반 필터링, 협업 필터링 모델 구현을 해 보았습니다. 또 넷플릭스와 같이 마우스오버시 선택된 이미지가 확장하며 영화 트레일러가 재생되도록 구현해보았습니다.',
        techStack: [
          'Python',
          'Django',
          'Javascript',
          'CSS',
          'HTML',
          'Colab',
          'Scikit-Learn',
          'AWS',
        ],
        thumbnailUrl: 'whatareyou-watching-on-seolnal.png',
        links: {
          post: '/Project/team-project-3',
          github: 'https://github.com/joong8812/3team_netflix_clonecoding_project',
          demo: 'https://youtu.be/uCmfVdF0ozY',
        },
      },
      {
        title: '9k밥 - 팀프로젝트',
        description:
          '9천원 이하의 가성비 맛집 정보를 공유하는 SNS. 인스타그램을 클론한 프로젝트 입니다. 좋아요와 댓글,마이페이지를 구현하였고 자동봇 회원가입 방지를 위해 숫자 인식 Captcha를 구현하였습니다. 팀장으로 팀을 리드 했습니다.',
        techStack: ['Python', 'Flask', 'Javascript', 'CSS', 'HTML', 'AWS', 'Tensorflow', 'AWS'],
        thumbnailUrl: 'gukbab.png',
        links: {
          post: '/Project/team-project-2',
          github: 'https://github.com/joong8812/9kbab',
          demo: 'https://youtu.be/cJlJKmzKxPs',
        },
      },
    ],
  },
};

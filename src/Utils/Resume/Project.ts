type projectType = {
    date: string;
    person : string;
    title : string;
    skillSet : Array<string>;
    description : Array<string>;
    url : string
}

export const MyProject : projectType[] = [
    {
        date: '2020.10 ~ 2021.01',
        title : '개미처렁 공부해서 수능을 작살내자 (개수작)',
        skillSet: [
            "React-Native",
            "React-Navigation",
            "Typescript" ,
            "Nodejs", 
            "MySQL" ,
            "AWS EC2",
        ],
        person : '팀 프로젝트 (2인)',
        description: [
            "초,중,고 학생들을 위한 공부 관리 앱",
            "오늘할일(Todo List), 공부 타이머, 일주일간의 통계 제공",
            "2021.3 ~ 2021.6 총 4개월간 운영 후 서비스 중단"
        ],
        url: 'https://github.com/zkfmapf123/study_front'
    },
    {
        date : "2020.06 ~ 2020.09",
        title : "경동대학교 강의평가 사이트",
        skillSet:["HTML",
        "CSS",
        "Ruby",
        "Javascript",
        "Ruby on Rails",
        "MySQL","AWS EC2","AWS S3"
    ],
        person: '개인 프로젝트',
        description : [
            "경동대학교의 강의평가 및 교수평가를 할 수 있는 커뮤니티 사이트",
            "각 수업 및 교수들의 평가를 진행하여, 학생들로 하여근 질 좋은 수업을 듣게 할 수 있도록 만든 사이트",
            "수업평가, 교수평가, 게시판, 찜목록을 통한 커뮤니티 운영",
            "교수의 반대로 서비스 중단 (2020.09 ~ 2021.02)"
        ],
        url: 'https://github.com/zkfmapf123/ruby'
    },
    {
        date : "2019.03 ~ 2019.06",
        title : "졸업작품 (공모전 Scrapping 사이트)",
        skillSet : [
            "HTML",
            "CSS",
            "Javascript",
            "Pug",
            "Nodejs",
            "MySQL","Ajax",
            "Vanilla JS",
            "Puppeteer"],
        person : "개인 프로젝트",
        description : [
            "공모전 자료들을 특정 시점에 Scrapping하여 공유할 수 있는 커뮤니티",
            "여러 공모전 자료들을 열람할 수 있는 웹사이트",
            "로그인, 댓글 기능, 좋아요, 찜하기, 게시판등의 커뮤니티 기능",
            "특정시점에 Crawling 진행하여 정보를 Scrapping하는 형식으로 제공",
            "Ajax를 통한 비동기 통신을 사용"
        ],
        url : "https://github.com/zkfmapf123/gongmo"
    },
]
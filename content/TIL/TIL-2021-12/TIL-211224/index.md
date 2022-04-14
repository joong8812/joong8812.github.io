---
emoji: 📸
title: 인스타그램 모바일 화면 만들기 - html, css
date: '2021-12-24 21:00:00'
author: 코딩쿠니
tags: TIL html css Project Instagram
categories: TIL PROJECT
---
## 인스타그램 모바일 화면 만들기
### 1. 개요
어제에 이어 오늘도 소셜미디어 클론하기 이다. 더 많은 오브젝트들이 화면에 있어 시간이 꽤 걸렸다.(기한 내에 제출하기 위해 점심도 안 먹고 했다는 건 안 비밀..) 그리고 px를 사용하지 않고 상대적 크기 단위인 %, vh, vw, em, rem 등만 사용해서 레이아웃을 잡아야 했다. (나중에 안 사실이지만 모바일용 페이지라 max-width는 px로 고정해도 된다고 하셨다)

### 2. 구현
1️⃣ 우선 레이아웃을 잡았다. header, content, footer 로 잡았다. content 안에는 내용이 많아 더 쪼개야 했다.   
2️⃣ header와 footer는 position:fixed로 고정을 했다. 안에 content 내용만 스크롤이 된다.   
3️⃣ 예제 화면을 보고 수치를 계속 조정 해가면서 비슷하게 만들었다.   
4️⃣ width 를 %로 잡아 브라우저 크기에 따라 화면도 같이 변화도록 했다.   
5️⃣ 폰트는 구글폰트 '주아체'를 사용했다.   

### 3. 코드
코드줄이 꽤 길어 github 링크를 남기겠다. [instagram-clone](https://github.com/joong8812/personal-projects/tree/main/web/instagram-clone)

### 4. 결과물
![사진](./insta_demon.gif)

## 총평
* 완벽하지 않지만, 비슷하게라도 화면을 구현을 해내서 뿌듯함을 느꼈다.
* 화면 클론 코딩이 css 공부에 도움이 많이 됐다. 앞으로도 종종 화면 클론하는 것도 괜찮을 듯 하다.
* html, css 은근히 재미있다.
* 반응형 웹을 만들기 위해 미디어쿼리 공부가 필요하다.
* 아름다운 css를 위해 html 태그 id, class 명을 이쁘게 잘 지어주고 싶다. (검색과 유지보수가 용이하도록)

___

## 그 외
* 재귀함수 알고리즘 문제([하노이탑](https://www.acmicpc.net/problem/11729), [3의 n승 별찍기](https://www.acmicpc.net/problem/2447))를 어떻게 풀지 접근을 못했다. 해설을 봐도 어렵다. 앞으로도 내가 알고리즘 문제를 잘 풀어낼 수 있을까? 겁이 난다.
* Github gist라는 것을 알게 되어 gist 코드 스니펫을 이 블로그에서 사용 해 보려고 시도했다. Gatsby 모듈을 설치해야 한다([gatsby-remark-embed-gist](https://www.gatsbyjs.com/plugins/gatsby-remark-embed-gist/)). 되긴 하지만 티스토리 처럼 이쁘게 나오질 않는다(줌코딩님 테마랑 뭔가 꼬여서 그런가라는 추측이다). 아쉽다. (내 시간 돌려줘 ㅠ)
* 크리스마스 이브🎄


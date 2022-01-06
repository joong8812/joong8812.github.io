---
emoji: 🙊
title: Today I Learned - 211229
date: '2021-12-29 23:00:00'
author: 코딩쿠니
tags: TIL TeamProject Flask Github
categories: TIL PROJECT CSS FLASK
---

### 1. 뭘 모르겠는데 일단 해보자
모든 프로젝트과정을 `Github`에 담아내고 싶었다. 그래서 한번 더 써보지 않은 `Wiki`라든지 `Milestone`, `Issue`등을 사용 해 보기로 했다. 우선 Wiki에는 우리가 구현 해야 할 기능 리스트를 담은 페이지, 프로젝트 진행 시 어려운 부분 팀 내에서 해결 못할 경우 튜터님께 묻는 질문 리스트 페이지, 그리고 commit 메시지 규칙도 간단히 올려보았다. `Milestone` 에는 대략 적인 큰 틀에서 우리가 해야할 것 들을 적고 하위로 조금은 더 세분화 된 `Issue`(일감)를 등록했다. 나도 이렇게 하는 게 잘 모르겠지만, 최대한 Github이 제공하는 협업 툴로 이번 프로젝트를 진행 해 보고 싶어서 한 번 해보았다. 모두 Github에 익숙 해지면 좋겠다.

### 2. 내 역할 이렇게 하는 거 맞아?
우선 이번 프로젝트의 주 개발업무는 나 외에 나머지 4분에게 담당시켰다. 나는 팀장으로 개발과 협업을 할 수 있는 환경 세팅 위주로 하고, 팀원 분들이 잘 모르고 어려워하는 부분들을 알려주고 있다. 이렇게만 하는 건 나에게 `개발자`로서의 역량을 키우는 데는 조금 부족할 것 같아, 오늘은 튜터님이 주신 자료로 `jwt`, `Jinja2템플릿` 등을 공부하고 써 보았다. 관련 된 내용으로 혹시 팀원분들이 어려워하면 도와 줄 수 있을 것 같다. 그런데 이게 이렇게 하는 게 맞나 라는 생각이 든다. 그러면 내일은 어떨지...?

### 3. css 순서가 중요하다
아래와 같은 순서로 css 참조 링크를 배치하면 default.css 에 작성된 css가 적용될 수 있을까?
```html
<link rel="stylesheet" href="{{ url_for('static', filename='css/default.css') }}">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```
정답은 `X`이다. 정확한 이유인지는 모르겠지만, 아래 `bootstrap` css 파일로 인해 위에 먼저 작성한 css 파일이 먹통이 된다. 여러가지 테스트를 통해 위 2개 위치의 순서를 변경 해 주면 잘 동작한다. 

### 4. Flask - url_for
`Flask` 사용하게 되면 `url_for`라는 것을 사용 할 수 있다. 위에 3번을 예로 들면 `{{url_for('static', filename='css/default.css')}}` 는 경로 `static/css/default.css'를 가리킨다. 경로를 늘어지게 안 써도 되는 장점이 있다!   
출처:<https://flask.palletsprojects.com/en/2.0.x/quickstart/#static-files>

### 총평
* 오늘도 12시간이 후딱 지나간다.
* 팀원분들이 재밌게 프로젝트를 진행하셨으면 좋겠다.
* 나는 지금 잘하고 있는건가?
* 내게 주어진 강의들은 언제 듣지...?
* 내일 새로운 튜터님께 피드백 잘 받고 프로젝트 진행 잘했으면 좋겠다.
* 오래 앉아 있어서 목이 아프다. 눈도 침침해지는 것 같다. 으악.

```toc
```
---
emoji: 🍬
title: 장고(Djnago)는 뭘까?
date: '2022-01-19 21:00:00'
author: 코딩쿠니
tags: TIL DJANGO
categories: TIL DJANGO
---

## 장고(Django)는 뭘까? 🤔
`장고(Django)`는 파이썬 웹 프레임워크 중 하나다. [공식 홈페이지](https://www.djangoproject.com/)를 살펴보면 함축적으로 이를 잘 설명하고 있다.   
> The web framework for perfectionists with deadlines.   
> Django makes it easier to build better web apps more quickly and with less code.   
(발번역중🥲) 마감시간 완벽하게 지키는 이를 위한 웹 프레임워크. `장고(Django)`는 더 적은 코드로 더 빠르고 좋은 웹 어플리케이션을 쉽게 만들어준다.      

지금까지 사용했던 `Flask`(경량 파이썬 웹 프레임워크)보다 더 많은 유틸(기능)들을 제공한다 ex) DB, 로그인, Admin, 패스워드 암호화 등.   
그리고 대형 웹 프로젝트에 사용하기 적합하며, 커뮤니티와 문서가 다른 파이썬 웹프레임워크 보다는 잘 되어 있다.

## 장고(Django)는 MTV패턴을 사용한다
```python
Request(URL)       ->      ->            ->
                      View    Model(ORM)    DB
Response(Template) <-      <-            <-
```
* M (Model)
  * 데이터베이스의 모델(ORM)
  * 저장되고 사용되는 데이터의 형태
* T (Template)
  * 사용자에게 보여지는 부분
  * 화면
* V (View)
  * 실질적으로 프로그램이 동작하는 부분
  * url을 요청하고 응답하는 그 사이에 일어나는 '서비스'들이 존재하는 곳

++ ORM   
Python으로 데이터베이스 클래스 모델을 만들고, 만든 모델로 데이터베이스를 다룰 수 있게 해준다. SQL문을 작성하지 않아도 된다.

## 총평 ☃️
* 눈이 조금 내린 오늘
* 새로운 팀원들을 만났다. 우린 `코딩하긴 했었나요 스쳐지나가는 인연이었나요 함께했던 시간들이 자꾸 삼(3)조` 이다. 푸학ㅋㅋ 스파르타 역사상 가장 긴 조이름을 노려 보려 한다.
* Django를 학습하기 시작했다. 구조가 Flask에 비해 조금 복잡하지만 그 Flask를 해서 인지, 아직까지는 크게 어렵지 않은 것 같다.
* 새로운 팀원들과 Django를 이용해 어떤 어플리케이션을 만들게 될 지 기대가 된다.

```toc
```
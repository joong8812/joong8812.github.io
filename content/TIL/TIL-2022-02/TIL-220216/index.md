---
emoji: 🐡
title: 좋아요 동시성 처리 - Django, F() expressions
date: '2022-02-16 23:59:59'
author: 코딩쿠니
tags: TIL 
categories: TIL DJANGO
---

## [Django] 서로 다른 유저에게 좋아요 카운트를 동시에 받게 된다면?
`좋아요` 버튼을 누를 때 마다 현재 DB에 들어 있는 게시글의 좋아요 수를 불러 온 후 1을 추가하고 다시 저장한다 라고 서비스로직을 만들었다고 해보자. 이 경우, 동시에 서로 다른 유저가 `좋아요`를 누르게 되면 좋아요 카운트가 올바르게 업데이트 되지 않을 수 있다. A가 `좋아요` 카운트를 증가 후 저장하기 전에 B가 `좋아요`를 요청할 경우다. Django의  F() expressions를 사용하면 이를 해결할 수 있다. 해당 표현을 사용하게 되면 실제 데이터를 메모리에 올려 놓은 후 수정하는 것이 아니라 바로 수정할 수 있게 된다.   
```ptyhon
# 1. 기존
article.like_count += 1 

# 2. F 표현 사용
article.like_count = F("like_count") + 1
```
와 같이 코드를 작성하여 동시에 같은 컬럼의 값을 수정하게 되는 것을 순차적으로 하도록 하게 한다.

* 관련 문서
  * https://docs.djangoproject.com/en/4.0/ref/models/expressions/#f-expressions
```toc
```
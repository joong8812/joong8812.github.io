---
emoji: 🥐
title: Today I Learned - 220120
date: '2022-01-20 18:30:00'
author: 코딩쿠니
tags: TIL DJANGO
categories: TIL DJANGO
---

## 장고(Django) Authentication 사용 해 보기
### 1. 세팅 (models.py, setting.py)
Django프로젝트를 처음 만들면 admin 페이지가 이미 구축이 되어 제공되어 진다. 그래서 우리는 `admin계정`을 만든 후 로그인을 하면 해당 페이지를 이용할 수 있다. 여기서 '`admin계정` 을 만들 수 있다?' 그렇다. 이미 DB에 유저를 생성할 수 있는 모델이 있다라는 것이다. 우리는 그 모델의 각 필드와 제약조건을 `클래스 상속`으로 그대로 가져와 새로운 유저 모델을 만들 수 있다. (패스워드 암호화에 대한 코드를 따로 작성할 필요도 없고, 로그인 인증도 쉽게 할 수 있다)
```python
#user/models.py
from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class UserModel(AbstractUser):
    class Meta:
        db_table = "my_user"

    bio = models.CharField(max_length=256, default='') # 제공된 필드 외에 필요한 필드는 추가 작성해줘야 한다
```
프로젝트명과 같은 이름의 앱 폴더 안에 있는 `setting.py` 에 아래의 코드를 추가 해줘야 한다.   
기본 인증과정(AUTH_USER_MODEL)을 user앱에 작성한 UserModel로 사용하겠다는 의미 입니다. (기본적으로 장고(Django)는 `auth_user`룰 사용자 관리 테이블로 지정해 놓음)
```python
...

AUTH_USER_MODEL = 'user.UserModel' # user앱에 내가 만든 UserModel
```

### 2. 활용하기 (views.py)
* 로그인
`auth.authenticate`로 db에 id,password값이 맞는 인증할 수 있다.
`auth.login()`으로 인증정보 생성한다(로그인).
``` python
from django.contrib import auth

...

# 유효한(로그인) 유저 인증 (입력받은 패스워드를 암호화하여 비교할 필요 없음)
me = auth.authenticate(request, username=username, password=password) 
if me is not None:
    auth.login(request, me) # 로그인
    return something  
else:
    return something
```
___
* 유효한(로그인 한) 유저 인지 확인
`request.user.is_authenticated`를 통해서 로그인 유저인지 판단할 수 있다.
```python
user = request.user.is_authenticated
if user: # 유효한 유저
    # do something
else: # 유효하지 않은 유저
    # do something
```
___
* 로그아웃
`@login_required` 어노테이션으로 로그인 한 유저만 아래 함수를 호출 가능하게 한다.   
`auth.logout` 으로 인증정보 없앤다(로그아웃)
```python
from django.contrib.auth.decorators import login_required
from django.contrib import auth

@login_required
def logout(request):
		auth.logout(request) # 인증 되어있는 정보를 없애기
    return something
```
___

관련하여 더 많은 정보는 아래에서 찾아보자!   
[Substituting a custom User model](https://docs.djangoproject.com/en/4.0/topics/auth/customizing/#substituting-a-custom-user-model)   
[Using the Django authentication system](https://docs.djangoproject.com/en/4.0/topics/auth/default/#using-the-django-authentication-system)

## 총평
* 장고(Django)에서 제공한 AbstractUser클래스로 나만의 유저모델을 만들고, Authentication기능을 사용하여 로그인, 로그아웃, 유효한 유저인지 확인하는 기능 등을 쉽게 구현 할 수 있었다.
* 아직은 익숙치 않지만, 친절한(?) 장고(Django)랑 친하게 지냈으면 좋겠다.
```toc
```
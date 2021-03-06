---
emoji: ๐ฅ
title: ์ฅ๊ณ (Django) Authentication ์ฌ์ฉ ํด ๋ณด๊ธฐ
date: '2022-01-20 18:30:00'
author: ์ฝ๋ฉ์ฟ ๋
tags: TIL DJANGO
categories: TIL DJANGO
---

## ์ฅ๊ณ (Django) Authentication ์ฌ์ฉ ํด ๋ณด๊ธฐ
### 1. ์ธํ (models.py, setting.py)
Djangoํ๋ก์ ํธ๋ฅผ ์ฒ์ ๋ง๋ค๋ฉด admin ํ์ด์ง๊ฐ ์ด๋ฏธ ๊ตฌ์ถ์ด ๋์ด ์ ๊ณต๋์ด ์ง๋ค. ๊ทธ๋์ ์ฐ๋ฆฌ๋ `admin๊ณ์ `์ ๋ง๋  ํ ๋ก๊ทธ์ธ์ ํ๋ฉด ํด๋น ํ์ด์ง๋ฅผ ์ด์ฉํ  ์ ์๋ค. ์ฌ๊ธฐ์ '`admin๊ณ์ ` ์ ๋ง๋ค ์ ์๋ค?' ๊ทธ๋ ๋ค. ์ด๋ฏธ DB์ ์ ์ ๋ฅผ ์์ฑํ  ์ ์๋ ๋ชจ๋ธ์ด ์๋ค๋ผ๋ ๊ฒ์ด๋ค. ์ฐ๋ฆฌ๋ ๊ทธ ๋ชจ๋ธ์ ๊ฐ ํ๋์ ์ ์ฝ์กฐ๊ฑด์ `ํด๋์ค ์์`์ผ๋ก ๊ทธ๋๋ก ๊ฐ์ ธ์ ์๋ก์ด ์ ์  ๋ชจ๋ธ์ ๋ง๋ค ์ ์๋ค. (ํจ์ค์๋ ์ํธํ์ ๋ํ ์ฝ๋๋ฅผ ๋ฐ๋ก ์์ฑํ  ํ์๋ ์๊ณ , ๋ก๊ทธ์ธ ์ธ์ฆ๋ ์ฝ๊ฒ ํ  ์ ์๋ค)
```python
#user/models.py
from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class UserModel(AbstractUser):
    class Meta:
        db_table = "my_user"

    bio = models.CharField(max_length=256, default='') # ์ ๊ณต๋ ํ๋ ์ธ์ ํ์ํ ํ๋๋ ์ถ๊ฐ ์์ฑํด์ค์ผ ํ๋ค
```
ํ๋ก์ ํธ๋ช๊ณผ ๊ฐ์ ์ด๋ฆ์ ์ฑ ํด๋ ์์ ์๋ `setting.py` ์ ์๋์ ์ฝ๋๋ฅผ ์ถ๊ฐ ํด์ค์ผ ํ๋ค.   
๊ธฐ๋ณธ ์ธ์ฆ๊ณผ์ (AUTH_USER_MODEL)์ user์ฑ์ ์์ฑํ UserModel๋ก ์ฌ์ฉํ๊ฒ ๋ค๋ ์๋ฏธ ์๋๋ค. (๊ธฐ๋ณธ์ ์ผ๋ก ์ฅ๊ณ (Django)๋ `auth_user`๋ฃฐ ์ฌ์ฉ์ ๊ด๋ฆฌ ํ์ด๋ธ๋ก ์ง์ ํด ๋์)
```python
...

AUTH_USER_MODEL = 'user.UserModel' # user์ฑ์ ๋ด๊ฐ ๋ง๋  UserModel
```

### 2. ํ์ฉํ๊ธฐ (views.py)
* ๋ก๊ทธ์ธ
`auth.authenticate`๋ก db์ id,password๊ฐ์ด ๋ง๋ ์ธ์ฆํ  ์ ์๋ค.
`auth.login()`์ผ๋ก ์ธ์ฆ์ ๋ณด ์์ฑํ๋ค(๋ก๊ทธ์ธ).
``` python
from django.contrib import auth

...

# ์ ํจํ(๋ก๊ทธ์ธ) ์ ์  ์ธ์ฆ (์๋ ฅ๋ฐ์ ํจ์ค์๋๋ฅผ ์ํธํํ์ฌ ๋น๊ตํ  ํ์ ์์)
me = auth.authenticate(request, username=username, password=password) 
if me is not None:
    auth.login(request, me) # ๋ก๊ทธ์ธ
    return something  
else:
    return something
```
___
* ์ ํจํ(๋ก๊ทธ์ธ ํ) ์ ์  ์ธ์ง ํ์ธ
`request.user.is_authenticated`๋ฅผ ํตํด์ ๋ก๊ทธ์ธ ์ ์ ์ธ์ง ํ๋จํ  ์ ์๋ค.
```python
user = request.user.is_authenticated
if user: # ์ ํจํ ์ ์ 
    # do something
else: # ์ ํจํ์ง ์์ ์ ์ 
    # do something
```
___
* ๋ก๊ทธ์์
`@login_required` ์ด๋ธํ์ด์์ผ๋ก ๋ก๊ทธ์ธ ํ ์ ์ ๋ง ์๋ ํจ์๋ฅผ ํธ์ถ ๊ฐ๋ฅํ๊ฒ ํ๋ค.   
`auth.logout` ์ผ๋ก ์ธ์ฆ์ ๋ณด ์์ค๋ค(๋ก๊ทธ์์)
```python
from django.contrib.auth.decorators import login_required
from django.contrib import auth

@login_required
def logout(request):
		auth.logout(request) # ์ธ์ฆ ๋์ด์๋ ์ ๋ณด๋ฅผ ์์ ๊ธฐ
    return something
```
___

๊ด๋ จํ์ฌ ๋ ๋ง์ ์ ๋ณด๋ ์๋์์ ์ฐพ์๋ณด์!   
[Substituting a custom User model](https://docs.djangoproject.com/en/4.0/topics/auth/customizing/#substituting-a-custom-user-model)   
[Using the Django authentication system](https://docs.djangoproject.com/en/4.0/topics/auth/default/#using-the-django-authentication-system)

## ์ดํ
* ์ฅ๊ณ (Django)์์ ์ ๊ณตํ AbstractUserํด๋์ค๋ก ๋๋ง์ ์ ์ ๋ชจ๋ธ์ ๋ง๋ค๊ณ , Authentication๊ธฐ๋ฅ์ ์ฌ์ฉํ์ฌ ๋ก๊ทธ์ธ, ๋ก๊ทธ์์, ์ ํจํ ์ ์ ์ธ์ง ํ์ธํ๋ ๊ธฐ๋ฅ ๋ฑ์ ์ฝ๊ฒ ๊ตฌํ ํ  ์ ์์๋ค.
* ์์ง์ ์ต์์น ์์ง๋ง, ์น์ ํ(?) ์ฅ๊ณ (Django)๋ ์นํ๊ฒ ์ง๋์ผ๋ฉด ์ข๊ฒ ๋ค.
```toc
```
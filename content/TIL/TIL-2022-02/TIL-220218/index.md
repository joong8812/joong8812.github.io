---
emoji: ๐ฆ
title: ์ค๋ ์๊ฒ ๋ Django ๋ฏธ์ธ์ ๋ณด - Render, Redirect, @login_required
date: '2022-02-18 22:00:59'
author: ์ฝ๋ฉ์ฟ ๋
tags: TIL Django
categories: TIL DJANGO
---

## 1. Render์ Redirect์ ์ฐจ์ด
Django view์์ return์ ํ  ๋ render๋ก ํ๊ฑฐ๋ redirect ๋ก ํฉ๋๋ค. ์ด ๋์ ์ฐจ์ด๊ฐ ๋ฌด์์ผ๊น์? 
* render
  * `return render(requeset, 'user/signup.html')`   
  * render๋ ์์ ๊ฐ์ด templates์ ์๋ html์ ๋ณด์ฌ์ค ๋ ์๋๋ค. ์ด ๋, **url์ ๋ณ๊ฒฝ๋์ง ์์ต๋๋ค.**

* redirect
  * `return redirect('index')`   
  * redirect๋ ์ฐ๋ฆฌ๊ฐ ์ ํด๋์ url๋ก ๋ฆฌ๋ค์ด๋ ํธ ์ํต๋๋ค. ์ด ๋, **url์ด ๋ณ๊ฒฝ ๋ฉ๋๋ค.**

## 2. @login_required
Django view์์ ํจ์ ์์ `@login_required`๋ฅผ ์ ์ด์ฃผ๋ฉด `๋ก๊ทธ์ธ์ด ๋ ์ ์ `์๊ฒ๋ง ์์ฒญ์ ๋ฐ์ view์ ํจ์๋ฅผ ํ๊ฒ ํ  ์๊ฐ ์์ต๋๋ค. ๊ทธ๋ ๋ค๋ฉด `๋ก๊ทธ์ธ ๋์ง ์์ ์ ์ `์๊ฒ ์์ฒญ์ ๋ฐ์์ ๋๋ ์ด๋ป๊ฒ ์๋ต์ ํด์ฃผ๋ฉด ์ข์๊น์? ์ค์ ๋ url๋ก ๋ฆฌ๋ค์ด๋ ํธ ํด์ค ์๊ฐ ์์ต๋๋ค. (๋ก๊ทธ์ธ ํ์ด์ง๋ ๋๋ฉ ํ์ด์ง๋ก ๋ณด๋ด๋ฉด ์ข์ ๊ฒ ๊ฐ์ต๋๋ค) ๋ฐฉ๋ฒ์ ์๋์ ๊ฐ์ต๋๋ค.
```python
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect

@login_required(login_url='/')
def new(request):
    if request.method == 'POST':
        return redirect('a')
    else:
        return render(request, 'b/c.html')
```
@login_required ๋ฐ์ฝ๋ ์ดํฐ ๋ค์ `login_url`๋ก ๋ก๊ทธ์ธ ๋์ง ์์ ์ ์ ๋ฅผ ๋ฆฌ๋ค์ด๋ ํธ ์ํฌ ์ ์์ต๋๋ค.
* ์ฐธ๊ณ 
  * https://docs.djangoproject.com/en/4.0/topics/auth/default/#the-login-required-decorator
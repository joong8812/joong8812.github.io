---
emoji: 🦀
title: 오늘 알게 된 Django 미세정보 - Render, Redirect, @login_required
date: '2022-02-18 22:00:59'
author: 최중재(aziel)
tags: TIL Django
categories: TIL DJANGO
---

## 1. Render와 Redirect의 차이

Django view에서 return을 할 때 render로 하거나 redirect 로 합니다. 이 둘의 차이가 무엇일까요?

- render

  - `return render(requeset, 'user/signup.html')`
  - render는 위와 같이 templates에 있는 html을 보여줄 때 입니다. 이 때, **url은 변경되지 않습니다.**

- redirect
  - `return redirect('index')`
  - redirect는 우리가 정해놓은 url로 리다이렉트 시킵니다. 이 때, **url이 변경 됩니다.**

## 2. @login_required

Django view에서 함수 위에 `@login_required`를 적어주면 `로그인이 된 유저`에게만 요청을 받아 view의 함수를 타게 할 수가 있습니다. 그렇다면 `로그인 되지 않은 유저`에게 요청을 받았을 때는 어떻게 응답을 해주면 좋을까요? 설정된 url로 리다이렉트 해줄 수가 있습니다. (로그인 페이지나 랜딩 페이지로 보내면 좋을 것 같습니다) 방법은 아래와 같습니다.

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

@login_required 데코레이터 뒤에 `login_url`로 로그인 되지 않은 유저를 리다이렉트 시킬 수 있습니다.

- 참고
  - https://docs.djangoproject.com/en/4.0/topics/auth/default/#the-login-required-decorator

---
emoji: 🙌
title: VScode에 Django 테스트 환경 구축하기
date: '2022-02-11 23:59:59'
author: 코딩쿠니
tags: TIL 
categories: BLOG 
---

## Pycharm도 되는데 VScode는 안되나요?
오늘 수업시간에 Django에서 테스트코드를 작성하고 명령어 `$python manage.py test` 로 테스트 하는 법을 배웠다. 그리고 Pycharm에서 간단하게 설정 몇개를 하더니 단위(함수)별로 버튼 하나로 테스트와 디버깅이 가능한 것을 보았다. 내가 사용하고 있는 VScode에서도 동일한 방법으로 테스트를 하고 싶었다. 몇시간에 걸친 혈투 끝에 해답을 찾았다.

## VScode에서 Django 단위 테스트 해보자
### 환경 설정 ⚙️
1. vscode 왼쪽 탭에 플라스크 아이콘(Testing)을 누른다
2. 그리고 `Configure Python Tests` 버튼을 누른다 
![환경설정1](setting1.png)   
3. `unittest`를 선택한다. (테스트 코드가 uniitest 방식으로 작성되어 있다)
![환경설정2](setting2.png)   
4. 테스트 파일이 있는 경로를 설정 한다. 여기서는 Root(.)으로 하겠다
![환경설정3](setting3.png)   
5. 테스트 파일명의 형식을 선택한다. 여기서는 `test*.py`를 선택하겠다. 테스트파일명은 test_view.py 이다
![환경설정4](setting4.png)   
6. 위와 같이 설정파일 내용 선택을 마치면 `.vscode/settings.json` 파일이 생성되고 2번과 같이 내용이 작성된다
![환경설정5](setting5.png)   
7. `{myapp}/tests/__init__.py` 에 2번 내용을 작성한다
![환경설정6](setting6.png)
```python
# 코드스니펫 '딸깍'
from django import setup
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sparta.settings")
setup()
```      
8. `{myapp}/settings.py` 에 ALLOWED_HOSTS에 'testserver' 를 넣는다 ('*' all을 넣어도 괜찮다)
![환경설정7](setting7.png)

### 테스트 ⚖️
1. 좌측은 아까 플라스크(testing) 버튼을 누르면 보이는 창, 우측은 테스트코드.
![테스트1](test1.png)   
2. 테스트코드 라인 5번째 줄에 보이는 초록색 재생 버튼을 누르면 해당 함수 안에 내용만 테스트하고 결과를 보여준다    
테스트 내용: 요청이 잘 되었는지(200), 응답값이 4가 맞는지 테스트 해본다
![테스트2-1](test2-1.png)   
2-1. 실행결과: 테스트 통과!
![테스트2-2](test2-2.png)   
3. 응답값을 변경해서 테스트 해본다
![테스트3-1](test3-1.png)   
3-1. 에러 발생
![테스트3-2](test3-2.png)   
3-2 에러 발생 이유 : 응답값(4)와 테스트값(5)이 같지 않다
![테스트3-3](test3-3.png)

### 디버그 🪲
1. 초록색 재생 버튼에서 우측 클릭 후 `Debug Test`를 누른다
![디버그1](debug1.png)   
 2. breakpoint를 찍어둔 7번째 줄에 걸리고 좌측 창에서 디버그 내용을 확인할 수 있다.
![디버그2](debug2.png)

### 참고 📕
1. [(Youtube)Enable Unittest for Django Projects in VSCode](https://www.youtube.com/watch?v=7RaPq2BnPCI)
2. [(Stackoverflow)400 Bad Request While Using 'django.test.client'](https://stackoverflow.com/questions/28521949/400-bad-request-while-using-django-test-client)
3. [(Django docs)Testing tools](https://docs.djangoproject.com/en/4.0/topics/testing/tools/)
4. [(VScode docs)Python testing in Visual Studio Code](https://vscode-westeu.azurewebsites.net/docs/python/testing)

### 마무리
명령어로도 테스트가 가능하지만, 위에 세팅으로 VScode에서도 Django테스트를 더 편하고 강력하게 해보자!

```toc
```
---
emoji: 🐳
title: Python Generator
date: '2022-02-17 22:30:59'
author: 최중재(aziel)
tags: TIL Python
categories: TIL PYTHON
---

## 파이썬 Generator의 우아함

함수 안에 local 변수들은 그 해당 함수가 호출이 되고 종료가 되면 그 값들이 다 사라지게 된다. 그러나 우리는 가끔 함수 내용을 거치고도 그 값을 계속 유지하고 싶을 때가 있다. 그래서 함수 밖에 변수를 선언하여 그 값을 유지하기도 한다. 이 방법은 그 함수를 호출하는 쪽에서 변수를 관리해야 한다.  
아래 행운권 추첨 예제가 있는데, 0을 뽑으면 꽝이다. 그런데 2번 연속 꽝이면 그 이후에는 무조건 0이 아닌 값을 뽑게 만드는 행운권 추첨이다. 가장 최근에 뽑은 숫자를 관리하기 위해서 `last_numbers`변수로 함수 호출 밖에서 관리를 해주고 있다.

```python
from collections import deque
import random

NUMBERS = (0, 1, 2, 3, 4)
NUMBERS_WITHOUT_ZERO = (1, 2, 3, 4)

def lucky_draw(last_numbers):
    picked = random.choice(NUMBERS)
    if picked == 0 and last_numbers.count(500) == 2:
        picked = random.choice(NUMBERS_WITHOUT_ZERO)  # 3연속 0 금지!
    last_numbers.append(picked)
    return picked

# client - lucky_draw()를 호출하는 코드
last_numbers = deque(maxlen=2)
while True:
    picked = lucky_draw(last_numbers)
    print(picked)
```

---

조금 더 우아한 방법으로 Generator를 사용해보도록 하자. 이 방법을 쓰게 되면 함수 실행을 잠시 멈추었다가(함수 안 변수들의 값이 그대로 유지) 다시 실행 할 수 있게 된다. 아래 코드를 보자.

```python
from collections import deque
import random

NUMBERS = (0, 1, 2, 3, 4)
NUMBERS_WITHOUT_ZERO = (1, 2, 3, 4)

def lucky_draw_gen():
    last_numbers = deque(maxlen=2)
    while True:
        picked = random.choice(NUMBERS)
        if picked == 0 and last_numbers.count(500) == 2:
            picked = random.choice(NUMBERS_WITHOUT_ZERO)  # 3연속 0 금지!
        last_numbers.append(picked)
        yield picked

# client
for draw in luck_draw_gen():
    print(draw)
```

`yield`가 한 번이라도 함수 안에서 사용되면 generator 함수라고 할 수 있다. generator의 `__next__()` 함수를 실행하면 함수 본문이 실행 되고 `yield`를 만나면 일시정지가 된다. 위 코드는 for문을 통해서 luck_draw_gen의 `__next__()` 함수를 실행시켜 함수가 실행되고 내부 `yield`로 인해 잠시 중지 하고 뽑은 숫자를 print하는 코드이다. 이렇게 되면 `last_numbers` 변수를 처음에 봤던 코드와 달리 함수 밖에서 관리해 줄 필요가 없어진다.

### 공식문서

pep 255 simple generator: https://www.python.org/dev/peps/pep-0255/

```toc

```

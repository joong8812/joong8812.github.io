---
emoji: ๐ณ
title: Python Generator
date: '2022-02-17 22:30:59'
author: ์ฝ๋ฉ์ฟ ๋
tags: TIL Python
categories: TIL PYTHON
---

## ํ์ด์ฌ Generator์ ์ฐ์ํจ
ํจ์ ์์ local ๋ณ์๋ค์ ๊ทธ ํด๋น ํจ์๊ฐ ํธ์ถ์ด ๋๊ณ  ์ข๋ฃ๊ฐ ๋๋ฉด ๊ทธ ๊ฐ๋ค์ด ๋ค ์ฌ๋ผ์ง๊ฒ ๋๋ค. ๊ทธ๋ฌ๋ ์ฐ๋ฆฌ๋ ๊ฐ๋ ํจ์ ๋ด์ฉ์ ๊ฑฐ์น๊ณ ๋ ๊ทธ ๊ฐ์ ๊ณ์ ์ ์งํ๊ณ  ์ถ์ ๋๊ฐ ์๋ค. ๊ทธ๋์ ํจ์ ๋ฐ์ ๋ณ์๋ฅผ ์ ์ธํ์ฌ ๊ทธ ๊ฐ์ ์ ์งํ๊ธฐ๋ ํ๋ค. ์ด ๋ฐฉ๋ฒ์ ๊ทธ ํจ์๋ฅผ ํธ์ถํ๋ ์ชฝ์์ ๋ณ์๋ฅผ ๊ด๋ฆฌํด์ผ ํ๋ค.   
์๋ ํ์ด๊ถ ์ถ์ฒจ ์์ ๊ฐ ์๋๋ฐ, 0์ ๋ฝ์ผ๋ฉด ๊ฝ์ด๋ค. ๊ทธ๋ฐ๋ฐ 2๋ฒ ์ฐ์ ๊ฝ์ด๋ฉด ๊ทธ ์ดํ์๋ ๋ฌด์กฐ๊ฑด 0์ด ์๋ ๊ฐ์ ๋ฝ๊ฒ ๋ง๋๋ ํ์ด๊ถ ์ถ์ฒจ์ด๋ค. ๊ฐ์ฅ ์ต๊ทผ์ ๋ฝ์ ์ซ์๋ฅผ ๊ด๋ฆฌํ๊ธฐ ์ํด์ `last_numbers`๋ณ์๋ก ํจ์ ํธ์ถ ๋ฐ์์ ๊ด๋ฆฌ๋ฅผ ํด์ฃผ๊ณ  ์๋ค.
```python
from collections import deque
import random

NUMBERS = (0, 1, 2, 3, 4)
NUMBERS_WITHOUT_ZERO = (1, 2, 3, 4)

def lucky_draw(last_numbers):
    picked = random.choice(NUMBERS)
    if picked == 0 and last_numbers.count(500) == 2:
        picked = random.choice(NUMBERS_WITHOUT_ZERO)  # 3์ฐ์ 0 ๊ธ์ง!
    last_numbers.append(picked)
    return picked

# client - lucky_draw()๋ฅผ ํธ์ถํ๋ ์ฝ๋ 
last_numbers = deque(maxlen=2)
while True:
    picked = lucky_draw(last_numbers)
    print(picked)
```
___
์กฐ๊ธ ๋ ์ฐ์ํ ๋ฐฉ๋ฒ์ผ๋ก Generator๋ฅผ ์ฌ์ฉํด๋ณด๋๋ก ํ์. ์ด ๋ฐฉ๋ฒ์ ์ฐ๊ฒ ๋๋ฉด ํจ์ ์คํ์ ์ ์ ๋ฉ์ถ์๋ค๊ฐ(ํจ์ ์ ๋ณ์๋ค์ ๊ฐ์ด ๊ทธ๋๋ก ์ ์ง) ๋ค์ ์คํ ํ  ์ ์๊ฒ ๋๋ค. ์๋ ์ฝ๋๋ฅผ ๋ณด์.
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
            picked = random.choice(NUMBERS_WITHOUT_ZERO)  # 3์ฐ์ 0 ๊ธ์ง!
        last_numbers.append(picked)
        yield picked

# client 
for draw in luck_draw_gen():
    print(draw)
```
`yield`๊ฐ ํ ๋ฒ์ด๋ผ๋ ํจ์ ์์์ ์ฌ์ฉ๋๋ฉด generator ํจ์๋ผ๊ณ  ํ  ์ ์๋ค. generator์ `__next__()` ํจ์๋ฅผ ์คํํ๋ฉด ํจ์ ๋ณธ๋ฌธ์ด ์คํ ๋๊ณ  `yield`๋ฅผ ๋ง๋๋ฉด ์ผ์์ ์ง๊ฐ ๋๋ค. ์ ์ฝ๋๋ for๋ฌธ์ ํตํด์ luck_draw_gen์ `__next__()` ํจ์๋ฅผ ์คํ์์ผ ํจ์๊ฐ ์คํ๋๊ณ  ๋ด๋ถ `yield`๋ก ์ธํด ์ ์ ์ค์ง ํ๊ณ  ๋ฝ์ ์ซ์๋ฅผ printํ๋ ์ฝ๋์ด๋ค. ์ด๋ ๊ฒ ๋๋ฉด `last_numbers` ๋ณ์๋ฅผ ์ฒ์์ ๋ดค๋ ์ฝ๋์ ๋ฌ๋ฆฌ ํจ์ ๋ฐ์์ ๊ด๋ฆฌํด ์ค ํ์๊ฐ ์์ด์ง๋ค.

### ๊ณต์๋ฌธ์
pep 255 simple generator: https://www.python.org/dev/peps/pep-0255/
```toc
```
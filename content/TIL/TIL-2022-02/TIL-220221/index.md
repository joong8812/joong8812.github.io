---
emoji: ๐ฆ
title: (TIL) ํ๊ฒฝ์ค์  ํ๋ค๊ฐ ์๊ฐ ๋ค ๊ฐ๋ค - ์๊ฐ
date: '2022-02-21 23:59:59'
author: ์ฝ๋ฉ์ฟ ๋
tags: TIL Django NST ์คํ๋ฅดํ์ฝ๋ฉํด๋ฝ
categories: TIL 
---

## ํ๊ฒฝ์ค์  ํ๋ค๊ฐ ์๊ฐ ๋ค ๊ฐ๋ค
์ค๋ ์ค์  ๊ฐ์์์ `NST(Neural Style Transfer)`๋ฅผ ์ฅ๊ณ ์์ ์ด๋ป๊ฒ ๋ถ์ผ ์ ์๋ ๋ฐฐ์ ๋ค. ๋ชจ๋ธ ์์ฒด๋ `Tensorflow_hub`์์ ์ฌ์ฉํ๊ณ  ์ฐ๋ฆฌ๋ ์๋ ฅ๊ฐ(์ด๋ฏธ์ง)์ ์ ๊ฐ๊ณต๋ง ํด์ฃผ๋ฉด ๋๋ค. `Django Ninja`๋ฅผ ์ฌ์ฉํ์ฌ API์๋ฒ๋ ๋๋ฑ ๋ง๋ค์๋๋ฐ ์ด๋ฅผ `EB(AWS ElasticBeanstalk)`์ ์ฌ๋ฆฌ๋ ๊ฒ์ ์ฝ์ง ์์๋ค. eb-cli๋ฅผ ํตํด ๋ฐฐํฌ ํ๋ ค ํ๋๋ฐ ์ด๊ฒ ์ฝ์ง ์์๋ค. ์ค์น๋ฅผ ํ๋ฉด virtualenv ์๋ฌ๊ฐ ๋ฌ๊ณ , ์ ์ค์นํ๋๋ eb-cli์์ ์ฌ๋ฆด ๋ environment์๋ฌ๊ฐ ๋ฌ๋ค. ์ฒ์ ๋ฌธ์ ๋ ์๋ฌ๋ฉ์์ง๋๋ก virtualenv ์ค์นํด์ ํด๊ฒฐํ๋ค. ๊ทธ๋ฐ๋ฐ 2๋ฒ์งธ๋ aws ์ ์ฑ๊ด๋ จ ๋ ๊ฒ์ด์๋๋ฐ, ์๋ฌ๋ฉ์์ง๋ฅผ ๊ตฌ๊ธ๋งํด๋ ์ฝ๊ฒ ํด๊ฒฐํ๊ธฐ๊ฐ ์ด๋ ค์ ๋ค. ๊ฒฐ๋ก ์ eb-cli ์ค์ ๋ IAM์ด eb-cli๋ก ๋ฐฐํฌํ ์ ์๋ ๊ถํ์ด ์์๋ ๊ฒ ๊ฐ๋ค. ๊ทธ๋์ ๋๋ ์๋ก ๋ชจ๋  ๊ถํ์ ๊ฐ์ง IAM์ ๋ง๋ค๊ณ  eb-cli์ ์ค์ ํด์ฃผ๋ ์ ๋๋ค. ๊ธ๋ก ์์ฑํ๋ฉด ๋ช์ ์๋์ง๋ง, ์ ๊ฑธ๋ก ์ด์  ์คํ๋ฅผ ๋ค ๋ณด๋๋ค. ํ์. ๊ทธ๋๋ ๋คํ์ธ๊ฑด ์ด๊ฒ์ ํ๋ ๊ณผ์ ์์ AWS ์ ์ฑ๊ณผ eb-cli ์ค์  ๋ฑ์ ์๊ฒ๋์ด์ ํจ๊ป ๊ณต๋ถํ๋ ํ ์บ ํผ๋ถ์ ๋์ธ ์ ์์๋ค. ์ด๊ฒ์ ๋ฟ๋ฏํ ๋ถ๋ถ์ด๋ค. `๋ฐฐ์์ ๋จ์ฃผ์~~`

## ์คํ๋ฅดํ ๋ด๋ฐฐ์บ (๋ด์ผ๋ฐฐ์์บ ํ) MM(Mingle Monday)
์ค๋ ์คํ๋ฅดํ ๋ด๋ฐฐ์บ  ์ด์์ง์์ ์ด๋ฒคํธ๋ฅผ ์ด์ด์ฃผ์๋ค. ํธ์์  ์ํ๊ถ์ ์ค์ ๋จน๊ณ  ์ถ์ ๋ค๊ณผ๋ฅผ ๋ฌด๋ ค ๊ณต์ง๋ก ์ด ์ ์์๊ณ  ์ด๋ฒคํธ ๋ด๋ด ์ฌ๋ฐ๊ฒ ๋จน์ผ๋ฉด์ ํ  ์ ์์๋ค. `๊ฒ๋ํ์ด`์์ ์ฌ๋ฌ ๋ฌธ์ ๋ ํ๊ณ  ๋ฌ๋ฆฌ๊ธฐ ์ํฉ๋ ํ๊ณ  1์๊ฐ ์ ๋ ์ฌ๋ฐ๋ ์๊ฐ์ ๋ณด๋๋ค. ๋ฌธ์  ์ ํผ ์ฌ๋๋ค์ ์ ๋ฌผ๋ ์คฌ๋ค. (๋๋ ํ ๋ฌธ์ ๋ ๋ชป ํ์๋ค ใใ). ๊ณต๋ถํ๋๋ผ ๋ค๋ค ํ๋ค๊ณ  ์ง์ณ์์ํ๋ฐ ์ด๋ฐ ์๊ฐ์ด ๋ง๋ จ๋์ ๊ธฐ๋ถ์ ํ๋ ๋๊ณ  ์ข์๋ ๊ฒ ๊ฐ๋ค. ๋ด์ผ๋ถํฐ ์๋ก์ด ํํ๋ก์ ํธ ์ด์ฌํ ํด์ผ์ง ์์!   

![๋ฌ๋ฆฌ๊ธฐ](./run-together.png)
๊ณ์ฃผ ๋ฌ๋ฆฌ๊ธฐ ํ ์ฅ๋ฉด ์ฐฐ์นต๐ธ ๋ด๊ฐ ์ฐ๋ฆฌ ์กฐ ์ฒซ๋ฒ์งธ ์ฃผ์ ์๋ค. ์๋ถ๋ด๐ฅฒ (๊ฒฐ๊ณผ๋ ๋ค์์ 2๋ฒ์งธ?? ใใ)
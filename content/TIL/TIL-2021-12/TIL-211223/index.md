---
emoji: ๐ฃ
title: ์นด์นด์คํก ํ๋กํ ํด๋ก ํ๊ธฐ - html, css
date: '2021-12-23 21:00:00'
author: ์ฝ๋ฉ์ฟ ๋
tags: TIL html css Project KakaoTalk
categories: TIL PROJECT
---

## ์นด์นด์คํก ํ๋กํ ํด๋ก ํ๊ธฐ
### 1. ๊ฐ์
๋ํ๋ฏผ๊ตญ์์ ๊ฐ์ฅ ๋ง์ด ์ฌ์ฉํ๋ ๋ฉ์ ์ ๋ ๋ฌด์์ผ๊น? ๋๋ `์นด์นด์คํก` ์ด๋ผ ์๊ฐํ๋ค. ์น๊ตฌ ๋ชฉ๋ก์์ ์น๊ตฌ๋ค์ ๋๋ฅด๋ฉด `ํ๋กํ ์ ๋ณด`๋ฅผ ๋ณผ ์๊ฐ ์๋ค. ์ค๋์ ๊ทธ ํ์ด์ง๋ฅผ html๊ณผ css๋ฅผ ๊ฐ์ง๊ณ  ๊ทธ๋๋ก ๊ตฌํ ํด ๋ณด๋ ์๊ฐ์ ๊ฐ์ก๋ค.

### 2. ๊ตฌํ
1๏ธโฃ ์ฒ์ ํด๋ก  ํ๋ผ๋ ์ด๋ฏธ์ง๋ฅผ ๋ณด์์ ๋ ํฌ๊ฒ ์ธ ๋ถ๋ถ์ผ๋ก ๋๋์ด์ผ๊ฒ ๋ค ์๊ฐํ๋ค. ์๋จ๋ถ(์ํ๊ธ), ์ค๊ฐ๋ถ(ํ๋กํ์ฌ์ง ๋ฐ ์ด๋ฆ), ํ๋จ๋ถ(3๊ฐ์ ๋ฒํผ) ์ด๋ ๊ฒ ๋ง์ด๋ค.   
2๏ธโฃ 1๋ฒ์์ ์ธ๊ธํ ์ธ div๋ฅผ ํ div์ ๋ด์ display:flex๋ก ์ธ๋ก๋ก ์ ๋ ฌ ์์ผฐ๋ค. ๊ทธ ์ค ์ค๊ฐ๋ถ(ํ๋กํ ์ฌ์ง ๋ฐ ์ด๋ฆ) ๋ถ๋ถ์ ์,์๋ ์ฌ์ด์ ๊ฒน์ณ์ ์์ด์ผ ํ๊ธฐ์, position:absolute๋ฅผ ์ฌ์ฉํ๋ค.   
3๏ธโฃ ์๋จ๋ถ ์์ ํ์ ์ (๋ฌผ์ฒด)์ button์ผ๋ก ๊ตฌํํ๋ค. (ํํฐ๋์ ํตํด hrํ๊ทธ ์๋ค๋ ๊ฑธ ๋์ค์ ์์๋ค.)    
4๏ธโฃ ํ๋จ๋ถ ๋ฒํผ 3๊ฐ ์ญ์ display:flex๋ก ๊ฐ๋ก๋ก ์ ๋ ฌ   
5๏ธโฃ (์ถ๊ฐ์กฐ๊ฑด) em, rem, % ๋ฑ ์๋์  ์์น๋ ์ฌ์ฉ ๋ถ๊ฐ, ์ค์ง px๋ก๋ง ๊ตฌํํ  ๊ฒ   


### 3. ์ฝ๋
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@700&family=Jua&family=Song+Myung&display=swap" rel="stylesheet">

    <title>์นด์นด์ค ํ๋กํ</title>
    <style>
        * {
            font-family: 'Jua', sans-serif;
        }
        .whole-body{
            width: 480px;
            height: 800px;

            background-color: aquamarine;

            border: 1px solid rgb(206,206,206);

            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .profile-top{
            height: 460px;
            position: static;
            text-align: center;
            background-color: rgb(255, 155, 157);
        }
        .gray-box{
            background-color: rgb(208, 180, 180);
            border-radius: 10px;
            border: none;
            width:30px;
        }
        .profile-top > div {
            margin-top: 150px;
            color: white;
            font-weight: bold;
            font-size: 20px;
        }
        .profile-center{
            left: 165px;
            margin-top: 210px;
            position: absolute;
            text-align: center;
            font-weight: bold;
            font-size: 20px;
        }
        .profile-center > img {
            width: 150px;
            height: 150px;
            border-radius: 100px;
        }
        .profile-bottom{
            height: 340px;
            background-color: white;
        }
        .profile-bottom > div{
            margin-top: 200px;

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

        }
        .chat-myself {
            font-size: 13px;
            letter-spacing: -1px;

            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .chat-image{
            background: url("chat_myself.png") no-repeat;
            background-size: 50px 50px;
            border: none;
            width: 50px;
            height: 50px;
            cursor: pointer;
            margin-bottom: 13px;
        }
        .manage-myprofile{
            font-size: 13px;
            letter-spacing: -1px;

            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto 50px auto 50px;
        }
        .mmp-image{
            background: url("manage_profile.png") no-repeat;
            background-size: 50px 50px;
            border: none;
            width: 50px;
            height: 50px;
            cursor: pointer;
            margin-bottom: 13px;
        }
        .kakaostory{
            font-size: 13px;
            letter-spacing: -1px;

            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .ks-image{
            background: url("kakaostory.png") no-repeat;
            background-size: 50px 50px;
            border: none;
            width: 50px;
            height: 50px;
            cursor: pointer;
            margin-bottom: 13px;
        }
    </style>
</head>
<body>
    <div class="whole-body">
        <div class="profile-top">
            <div>
                <button class="gray-box"></button>
                <p>์๋ํ์ธ์. GD๋ฅผ ์ผํจ ์๋ฎค ์ฐฌํ์๋๋ค.</p>
                <p>"๋ ~ ๋ฐ๋ผ๋ด ๋ฐ๋ผ๋ด ๋ฐ๋ผ๋ด~"</p>
            </div>
        </div>
        <div class="profile-center">
            <img src="myprofile_photo.jpeg" alt="">
            <p>์ฐฌํ</p>
        </div>
        <div class="profile-bottom">
            <div>
                <div class="chat-myself">
                    <input type="button" class="chat-image">
                    <p>๋์์ ์ฑํ</p>
                </div>
                <div class="manage-myprofile">
                    <input type="button" class="mmp-image">
                    <p>ํ๋กํ ๊ด๋ฆฌ</p>
                </div>
                <div class="kakaostory">
                    <input type="button" class="ks-image">
                    <p>์นด์นด์ค์คํ ๋ฆฌ</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

### 4. ๊ฒฐ๊ณผ๋ฌผ
![ํ๋ก์ ํธ ๊ฒฐ๊ณผ๋ฌผ](./project_result.png)

## ์ดํ
* css ๋ฌธ๋ฒ์ ์ ์์ง ๋ชปํ๋๊น ๊ณ์ ์ด๊ฒ ์ ๊ฒ ์จ๋ณด๋ฉด์ ํ๋ ํ๋ ๊ตฌํํ๋ค. (์๊ฐ์ด ๋ง์ด ๊ฑธ๋ฆผ) ํ์คํ ๊ฐ๋ฐ์๋ก ๊ฐ๋ ๊ธธ์ ๋๋ฌด๋ ๋ฉ๊ณ ๋ ํํ๋ค.
* ํ๋จ๋ถ ๋ฒํผ๋ค ๊ฒฝ์ฐ ๊ฐ์ css๋ฅผ ์ ์ฉ ๋ฐ๊ฒ ๋๋๋ฐ ๊ฐ์ ํด๋์ค๋ก ๋ฌถ์ด์ค์ผ ๊ฒ ๋ค๋ ์๊ฐ์ ๋ชปํ๊ณ  ๊ฐ ๊ฐ ๋ฐ๋ก ํด๋์ค๋ฅผ ๋ถ์ฌํ๋ค. (์๊ฐ ๋ญ๋น, ๋ฐ๋ณต์ ์ธ ๋ถํ์ํ ์ฝ๋ ์์ฑ)
* ํ๋จ๋ถ ๋ฒํผ๋ค์ `<input type=button>` ์ผ๋ก ํ๋๊น [html validator](https://validator.w3.org/) ์์ value๊ฐ์ ๋ฃ์ด์ผ ํ๋ค๊ณ  ์ง์ ์ ๋นํ๋ค.
* ๋๋ ์ค๋๋ ํ๊ฑธ์ ๊ฑท๋๋ค.

```toc
```
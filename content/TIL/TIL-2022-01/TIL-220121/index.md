---
emoji: ๐ฟ
title: ๋ฐ์ดํฐ๋ฒ ์ด์ค ๊ฐ ๊ด๊ณ
date: '2022-01-21 14:30:00'
author: ์ฝ๋ฉ์ฟ ๋
tags: TIL DJANGO DB
categories: TIL DJANGO DB
---

## ๋ฐ์ดํฐ๋ฒ ์ด์ค ๊ฐ ๊ด๊ณ ๐๐
### 1. One-to-many ๐
์ฐ์  ์ํคํผ๋์(Wikipedia) [์ ์](https://en.wikipedia.org/wiki/One-to-many_(data_model))๋ฅผ ๋ณด์.   
> In systems analysis, a one-to-many relationship is a type of cardinality that refers to the relationship between two entities (see also entityโrelationship model) A and B in which an element of A may be linked to many elements of B, but a member of B is linked to only one element of A. For instance, think of A as books, and B as pages. A book can have many pages, but a page can only be in one book.   
(์ฟ ๋๋ฒ์ญ๐ค ) ์์คํ ๋ถ์์์ `one-to-many`๋ ๋ค์๊ณผ ๊ฐ์ ๋ ๊ฐ์ฒด๊ฐ ๊ด๊ณ๋ฅผ ๋ํ๋ธ๋ค. A, B ๋ ๊ฐ์ฒด ์ค A์ ํ ๊ฐ์ฒด๋ ๋ง์ B์ ๊ฐ์ฒด์ ์ฐ๊ฒฐ๋์ด ์๊ณ , ๋ฐ๋๋ก B์ ํ ๊ฐ์ฒด๋ ์ค์ง ํ A ๊ฐ์ฒด์ ์ฐ๊ฒฐ๋์ด ์๋ค. ์๋ฅผ ๋ค์ด A๋ฅผ ์ฌ๋ฌ ์ฑ์ด๋ผ ํ๊ณ  B๋ฅผ ์ฌ๋ฌ ํ์ด์ง๋ผ ํ์. ํ ์ฑ์ ์ฌ๋ฌ ํ์ด์ง๋ฅผ ๊ฐ์ง ์ ์์ง๋ง ํ ํ์ด์ง๋ ํ ์ฑ ์์๋ง ์์ ์ ์๋ค.   
* ๊ด๊ณ๋ ์ด๋ฏธ์ง
  ![one-to-many](./one-to-many.png)
  ์ถ์ฒ:https://en.wikipedia.org/wiki/One-to-many_(data_model)   

* ์ฅ๊ณ (Django) ๋ชจ๋ธ์์ One-to-many(1:N) ๊ด๊ณ๋ฅผ ์ดํด๋ณด์
```python
class UserModel(AbstractUser):
    class Meta:
        db_table = "my_user"

    bio = models.TextField(max_length=500, blank=True)

class TweetModel(models.Model):
    class Meta:
        db_table = "tweet"
ย 
    author = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    content = models.CharField(max_length=256)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```
TweetModel์์ author๊ฐ `models.ForeignKey`๋ก UserModel์ ์ฐธ์กฐ ํ๊ณ  ์๋ค. ์ด ๊ด๊ณ๋ก ํ ๊ฐ์ ๊ธ์๋ ํ ์ ์ ๋ง ์์ ์ ์๊ณ . ๋ฐ๋๋ก ํ ์ ์ ๊ฐ ์ฌ๋ฌ๊ฐ์ ๊ธ์ ์์ฑํ  ์ ์๋ค.

### 2. One-to-one ๐ง 
์ํคํผ๋์์ [์์](https://en.wikipedia.org/wiki/One-to-one_(data_model))๋ฅผ ๋ณด๋ฉด์ One-to-one ๊ด๊ณ๋ฅผ ์ดํด ํด๋ณด์.
> For instance, think of A as the set of all human beings, and B as the set of all their brains. Any person from A can and must have only one brain from B, and any human brain in B can and must belong to only one person that is contained in A.   
(์ฟ ๋๋ฒ์ญ๐ค ) ๋ชจ๋  ์ธ๋ฅ ์ง๋จ์ด๋ผ๋ A์ ๊ทธ๋ค์ ๋ ์ง๋จ์ B ๋ผ๊ณ  ์๊ฐ ํด๋ณด์. A ๊ทธ๋ฃน์์ ๋๊ตฌ๋ ์ง B๊ทธ๋ฃน์ ์ค์ง ํ ๋๋ง ๊ฐ์ง ์ ์๊ณ , B๊ทธ๋ฃน์ ์ด๋ค ๋๊ตฌ์ ๋๋ ์ง ์ค์ง A๊ทธ๋ฃน์ ํ ์ฌ๋์๊ฒ ์ํด์ผํ๋ค. 

* ๊ด๊ณ๋ ์ด๋ฏธ์ง
![one-to-one](./one-to-one.png)
์ถ์ฒ:https://en.wikipedia.org/wiki/One-to-one_(data_model)   

* ์ฅ๊ณ (Django) ๋ชจ๋ธ์์ One-to-one(1:1) ๊ด๊ณ๋ฅผ ์ดํด๋ณด์
```python
class User(AbstractUser):
    class Meta:
        db_table = "my_user"

    bio = models.TextField(max_length=500, blank=True)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_pk = models.IntegerField(blank=True)
    nickname = models.CharField(max_length=200, blank=True)
    point = models.IntegerField(default=0)
    phone = models.CharField(max_length=200, blank=True)
```
Profile๋ชจ๋ธ์์ user๊ฐ `models.OneToOnefield`๋ก User๋ชจ๋ธ์ ๊ฐ์ผ๋ก ๊ฐ์ง๊ณ  ์๋ค. ์ด๋ฅผ ํตํด User๋ชจ๋ธ๊ณผ Profile๋ชจ๋ธ์ด 1:1 ๊ด๊ณ๋ฅผ ๊ฐ์ง๋ค. ์๋ก ์ค๋ณต์ ๋ง๋ค์ง ์๋๋ค. (๊ฐ ์ ์ ์๊ฒ ๊ฐ ๊ณ ์ ์ ํ๋กํ์ด ์์ต๋๋ค!)

### 3. Many-to-many ๐
์ํคํผ๋์์ [์์](https://en.wikipedia.org/wiki/Many-to-many_(data_model))๋ฅผ ๋ณด๋ฉด์ Many-to-many ๊ด๊ณ๋ฅผ ์ดํด ํด๋ณด์.
> For example, think of A as Authors, and B as Books. An Author can write several Books, and a Book can be written by several Authors.   
(์ฟ ๋๋ฒ์ญ๐ค ) ์ฑ์ ์ ์๋ค์ A, ์ฑ๋ค์ B ๋ผ๊ณ  ์๊ฐ ํด๋ณด์. ํ ์ ์๊ฐ ์ฌ๋ฌ ๊ถ์ ์ฑ์ ์ธ ์๋ ์๊ณ , ์ฌ๋ฌ ์ ์๋ค์ด ํ ์ฑ์ ์ธ ์๋ ์๋ค.

* ๊ด๊ณ๋ ์ด๋ฏธ์ง
![many-to-many1](./many-to-many1.png)     
![many-to-many2](./many-to-many2.png)
์ถ์ฒ: https://en.wikipedia.org/wiki/Many-to-many_(data_model)   
๋ one-to-many ๊ด๊ณ๋ฅผ junction table(์ฐ๊ฒฐํ์ด๋ธ)์ ์ํด ํ many-to-many ๊ด๊ณ๋ฅผ ๋ง๋ค ์ ์๋ค.

* ์ฅ๊ณ (Django) ๋ชจ๋ธ์์ Many-to-many(N:N) ๊ด๊ณ๋ฅผ ์ดํด๋ณด์
```python
class MyTopping(models.Model):
    topping_name = models.CharField(max_length=100)

class MyPizza(models.Model):
    pizza_name = models.CharField(max_length=100)
    pizza_topping = models.ManyToManyField(MyTopping)
```
MyPizza๋ชจ๋ธ์์ pizza_topping์ด `models.ManyToManyField`๋ก MyTopping๋ชจ๋ธ๊ณผ many-to-many๊ด๊ณ๊ฐ ํ์ฑ๋์๋ค. ํ ์ข๋ฅ์ ํ ํ์ ์ฌ๋ฌ ํผ์์์ ์ฌ์ฉ๋  ์ ์๊ณ , ํ ํผ์๋ ์ฌ๋ฌ ํ ํ์ ์ฌ์ฉํ  ์ ์๋ค.

## ์ดํ ๐
* ๋ฐ์ดํฐ๋ฒ ์ด์ค์ 3๊ฐ์ง ๊ด๊ณ๋ฅผ ๋ฐฐ์ธ ์ ์์ด ์ ๋ง ์ข์๋ค.
* ์ฅ๊ณ ๋ฅผ ํตํด ๋ชจ๋ธ(ํ์ด๋ธ) ๊ฐ์ ๊ด๊ณ๋ฅผ ํ ์ค์ ์ฝ๋๋ก ์ฝ๊ฒ ๋ง๋ค ์ ์์ด ์ ๋ง ์ ๊ธฐํ๋ค.
* ๋ฐฐ์ด ๊ฒ์ ํ ๋๋ก ์ ํ๋ฆฌ์ผ์ด์์ ๋ง๋ค ๋ DB์ค๊ณ๋ฅผ ์ ํด์ผ๊ฒ ๋ค.

 ```toc
 ```
---
emoji: ๐
title: ๋จธ์ ๋ฌ๋ 1์ฃผ์ฐจ ์์  - ์ฐ์ฐจ,์ฐ๋ด ๋ฐ์ดํฐ์์ผ๋ก ์ ํํ๊ท ๋ชจ๋ธ ๊ตฌํ
date: '2022-01-06 14:00:00'
author: ์ฝ๋ฉ์ฟ ๋
tags: TIL AI Regression Colab
categories: TIL AI
---

# ๋จธ์ ๋ฌ๋ 1์ฃผ์ฐจ Homework
___

> **โ** ๋ฌธ์ 
>
>[์ฐ์ฐจ-์ฐ๋ด ๋ฐ์ดํฐ์](https://www.kaggle.com/rsadiq/salary)์ผ๋ก ์ ํํ๊ท(Linear regression) ๋ชจ๋ธ ๊ตฌํํ๊ธฐ   
>
> โ๏ธ Hint   
> Learning rate(lr)๋ฅผ ๋ฐ๊พธ๋ฉด์ ์คํ   
> Optimizer๋ฅผ ๋ฐ๊พธ๋ฉด์ ์คํ   
> ์์คํจ์(loss)๋ฅผ mean_absolute_error๋ก ๋ฐ๊ฟ์ ์คํ   

## 1. ๋์ ์บ๊ธ ์ ๋ณด ์ธํํ๊ธฐ
๋์ ์บ๊ธ ์ ๋ณด๋ฅผ ์ธํ์ ํด์ผ [์บ๊ธ](https://www.kaggle.com/)์์ ์ํ๋ ๋ฐ์ดํฐ์์ ๋ค์ด ๋ฐ์ ์ ์๋ค.
```python
import os
os.environ['KAGGLE_USERNAME'] = 'my name' 
os.environ['KAGGLE_KEY'] = 'my key' 
```

## 2. Dataset ๋ค์ด๋ก๋
์ํ๋ ๋ฐ์ดํฐ์์ ๋ค์ด ๋ฐ์ ํ ์์ถ์ ํ์ด์ค๋ค. Colab์์ ๋งจ ์์ `!`๋ฅผ ๋ถ์ฌ์ฃผ๋ฉด ๋ฆฌ๋์ค ๋ช๋ น์ ํ  ์ ์๋ค.
```python
!kaggle datasets download -d rsadiq/salary
!unzip /content/salary.zip
```

## 3. ํ์ํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ import
* tensorflow & keras
> [TensorFlow](https://www.tensorflow.org/) is an end-to-end open source platform for machine learning.     
> 
> [Keras](https://keras.io/about/) is a deep learning API written in Python, running on top of the machine learning platform TensorFlow
`Tensoflow`๋ ๋จธ์ ๋ฌ๋์ ์ํ ์คํ์์ค ํ๋ซํผ. `Keras`๋ Tensoflow์์ ์คํ๋๋ ํ์ด์ฌ์ผ๋ก ์์ฌ์ง ๋ฅ๋ฌ๋ API.
<br><br>   

* numpy
> The fundamental package for scientific computing with Python   
> ์ถ์ฒ: https://numpy.org/
`Numpy`๋ ํ์ด์ฌ์ผ๋ก ๊ณผํ์  ๊ณ์ฐ์ ์ํ ๊ธฐ์ด์  ํจํค์ง(๋ผ์ด๋ธ๋ฌ๋ฆฌ). ๋ค์ฐจ์ ํ๋ ฌ, ์์น ๊ณ์ฐ ๋๊ตฌ ๋ฑ์ ์ ๊ณต.
<br><br>

* pandas
> [pandas](https://pandas.pydata.org/) is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language.   
`Pandas`๋ ์คํ์์ค ๋ฐ์ดํฐ ๋ถ์ ๋ฐ ์กฐ์ ๋๊ตฌ.
<br><br>

* matplotlib
> [Matplotlib](https://matplotlib.org/) is a comprehensive library for creating static, animated, and interactive visualizations in Python.   
`Matplotlib`์ ํ์ด์ฌ์์ ์๊ฐํ๋ฅผ ๋ง๋ค์ด์ฃผ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ.
<br><br>

* seaborn
> [Seaborn](https://seaborn.pydata.org/) is a Python data visualization library based on matplotlib.   
`Seaborn` ์ญ์ `matplotlib` ๊ธฐ๋ฐ ํ์ด์ฌ ๋ฐ์ดํฐ ์๊ฐํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ.
<br><br>

* sklearn
> Simple and efficient tools for predictive data analysis   
> ์ถ์ฒ: https://scikit-learn.org/stable/
`sklearn`์ ์์ธก ๋ฐ์ดํฐ ๋ถ์์ ์ํ ๋จ์ํ๊ณ  ํจ์จ์ ์ธ ๋๊ตฌ.

```python
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.optimizers import Adam, SGD
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt 
import seaborn as sns
from sklearn.model_selection import train_test_split
```

## 4. ์ด๋ค ๋ฐ์ดํฐ์ ์ธ๊ฐ?
pandas ๋ฅผ ์ด์ฉํ์ฌ 1๋ฒ์งธ~5๋ฒ์งธ ๋ฐ์ดํฐ ์ถ๋ ฅ
```python
df = pd.read_csv('Salary.csv')
df.head(5)
```
![dataset](./dataset_0to5.png)

## 5. ๋ฐ์ดํฐ์์ ํํ๋?
ํ 35, ์ด 2 (YearsExperience, Salary) ์ ํํ - ์ด 35๊ฐ์ ๋ฐ์ดํฐ
```python
print(df.shape) # (35, 2)
```

## 6. ๋ฐ์ดํฐ์์ ๊ทธ๋ํ๋ก๋ ์ถ๋ ฅํด๋ณด์
์ ํ(Linear)์ ์ธ ๋ชจ์ต์ด๋ค!
```python
sns.pairplot(df, x_vars=['YearsExperience'], y_vars=['Salary'], height=4)
```
![dataset_graph](./dataset_graph.png)

## 7. ๋ฐ์ดํฐ๋ฅผ ๊ฐ๊ณตํ์
์ฐ์ฐจ(YearsExperience)์ ์๊ธ(Salary)๋ฅผ ๊ฐ input, output์ผ๋ก ๋ถ๋ฆฌ ํ numpyํ๋ ฌ(2์ฐจ์)๋ก ๋ณํ.
```python
x_data = np.array(df[['YearsExperience']], dtype=np.float32)
y_data = np.array(df['Salary'], dtype=np.float32)
print(x_data.shape) # (35, 1)
print(y_data.shape) # (35,)

x_data = x_data.reshape((-1, 1))
y_data = y_data.reshape((-1, 1))
print(x_data.shape) # (35, 1)
print(y_data.shape) # (35, 1)
```

## 8. ํธ๋ ์ด๋๋ฐ์ดํฐ(Training dataset)์ ๊ฒ์ฆ๋ฐ์ดํฐ(Validation dataset)๋ก ๋ถ๋ฆฌ
์ด ๋ฐ์ดํฐ์์์   
ํธ๋ ์ด๋๋ฐ์ดํฐ์(x_train, y_train): 80%   
๊ฒ์ฆ๋ฐ์ดํฐ์(x_val, y_val): 20%    
๋ก ๋๋๋ค.
```python
x_train, x_val, y_train, y_val = train_test_split(x_data, y_data, test_size=0.2, random_state=2021)
print(x_train.shape, x_val.shape) # (28, 1) (7, 1)
print(y_train.shape, y_val.shape) # (28, 1) (7, 1)
```
## 9. ์ ํ ํ๊ท(Linear Regression) ๋ชจ๋ธ์ ๋ง๋ค์
1. Sequential(์์ฐจ์ ) ๋ชจ๋ธ์ ๋ง๋ ๋ค. ์ด ๋ชจ๋ธ์ ๊ฐ ๋ ์ด์ด(layer)์ ํ ์๋ ฅ tensor, ํ ์ถ๋ ฅ tensor๋ก ์ด๋ฃจ์ด์ ธ์ผ ์ ํฉํ ๋ชจ๋ธ์ด๋ผ ๋์ด ์๋ค([์ฐธ๊ณ ](https://keras.io/guides/sequential_model/)). ์ฐ๋ฆฌ๋ x_data์ y_data๋ก ์ด๋ฃจ์ด์ ธ ์๋ค.
2. ๋ชจ๋ธ ์ต์ ์ค์  - ์์คํจ์(mean_squared_error), optimizer(Adam)์ Learning rate(lr).
3. ํ์ต์ํค์ (model.fit)
```python
model = Sequential([
  Dense(1)
])

model.compile(loss='mean_squared_error', optimizer=Adam(lr=2300))

model.fit(
    x_train, # input (training dataset)
    y_train, # output (training dataset)
    validation_data=(x_val, y_val), # ๊ฒ์ฆ ๋ฐ์ดํฐ๋ฅผ ๋ฃ์ด์ฃผ๋ฉด ํ epoch์ด ๋๋ ๋๋ง๋ค ์๋์ผ๋ก ๊ฒ์ฆ
    epochs=100 # epochs ๋ณต์ํ์ผ๋ก ์ฐ๊ธฐ! ํ์ต ํ์
)
```

## 10. ๋ชจ๋ธ ๊ฒ์ฆ
๊ฒ์ฆ๋ฐ์ดํฐ๋ก ์ค๊ณํ ๋ชจ๋ธ์ด ๋ง๊ฒ ์ ์์ธกํ๋ ์ง ํ์ธํด๋ณด์. loss๊ฐ ์๊ธดํ์ง๋ง, ํ๋์ (๊ฒ์ฆ๊ฐ)๊ณผ ๋นจ๊ฐ์ (์์ธก๊ฐ)์ ๊ฑฐ๋ฆฌ ์ฐจ์ด๊ฐ ํฌ์ง ์๋ค!
```python
y_pred = model.predict(x_val)

plt.scatter(x_val, y_val)
plt.scatter(x_val, y_pred, color='r')
plt.show()
```
![validation_model_graph](./validation_model_graph.png)

## 11. ์ถ๊ฐ
์ต์ ์ ๋ชจ๋ธ์ ์ฐพ๊ธฐ ์ํด์ ์ฐ๋ฆฌ๋ ์ฌ๋ฌ๊ฐ์ง๋ฃฐ ์กฐ์  ํด ๋ณผ์ ์๊ฒ ๋ค. (๊ฐ์ง ๋ฐ์ดํฐ๊ฐ ์์ ๋์ผ ํ  ๋)   
* lossํจ์๋ฅผ mean_absolute_error๋ก ๋ณ๊ฒฝ ํ ์คํ
* optimizer๋ฅผ ๋ณ๊ฒฝ (SGD ๋ฑ)
* lr ์์น๋ฅผ ๋ณ๊ฒฝ
* epochs ์์น๋ฅผ ๋ณ๊ฒฝ

# ์ดํ
___
๋ชจ๋  ๊ฒ ๋ฏ์  ์ฒซ ๋จธ์ ๋ฌ๋ ์ค์ต์ด์๋ค. ๊ฐ์ ์๋ฃ๋ ๋ค์๋ณด๊ณ , ๊ฐ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋คํ๋จผํธ๋ ๋ณด๊ณ , ํ์๋ค์ด๋ ํ ๋ก ๋ ํด๋ณด๊ณ , ์ด๋ ๊ฒ ์ ๋ ๊ฒ ๋ง์ ธ๋ณด๊ธฐ๋ ํ๋ฉด์ ์ด๋ ์ ๋๋ ์ดํดํ๋ค. (90% ์ ๋? ๋ง๋..)   
์ข์ ๊ฐ์ค๊ณผ ์ข์ ์์ค ํจ์๋ฅผ ๋ง๋ค์ด์ ๊ธฐ๊ณ๊ฐ ์ ํ์ตํ๋๋ก ํ๋ ๊ฒ์ด ๋จธ์ ๋ฌ๋ ์์ง๋์ด์ ํต์ฌ ์ญํ ์ด๋ผ๊ณ  ํ๋ค. ๋๋ ์์ง ์ด๋ป๊ฒ ๋์ ๊ธธ์ ๋์๊ฐ์ผ ํ  ์ง ๋ชจ๋ฅด๊ฒ ์ง๋ง, ๊ด๋ จ ๊ธฐ์ ๋ค์ ์ ์ต๋ํด์ผ๊ฒ ๋ค! 
์์น๋ฅผ ์ด๊ฒ์ ๊ฒ ๋ฐ๊พธ๋ฉด์ loss๋ฅผ ํ์ธํ๋ ๊ณผ์ ์ด ๋ง์น `๊ณผํ์`๊ฐ ๋ ๊ธฐ๋ถ์ด๋ค.<br><br>
![scientist_codingcoonie](./scientist_codingcoonie.png)
<br><br>๋น๋ถ๊ฐ์ ๊ฒ๋ํ์ด์์ ํฐ ๊ฐ์ด ์๊ณ  ์์ด์ผ๊ฒ ๋ค~

```toc
```
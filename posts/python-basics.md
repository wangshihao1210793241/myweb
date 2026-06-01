---
title: Python 基础笔记
date: 2026-06-01
tags: [Python, 基础]
---

# Python 基础笔记

Python 语法简洁，适合初学者入门，也是自动化脚本的利器。

## 1. 列表推导式

```python
# 生成偶数列表
evens = [x for x in range(20) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```

## 2. 字典操作

```python
user = {"name": "码农脱贫", "age": 25}

# 遍历
for key, value in user.items():
    print(f"{key}: {value}")
```

## 3. 文件读写

```python
# 读取文件
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()

# 写入文件
with open("output.txt", "w", encoding="utf-8") as f:
    f.write("Hello, Python!")
```

## 总结

Python 简单易学，在数据处理、自动化、Web 开发等领域都有广泛应用。

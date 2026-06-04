---
title: Java Stream 实战技巧
date: 2026-06-01
tags: [Java, Stream]
---

# Java Stream 实战技巧

Java Stream 是 Java 8 引入的强大功能，让集合操作变得简洁优雅。

## 1. 过滤与映射

```java
// 筛选年龄大于18的用户，获取他们的名字
List<String> names = users.stream()
    .filter(u -> u.getAge() > 18)
    .map(User::getName)
    .collect(Collectors.toList());
```

## 2. 分组

```java
// 按部门分组
Map<String, List<User>> grouped = users.stream()
    .collect(Collectors.groupingBy(User::getDepartment));
```

## 3. 统计

```java
// 计算平均年龄
Double averageAge = users.stream()
    .collect(Collectors.averagingInt(User::getAge));
```

## 总结

Stream API 让代码更简洁、更易读，是 Java 开发者必须掌握的技能。

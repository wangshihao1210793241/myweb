---
title: Vue 快速入门指南
date: 2026-06-01
tags: [Vue, 前端]
---

# Vue 快速入门指南

Vue 是一个渐进式 JavaScript 框架，上手简单，功能强大。

## 1. 创建一个 Vue 应用

```bash
npm create vue@latest my-app
cd my-app
npm install
npm run dev
```

## 2. 模板语法

```vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <p v-if="show">这段文字可以显示/隐藏</p>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
```

## 3. 响应式数据

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>
```

## 总结

Vue 的学习曲线平缓，非常适合快速上手前端开发。

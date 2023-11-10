// src/main.js
import { createApp } from 'vue'; // 导入 Vue
import App from './App.vue'; // 导入 Vue 组件
import { render } from 'react-dom'; // 导入 React 渲染方法
import React from 'react'; // 导入 React
import HelloReact from './components/HelloReact.jsx'; // 导入 React 组件

// 创建 Vue 应用
const app = createApp(App);
app.mount('#app');

// 渲染 React 组件
render(<HelloReact />, document.getElementById('react-root'));
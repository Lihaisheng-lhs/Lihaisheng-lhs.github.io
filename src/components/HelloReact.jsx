/*
 * @Author: Pengfei Xu
 * @Date: 2023-11-10 15:18:17
 * @LastEditors: Pengfei Xu
 * @LastEditTime: 2023-11-10 15:54:01
 * @Description: 
 */
import React from 'react';
import Gallery from './gallery/gallery.jsx'; // 引入普通 JavaScript 文件作为组件

const HelloReact = () => {
  return (<div>
    <Gallery /> {/* 使用 MyComponent 作为组件 */}
  </div>)
}

export default HelloReact;
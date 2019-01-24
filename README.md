# web-app


使用`vue.js` 编写阅读类型的Web-app；

**预览图**

![image](https://github.com/Toxicfy/WebApp-Vue/blob/master/src/assets/web-app%E9%A2%84%E8%A7%88%E5%9B%BE.gif?raw=true)
## 技术点

- 基于`vue.js` 脚手架组件化开发，实现组件的复用；
- `vue-router`实现的路由管理，实现view层的组件切换以及状态的变化；
- 使用`axios`发起请求，并由`vue-cli`的`proxy`配置实现跨域请求；
- 使用了`flexible+rem`移动端适配方案
- `v-lazy`懒加载图片请求，`better-scroll`实现局部滚动；
- 基于`css3`的瀑布流布局

## 分析和总结
### 实现跨域请求
在vue-cli的配置文件中的index中有个参数为`proxyTable`的属性，本来的作用是通过映射的方式将对应的url达到简化的目的,但是其中的一个参数`changeOrign`的值为 true 的时候，则会开启一个虚拟的服务器，代为转发请求，这样就不会产生跨域的问题


### 关于嵌套路由
  因为在movie作为`router-view` 的时候，需要二级路由，开始的时候完全是根据路由设置切换组件，但是这样写的话会让文件比较混乱，使用嵌套路由可以让结构更加清晰，也便于设置路由的默认view；


### 关于布局和字体大小的问题
   由于本身vue就本身就是基于ES6语法环境，所以直接使用Flex布局能够达到快速布局的效果，同时rem是基于根元素来进行变化，此时只需要设置好默认的根元素，就能解决大小分辨率不同的情况下字体显示差距过大，当然弊端就是更大屏幕并没有能够展示到更多的内容


### 关于vue的生命周期
> 整个生命周期中提供了很多生命钩子，用于自定义自己的逻辑；


实际上就是**开始创建**，**初始化数据**，**编译模板**，**挂载DOM**，**渲染更新**，**卸载**的 过程；
下面是一些常见的：
- beforecreate : 可以在这加个loading事件，在加载实例时触发 
- created : 初始化完成时的事件写在这里，例如需要的异步请求在这里调用
- mounted : 挂载元素，获取到DOM节点
- updated : 如果对数据统一处理，在这里写上相应函数
- beforeDestroy : 可以做一个确认停止事件的确认框
- nextTick : 更新数据后立即操作dom

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

React
**React Native**
React Router
**Redux**

function

路由：react app 路由的方案与浏览器路由方案的区别  
--------
Expo 的路由方案
React Navigation


action

dispatch

```js
{
	type: 'push/xxx',
	payload: data
}
```

reducer

200 个  <>

Flutter：自研渲染引擎 -> 维护成本非常高 开发成本高、
----------
RN 调用平台的渲染能力 JSBridge -> 
----------
 Tarui 调用系统默认的 webView
 
 Electron 内置 Chrome webview
----------

```js
function App() {
  const [parameter] = useState({page: 1})
  const [list, setList] = useState([])
  useEffect(() => {
    // do something
    setList((list) => {
      var _list = [...list, {a:1,b:2}]
      return _list
    })
  }, [a]);
  
  setTimeout(() => {}, 1000)
  
  const a = useCallback(() => {
    // 查询接口
    
  }, [parameter])
  
  useMemo(() => {
    return function() {}
  }, [])
  
  function x() {}


  useEffect(() => {
    // 查询接口
  }, [parameter]);
  
  return (
    <div>
      <Children callback={a} />
    </div>
  )
}
```

`props`  

```js
Children({a: 1})
Children({a: 1})

p.a === p.a // true

memo
```


`state` 

```js
function _Children({a}) {
  
}
export default memo(_Children)
```

`requestAnimationFrame`   
`setTimeout(() => {}, 0)`  
`messageChannel`

事件循环 EventLoop

线程 -> 宏任务
函数调用栈
刷新机制 ->  1000/120  1000/60 16.7ms  30 fps  延迟！！

1ms -> 200万次比较  a === b

30ms -> 1个任务

组件渲染完成：节点 -> DOM tree


闭包：


回调函数 callback

```js
function Componenet(willMount, mounted) {
  willMount()
  render()
  mounted()
}
```

生命周期 componentWillMount

钩子函数 hook 

```js
function onClick() {
  
}
```

拦截器函数 interceptor

守卫：before after


// 没有根基、扎实的基础技术体系


1. 服务端渲染   前端后端同构      
2. 加快用户响应？
3. SSG
4. 增量渲染
5. 

React -> DOM
SSR -> 字符串 -> 初始化 同步 获取

水合 -> 最佳实践

```js
async function App() {
  const res = awiat xxx.get('/xxx')
  
  return (
    <div onclick>xxxx</div>
  )
}
```

App router 路由设计方案

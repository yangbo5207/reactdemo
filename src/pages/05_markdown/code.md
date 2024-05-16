## 今天的天气不错

在 vite 项目中如何引入引入 `.md` 文件

```js
import code from './code.md?raw'
```

试试看可以不。

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
|a|v|


## API

### PreviewLayout

| 参数     | 说明                       | 类型 | 默认值 | 版本  |
| :------- | :------------------------- | :--: | :----: | :---: |
| children | 传递的组件，可以是任意组件 | jsx  |  null  | 0.1.0 |

### MdPreviewer

| 参数 | 说明          |  类型  | 默认值 | 版本  |
| :--- | :------------ | :----: | :----: | :---: |
| md   | markdown 文档 | string |  null  | 0.1.0 |

### CodePreviewer

| 参数     | 说明           |  类型  | 默认值 | 版本  |
| :------- | :------------- | :----: | :----: | :---: |
| code     | 要显示的代码   | string |  null  | 0.0.1 |
| showCode | 是否要展示代码 |  bool  |  true  | 0.1.0 |


```js

function Markdown() {
  return (
    <div>
      hello world
      <Mark remarkPlugins={[remarkGfm]}>{input}</Mark>
      <Mark remarkPlugins={[remarkGfm]}>{code}</Mark>
      <Mark remarkPlugins={[remarkGfm]}>{markdown}</Mark>
    </div>
  )
}
```
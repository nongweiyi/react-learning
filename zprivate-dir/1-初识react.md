## 1.第一个demo 
```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>Hello React!</title>
    <script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
    <script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
    <script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
</head>

<body>
    <div id="root"></div>
    <script type="text/babel">
        var Hello=React.createClass({
            render:function(){
                return <h1>Hello, world!</h1>
            }
        });
      ReactDOM.render(<Hello/>,document.getElementById('root'));
    </script>
</body>

</html>
```
这是没有使用构建工具来使用react来编写一个显示Hello, world的程序，以下是我们使用react需要做的几件事情：
1. 引入react.min.js，react-dom.min.js，babel.min.js这三个文件，其中  

    1. react.min.js 是react的核心库
    2. react-dom.min.js 提供了与DOM相关的操作，比如插入组件到DOM的某一个节点中
    3. babel.min.js用来编译jsx和es6语法  

```javascript
<script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
<script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
<script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
```  

2. 在模板文件中，这里是以上的html文件，提供一个容器，来将内容插入到这个容器中
```html
 <div id="root"></div>
```  


3.  编写jsx代码,这里的script的type="text/babel"，指定使用babel来编译jsx文件，在这个jsx文件中两件事情：
    1. 使用React.createClass来创建一个组件名为Hello
    2. 使用ReactDOM.render来将Hello组件插入到节点id为root的div中
```javascript
<script type="text/babel">
    var Hello=React.createClass({
        render:function(){
            return <h1>Hello, world!</h1>
        }
    });
    ReactDOM.render(<Hello/>,document.getElementById('root'));
</script>
```


> 文章参照  <a href="http://www.runoob.com/react/" target="_blank"> [ 菜鸟教程-react ]</a>  

> 文章参照<a href="http://www.ruanyifeng.com/blog/2015/03/react.html" target="_blank"> [ 阮一峰老师-react ]</a>

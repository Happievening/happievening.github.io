let string = `/*你好，欢迎来到前端世界！
*我是Happievening，喜欢前端，你呢？
*让我来添加一点样式进去......
*我要做一些准备工作：
*首先是写通用的CSS reset代码！*/
* {
    margin: 0;
    padding: 0; 
    box-sizing: border-box
}
img {
    max-width: 100%
}
/*起手式做好了！接下来我们做什么呢？
*对了！先让字变成绿色吧！
*我要这样写:*/
body {
    color: green
}
/*接下来我要画一个太极！
首先我们准备一个圆*/
#div1 {
    border: 1px solid black;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
  }
  #div1 {
    background: linear-gradient(90deg, white 0%, white 50%, black 50%, black 100%);
  }
  /*加一个小圆*/
  #div1::before {
    content: "";
    display: block;
    width: 100px;
    height: 100px;
    /*弄出一个环形*/
    background: radial-gradient(circle closest-side, white 37.5%, black 37.5%);
    position: relative;
    top: 0%;
    left: 25%;
    border-radius: 50%
  }
  /*加一个小圆*/
  #div1::after {
    content: "";
    display: block;
    width: 100px;
    height: 100px;
    /*弄出一个环形*/
    background: radial-gradient(circle closest-side, black 37.5%, white 37.5%);
    position: relative;
    top: 0%;
    left: 25%;
    border-radius: 50%
  }
  /*定义一个动画*/
  @keyframes rt {
    from {}to {
      transform: rotate(360deg)
    }
  }
  /*让太极动起来！*/
  #div1{
     animation: rt 10s infinite linear 
  }
  /*我的展示到此结束
  祝你天天开心！*/
`;
let n = 0;

let step = function () {
  //   console.log(n);
  setTimeout(() => {
    let str = string.substr(n, 1);
    document.querySelector("style").innerHTML += str;
    switch (str) {
      case "\n":
        str = "<br>";
        break;
      case " ":
        str = "&nbsp;";
        break;
      case "\t":
        str = "&nbsp;&nbsp;&nbsp;&nbsp;";
        break;
      default:
    }
    document.querySelector("#demo").innerHTML += str;
    document.querySelector("#demo").scrollTo(0, 99999);
    if (n < string.length - 1) {
      n++;
      step();
    }
  }, 50);
};

step();

// see https://akilar.top/posts/ebf20e02/
//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg = ['url(/img/background/home/bg1.webp)', 'url(/img/background/home/bg10.webp)', 'url(/img/background/home/bg14-car.webp)', 'url(/img/background/home/bg2.webp)', 'url(/img/background/home/bg3.webp)', 'url(/img/background/home/bg4-g.webp)', 'url(/img/background/home/bg4.webp)', 'url(/img/background/home/bg5-g.webp)', 'url(/img/background/home/bg5.webp)', 'url(/img/background/home/bg6.webp)', 'url(/img/background/home/bg7.webp)', 'url(/img/background/home/bg8.webp)', 'url(/img/background/home/bg9.webp)', 'url(/img/background/home/bgblue1.webp)', 'url(/img/background/home/bgc15-g.webp)', 'url(/img/background/home/bgc9.webp)']
//获取背景图片总数，生成随机数
var bgindex =Math.floor(Math.random() * backimg.length);
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
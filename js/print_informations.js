var now = new Date();

function createtime() {
 var grt = new Date("01/29/2021 20:45:01"); //此处修改 建站时间或者网站上线时间
 now.setTime(now.getTime() + 250);
 var days = (now - grt) / 1000 / 60 / 60 / 24;
 var dnum = Math.floor(days);


 var ascll = ["This is Luckerlin Blog! ", `花开堪折直须折, 莫待无花空折枝. `, `

 ██╗     ██╗   ██╗ ██████╗██╗  ██╗███████╗██████╗ ██╗     ██╗███╗   ██╗    ██████╗ ██╗      ██████╗  ██████╗ 
 ██║     ██║   ██║██╔════╝██║ ██╔╝██╔════╝██╔══██╗██║     ██║████╗  ██║    ██╔══██╗██║     ██╔═══██╗██╔════╝ 
 ██║     ██║   ██║██║     █████╔╝ █████╗  ██████╔╝██║     ██║██╔██╗ ██║    ██████╔╝██║     ██║   ██║██║  ███╗
 ██║     ██║   ██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗██║     ██║██║╚██╗██║    ██╔══██╗██║     ██║   ██║██║   ██║
 ███████╗╚██████╔╝╚██████╗██║  ██╗███████╗██║  ██║███████╗██║██║ ╚████║    ██████╔╝███████╗╚██████╔╝╚██████╔╝
 ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═══╝    ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ 
                                                                                                             

`, 'Luckerlin Blog 已上线', dnum, '天,', '现在是', now, '©2022 By Luckerlin']

 setTimeout(
   console.log.bind(
     console, `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}%c ${ascll[6]}%c ${ascll[7]}%c\n\n ${ascll[8]}\n`
     , 'color:#49b1f5', '', 'color:#49b1f5', 'color:#49b1f5', '', 'color:#49b1f5', 'color:#49b1f5', '', 'color:#49b1f5')
 );



 setTimeout(
    console.log.bind(
        console, '%c ⚡ Powered by Luckerlin %c 你正在访问 Luckerlin 的博客.', 'color:white; background-color:#f0ad4e', '')
 );

 setTimeout(
 console.log.bind(
   console, '%c WELCOME %c 您好! 很高兴见到您! ', 'color:white; background-color:#4f90d9', '')
 );

 setTimeout(
 console.log.bind(
  console, '%c Attention %c  你已打开控制台. 精彩内容可不在控制台哦!', 'color:white; background-color:#4f90d9', '')
 );
}
createtime();

console.log = function () { }
// if(PublicSacrificeDay()){
//     document.getElementsByTagName("html")[0].setAttribute("style","filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
// }
// function PublicSacrificeDay(){
//     var PSFarr=new Array("0404","0414","0512","0707","0807","0814","0909","0918","0930","1025","1213");
//     //2020年4月4日 新冠肺炎哀悼日，清明节
//     //2010年4月14日，青海玉树地震
//     //2008年5月12日，四川汶川地震
//     //1937年7月7日,七七事变 又称卢沟桥事变
//     //2010年8月7日，甘肃舟曲特大泥石流
//       //8月14日，世界慰安妇纪念日
//     //1976年9月9日，毛主席逝世
//       //1931年9月18日，九一八事变
//       //烈士纪念日为每年9月30日
//     //1950年10月25日，抗美援朝纪念日
//     //1937年12月13日，南京大屠杀
//     var currentdate = new Date();
//     var str = "";
//     var mm = currentdate.getMonth()+1;
//     if(currentdate.getMonth()>9){
//       str += mm;
//     }else{
//       str += "0" + mm;
//     }
//     if(currentdate.getDate()>9){
//       str += currentdate.getDate();
//     }else{
//       str += "0" + currentdate.getDate();
//     }
//     if(PSFarr.indexOf(str)>-1){
//         return 1;
//     }else{
//         return 0;
//     }
// }











// new   Made by Luckerlin 2022-09-18
var myDate = new Date;
var mon = myDate.getMonth() + 1;
var date = myDate.getDate();
var days = [
  "4.4",
  "4.14",
  "5.12",
  "7.7",
  "8.7",
  "8.14",
  "9.9",
  "9.18",
  "9.30",
  "10.25",
  "12.13"
]; // 自定义纪念日
var introduces = [
  '清明节',
  '青海玉树地震纪念日(2010年4月14日)',
  '四川汶川地震纪念日(2008年5月12日)',
  '七七事变纪念日(又称卢沟桥事变,1937年7月7日)',
  '甘肃舟曲特大泥石流纪念日(2010年8月7日)',
  '世界慰安妇纪念日',
  '毛主席逝世纪念日(1976年9月9日)',
  '九一八事变纪念日(1931年9月18日)',
  '烈士纪念日',
  '抗美援朝纪念日(1950年10月25日)',
  '南京大屠杀纪念日(1937年12月13日)'
];
for (i = 0; i < 11; i++) {
  var d = days[i].split('.');
  if (mon == d[0] && date == d[1]) {
    // document.write('<style>html{-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);_filter:none}</style>')
    document.getElementsByTagName("html")[0].setAttribute("style","filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
    iziToast.info({
        timeout: 15000,
        icon: 'Fontawesome',
        closeOnEscape: 'true',
        transitionOut: 'fadeOutRight',
        layout: '2',
        transitionIn: 'bounceInLeft',
        position: 'topRight',
        icon: 'fad fa-candle-holder',
        backgroundColor: '#fff',
        title: '今天是 ' + introduces[i],
        message: '历史不会忘记，人民永远铭记！<p style="margin-top: 4px;">全站已切换为黑白模式</p>'
    });
    break;
  }
}
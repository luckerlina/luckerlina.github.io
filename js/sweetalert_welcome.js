function welcome(){
    let welcome_text = '欢迎光顾 六月的风 的博客 ~ '
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你，来自"+referrer.toUpperCase()+"的用户！";
        if(referrer.toUpperCase()==document.domain.toUpperCase())return;
    }
    swal({
        title: " 欢迎！",
        text: welcome_text+'\n打开页面左下方音乐以获得更佳体验！',
        imageUrl: "/img/avatar.jpg",
        timer: 2500,
        showConfirmButton: false
    });
}
$(document).ready(()=>{
    welcome()
})

// 作者: pai233
// 链接: https://blog.pai233.top/20220409/butterfly-popup-welcome-window/
// 来源: 咕咕云梦泽
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
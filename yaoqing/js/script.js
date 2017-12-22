var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
});

//音乐播放
var music = document.querySelector(".music");
var music_off = document.querySelector(".music_off");
var gif = document.querySelector(".gif");
var audio = document.querySelector("audio");

var flag = 1;
music.onclick = function(){
    if(flag==1){
        music_off.style.animation = "none";//音符停止转动
        gif.style.display = "none";//音符消失
        audio.pause();//暂停音乐
        flag = 0;
    }else{
        music_off.style.animation = "mus 1s linear infinite";//音符开始转动
        gif.style.display = "block";//音符出现
        audio.play();//播放音乐
        flag = 1;
    }
} 





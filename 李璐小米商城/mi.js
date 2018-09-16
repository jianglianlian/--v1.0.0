var tb=document.getElementsByClassName("mibuyr")[0];
var tim=tb.getElementsByTagName("span")[0];
function countDown(times){
    var timer=null;
    timer=setInterval(function(){
        var day=0,
            hour=0,
            minute=0,
            second=0;//时间默认值
        if(times > 0){
            day = Math.floor(times / (60 * 60 * 24));
            hour = Math.floor(times / (60 * 60)) - (day * 24);
            minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        if (hour <= 9) hour = '0' + hour;
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        tim.innerHTML=hour+":"+minute+":"+second;
        times--;
    },1000);
    if(times<=0){
        clearInterval(timer);
    }
}
countDown(1000000);
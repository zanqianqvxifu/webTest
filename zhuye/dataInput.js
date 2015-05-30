var mainShowBg=document.getElementsByClassName('main-pic-animation')[0];
//var picSum=document.getElementsByClassName('picHome');
//var mainShow=document.getElementsByClassName('main-show-pic')[0];
var auto=document.getElementsByClassName('picHome')[0];
console.dir(auto.length)
var bb=[],cc=[];
for(var j=0;j<bgPic.length;j++) {
    var bgpic = bgPic[j].pic1;
    JSON.parse(bgpic);
    cc.push(bgpic)
}
for(var i=0;i<5;i++){
    (function (i) {
        animate(auto,{'left':-730*i},30000,2)

    })(i)

}

mainShowBg.style.background='url(../pic/'+cc[1]+'.jpg)';
//-mainShow.style.background='url(../pic/'+bb[1]+'.jpg)';




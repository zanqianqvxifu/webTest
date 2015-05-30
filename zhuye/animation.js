var zhufengEffect = {
    //当前时间*变化量/持续时间+初始值
    zfLinear: function(t,b,c,d){ return c*t/d + b; },
    Quad: {//二次方的缓动（t^2）；
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        }
    },
    Cubic: {//三次方的缓动（t^3）
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        }
    },
    Quart: {//四次方的缓动（t^4）；
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        }
    },
    Quint: {//5次方的缓动（t^5）；
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        }
    },
    Sine: {//正弦曲线的缓动（sin(t)）
        easeIn: function(t,b,c,d){
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOut: function(t,b,c,d){
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        }
    },
    Expo: {//指数曲线的缓动（2^t）；
        easeIn: function(t,b,c,d){
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOut: function(t,b,c,d){
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    Circ: {//圆形曲线的缓动（sqrt(1-t^2)）；
        easeIn: function(t,b,c,d){
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        }
    },
    Elastic: {//指数衰减的正弦曲线缓动；
        easeIn: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
        },
        easeInOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        }
    },

    Back: {//超过范围的三次方缓动（(s+1)*t^3 - s*t^2）；
        easeIn: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        }
    },
    zfBounce: {//指数衰减的反弹缓动。
        easeIn: function(t,b,c,d){
            return c - zhufengEffect.zfBounce.easeOut(d-t, 0, c, d) + b;
        },
        easeOut: function(t,b,c,d){
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOut: function(t,b,c,d){
            if (t < d/2) return zhufengEffect.zfBounce.easeIn(t*2, 0, c, d) * .5 + b;
            else return zhufengEffect.zfBounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    }
}

function linear(t,b,c,d){return t/d*c+b;}
function css(ele,attr,val){//方法重载：一个方法名，由于参数不同而功能不同
    if(arguments.length==2){
        try{
            return parseFloat(window.getComputedStyle(ele,null)[attr]);
        }catch(e){
            if(attr=="opacity"){
                var reg=/^alpha\(opacity=(\d+)\)$/;//用来匹配IE滤镜样式中不透明度的值
                if(reg.test(ele.currentStyle.filter)){
                    return RegExp.$1/100;//为了让返回值和标准浏览器的值相同（为了保持相同的规范）
                }else{
                    return 1;
                }
            }else{
                return parseFloat(ele.currentStyle[attr]);
            }
        }
    }else if(arguments.length===3){
        switch(attr){
            case "opacity":
                ele.style.opacity=val;
                ele.style.filter="alpha(opacity="+val*100+")";
                break;
            case "width":
            case "height":
            case "top":
            case "left":
                ele.style[attr]=val+"px";
                break;
            default:
                ele.style[attr]=val;
        }
    }
}
//匀速linear，反弹bounce，弹性Elastic，减速Expone，back
//默认值是减速Expon,0,1:linear,2back,3Elastic,4bounce
/*
 zhufengEffect.Back.easeOut;
 zhufengEffect["Back"]["easeOut"];
 ["Back","easeOut"]
 a[0],a[1];
 zhufengEffect[a[0]][a[1]]
 */
function animate(ele,oTarget,duration,type,fnCallback){
    var fnType=zhufengEffect.Expo.easeOut;//默认用减速效果
    if(typeof type=="number"){
        switch (type){

            case 1:
                fnType=zhufengEffect.zfLinear;
                break;
            case 2:
                fnType=zhufengEffect.Back.easeOut;
                break;
            case 3:
                fnType=zhufengEffect.Elastic.easeOut;
                break;
            case 4:
                fnType=zhufengEffect.zfBounce.easeOut;
                zhufengEffect["zfBounce"]["easeOut"];
        }

    }else if(type instanceof Array){
        /*var temp=zhufengEffect[type[0]][type[1]];
         if(typeof temp=="function"){
         fnType=temp;
         }*/
        //["Back","easeOut"]==type//现在type就类似于这样一个数组
        fnType=zhufengEffect[type[0]][type[1]];

    }else if(typeof type=="function"){
        fnCallback=type;//如果第四个参数是个function，则让这个function成为回调方法
    }
    clearInterval(ele.timer);
    var oBegin={};
    var oChange={};
    //oTarget这个对象里存了五组目标值，我要通过遍历这个对象，把每个方向的开始值和变化的量分解出来，所以有以下代码：
    var flag=0;
    for(var attr in oTarget){
        var target=oTarget[attr];
        var begin=css(ele,attr);
        var change=target-begin;
        if(change){//如果change为0,则不必再保存些值了。因为此方向不运动
            oBegin[attr]=begin;
            oChange[attr]=change;
            flag++;
        }
    }
    if(flag==0)return;
    var interval=15;
    var times=0;

    function step(){
        times+=interval;
        if(times>=duration){//这个判断表示动画已经可以结束了
            //css(ele,attr,target);
            for(var attr in oTarget){
                css(ele,attr,oTarget[attr]);
            }
            clearInterval(ele.timer);
            ele.timer=null;
            if(typeof fnCallback=="function"){
                fnCallback.call(ele);
            }
        }else{
            for(var attr in oChange ){
                var change=oChange[attr];
                var begin=oBegin[attr];
                //var val=zhufengEffect.Back.easeOut(times,begin,change,duration);
                //开始定义的fnType用在这里
                var val=fnType(times,begin,change,duration);
                css(ele,attr,val);
            }
        }
    }
    ele.timer=window.setInterval(step,interval);
}

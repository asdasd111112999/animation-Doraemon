var css = `
/*首先做一点准备工作*/

*{
    box-sizing: border-box;
    transition: all 1s;
}

/*布置一下背景*/

#animation{
    width: 1200px;
    height: 100vh;
    background:#159EFF;
}
#coding{
    padding:20px;
    color:yellow;
    display: inline-block;
    width: 25%;
    height: 100vh;
    background: red;
    overflow: hidden;
    font-size:15px;
    font-weight:400;
    user-select:none;
}

#config{
    display:block;
    opacity:1;
}
.outline{
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -200px 0 0 -100px;
    display: inline-block;
    border: 5px solid black;
    height: 300px;
    width: 300px;
    background:#159EFF;
    border-radius: 50%;
}
.innerline{
    position: absolute;
    bottom:-3px;
    left: 50%;
    margin-left: -125px;
    border: 3px solid black;
    height: 250px;
    width: 250px;
    background: white;
    border-radius: 50%;
}

/*画铃铛*/

.bellring{
    position: absolute;
    bottom:-2px;
    left: 50%;
    margin-left: -75px;
    height: 20px;
    width: 150px;
    background: red;
    border: 3px solid black;
    border-radius: 10px;
    
}
.bell{
    position: absolute;
    bottom:-25px;
    left: 50%;
    margin-left: -17.5px;
    height: 35px;
    width: 35px;
    background: yellow;
    border: 2px solid black;
    border-radius: 50%;
}
.bell_element_top{
    position: absolute;
    top:4px;
    left: 50%;
    margin-left: -17px;
    height: 5px;
    width: 34px;
    background: yellow;
    border: 2px solid black;
    border-radius: 10px;
}
.bell_element_midden{
    position: absolute;
    top: 9px;
    left: 50%;
    margin-left: -6.5px;
    height: 13px;
    width: 13px;
    background: #808080;
    border: 2px solid black;
    border-radius: 10px;
}
.bell_element_bottom{
    position: absolute;
    top: 21px;
    left: 50%;
    height: 12px;
    border: 1px solid black;
    margin-left: -1px;
}

/*画眼睛*/
.left_eye{
    margin-left: -73px;
}
.right_eye{
    margin-left: 0px;
}

.left_eye,.right_eye{
    position: absolute;
    top:17px;
    left: 50%;
    border: 3px solid black;
    height: 75px;
    width: 75px;
    background: white;
    border-radius: 50%;
}
.left_eye::after{
    left: 50%;
}
.right_eye::after{
    right:50%;
}
.left_eye::after,.right_eye::after{
    position: absolute;
    top:17px;
    content: "";
    display: block;
    border: 3px solid black;
    height: 20px;
    width: 15px;
    background: white;
    border-radius: 50% 50% 0 0;
    border-bottom: transparent;
}


/*画鼻子*/

.nose{
    position: absolute;
    top:77px;
    left: 50%;
    margin-left: -25px;
    height: 50px;
    width: 50px;
    background: red;
    border: 2px solid black;
    border-radius: 50%;
}


/*来点高光！*/


.nose_highlight{
    position: absolute;
    top:5px;
    left: 20px;
    height: 15px;
    width: 15px;
    background: white;
    border-radius: 50%;
}

/*画胡子准备!*/

.beard>*{
    z-index: 2;
    content: "";
    height: 0px;
    width: 80px;
    background: #000;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
}

/*先画左边*/

.beard>.left_beard{
    left: 20px;
}
.beard>.left_top{
    top:100px;
    transform: rotate(15deg);
}
.beard>.left_midden{
    top:130px;
    transform: rotate(0deg);
}
.beard>.left_bottom{
    top:160px;
    transform: rotate(-15deg);
}

/*再画右边！*/

.beard>.right_beard{
    right: 20px;
}
.beard>.right_top{
    top:100px;
    transform: rotate(-15deg);
}
.beard>.right_midden{
    top:130px;
    transform: rotate(0deg);
}
.beard>.right_bottom{
    top:160px;
    transform: rotate(15deg);
}

/*最后画嘴巴啦！*/

.mouth>.mouth_center{
    position: absolute;
    top:140px;
    left: 50%;
    z-index: 1;
    content: "";
    width: 0px;
    height: 70px;
    border: 1px solid black;
}
.mouth>.mouth_bottom::after{
    position: absolute;
    top:-5px;
    left: -5px;
    content: "";
    height: 65px;
    width: 210px;
    border-radius: 25% ;
    background:white;
    display: block;
}
.mouth>.mouth_bottom{
    position: absolute;
    top:145px;
    left: 50%;
    margin-left: -100px;
    content: "";
    height: 80px;
    width: 200px;
    border: 2px solid black;
    border-radius: 50% ;
}

`;
let speed=30;
function controlspeed(e){
    const ary=Array.from(e.currentTarget.classList)
    if(ary.indexOf("add")!==-1){
        (speed<11)?speed=1:speed-=10;
    }else if(ary.indexOf("reduce")!==-1){
        (speed>490)?speed=500:((speed===1)?speed=10:speed+=10)
    }
}
let ms=document.querySelectorAll(".ms")[0];
let add=document.querySelectorAll(".btn")[0];
let reduce=document.querySelectorAll(".btn")[1];
reduce.onclick=add.onclick=controlspeed;
function write_css() {
    let coding = document.querySelector("#coding");
    let styleTag = document.querySelector("#styleTag");
    let n = 0;
    setTimeout(function fn(){
        n++;
        coding.innerHTML = css.substring(0, n);
        styleTag.innerHTML = css.substring(0, n);
        coding.scrollTop = coding.scrollHeight;
        console.log(ms.children);
        ms.children[1].innerText=speed+"ms";
        if (n < css.length) {setTimeout(fn,speed)}
    }, speed)
}
write_css();


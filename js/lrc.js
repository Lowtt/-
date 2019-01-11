//获得歌词时间对应内容
function getLrc(arr){
    //正则匹配歌词对应时间
    let timeReg = /\[\d{2}:\d{2}\.\d{2,}\]/g;
    for (let i=0;i<arr.length;i++){
        //获取歌词对应的时间
        let time = arr[i].match(timeReg);
        // console.log(arr,arr[i],time)
        //获取纯歌词文本
        let value = arr[i].replace(timeReg,"");
        //清除歌词为“空格”的
        if(value.length==1){
            continue;
        }
        for(let j=0;j<time.length;j++){
            // console.log(time)
            let t = time[j].slice(1,-1).split(":");
            // console.log(t)
            //将歌词对应时间转换成纯秒数
            let timeArr = parseInt(t[0])*60 + parseFloat(t[1]);
            lrcArr.push([timeArr,value]);
        }
        lrcList(lrcArr);
    }
    arrHas = setInterval(showLrc,20);
}
function timeChange(time){
    let min = Math.floor(time/60);
    let sec = Math.floor(time-60*min);
    return min+":"+sec;
}
//展示歌词
function showLrc(){
    //获取当前的播放时间
    let curTime = mp4.currentTime;
    let totalTime = mp4.duration;
    if(curTime==totalTime){
        clearInterval(arrHas);
    }
    $(".scurrent")[0].innerHTML = timeChange(curTime)+"/"+timeChange(totalTime);
    let pro = parseInt((curTime/totalTime)*100)+"%";
    $(".bar").css("width",pro);
    // bar.style.width = pro;
    let lrc = document.querySelector(".lrc");
    let lrcL = document.querySelector("#lrcL");
    for (let i=0;i<lrcArr.length;i++){
        if(i>0){
            lrcL.children[i-1].style.color = "black";
        }
        //当为最后一句歌词时直接显示
        if(i==lrcArr.length-1){
            lrcL.children[i].style.color = "rgb(255,0,255)";
        }else if((curTime>lrcArr[i][0])&&(curTime<lrcArr[i+1][0])){
            //播放时间大于对应歌词时间小于下一句歌词时间当前歌词高亮
            if(i>=5){
                lrc.scrollTop = 30*(i-4);
            }
            lrcL.children[i].style.color = "rgb(255,0,255)";
            break;
        }
    }
}
//歌词滚动显示
function lrcList(lrcArr){
    document.querySelector(".lrc").scrollTop = 0;
    if(document.querySelector("#lrcL")){
        document.querySelector("#lrcL").remove();
    }
    let ul = document.createElement("ul");
    ul.id = "lrcL";
    for(let i=0;i<lrcArr.length;i++){
        let li = document.createElement("li");
        li.textContent = lrcArr[i][1];
        li.style.height = "30px";
        li.style.width = "100%";
        li.style.textAlign = "center";
        ul.appendChild(li);
    }
    $(".lrc")[0].appendChild(ul)
}
var songList = document.querySelector(".songList");
var display = songList.children[1];
var head = songList.children[0];
var tiTle = head.children[0] 
var upDateTime = head.children[1];
// 获得新歌
function getNewSong(){
    $.ajax({
        url:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?topid=27",
        type: "GET",
        dataType:"jsonp",
        jsonp:'jsonpCallback',
        success:function(result){
            console.log(result)
            displayNew(result)
        },
        error:function(){
            console.log('error');
        }
    });
};
//展示新歌首发
function displayNew(result){
    upDateTime.textContent = result.update_time+"更新";
    result.songlist.forEach(function(song,index){
        var a = document.createElement("a");
            a.href = "javascript:;";
            a.title = "点击播放"
        var content = document.createElement("li");
            content.style.backgroundColor = bgColor();
            a.textContent = index+1; 
            content.name = song.data.songmid;
        var songname = document.createElement("h3");
            songname.textContent =song.data.songname;
        var singername = document.createElement("span");
            singername.textContent = song.data.singer[0].name;
            a.appendChild(songname);
            a.appendChild(singername);
            content.appendChild(a);
            display.appendChild(content);
            // 歌曲的播放
            content.addEventListener("click",function(){
                console.log(this.name)
                {
                    let hasAudio = document.querySelectorAll("audio");
                    if(hasAudio){
                        hasAudio.forEach(function(x){
                            x.remove();
                        })
                    }
                }
                let audio = document.createElement("audio");
                    this.appendChild(audio);
                    audio.src =  `https://api.bzqll.com/music/tencent/url?key=579621905&id=${this.name}&br=192`;
                    audio.oncanplay = function(){
                        console.log("b");
                        audio.play();
                        console.log(audio.duration,audio.currentTime)
                        // setTimeout(function(){

                        // },audio.duration)
                    }
        })
    })
}
//背景颜色
function bgColor(){
    let r = Math.floor(Math.random()*120+120);
    let g = Math.floor(Math.random()*120+120);
    let b = Math.floor(Math.random()*120+120);
    return `rgb(${r},${g},${b})`;
}
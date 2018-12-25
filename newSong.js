var display = document.querySelector(".display");
// 获得新歌
(function getNewSong(){
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
})();
function displayNew(result){
    result.songlist.forEach(function(song,index){
        var content = document.createElement("li");
            content.style.backgroundColor = "grey";
        var songname = document.createElement("h5");
            songname.textContent = song.data.songname;
        var singername = document.createElement("p");
            singername.textContent = song.data.singer[0].name;
            content.appendChild(songname);
            content.appendChild(singername);
            display.appendChild(content);
            // 歌曲的播放
            content.addEventListener("click",function(e){
                var lyric_url = " http://route.showapi.com/213-2";
                    mp3.src = `https://api.bzqll.com/music/tencent/url?key=579621905&id=${songUrl.songlist[index].data.songmid}&br=192`
                mp3.oncanplay = function(){
                    mp3.volume = 0.5
                    console.log("播放");
                    mp3.play();
                }
        })
    })
}
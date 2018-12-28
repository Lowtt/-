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
        createSongList(song.data.songmid,song.data.songname,song.data.singer[0].name,index);
    })
}
//背景颜色
function bgColor(){
    let r = Math.floor(Math.random()*120+120);
    let g = Math.floor(Math.random()*120+120);
    let b = Math.floor(Math.random()*120+120);
    return `rgb(${r},${g},${b})`;
}
//歌曲播放
function playSong(url){
    mp4.src = url;
    mp4.oncanplay = function(){
        mp4.play();
    }
}
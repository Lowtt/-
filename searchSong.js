let btn = document.querySelector(".soso");
var input = btn.previousSibling.previousSibling;
//搜索歌曲
btn.onclick = function(){
    if(input.value){
        soso(input.value);
    }else{
        input.value = prompt("请输入搜索内容");
        soso(input.value)
    }
}
//搜索歌曲
function soso(key){
    let url = "https://api.bzqll.com/music/tencent/search?key=579621905&limit=100&offset=0&type=song&s=";
    getSongDetail("json",url,key,function(data){
        displaySosoSong(data);
    })
}
//展示搜索歌曲
function displaySosoSong(data){
    for(let i=0;i<display.children.length;i++){
        display.children[i].remove();
        i--;
    }
    upDateTime.textContent = "";
    tiTle.innerHTML = input.value;
    data.data.forEach(function(song,index){
        createSongList(song.id,song.name,song.singer,index);
    });	
    songList.style.display = "block";
    $("#play").css("display","none");
}

//切歌
function songChange(){
    let random = Math.floor(Math.random()*songList.children[1].children.length);
    let id = songList.children[1].children[random].id;
    let name = songList.children[1].children[random].name;
    let url = `https://api.bzqll.com/music/tencent/url?key=579621905&id=${id}&br=192`;
    songList.children[1].children[random].value++;
    $(".singer")[0].innerHTML = "歌手名:"+songList.children[1].children[random].children[0].children[1].innerHTML
    playSong(url,id,name);
}
//播放/暂停
$(".plSt")[0].onclick = function(){
    console.log()
    let srcTest = /(http:\/\/127.0.0.1:8080\/)*stop.png/i;
    if(srcTest.test(this.src)){
        mp4.pause();
        this.src = "play.png";
        this.parentNode.title = "播放";
    }else{
        mp4.play();
        this.src = "stop.png";
        this.parentNode.title = "暂停";
    }
}

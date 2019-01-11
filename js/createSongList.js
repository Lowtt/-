//生成歌曲列表
function createSongList(contentId,songName,singerName,index){
    let a = document.createElement("a");
        a.href = "javascript:;";
        a.title = "点击播放";
    let content = document.createElement("li");
        content.style.backgroundColor = bgColor();
        content.id = contentId;
        content.name = songName;
        content.value = 0;
        a.textContent = index+1; 
    let songname = document.createElement("h3");
        songname.textContent =songName;
    let singername = document.createElement("span");
        singername.textContent = singerName;
        a.appendChild(songname);
        a.appendChild(singername);
        content.appendChild(a);
        display.appendChild(content);
        content.onclick = function(){
            if(this.value!=0){
                songList.style.display = "none";
                $("#play").css("display","block");
            }else{
                for(let i=0;i<$(".display")[0].children.length;i++){
                    if($(".display")[0].children[i]!=this){
                        $(".display")[0].children[i].value = 0;
                    }
                }
                let url = `https://api.bzqll.com/music/tencent/url?id=${this.id}&key=579621905`;
                // let url = `https://dl.stream.qqmusic.qq.com/C400${this.id}.m4a?guid=1754245201&vkey=50D9CC7025BC7FC0174031E6FAECAE699060F749053142139B2C2156D72CB22446686A7CC04071E0B2FC648BC2F9F39FCD8A72FF8FE54F17&uin=0&fromtag=66`;
                //播放歌曲
                playSong(url,this.id,this.name);
                $(".singer")[0].innerHTML = "歌手名:"+this.children[0].children[1].innerHTML;
                this.value++;
            } 
        }
}
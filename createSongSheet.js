//生成歌单列表
function createSongSheet(data,who){
    // console.log(data.data);
    data.data.forEach(function(sheet,index){
        let a = document.createElement("a");
				a.href = "javascript:;";
                a.title = sheet.name;
                a.style.cssText = 
                "text-overflow: ellipsis;overflow: hidden;white-space: nowrap;display:block;height:40px;border:1px solid black;border-top:none;"+
                "box-sizing:border-box;line-height:40px"
        let content = document.createElement("li");
            a.name = sheet.id; 
            a.textContent =sheet.name;
            content.style.backgroundColor = "rgba(0,200,50,.2)";
            content.appendChild(a);
            who.appendChild(content);
            a.addEventListener("click",function(){
                let url = `https://api.bzqll.com/music/tencent/songList?key=579621905&id=`;
                let _thisA = this;
                songList.style.display = "block";
                $("#play").css("display","none");
                //获得歌单歌曲
                getSongDetail("json",url,this.name,function(data){
                    for(let i=0;i<display.children.length;i++){
                        display.children[i].remove();
                        i--;
                    }
                    upDateTime.textContent = "";
                    tiTle.innerHTML = _thisA.innerHTML;
                    data.data.songs.forEach(function(song,index){
                        //生成歌单歌曲详情列表
                        createSongList(song.id,song.name,song.singer,index);
                    })
                })
            })
    })
}
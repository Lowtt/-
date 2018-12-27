//生成歌单列表
function createSongSheet(data,who){
    console.log(data.data);
    data.data.forEach(function(sheet,index){
        let a = document.createElement("a");
				a.href = "javascript:;";
                a.title = "查看详情";
                a.style.cssText = "text-overflow: ellipsis;overflow: hidden;white-space: nowrap;display:block;height:40px;border:1px solid black;border-top:none;box-sizing:border-box;line-height:40px"
        let content = document.createElement("li");
            a.name = sheet.id; 
            a.textContent =sheet.name;
            content.appendChild(a);
            who.appendChild(content);
            content.onclick = function(){
                // let url = `https://api.bzqll.com/music/tencent/url?key=579621905&id=${this.name}&br=192`;
                // playSong(url);
            }
    })
}
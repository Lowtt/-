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
			displayNew(result);
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
function playSong(url,idName,nameName){
    mp4.src = url;
    mp4.oncanplay = function(){
		songList.style.display = "none";
		$("#play").css("display","block");
		mp4.play();
		playLrc(idName,nameName);
        let Url = "https://api.bzqll.com/music/tencent/lrc?key=579621905&id=";
		getSongDetail("",Url,idName,function(data){
			// console.log(data)
			arr.length = 0;
			lrcArr.length = 0;
			let m = 0;
			for(let i=0;i<data.length;i++){
				if(data[i]=="["){
					let re = data.substring(m,i);
					arr.push(re);
					m = i;
				}
			}
			arr.push(data.substring(m,data.length));
			arr.shift();
			let moveExcess = /(ti)+|(ar:)+|(al)+|(by:)+|(offset)+/i;
			for(let i=0;i<arr.length;i++){
				if(moveExcess.test(arr[i])){
					arr.splice(i,1);
					i--;
				}
			}
			if(arrHas){
				$("#show")[0].innerHTML = "";
				clearInterval(arrHas);
				getLrc(arr);
			}else{
				getLrc(arr);
			}
		})
    }
}
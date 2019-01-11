//歌曲播放
function playSong(url,idName,nameName){
	mp4.src = url;
	// mp4.src = "http://dl.stream.qqmusic.qq.com/C400000Qepff3UyUWO.m4a?guid=1754245201&vkey=50D9CC7025BC7FC0174031E6FAECAE699060F749053142139B2C2156D72CB22446686A7CC04071E0B2FC648BC2F9F39FCD8A72FF8FE54F17&uin=0&fromtag=66";
    mp4.oncanplay = function(){
		songList.style.display = "none";
		$("#play").css("display","block");
		$(".goto").css("display","inline-block");
		mp4.play();
		playLrc(idName,nameName);
		let Url = "https://api.bzqll.com/music/tencent/lrc?key=579621905&id=";
		//获得歌词
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
			$(".album")[0].innerHTML = "专辑名:"+arr[3].substring(4,arr[3].length-2);
			arr.shift();
			// console.log(arr);
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
//播放界面
function playLrc(songId,songName){
    let songPic = document.querySelector(".songPic");
    songPic.style.background = `url('https://api.bzqll.com/music/tencent/pic?key=579621905&id=${songId}')`;
    $(".albumImg")[0].src = `https://api.bzqll.com/music/tencent/pic?key=579621905&id=${songId}`;
    songPic.style.backgroundPosition = "center top";
    let name = songPic.nextSibling.nextSibling.nextSibling.nextSibling;
    name.innerHTML = songName;
    $(".sName")[0].innerHTML = songName;
}
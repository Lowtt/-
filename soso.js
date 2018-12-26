function soso(key){
    let url = " https://api.bzqll.com/music/tencent/search?key=579621905&limit=100&offset=0&type=song&s=";
    getSongDetail(url,key,function(data){
        console.log(data)
    })
}
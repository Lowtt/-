let isTrue = 0;
let istrue = true;
//滑动显示
function slideDown(Who,span){
    $(Who).slideDown("slow");
    span.style.cssText = "display:inline-block;transform:rotate(180deg);transition:.5s";
}
//滑动隐藏
function sildeUp(Who,span){
    $(Who).slideUp("slow");
    span.style.cssText = "display:inline-block;transform:rotate(360deg);transition:.5s";
}
//歌单列表滑动
function slide(is,Who,span){
    if(is===isTrue){
        if(isTrue%2==0){
            slideDown(Who,span);
            isTrue++;
        }else{
            sildeUp(Who,span);
            isTrue++;
        }
    }else{
        if(istrue){
            slideDown(Who,span);
            istrue = false;
        }else{
            sildeUp(Who,span);
            istrue = true;
        }
    }
}
{
    let span = document.querySelector(".hot").children[0].children[0].children[0];
    $(".hot").on("click",function(){
        slide(isTrue,".HotList",span);
    }) 
}
{
    let span1 = document.querySelector(".newList").children[0].children[0].children[0];
    $(".newList").on("click",function(){
        slide(istrue,".NewList",span1);
    }) 
}
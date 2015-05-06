/**
 * Created by asus-pc on 2015/5/5.
 */


var ob;
var count=4;
var z=0;
var m=0;

//下次添加图片只需要改count数值即可。

$(document).ready(function(){
    $(".show_pic").each(function(){
        $(this).css({"z-index":z});
        z--;
    });//改变图片叠放顺序，使第一张置于最顶部;

    changePic(count);
    for(var i=0;i<count;i++){
        click_changePic(i);
    }
    for(var i=0;i<5;i++)
    {
        init_showList(i);
    }
})

function init_showList(n){
    showList(n);
    hideList(n);
}

function showList(n){
    var shop_class=$(".shopClass").eq(n);
    var show_list=$(".showList").eq(n);
    shop_class.mouseenter(function(){
        show_list.stop();
        shop_class.addClass("classActive");
        show_list.css({"display":"inherit"});
    });
}

function hideList(n){
    var shop_class=$(".shopClass").eq(n);
    var show_list=$(".showList").eq(n);
    shop_class.mouseleave(function () {
        show_list.mouseenter(function () {
            shop_class.addClass("classActive");
            show_list.css({"display": "inherit"});
        });
        //实际上先执行以下语句，在执行上面mouseenter语句
        shop_class.removeClass("classActive");
        show_list.css({"display": "none"});
    });
    show_list.mouseleave(function () {
        shop_class.mouseenter(function () {
            shop_class.addClass("classActive");
            show_list.css({"display": "inherit"});
        });
        shop_class.removeClass("classActive");
        show_list.css({"display": "none"});
    });
}



function changePic(count){

    setInterval(function(){
        var shop_pic= $(".show_pic").eq(m);
        var btn=$(".change_btn").eq(m);
        shop_pic.fadeOut(400);
        //btn.removeClass("active_btn");
        m++;
        if(m>=count){
            m=0;
        }
        $(".show_pic").eq(m).fadeIn(400);
        btn=$(".change_btn").eq(m);
        $(".change_btn").not(btn).removeClass("active_btn");
        btn.addClass("active_btn");
    },7000);
}

function click_changePic(i){
        $(".change_btn").eq(i).click(function(){
            m=i;
           var showPic= $(".show_pic").eq(i);
            $(".show_pic").not(showPic).stop();
            $(".show_pic").not(showPic).fadeOut(400);
            showPic.fadeIn(400);
            $(".change_btn").not(this).removeClass("active_btn");
            $(this).addClass("active_btn");
        });
}
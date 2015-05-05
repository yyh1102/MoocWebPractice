/**
 * Created by asus-pc on 2015/5/5.
 */


var ob;

$(document).ready(function(){
    for(var i=0;i<5;i++)
    {

        showList(i);
        hideList(i)
    }

})


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


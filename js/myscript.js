$(".depth1 > li").on("click", function(){

    $(this).toggleClass("on")
    $(this).siblings().removeClass("on")
    $(this).find(".depth2").stop().slideToggle(400)
    $(this).siblings().find(".depth2").stop().slideUp(400)

})

// 테이블 텝메뉴 누르면 바뀌기
$(".tabmenu > li").on("click", function(){

    $(this).addClass("active")
    $(this).siblings().removeClass("active")
})

// 작은화면에서 햄버거모양 누르면 메뉴가나옴
$("#header .openMOgnb").on("click", function(){
    $("#header").addClass("on")
   $("#gnb").show()
})

// 햄버거모양을 누르면 메뉴와 엑스버튼이 나오는데
// 엑스버튼을 누르면 메뉴창이 닫힘
$("#header .closeMOgnb").on("click", function(){
    $("#header").removeClass("on")
    $("#gnb").hide()
})

// 작은 메뉴창이 닫히고 창이 커지면 메뉴바가 안나오는걸 다시 불러옴
// 799사이즈 이상이 되면 메뉴를 다시 보여줌
$(window).resize(function(){
    var ww = $(this).width()
    if (ww > 799) {
        $("#header").removeClass("on")
        $("#gnb").show()
    } else {
        $("#gnb").hide()
    }
})

/* 사진을 누르면 새로 창나오는 팝업박스 만들기 */
$(".me  li > a").on("click", function(e){
    // 위 경로에 담겨 있는 링크가 눌리지 않게 preventDefault(); 요거를 씀
    e.preventDefault();
    // 각 속성을 가진게 추출이 되서 var 값에 담김
    var top = $(this).parent().offset().top
    var href = $(this).attr("href")
    var src = $(this).find("img").attr("src")
    var alt = $(this).find("img").attr("alt")
    $(".popupBox").addClass("on")
    $(".popupBox .inner").css({
        top:top
    })
    $(".popupBox .inner").attr("href", href)
    $(".popupBox .inner img").attr("src", src).attr("alt", alt)
})

// 엑스버튼을 누르면 창이 닫아짐
$(".popupBox button").on("click", function(){
    $(this).parents(".popupBox").removeClass("on")
})



/* 사진을 누르면 새로 창나오는 팝업박스2 만들기 */
$(".me2  li > a").on("click", function(e){
    // 위 경로에 담겨 있는 링크가 눌리지 않게 preventDefault(); 요거를 씀
    e.preventDefault();
    // 각 속성을 가진게 추출이 되서 var 값에 담김
    var top = $(this).parent().offset().top
    var href = $(this).attr("href")
    var src = $(this).find("img").attr("src")
    var alt = $(this).find("img").attr("alt")
    $(".popupBox2").addClass("on")
    $(".popupBox2 .inner").css({
        top:top
    })
    $(".popupBox2 .inner a").attr("href", href)
    $(".popupBox2 .inner img").attr("src", src).attr("alt", alt)
})

// 엑스버튼을 누르면 창이 닫아짐
$(".popupBox2 button").on("click", function(){
    $(this).parents(".popupBox2").removeClass("on")
})

// // 이걸 넣으면 스크롤을 내려서 눌러도 크기가 화면 크기에 맞는 위치에 팝업이 켜짐
// var top = $(this).parent().offset().top
// $(".popupBox2 .inner").css({
//     top:top
// })


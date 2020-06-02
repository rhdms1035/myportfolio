
// 스크롤을 내리면 탑버튼이 보이고 안보이고
$(window).scroll(function(){
    var sct = $(this).scrollTop();
        if ( $("html").hasClass("mobile")){
            if (sct > 50) {
                $("to_top").show()
            } else {
                $("to_top").hide()
            }
        } else {
            $("to_top").show()
        }
})

// 탑버튼을 누르면 자연스럽게 위로 
$(".to_top").on("click", function(){
    $("body, html").animate({scrollTop:"0px"}, 600)
})

// 화면사이즈가799커지면 클래스가 민티드
var winWidth;
function init() {
    var winWidth = $(window).width()
    if ( winWidth > 799 ) {
        $("#header").removeClass("on")
        $("html").addClass("minTb").removeClass("mobile")

// 화면사이즈가 799보다 작아지면 클래스가 모바일로 됨
    } else {
        $("html").addClass("mobile").removeClass("minTb")
    }
}

// function init()에 담은 값을 여기에서 불러서 출력
$(window).resize(function(){
    init()
})

$(window).resize(function(){
    init()
})

// 로딩표시 불러와서 딜레이시켰다가 없어지게끔
$(window).load(function(){
    $(".loadingAni").delay(1000).fadeOut(500)
    init()
})

// 작은화면에서 메뉴를 키고 큰화면으로 다시 넘어왔을때 메뉴부분 나타나게하기
$(".depth1 > li > a").on("mouseover focus", function(){
    if ( $(this).parents("#header").hasClass("on")) {
        $(this).next().fadeOut(0)
    } else {
        $(this).next().stop().slideDown(200)
        $(this).parent().siblings().children(".dep2box")
        .stop().slideUp(200)
    }
})

// 메뉴에 마우스 올렸을때 서브메뉴 내려왔다가 올라가기
$(".depth1 > li").on("mouseleave", function(){
    $(this).children(".dep2box").stop().slideUp(400)
})

$("depth1 > li:last .depth2 > li:last > a").on("blur", function(){
    $(this).parents(".dep2box").stop().slideUp(400)
})

// 작은화면에서 햄버거모양 누르면 메뉴가나옴
$("#header .openMOgnb").on("click", function(){
    if ( !$(this).parents("#header").hasClass("on") ) {
        $(this).parents("#header").addClass("on")
    }
})

$("#header .closeMOgnb").on("click", function(){
    $(this).parents("#header").removeClass("on")
})

/* 사진을 누르면 새로 창나오는 팝업박스 만들기 */
$(".place_list > li > a").on("click", function(e){
    // 위 경로에 담겨 있는 링크가 눌리지 않게 preventDefault(); 요거를 씀
    e.preventDefault();
    // 각 속성을 가진게 추출이 되서 var 값에 담김
    var href = $(this).attr("href")
    var src = $(this).attr("data-src")
    var text = $(this).find("h3").text()
    var info = $(this).find("p").text()
    var alt = $(this).find("img").attr("alt")

    if (winWidth <= 799 ) {
        var litop = $(this).parent().offset().top;
        $(".popupBox  .inner").css({
                top:litop,
                width:"80%",
                left:"0%",
                transform:"translate(0%)",
                margin:"0  10%"
        })
}
    $(".popupBox").addClass("on")
    $(".popupBox .inner h3").text(text)
    $(".popupBox .inner p").text(info)
    $(".popupBox .inner div a").attr("href", href)
    $(".popupBox .inner div img").attr("src", src).attr("alt", alt).attr("width", "100%")
})

// 팝업창 엑스버튼을 누르면 창이 닫아짐
$(".popupBox button").on("click", function(){
    $(this).parents(".popupBox").removeClass("on")
})

// 메인슬라이드3개를 돌아가게 만듬.
// 돌아가게 하려면 링크.slick.css와 스크립트slick.min.js을 꽂아놔야함
$(".visualRoll").slick({
    autoplay:true,     //기본값은 false, 자동재생
    autoplaySpeed:3000,      //슬라이드 지연시간 3000->3초
    dots:true,     //기본값은 false, 슬라이드번호버튼
    speed:600,        //슬라이드 동작하는데 걸리는 시간
    slidesToShow:1,        //보여지는 슬라이드의 수
    slidesToScroll:1,       //넘어가는 슬라이드의 수
    pauseOnHover:false,       //마우스오버시 슬라이드 멈춤 여부
    pauseOnDotsHover:true,         //슬라이드번호버튼 위에 마우스오버시멈춤여부
    pauseOnFocus:false,      //동그라미버튼 클릭시 자동실행 멈춤여부
    cssEase:'linear',          //슬라이드 움직임 속도함수 (생략가능)
    draggable:true,          //마우스드래그했을때 움직임 여부
    fade:false,          //true값이면 페이드인페이드아웃 효과가 적용됨
    arrows:true,      //기본값은 true이며 슬라이드 좌,우측 방향버튼
    prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
})
$(document).ready(function(){
    $(".product_description div img").parent().css('text-align', 'center');
    $(".product_description div iframe").parent().css('text-align', 'center');
    $( window ).load(function() {
        var results = $(".thumbnails .slick-track.owl-stage").css('transform').match(/matrix(?:(3d)\(\d+(?:, \d+)*(?:, (\d+))(?:, (\d+))(?:, (\d+)), \d+\)|\(\d+(?:, \d+)*(?:, (\d+))(?:, (\d+))\))/)
        console.log(results);
        var count = 0;
        var total = 0;
        $(".thumbnails .slick-prev").click(function() { 
            count++;          
            var slide = $(".thumbnails-item").height();
            total = count * (-slide);
            $(".thumbnails .slick-track.owl-stage").css({"transform": "translate3d(0px, " + total + "px, 0px)"});           
        });
        $(".thumbnails .slick-next").click(function() {       
            var slide = $(".thumbnails-item").height();
            total += slide;
            $(".thumbnails .slick-track.owl-stage").css({"transform": "translate3d(0px, " + total + "px, 0px)"});           
        });
    });
});
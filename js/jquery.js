// hover

// $('#tomimg').hover(function() {
//     this.src = " ";
// }, function(){
//     this.src = 'img/mahomes-throw.jpeg';
// });

//doubleClick
// $('#tomimg').dblclick(function() {
//     var currentSize = parseFloat($(this).css('font-size'));
//     var doubledSize = (currentSize * 2) + "px";
//     $(this).css('font-size', '${doubledSize}');
// });

//adding/removing eventListener

$('.RBs').on('click', function() {
    $('#tomimg').off('mouseenter');
})
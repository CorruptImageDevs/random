
$(document).ready(function() {


    var htmlMethod = $('#leader').html();
    var followerContent = $("#follower").html("I am the leader now");
    if (followerContent.html() === "I am the leader now") {
        $("#leader").html("what you are is a copy cat")
    }

    $("#font-changer").click(function () {
        var currentFontFamily = $("body").css("font-family");
        if (currentFontFamily === "serif" || currentFontFamily === "Times") {
            $("body").css("font-family", "sans-serif");
        } else {
            $("body").css("font-family", "serif");
        }
    });

});

    $("h2").mouseenter(function() {
        $("h2").addClass("highlight");
        $("h2").addClass("hotPinkIt");
    });


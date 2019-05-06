$(document).ready(function(){
    $("#col-lg-4").click(function(){
        $(".img").slideToggle();
        $(".desc").slideToggle();
    });

    $("#col").click(function(){
        $(".saa").slideToggle();
        $(".par").slideToggle();
    });
    $("#lg").click(function(){
        $(".pro").slideToggle();
        $(".ra").slideToggle();
    });
    $("button").click(function(event){
        event.preventDefault();
        var display = document.getElementById("you").value;
        alert("Hello " + display + "Thank you for your message.");
    });
});

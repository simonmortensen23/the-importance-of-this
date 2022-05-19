$("button").mouseenter(function() {
    $(this).removeClass("make-red").addClass("make-blue")
})
$("button").mouseleave(function() {
    $(this).removeClass("make-blue").addClass("make-red")
})
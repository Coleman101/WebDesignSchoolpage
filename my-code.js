/**
 * @author compsci
 */
$(document).ready(function(){
	
	$("p").hide();
	$("#topPicture").hide();
	
	$("h1").click(function(){
		
	$(this).next().fadeToggle(1000);
		
	});
	
	/*this is JQ02 - button selectors */
	
	$("#testbutton").click(function() {
	$("div, strong, #testbutton").css("background-color","red");
	});
	
	/* JQ02 mouseovers */
	$("h3").mousedown(function() {
		
		$(this).css("background-color","#0000FF");
	})
	$("h3").mouseup(function() {
		
		$(this).css("background-color","#00FF00");
	})
		$("h3").mouseenter(function() {
		
		$(this).css("background-color","#000000");
	})
	$("h3").mouseleave(function() {
		
		$(this).css("background-color","#FF0000");
	})
	  $("h2").click(function() {
    $("h4").animate({
      "font-size": "toggle",
      "width": "50%",
      "left": "+=100px"
    }, 1000);
  });
});

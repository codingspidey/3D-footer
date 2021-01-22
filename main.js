$(document).ready(function(){
	var last_child = $(".textHolder").children()[$(".textHolder").children().length-1].outerHTML;
	$(".contentHolder").css("padding-top", $(".textHolder span").height());
	function elementPlacing()
	{
		font_size = $("span").css("font-size").replace("px","");
		$(".bg").css("-webkit-transform", "translateY("+font_size/1.06+"px) rotateX(90deg)");
		var translate_Start = 100;
		$(".textHolder span").each(function(){
			if($(this).is( ":last-child" ))
			{
				$(this).css("-webkit-transform", "translateZ(0px) scale(1.2)");
			}
			else
				$(this).css("-webkit-transform", "translateZ("+translate_Start+"px)");
			translate_Start = translate_Start-1;
		});
	}
	for(var i=0; i<30; i++)
	{
		$(".textHolder").append(last_child);
	}
	elementPlacing();
	$(document).on("mousemove", function(event)
	{
		var window_height = $(this).height();
		var window_width = $(this).width();
		var mouseXpos = event.clientX;
		var mouseYpos = event.clientY;
		var YrotateDeg = (window_width/2 - mouseXpos) * -0.08;
		var XrotateDeg = (window_height/1.5 - mouseYpos) * -0.04;
		$(".wrap").css("transform", "rotateX("+XrotateDeg+"deg) rotateY("+YrotateDeg+"deg)");
	});
	$(window).resize(function(){
		elementPlacing();
		$(".contentHolder").css("padding-top", $(".textHolder span").height());
	});
});
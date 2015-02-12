var addC=function(){
			$(".braces").addClass("appear-left");
			$(".text").addClass("appear");
			$("#box").addClass("appear-right");
		};
		var initiat=function(callback){
			callback();
			palm();
		}
		function rotateLeft(){
			$('.cube3d').removeClass("rotate-left-cube rotate-right-cube rotate-bottom-cube rotate-back-cube rotate-front-cube rotate-top-cube")
			.toggleClass("rotate-left-cube");
		}
		function rotateRight(){
			$('.cube3d').removeClass("rotate-left-cube rotate-right-cube rotate-bottom-cube rotate-back-cube rotate-front-cube rotate-top-cube")
			.toggleClass('rotate-right-cube');
		}
		function rotateUp(){
			$('.cube3d').removeClass("rotate-left-cube rotate-right-cube rotate-bottom-cube rotate-back-cube rotate-front-cube rotate-top-cube").toggleClass('rotate-top-cube');
		}
		function rotateDown(){
			$('.cube3d').removeClass("rotate-left-cube rotate-right-cube rotate-bottom-cube rotate-back-cube rotate-front-cube rotate-top-cube").toggleClass('rotate-bottom-cube');
		}
		function rotateBack(){
			$('.cube3d').removeClass("rotate-left-cube rotate-right-cube rotate-bottom-cube rotate-back-cube rotate-front-cube rotate-top-cube").toggleClass('rotate-back-cube');
		}
		function rotateFront(){
			$('.cube3d').removeClass("rotate-left-cube rotate-right-cube rotate-bottom-cube rotate-back-cube rotate-front-cube").toggleClass('rotate-front-cube');
		}
		$("#turn-right").click(function(){
			rotateRight();
		});
		$("#turn-left").click(function(){
			rotateLeft();
		});
		$("#turn-front").click(function(){
			rotateFront();
		});
		$("#turn-back").click(function(){
			rotateBack();
		});
		$("#turn-top").click(function(){
			rotateUp();
		});
		$("#turn-bottom").click(function(){
			rotateDown();
		});

		$(document).ready(function(){
			$(".front-face p").hover(function(){
				$(this).parent().parent().addClass("popit");
				var color=$(this).parent().parent().data('color').trim().split(" ");
				var ele=$(this).parent().parent().find(".face");
				//console.log(ele);
				$.each(color,function(key,value){
					$(ele[key]).css({"background":value});
				});
			});
			$(".cube").mouseleave(function(){
				$(this).removeClass("popit").find(".face").css({"background":"transparent"});

			});
			$(".close").click(function(){
				$(this).parent().hide(1);
				$("#overlay").fadeOut(500,function(){
					initiat(addC);
				});

			});
		});
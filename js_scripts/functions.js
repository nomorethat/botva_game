$(document).ready(function(){
	$("#rules").bind("click", show_rules);
	
	function show_rules(){
		$("#bg_layer").show();
		$("#div_rules").show();
	}
	
	$("#close_rules").bind("click", close_rules);
	
	function close_rules(){
		$("#bg_layer").hide();
		$("#div_rules").hide();
	}
	
	
	function generate_of_points(){
		var your_first_point = Math.floor(Math.random()*6 + 1);
		$("#your_first_point span").text(your_first_point);
		
		var your_second_point = Math.floor(Math.random()*6 + 1);
		$("#your_second_point span").text(your_second_point);
		
		var your_third_point = Math.floor(Math.random()*6 + 1);
		$("#your_third_point span").text(your_third_point);
		
		var computer_first_point = Math.floor(Math.random()*6 + 1);
		$("#computer_first_point span").text(computer_first_point);
		
		var computer_second_point = Math.floor(Math.random()*6 + 1);
		$("#computer_second_point span").text(computer_second_point);
		
		var computer_third_point = Math.floor(Math.random()*6 + 1);
		$("#computer_third_point span").text(computer_third_point);
	}
	
	function computing_of_result(){
		var your_first_point = Number($("#your_first_point span").text());
		var your_second_point = Number($("#your_second_point span").text());
		var your_third_point = Number($("#your_third_point span").text());
		var computer_first_point = Number($("#computer_first_point span").text());
		var computer_second_point = Number($("#computer_second_point span").text());
		var computer_third_point = Number($("#computer_third_point span").text());
		
		var your_sum = your_first_point + your_second_point + your_third_point;
		var computer_sum = computer_first_point + computer_second_point + computer_third_point;
		
		if(your_sum > computer_sum)
			return 1;
		if(your_sum == computer_sum)
			return 0;
		if(your_sum < computer_sum)
			return -1;
	}
	
	
	$("#button_i_have").bind("click", click_on_button_i_have);
	
	function click_on_button_i_have(){
		generate_of_points();
		if(computing_of_result() == 1)
			you_win();	
		else
			you_lose();
	}
	
	$("#button_computer_have").bind("click", click_on_button_computer_have);
	
	function click_on_button_computer_have(){
		generate_of_points();
		if(computing_of_result() == -1)
			you_win();
		else
			you_lose();
	}
	
	$("#both").bind("click", click_on_both);
	
	function click_on_both(){
		generate_of_points();
		if(computing_of_result() == 0)
			you_win();
		else
			you_lose();
	}
	
	function you_win(){
		$("#result_message").text("Угадал!!! +100$");
		var you_cash = $("#you_cash span").text();
		you_cash = $.trim(you_cash);
		you_cash = Number(you_cash.slice(0, you_cash.length - 1));
		you_cash = you_cash + 100;
		$("#you_cash span").text(you_cash + "$"); 
		
		var computer_cash = $("#computer_cash span").text();
		computer_cash = $.trim(computer_cash);
		computer_cash = Number(computer_cash.slice(0, computer_cash.length - 1));
		computer_cash = computer_cash - 100;
		$("#computer_cash span").text(computer_cash + "$"); 
		
		if(computer_cash == 0){
			$("#result_message").text("You win!!! =)))");
			$("#button_i_have").text("-");
			$("#button_computer_have").text("-");
			$("#both").text("-");
			$("#button_i_have").unbind();
			$("#button_computer_have").unbind();
			$("#both").unbind();
		}
	}
	
	function you_lose(){
		$("#result_message").text("Не угадал!!! -100$");
		var you_cash = $("#you_cash span").text();
		you_cash = $.trim(you_cash);
		you_cash = Number(you_cash.slice(0, you_cash.length - 1));
		you_cash = you_cash - 100;
		if(you_cash == 0){
			$("#result_message").text("Game Over!!! =(");
			$("#button_i_have").text("-");
			$("#button_computer_have").text("-");
			$("#both").text("-");
			$("#button_i_have").unbind();
			$("#button_computer_have").unbind();
			$("#both").unbind();
		}
		$("#you_cash span").text(you_cash + "$");
		
		var computer_cash = $("#computer_cash span").text();
		computer_cash = $.trim(computer_cash);
		computer_cash = Number(computer_cash.slice(0, computer_cash.length - 1));
		computer_cash = computer_cash + 100;
		$("#computer_cash span").text(computer_cash + "$"); 
	}
	
	$("#new_game").bind("click", new_game);
	
	function new_game(){
		$("#you_cash span").text("1000$");
		$("#computer_cash span").text("1000$");
		
		$("#your_first_point span").text("-");
		$("#your_second_point span").text("-");
		$("#your_third_point span").text("-");
		$("#computer_first_point span").text("-");
		$("#computer_second_point span").text("-");
		$("#computer_third_point span").text("-");
		
		$("#result_message").text("-");
		
		$("#button_i_have").text("У меня!");
		$("#button_computer_have").text("У него=(");
		$("#both").text("Поровну...");
		$("#button_i_have").bind("click", click_on_button_i_have);
		$("#button_computer_have").bind("click", click_on_button_computer_have);
		$("#both").bind("click", click_on_both);
	}
	
});
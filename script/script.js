$(function () {

	var mytext = "test my test";
	var my_new_text = '';
	var count = 0;
	var mistake_count = 0;

	

	$('.my_text').text(mytext);

	$('.my_input').focus(); // autofocus on .my_input field

	$('.my_input').on('keypress', function(e) {
		if (count < mytext.length) {
			if (mytext[count] == String.fromCharCode(e.charCode)) {
				my_new_text += '<span class="green" onfocus>' + mytext[count] + '</span>';
				$('.my_text').html(my_new_text + mytext.substr(count+1, mytext.length));
				count++;
			}
			else {
				my_new_text += '<span class="red" onfocus>' + mytext[count] + '</span>';
				$('.my_text').html(my_new_text + mytext.substr(count+1, mytext.length));
				count++;
				mistake_count++;
			}
		}
		else {
			$(".my_input").prop("disabled", true);
			$('.result').html('<p>Total number of characters: '+ count +'</p>');
			// $('.result').html('<p>Mistakes: '+ mistake_count +'</p>');
		}
	});

	$('.my_input').on('keydown keyup',function(e) {

		var color = e.type=="keydown" ? 'red' : 'grey' ;
		if(e.keyCode == e.keyCode){
			$('.c'+ e.keyCode).css({background: color});
		}
	}); // on keyup/keydown changes the color of the keyboard

	

}); // document 
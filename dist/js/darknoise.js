$( document ).ready(function() {
    $( "audio" ).click(function( event ) {
        alert( "Thanks for visiting!" );
    });
	function play(){
		$( "audio1" ).play();
	}
	function stop(){
		$( "audio1" ).stop();
	}
 
});
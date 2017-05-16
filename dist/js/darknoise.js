$( document ).ready(function() {
    var stream = {
		title: "Truck",
		wav: "../../assets/sounds/truck-backup.wav"
	},
	ready = false;

	$("#jquery_jplayer_1").jPlayer({
		ready: function (event) {
			ready = true;
			$(this).jPlayer("setMedia", stream);
			$(this).jPlayer("setMedia", stream).jPlayer("play");
		},
		loop: true,
		canplay: function() {
		   $("#jquery_jplayer_1").jPlayer("play");
		},  
		swfpath:"js",
		volume: "0.2",
		supplied: "wav",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false
	});
 
});
$( document ).ready(function() {
    var stream = {
		title: "Truck",
		wav: "../assets/sounds/truck-backup.wav"
	};
	var stream2 = {
		title: "Air siren",
		mp3: "../assets/sounds/air-raid.mp3"
	};
	var stream3 = {
		title: "Bugs",
		mp3: "../assets/sounds/swarm.mp3"
	};
	var stream4 = {
		title: "Baby",
		mp3: "../assets/sounds/baby.mp3"
	};
	var stream5 = {
		title: "Nails on chalkboard",
		mp3: "../assets/sounds/nails.mp3"
	};
	var stream6 = {
		title: "Grinder",
		mp3: "../assets/sounds/grinder.mp3"
	};
	var stream7 = {
		title: "Dialup",
		wav: "../assets/sounds/dialup.mp3"
	};
	var stream8 = {
		title: "Dentist drill",
		mp3: "../assets/sounds/dentist.mp3"
	};
	var stream9 = {
		title: "Car alarm",
		mp3: "../assets/sounds/car-alarm.mp3"
	};
	ready = false;

	//Define settings for each player div
	var jPlayerCfgs = [
		{stream: stream, playerId: "#jquery_jplayer_1",type:"wav",cssSelectorlocation:"#jp_container_1"},
		{stream: stream2, playerId: "#jquery_jplayer_2",type:"mp3",cssSelectorlocation:"#jp_container_2"},
		{stream: stream3, playerId: "#jquery_jplayer_3",type:"mp3",cssSelectorlocation:"#jp_container_3"},
		{stream: stream4, playerId: "#jquery_jplayer_4",type:"mp3",cssSelectorlocation:"#jp_container_4"},
		{stream: stream5, playerId: "#jquery_jplayer_5",type:"mp3",cssSelectorlocation:"#jp_container_5"},
		{stream: stream6, playerId: "#jquery_jplayer_6",type:"mp3",cssSelectorlocation:"#jp_container_6"},
		{stream: stream7, playerId: "#jquery_jplayer_7",type:"wav",cssSelectorlocation:"#jp_container_7"},
		{stream: stream8, playerId: "#jquery_jplayer_8",type:"mp3",cssSelectorlocation:"#jp_container_8"},
		{stream: stream9, playerId: "#jquery_jplayer_9",type:"mp3",cssSelectorlocation:"#jp_container_9"}
	];
	var j=0;
	//Assign the settings for each player to each div
	for(var i=0; i < jPlayerCfgs.length; i++){
		var cfg = jPlayerCfgs[i];
		console.log(cfg.playerId);
		$(cfg.playerId).jPlayer({
			ready: function (event) {
				ready = true;
				$(this).jPlayer("setMedia", jPlayerCfgs[j].stream);
				$(this).jPlayer("setMedia", jPlayerCfgs[j++].stream).jPlayer("play");
			},
			loop: true,
			canplay: function() {
			   $(cfg.playerId).jPlayer("play");
			},  
			swfpath:"js",
			volume: "0.0",
			supplied:cfg.type,
			wmode: "window",
			useStateClassSkin: true,
			cssSelectorAncestor: cfg.cssSelectorlocation,
			autoBlur: false
		});
	}
	
});
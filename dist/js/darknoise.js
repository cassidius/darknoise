$( document ).ready(function() {
    var stream = {
		title: "Truck",
		wav: "../../assets/sounds/truck-backup.wav"
	};
	var stream2 = {
		title: "Air siren",
		mp3: "../../assets/sounds/air-raid.mp3"
	};
	var stream3 = {
		title: "Bugs",
		mp3: "../../assets/sounds/swarm.mp3"
	};
	var stream4 = {
		title: "Baby",
		mp3: "../../assets/sounds/baby.mp3"
	};
	var stream5 = {
		title: "Nails on chalkboard",
		mp3: "../../assets/sounds/nails.mp3"
	};
	var stream6 = {
		title: "Grinder",
		mp3: "../../assets/sounds/grinder.mp3"
	};
	var stream7 = {
		title: "Female scream",
		wav: "../../assets/sounds/scream.wav"
	};
	var stream8 = {
		title: "Dentist drill",
		mp3: "../../assets/sounds/dentist.mp3"
	};
	var stream9 = {
		title: "Car alarm",
		mp3: "../../assets/sounds/car-alarm.mp3"
	};
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
		volume: "0.0",
		supplied: "wav",
		wmode: "window",
		useStateClassSkin: true,
		cssSelectorAncestor: "#jp_container_1",
		autoBlur: false
	});
	$("#jquery_jplayer_2").jPlayer({
		ready: function (event) {
			ready = true;
			$(this).jPlayer("setMedia", stream2);
			$(this).jPlayer("setMedia", stream2).jPlayer("play");
		},
		loop: true,
		canplay: function() {
		   $("#jquery_jplayer_2").jPlayer("play");
		},  
		swfpath:"js",
		volume: "0.0",
		supplied: "mp3",
		wmode: "window",
		useStateClassSkin: true,
		cssSelectorAncestor: "#jp_container_2",
		autoBlur: false
	});
	$("#jquery_jplayer_3").jPlayer({
		ready: function (event) {
			ready = true;
			$(this).jPlayer("setMedia", stream3);
			$(this).jPlayer("setMedia", stream3).jPlayer("play");
		},
		loop: true,
		canplay: function() {
		   $("#jquery_jplayer_3").jPlayer("play");
		},  
		swfpath:"js",
		volume: "0.0",
		supplied: "mp3",
		wmode: "window",
		useStateClassSkin: true,
		cssSelectorAncestor: "#jp_container_3",
		autoBlur: false
	});
	$("#jquery_jplayer_4").jPlayer({
		ready: function (event) {
			ready = true;
			$(this).jPlayer("setMedia", stream4);
			$(this).jPlayer("setMedia", stream4).jPlayer("play");
		},
		loop: true,
		canplay: function() {
		   $("#jquery_jplayer_4").jPlayer("play");
		},  
		swfpath:"js",
		volume: "0.0",
		supplied: "mp3",
		wmode: "window",
		useStateClassSkin: true,
		cssSelectorAncestor: "#jp_container_4",
		autoBlur: false
	});
	$("#jquery_jplayer_5").jPlayer({
		ready: function (event) {
			ready = true;
			$(this).jPlayer("setMedia", stream5);
			$(this).jPlayer("setMedia", stream5).jPlayer("play");
		},
		loop: true,
		canplay: function() {
		   $("#jquery_jplayer_5").jPlayer("play");
		},  
		swfpath:"js",
		volume: "0.0",
		supplied: "mp3",
		wmode: "window",
		useStateClassSkin: true,
		cssSelectorAncestor: "#jp_container_5",
		autoBlur: false
	});
	$("#jquery_jplayer_6").jPlayer({
		ready: function (event) {
			ready = true;
			$(this).jPlayer("setMedia", stream6);
			$(this).jPlayer("setMedia", stream6).jPlayer("play");
		},
		loop: true,
		canplay: function() {
		   $("#jquery_jplayer_6").jPlayer("play");
		},  
		swfpath:"js",
		volume: "0.0",
		supplied: "mp3",
		wmode: "window",
		useStateClassSkin: true,
		cssSelectorAncestor: "#jp_container_6",
		autoBlur: false
	});
	$("#jquery_jplayer_7").jPlayer({
		ready: function (event) {
			ready = true;
			$(this).jPlayer("setMedia", stream7);
			$(this).jPlayer("setMedia", stream7).jPlayer("play");
		},
		loop: true,
		canplay: function() {
		   $("#jquery_jplayer_7").jPlayer("play");
		},  
		swfpath:"js",
		volume: "0.0",
		supplied: "wav",
		wmode: "window",
		useStateClassSkin: true,
		cssSelectorAncestor: "#jp_container_7",
		autoBlur: false
	});
	$("#jquery_jplayer_8").jPlayer({
		ready: function (event) {
			ready = true;
			$(this).jPlayer("setMedia", stream8);
			$(this).jPlayer("setMedia", stream8).jPlayer("play");
		},
		loop: true,
		canplay: function() {
		   $("#jquery_jplayer_6").jPlayer("play");
		},  
		swfpath:"js",
		volume: "0.0",
		supplied: "mp3",
		wmode: "window",
		useStateClassSkin: true,
		cssSelectorAncestor: "#jp_container_8",
		autoBlur: false
	});
	$("#jquery_jplayer_9").jPlayer({
		ready: function (event) {
			ready = true;
			$(this).jPlayer("setMedia", stream9);
			$(this).jPlayer("setMedia", stream9).jPlayer("play");
		},
		loop: true,
		canplay: function() {
		   $("#jquery_jplayer_9").jPlayer("play");
		},  
		swfpath:"js",
		volume: "0.0",
		supplied: "mp3",
		wmode: "window",
		useStateClassSkin: true,
		cssSelectorAncestor: "#jp_container_9",
		autoBlur: false
	});
	
	var sfx_data =  
			{id: "10", icon: "&#xe9b1;",title:"baby",location:"../../assets/sounds/car-alarm.mp3"};
	//Build the templates
	var source   = $("#entry-template").html();
	var template = Handlebars.compile(source);
	var html    = template(sfx_data);
	$(".container").append(html);
	//Assign the players to each
	$("#jquery_jplayer_10").jPlayer({
		ready: function (event) {
			ready = true;
			$(this).jPlayer("setMedia", stream9);
			$(this).jPlayer("setMedia", stream9).jPlayer("play");
		},
		loop: true,
		canplay: function() {
		   $("#jquery_jplayer_10").jPlayer("play");
		},  
		swfpath:"js",
		volume: "0.0",
		supplied: "mp3",
		wmode: "window",
		useStateClassSkin: true,
		cssSelectorAncestor: "#jp_container_10",
		autoBlur: false
	});
	
});
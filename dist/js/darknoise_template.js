$( document ).ready(function() {
	var sfx_data =  
			[{id: "1", icon: "&#xe9b0;", sound_src:"./dist/assets/sounds/truck-backup.wav"},
			{id: "2", icon: "&#xe9af;", sound_src:"./dist/assets/sounds/air-raid.mp3"},
			{id: "3", icon: "&#xe999;", sound_src:"./dist/assets/sounds/swarm.mp3"},
			{id: "4", icon: "<i class=\"fa fa-child fa-6\" aria-hidden=\"true\"></i>", sound_src:"./dist/assets/sounds/baby.mp3"},
			{id: "5", icon: "<i class=\"fa fa-hand-paper-o fa-6\" aria-hidden=\"true\"></i>", sound_src:"./dist/assets/sounds/nails.mp3"},
			{id: "6", icon: "<i class=\"fa fa-cogs fa-6\" aria-hidden=\"true\"></i>", sound_src:"./dist/assets/sounds/grinder.mp3"},
			{id: "7", icon: "<i class=\"fa fa-volume-up fa-6\" aria-hidden=\"true\"></i>", sound_src:"./dist/assets/sounds/dialup.mp3"},
			{id: "8", icon: "<i class=\"fa fa-user-md fa-6\" aria-hidden=\"true\"></i>", sound_src:"./dist/assets/sounds/dentist.mp3"},
			{id: "9", icon: "<i class=\"fa fa-car fa-6\" aria-hidden=\"true\"></i>", sound_src:"./dist/assets/sounds/car-alarm.mp3"}
			];
	var source   = $("#entry-template").html();
	var template = Handlebars.compile(source);
	var html    = template(sfx_data);
	$(".row").append(html);
});
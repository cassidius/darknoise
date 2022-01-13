
	// var soundeffect = document.getElementById("soundeffect_1");
	// soundeffect.volume = 0.2;
	//let volumeSlider = document.getElementById("volume-slider");
	//volumeSlider.addEventListener("mouseclick", setvolume);
	function setvolume(){
		myAudio.volume = volumeSlider.value;
	}
	function setvolumeSlider(){
		volumeSlider.value = myAudio.volume;
	}
	function changeVolume(src){
		let volumeSlider = document.getElementById("volume-slider_"+src);
		var myAudio = document.getElementById("soundeffect_"+src);
		myAudio.volume = volumeSlider.value;
	}
	function onPlay(src){
		var myAudio = document.getElementById(src);
		myAudio.play();
	}
	
    var stream = {
		title: "Truck",
		wav: "./dist/assets/sounds/truck-backup.wav"
	};
	var stream2 = {
		title: "Air siren",
		mp3: "./dist/assets/sounds/air-raid.mp3"
	};
	var stream3 = {
		title: "Bugs",
		mp3: "./dist/assets/sounds/swarm.mp3"
	};
	var stream4 = {
		title: "Baby",
		mp3: "./dist/assets/sounds/baby.mp3"
	};
	var stream5 = {
		title: "Nails on chalkboard",
		mp3: "./dist/assets/sounds/nails.mp3"
	};
	var stream6 = {
		title: "Grinder",
		mp3: "./dist/assets/sounds/grinder.mp3"
	};
	var stream7 = {
		title: "Dialup",
		wav: "./dist/assets/sounds/dialup.mp3"
	};
	var stream8 = {
		title: "Dentist drill",
		mp3: "./dist/assets/sounds/dentist.mp3"
	};
	var stream9 = {
		title: "Car alarm",
		mp3: "./dist/assets/sounds/car-alarm.mp3"
	};
	ready = false;

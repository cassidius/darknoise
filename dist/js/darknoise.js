
	function changeVolume(src){
		let volumeSlider = document.getElementById("volume-slider_"+src);
		var myAudio = document.getElementById("soundeffect_"+src);
		myAudio.volume = volumeSlider.value;
	}
	function onPlay(src){
		var myAudio = document.getElementById(src);
		myAudio.play();
	}

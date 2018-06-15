// $('#play').bind('touchstart', function() {
function playMusic() {
	var audio = new Audio('../music/I_Will_Always_Love_You.mp3');
	audio.load();

	audio.addEventListener('canplaythrough', function() {
		audio.play();
		//同時に動かしたいアニメーションの処理
		$('#keyvisual').fadeIn(2000);
	}, false);

	audio.addEventListener("ended", function() {
		audio.play();
	}, false);
}
// });

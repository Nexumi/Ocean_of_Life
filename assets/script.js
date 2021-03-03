window.addEventListener('load', view);
window.addEventListener('load', offset);
window.addEventListener('resize', offset);
var OoL = document.getElementById("OoL");
OoL.volume = 0.5;

function offset() {
	if (window.innerWidth < window.innerHeight) {
		OoL.style.width = "100%";
		OoL.style.left = "0%";
	} else {
		OoL.style.width = "50%";
		OoL.style.left = "25%";
	}
	OoL.style.height = OoL.offsetWidth / 16 * 9 + "px";
	OoL.style.marginTop = -(OoL.offsetHeight/2) - 60 + "px";
}

function view() {
	OoL.style.display = "block";
}
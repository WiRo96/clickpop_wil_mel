function nicebut() {
		this.style.background = "red";
		this.style.color = "blue";
}
function norbut() {
	this.style.background = "blue";
	this.style.color = "red";
}

var stybut = document.getElementsByTagName('button');
for (var i = 0; i < stybut.length; i++) {
  stybut[i].addEventListener("mouseover", nicebut);
  stybut[i].addEventListener("mouseout", norbut);
}

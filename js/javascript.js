function rotateImg1() {
	let img = document.getElementById("img1").style.transform
	if (img === "rotate(0deg)") {
		document.getElementById("output1").style.fontWeight = "700";
		document.getElementById("img1").style.transform = "rotate(180deg)";
		document.getElementById("answer1").style.display = "block";
		document.getElementById("answer1").style.overflow = "visible";
	} else {
		document.getElementById("output1").style.fontWeight = "400";
		document.getElementById("img1").style.transform = "rotate(0deg)";
		document.getElementById("answer1").style.display = "none";
		document.getElementById("answer1").style.overflow = "hidden";		
	}
}
function rotateImg2() {
	let img = document.getElementById("img2").style.transform
	if (img === "rotate(0deg)") {
		document.getElementById("output2").style.fontWeight = "700";
		document.getElementById("img2").style.transform = "rotate(180deg)";
		document.getElementById("answer2").style.display = "block";
		document.getElementById("answer2").style.overflow = "visible";
	} else {
		document.getElementById("output2").style.fontWeight = "400";
		document.getElementById("img2").style.transform = "rotate(0deg)";
		document.getElementById("answer2").style.display = "none";
		document.getElementById("answer2").style.overflow = "hidden";		
	}
}
function rotateImg3() {
	let img = document.getElementById("img3").style.transform
	if (img === "rotate(0deg)") {
		document.getElementById("output3").style.fontWeight = "700";
		document.getElementById("img3").style.transform = "rotate(180deg)";
		document.getElementById("answer3").style.display = "block";
		document.getElementById("answer3").style.overflow = "visible";
	} else {
		document.getElementById("output3").style.fontWeight = "400";
		document.getElementById("img3").style.transform = "rotate(0deg)";
		document.getElementById("answer3").style.display = "none";
		document.getElementById("answer3").style.overflow = "hidden";		
	}
}
function rotateImg4() {
	let img = document.getElementById("img4").style.transform
	if (img === "rotate(0deg)") {
		document.getElementById("output4").style.fontWeight = "700";
		document.getElementById("img4").style.transform = "rotate(180deg)";
		document.getElementById("answer4").style.display = "block";
		document.getElementById("answer4").style.overflow = "visible";
	} else {
		document.getElementById("output4").style.fontWeight = "400";
		document.getElementById("img4").style.transform = "rotate(0deg)";
		document.getElementById("answer4").style.display = "none";
		document.getElementById("answer4").style.overflow = "hidden";		
	}
}
function rotateImg5() {
	let img = document.getElementById("img5").style.transform
	if (img === "rotate(0deg)") {
		document.getElementById("output5").style.fontWeight = "700";
		document.getElementById("img5").style.transform = "rotate(180deg)";
		document.getElementById("answer5").style.display = "block";
		document.getElementById("answer5").style.overflow = "visible";
	} else {
		document.getElementById("output5").style.fontWeight = "400";
		document.getElementById("img5").style.transform = "rotate(0deg)";
		document.getElementById("answer5").style.display = "none";
		document.getElementById("answer5").style.overflow = "hidden";		
	}
}


	document.getElementById("answer1").style.animationDuration = "all 5s";
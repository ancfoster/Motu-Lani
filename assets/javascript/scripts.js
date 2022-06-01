/* jshint esversion: 11 */
// Adds year to copyright disclaimer in footer
let y = new Date();
document.getElementById("year").innerHTML = y.getFullYear();
// Sets initial status of responsive menu
let dropStatus = 0;
// Initialize variabless
let burgerTop = document.getElementById("burger-top");
let burgerMiddle = document.getElementById("burger-middle");
let burgerBottom = document.getElementById("burger-bottom");
let mobileNavCont = document.getElementById("mobile-navigation-container")
// Controls burger icon animation and opens/closes mobile navigation
function navDrop() {
	if (dropStatus == 0) {
		dropStatus ++;
	burgerMiddle.style.cssText = `
	opacity: 0;
	`;
	burgerTop.style.cssText = `
	width: 40px;
	transform: rotate(45deg) translate(7px,7px);
	-webkit-transform: rotate(45deg) translate(7px,7px);
	`;
	burgerBottom.style.cssText = `
	width: 40px;
	transform: rotate(-45deg) translate(7px,-7px);
	-webkit-transform: rotate(-45deg) translate(7px,-7px);
	`;
	mobileNavCont.style.cssText = `
	transform: translateY(-00%);
	-webkit-transform: translateY(100%);
	`;
	}
else {
	mobileNavCont.style.cssText = `
	transform: translateY(-100%);
	-webkit-transform: translateY(-100%);
	`;
	burgerMiddle.style.cssText = `
	opacity: 1.0;
	`;
	burgerTop.style.cssText = `
	transform: rotate(0deg) translate(0px,0px);
	-webkit-transform: rotate(0deg) translate(0px,0px);
	`;
	burgerBottom.style.cssText = `
	transform: rotate(0deg) translate(0px,0px);
	-webkit-transform: rotate(0deg) translate(0px,0px);
	`;
	dropStatus --;
	}
}
// Listens for click on burger icon
document.getElementById("burger-icon-container").addEventListener("click", function(){navDrop();});





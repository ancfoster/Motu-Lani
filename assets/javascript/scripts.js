// Adds year to copyright disclaimer in footer
const y = new Date();
document.getElementById("year").innerHTML = y.getFullYear();

// Sets initial status of responsive menu
let dropStatus = 0;
// Controls burger icon animation and opens/closes mobile navigation
function navDrop() {
    if (dropStatus == 0) {
	dropStatus ++;
    document.getElementById("burger-middle").style.opacity = "0";
	document.getElementById("burger-top").style.width = "40px";
	document.getElementById("burger-bottom").style.width = "40px";
	document.getElementById("burger-top").style.Transform = "rotate(45deg) translate(7px,7px)";
	document.getElementById("burger-top").style.WebkitTransform = "rotate(45deg) translate(7px,7px)";
    document.getElementById("burger-bottom").style.Transform = "rotate(-45deg) translate(7px,-7px)";
	document.getElementById("burger-bottom").style.WebkitTransform = "rotate(-45deg) translate(7px,-7px)";
    document.getElementById("mobile-navigation-container").style.WebkitTransform = "translateY(100%)"; 
	document.getElementById("mobile-navigation-container").style.Transform = "translateY(100%)"; 
	}
	else {	
	document.getElementById("mobile-navigation-container").style.WebkitTransform = "translateY(-100%)"; 
	document.getElementById("mobile-navigation-container").style.Transform = "translateY(-100%)"; 
	document.getElementById("burger-top").style.Transform = "rotate(0deg) translate(0px,0px)";
	document.getElementById("burger-top").style.WebkitTransform = "rotate(0deg) translate(0px,0px)";
	document.getElementById("burger-bottom").style.Transform = "rotate(0deg) translate(0px,0px)";
	document.getElementById("burger-bottom").style.WebkitTransform = "rotate(0deg) translate(0px,0px)";
	document.getElementById("burger-middle").style.opacity = "1.0";
	dropStatus --;
	}    
};

document.getElementById("burger-icon-container").addEventListener("click", function(){navDrop();});





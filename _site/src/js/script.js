function goTo(id) {
	document.getElementById(id).scrollIntoView({behavior: 'smooth'});
}

function pageDown() {
	window.scrollBy({
		top: window.outerHeight,
		behavior: 'smooth'
	});
}

// HOME

function open_post(event, target) {
	let link = target.getAttribute('data-link');
	let clone = target.getElementsByClassName('post-item-background')[0];
	let left = target.offsetLeft;
	let top = target.offsetTop - window.scrollY;
	clone = clone.cloneNode(true);
	document.body.appendChild(clone);
	clone.style.position = 'fixed';
	clone.style.left = left + 'px';
	clone.style.top = top + 'px';
	clone.style.zIndex = 1000;
	requestAnimationFrame( () => {
		clone.style.background = 'white';
		clone.style.color = 'black';
		clone.style.top = '0px';
		clone.style.height = '100%';
		clone.style.paddingTop = '90px';
		let text = clone.getElementsByClassName('col-right')[0];
		text.innerHTML = "";
		let row = clone.getElementsByClassName('row')[0];
		row.style.minHeight = 0;
		setTimeout( () => {
			window.location = link;
		}, 420);
	});
}

var isMenuVisible = false;

function toggleMenu() {
	let menuIcon = document.getElementsByClassName('menuicon')[0];
	let menu = document.getElementsByClassName('menu')[0];
	let landingImage = document.getElementsByClassName('landing-image')[0];
	requestAnimationFrame( () => {
		if(!isMenuVisible) {
			menuIcon.className = "menuicon close";
			menu.style.width = '100%';
			landingImage.style.mixBlendMode = 'difference';
		} else {
			menuIcon.className = "menuicon";
			menu.style.width = '0';
			setTimeout(() => {
				landingImage.style.mixBlendMode = '';
			}, 310);
		}
		isMenuVisible = !isMenuVisible;
	});
}
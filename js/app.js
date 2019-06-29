"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function check(first, second) {
		if (!first || !second) {
			return "Input fields must not be empty";
		} else if (first.indexOf(" ") !== -1 || second.indexOf(" ") !== -1) {
			return "Input fields must not contain white space";
		} else {
			first = first.toLowerCase();
			second = second.toLowerCase();

			let check = true

			for (let i = 0; i < second.length; i++) {
				if (first.indexOf(second[i]) === -1) {
					check = false;
					break;
				}
			}

			return check;
		}
	}

	function toggle(chevron) {
		let task = document.getElementById("task");

		if (Array.from(chevron.classList).indexOf("fa-chevron-up") === -1) {
			chevron.classList.remove("fa-chevron-down");
			chevron.classList.add("fa-chevron-up");

			task.classList.remove("hidden");
			task.classList.add("visible");
		} else {
			chevron.classList.remove("fa-chevron-up");
			chevron.classList.add("fa-chevron-down");

			task.classList.remove("visible");
			task.classList.add("hidden");
		}
	}

	let chevron = document.getElementsByClassName("fas")[0];
	chevron.addEventListener("click", function(event) {
		toggle(this);
	});

	chevron.addEventListener("keydown", function(event) {
		if (event.keyCode === 13 || event.keyCode === 32) {
			toggle(this);
		} 
	});

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		check(this.children[0].value, this.children[1].value);
	});
};
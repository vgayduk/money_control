window.onload = function () {
	let preloaderContainer = document.querySelector('.preloader');
	let preloader = document.querySelector('.preloader div');
	setTimeout(function () {
		preloader.style.opacity = 0;
		preloaderContainer.style.opacity = 0;
		preloaderContainer.style.left = '-100vw';
	}, 2000);
}

let cash = document.querySelector('.cash span');
let nonCash = document.querySelector('.non-cash span');

let cashCount = 0;
let nonCashCount = 0;

let list = document.querySelector('.content ul');

let addBtn = document.querySelector('.add');
let removeAllBtn = document.querySelector('.remove-all');

let addPopup = document.querySelector('.add-popup');
let addPopupForm = document.querySelector('.add-popup form');

let delPopup = document.querySelector('.del-popup');
let delYesBtn = document.querySelector('.yes');
let delNoBtn = document.querySelector('.no');

let keyArr = [];

delYesBtn.addEventListener('click', clearStorage);

delNoBtn.addEventListener('click', closeDelPopup);

addBtn.addEventListener('click', openAddPopup);
removeAllBtn.addEventListener('click', openDelPopup);
addPopupForm.addEventListener('submit', createItem);
document.body.addEventListener('click', closePopup);

refreshList();
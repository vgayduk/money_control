window.onload = function () {
	let preloaderContainer = document.querySelector('.preloader');
	let preloader = document.querySelector('.preloader div');
	preloader.style.opacity = 0;
	preloaderContainer.style.opacity = 0;
	preloaderContainer.style.left = '-100vw';
}

let addCloseBtn = document.querySelector('.add-popup .close');
let delCloseBtn = document.querySelector('.del-popup .close');
let filterCloseBtn = document.querySelector('.filter-popup .close');

let cash = document.querySelector('.cash span');
let nonCash = document.querySelector('.non-cash span');

let cashCount = 0;
let nonCashCount = 0;

let list = document.querySelector('.content ul');

let addBtn = document.querySelector('.add');
let removeAllBtn = document.querySelector('.remove-all');
let refreshBtn = document.querySelector('.refresh');
let filterBtn = document.querySelector('.filter');

let addPopup = document.querySelector('.add-popup');
let addPopupForm = document.querySelector('.add-popup form');
let subLabel = addPopup.querySelector('label[for="subRadio"]');
let addLabel = addPopup.querySelector('label[for="addRadio"]');
let tagMenu = addPopup.querySelector('.add-popup .tag-menu');
let tagsArr = document.querySelectorAll('.tag');
let tags = [];

tagsArr.forEach((elem, i) => {
	tags[i] = {
		element: elem,
		name: elem.querySelector('p').innerText
	}
});

let delPopup = document.querySelector('.del-popup');
let delYesBtn = document.querySelector('.yes');
let delNoBtn = document.querySelector('.no');

let filterPopup = document.querySelector('.filter-popup');
let filterPopupForm = document.querySelector('.filter-popup form');
let filterResetBtn = document.querySelector('.filter-popup .btn.reset');
let filterTagMenu = filterPopupForm.querySelector('.filter-popup .tag-menu');
let filterSubLabel = filterPopupForm.querySelector('label[for="subFilterRadio"]');
let filterAddLabel = filterPopupForm.querySelector('label[for="addFilterRadio"]');

let keyArr = [];

tags.forEach((elem, i) => {
	elem.element.addEventListener('click', selectTag);
});

addLabel.addEventListener('click', addLabelActive);
subLabel.addEventListener('click', subLabelActive);

delYesBtn.addEventListener('click', clearStorage);
delNoBtn.addEventListener('click', closeDelPopup);
delCloseBtn.addEventListener('click', closeDelPopup);

refreshBtn.addEventListener('click', refreshList);
addBtn.addEventListener('click', openAddPopup);
removeAllBtn.addEventListener('click', openDelPopup);
filterBtn.addEventListener('click', openFilterPopup);

filterPopupForm.addEventListener('submit', createFilter);
filterCloseBtn.addEventListener('click', closeFilterPopup);
filterResetBtn.addEventListener('click', resetFilter);
filterSubLabel.addEventListener('click', filterSubLabelActive);
filterAddLabel.addEventListener('click', filterAddLabelActive);

addCloseBtn.addEventListener('click', closeAddPopup);
addPopupForm.addEventListener('submit', createItem);

document.body.addEventListener('click', closePopup);

refreshList();
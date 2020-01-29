let cash = document.querySelector('.cash span');
let nonCash = document.querySelector('.non-cash span');

let cashCount = 0;
let nonCashCount = 0;

let list = document.querySelector('.content ul');

let addBtn = document.querySelector('.add');
let removeAllBtn = document.querySelector('.remove-all');

let addPopup = document.querySelector('.add-popup');
let addPopupForm = document.querySelector('.add-popup form');

let keyArr = [];

addBtn.addEventListener('click', openAddPopup);
removeAllBtn.addEventListener('click', clearStorage);
addPopupForm.addEventListener('submit', createItem);
document.body.addEventListener('click', (event) => {
	if (event.target == addPopup) addPopup.style.display = 'none';
});

refreshList();
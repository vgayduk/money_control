function openAddPopup() {
	addPopup.style.zIndex = '10';
	addPopup.style.opacity = '1';
	addPopupForm.addMoney.value = '';
	addPopupForm.addMoney.focus();
}

function openDelPopup() {
	delPopup.style.zIndex = '10';
	delPopup.style.opacity = '1';
}

function clearStorage() {
	localStorage.clear();
	refreshList();
	localStorage.cash = 0;
	localStorage.nonCash = 0;
	cash = 0;
	nonCash = 0;	
	closeDelPopup();
}

function closeDelPopup() {
	delPopup.style.zIndex = '-10';
	delPopup.style.opacity = '0';
}

function createItem(event) {
	event.preventDefault();
	let date = new Date();
	let obj = {
		day: date.getDate(),
		year: date.getFullYear(),
		count: this.addMoney.value,
		type: this.type.value,
		operation: this.result.value
	}

	localStorage.setItem(Date.now(), JSON.stringify(obj));

	refreshList();
	addPopup.style.zIndex = '-10';
	addPopup.style.opacity = '0';
}

function closePopup(event) {
	if (event.target == addPopup) {
		addPopup.style.zIndex = '-10';
		addPopup.style.opacity = '0';
	} else if (event.target == delPopup) {
		closeDelPopup();
	}
}
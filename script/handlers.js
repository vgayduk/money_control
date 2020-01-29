function openAddPopup() {
	addPopup.style.display = 'block';
	addPopupForm.addMoney.value = '';
	addPopupForm.addMoney.focus();
}

function clearStorage() {
	localStorage.clear();
	refreshList();
	localStorage.cash = 0;
	localStorage.nonCash = 0;
	cash = 0;
	nonCash = 0;
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
	addPopup.style.display = 'none';
}
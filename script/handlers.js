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
	let tag;
	tags.forEach((elem, i) => {
		if (elem.element.classList.contains('active')) {
			tag = elem.name;
		}
	});
	let date = new Date();
	let obj = {
		day: date.getDate(),
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		count: this.addMoney.value,
		type: this.type.value,
		operation: this.result.value,
		tag: tag
	}

	localStorage.setItem(Date.now(), JSON.stringify(obj));

	refreshList();
	closeAddPopup()
}

function closeAddPopup() {
	addPopup.style.zIndex = '-10';
	addPopup.style.opacity = '0';
}

function closePopup(event) {
	if (event.target == addPopup) {
		closeAddPopup();
	} else if (event.target == delPopup) {
		closeDelPopup();
	}
}

function selectTag() {
	resetTags()
	this.classList.add('active');
}

function subLabelActive() {
	tagMenu.classList.remove('not-active');
	setTimeout(() => {tagMenu.style.opacity = 1}, 300);
}

function addLabelActive() {
	tagMenu.style.opacity = 0
	setTimeout(() => {tagMenu.classList.add('not-active')}, 300);
	resetTags()
}
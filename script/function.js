function refreshList() {
	cashCount = 0;
	nonCashCount = 0;
	while (list.firstChild) {
		list.removeChild(list.firstChild);
	}

	keyArr.length = 0;
	for (let i = 0; i < localStorage.length; i++) {
		if (localStorage.key(i) == 'cash' || localStorage.key(i) == 'nonCash') {
			continue;
		}
		keyArr[i] = localStorage.key(i);
	}

	keyArr.sort(function(a, b) {
		return b - a;
	});
	for (let i = 0; i < keyArr.length; i++) {
		if (!localStorage.hasOwnProperty(keyArr[i])) {
			continue;
		}

		let cashObj = JSON.parse(localStorage.getItem(keyArr[i]));

		let liElement = document.createElement('li');
		let countBlock = document.createElement('span');
		let dateBlock = document.createElement('span');
		let typeBlock = document.createElement('i');
		let operationBlock = document.createElement('i');
		let tag = cashObj.tag;
		let tagBlock;

		for (let i = 0; i < tags.length; i++) {
			if (tags[i].name != tag) continue;
			tagBlock = tags[i].element.cloneNode(true);
			tagBlock.classList.remove('active');
			tagBlock.classList.add('tag-ico');
		}

		liElement.setAttribute('data-key', `${keyArr[i]}`)

		countBlock.classList.add('count');
		dateBlock.classList.add('date');

		if (cashObj.operation == 'add') {
			operationBlock.classList.add('fas', 'fa-plus');
			operationBlock.style = 'color: #57a825';
		} else {
			operationBlock.classList.add('fas', 'fa-minus');
			operationBlock.style = 'color: #d9141c';
		}

		if (cashObj.type == 'cash') {
			typeBlock.classList.add('fas', 'fa-money-bill-alt');
		} else {
			typeBlock.classList.add('fas', 'fa-credit-card');
		};

		dateBlock.innerText = cashObj.day + '.' + cashObj.month + '.' + cashObj.year;
		countBlock.innerText = cashObj.count;

		list.appendChild(liElement);
		liElement.appendChild(dateBlock);
		liElement.appendChild(typeBlock);
		liElement.appendChild(operationBlock);
		liElement.appendChild(countBlock);
		if (tagBlock) liElement.appendChild(tagBlock);

		if (cashObj.operation == 'add' && cashObj.type == 'cash') {
			cashCount += +cashObj.count;
		} else if (cashObj.operation == 'sub' && cashObj.type == 'cash') {
			cashCount -= cashObj.count;
		} else if (cashObj.operation == 'add' && cashObj.type == 'nonCash') {
			nonCashCount += +cashObj.count;
		} else if (cashObj.operation == 'sub' && cashObj.type == 'nonCash') {
			nonCashCount -= cashObj.count;
		}
	}

	localStorage.cash = cashCount;
	localStorage.nonCash = nonCashCount;
	
	cash.innerText = localStorage.cash;
	nonCash.innerText = localStorage.nonCash;
}

function filterData(filterObj) {
	while (list.firstChild) {
		list.removeChild(list.firstChild);
	}

	keyArr.length = 0;
	for (let i = 0; i < localStorage.length; i++) {
		if (localStorage.key(i) == 'cash' || localStorage.key(i) == 'nonCash') {
			continue;
		}
		keyArr[i] = localStorage.key(i);
	}

	keyArr.sort(function(a, b) {
		return b - a;
	});
	for (let i = 0; i < keyArr.length; i++) {
		if (!localStorage.hasOwnProperty(keyArr[i])) {
			continue;
		}

		let cashObj = JSON.parse(localStorage.getItem(keyArr[i]));

		if (+filterObj.day !== cashObj.day && filterObj.day !== '') continue;
		if (+filterObj.month !== cashObj.month && filterObj.month !== '') continue;
		if (+filterObj.year !== cashObj.year && filterObj.year !== '') continue;
		if (filterObj.type !== cashObj.type && filterObj.type !== 'all') continue;
		if (filterObj.tag !== cashObj.tag && filterObj.tag !== '') continue;
		if (filterObj.operation !== cashObj.operation) continue;
		if (filterObj.moneyFrom !== '' && filterObj.moneyTill !== '') {
			if (+cashObj.count > +filterObj.moneyTill || +cashObj.count < +filterObj.moneyFrom) continue;
		}

		let liElement = document.createElement('li');
		let countBlock = document.createElement('span');
		let dateBlock = document.createElement('span');
		let typeBlock = document.createElement('i');
		let operationBlock = document.createElement('i');
		let tag = cashObj.tag;
		let tagBlock;

		for (let i = 0; i < tags.length; i++) {
			if (tags[i].name != tag) continue;
			tagBlock = tags[i].element.cloneNode(true);
			tagBlock.classList.remove('active');
			tagBlock.classList.add('tag-ico');
		}

		liElement.setAttribute('data-key', `${keyArr[i]}`)

		countBlock.classList.add('count');
		dateBlock.classList.add('date');

		if (cashObj.operation == 'add') {
			operationBlock.classList.add('fas', 'fa-plus');
			operationBlock.style = 'color: #57a825';
		} else {
			operationBlock.classList.add('fas', 'fa-minus');
			operationBlock.style = 'color: #d9141c';
		}

		if (cashObj.type == 'cash') {
			typeBlock.classList.add('fas', 'fa-money-bill-alt');
		} else {
			typeBlock.classList.add('fas', 'fa-credit-card');
		};

		dateBlock.innerText = cashObj.day + '.' + cashObj.month + '.' + cashObj.year;
		countBlock.innerText = cashObj.count;

		list.appendChild(liElement);
		liElement.appendChild(dateBlock);
		liElement.appendChild(typeBlock);
		liElement.appendChild(operationBlock);
		liElement.appendChild(countBlock);
		if (tagBlock) liElement.appendChild(tagBlock);

		if (cashObj.operation == 'add' && cashObj.type == 'cash') {
			cashCount += +cashObj.count;
		} else if (cashObj.operation == 'sub' && cashObj.type == 'cash') {
			cashCount -= cashObj.count;
		} else if (cashObj.operation == 'add' && cashObj.type == 'nonCash') {
			nonCashCount += +cashObj.count;
		} else if (cashObj.operation == 'sub' && cashObj.type == 'nonCash') {
			nonCashCount -= cashObj.count;
		}
	}
}

function resetTags() {
	tags.forEach((elem) => {
		elem.element.classList.remove('active')
	});
}
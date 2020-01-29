function refreshList() {
	cashCount = 0;
	nonCashCount = 0;
	while (list.firstChild) {
		list.removeChild(list.firstChild);
	}

	for (let i = 0; i < localStorage.length; i++) {
		if (localStorage.key(i) == 'cash' || localStorage.key(i) == 'nonCash') {
			continue;
		}
		keyArr[i] = localStorage.key(i);
	}

	keyArr.sort(function(a, b) {
		return a - b;
	});

	for (let i = 0; i < keyArr.length; i++) {
		if (!localStorage.hasOwnProperty(keyArr[i])) {
			continue;
		}

		if (localStorage.key(i) == 'cash' || localStorage.key(i) == 'nonCash') {
			continue;
		}

		let cashObj = JSON.parse(localStorage.getItem(keyArr[i]));

		let liElement = document.createElement('li');
		let countBlock = document.createElement('span');
		let dateBlock = document.createElement('span');
		let typeBlock = document.createElement('i');
		let operationBlock = document.createElement('i');

		liElement.setAttribute('data-key', `${keyArr[i]}`)

		countBlock.classList.add('count');
		dateBlock.classList.add('date');

		if (cashObj.operation == 'add') {
			operationBlock.classList.add('fas', 'fa-plus');
		} else {
			operationBlock.classList.add('fas', 'fa-minus');
		}

		if (cashObj.type == 'cash') {
			typeBlock.classList.add('fas', 'fa-money-bill-alt');
		} else {
			typeBlock.classList.add('fas', 'fa-credit-card');
		};

		dateBlock.innerText = cashObj.day + '.' + cashObj.year;
		countBlock.innerText = cashObj.count;

		list.appendChild(liElement);
		liElement.appendChild(dateBlock);
		liElement.appendChild(typeBlock);
		liElement.appendChild(operationBlock);
		liElement.appendChild(countBlock);

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
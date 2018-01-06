export function secondSmallest(arr, unique) {

	arr.sort(function(a,b){
		return a - b;
	})

	// sprawdzamy po kolei wszystkie elementy tablicy
	// for (let i = 0; i < arr.length; i++) {
	// 	console.log(arr[i]);
	// }

	if (unique) {
		var uniqueArr = arr.filter(function(item, pos) {
			return arr.indexOf(item) == pos;
		})
		return uniqueArr[1]
	}	else {
		return arr[1];	
	}

}

export function cleanWhitespaces(arr) {

// tablica 3 elementy a spacja, b tab i c i 2 spacje
// - usunąć białe znaki
// - jest a, bc, d
// - ma być a,b,c,d

	var newArrConcat = [];
	var newArr = arr.slice(0);
	for (let i = 0; i < newArr.length; i++) {
		newArr[i] = newArr[i].replace(/\s/g,'');
		newArr[i] = newArr[i].split("");
		newArrConcat = newArrConcat.concat(newArr[i]);
	}
	// console.log(arr);
	// console.log(newArr);
	// console.log(newArrConcat);
	return newArrConcat.join("-");
}

export function randomValues() {

let arr = [];
const aLimit = 1000;
const rand = (param) => {return Math.floor((Math.random()*param)+1)};

for (let b = 0; b < aLimit; b++) {

	let customer = {
  	customer_id: rand(100),
    apple: rand(10),
    banana: rand(10),
    melon: rand(10)
  }
	arr.push(customer);
}

console.log(arr);

/*profit per fruit:
apple = 10c
banana = 20c
melon = 50c */

let profitApple = 0.1;
let profitBanana = 0.2;
let profitLemon = 0.5;

let uniqueArrIds = [];
let uniqueArr = [];
for (let c = 0; c < arr.length; c++) {
	if(uniqueArrIds.includes(arr[c].customer_id) ) {
		// uniqueArr.push('a');	

		// console.log(arr[c].customer_id);
		// jak customer jest już w tablicy to trzeba dopisać do istniejącej

	} else {

	let customer = {
  	customer_id: arr[c].customer_id,
    appleTotal: arr[c].apple,
    bananaTotal: arr[c].banana,
    melonTotal: arr[c].melon,
    appleProfit: arr[c].apple * profitApple,
    bananaProfit: arr[c].banana * profitBanana,
    melonProfit: arr[c].melon * profitLemon
  }
		uniqueArr.push(customer);	
		uniqueArrIds.push(arr[c].customer_id);
	}
	
}

console.log(uniqueArr);

return ('works');

}
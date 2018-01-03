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

	var newArr = arr.slice(0);
	for (let i = 0; i < newArr.length; i++) {
		newArr[i] = newArr[i].replace(/\s/g,'');
	}
	// console.log(arr);
	// console.log(newArr);
	return newArr.join("");
}
// tablica 3 elementy a spacja, b tab i c i 2 spacje
// - usunąć białe znaki
// - ???
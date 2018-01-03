export function secondSmallest(arr) {

	arr.sort(function(a,b){
		return a - b;
	})

	// sprawdzamy po kolei wszystkie elementy tablicy
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
    
  return arr[1];
}

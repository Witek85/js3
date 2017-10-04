export function factorial1(number) {
	
	if (number === 0) {
		return 1
	}

	return number * factorial1(number - 1);
    
}

export function gcd(a, b) {
	if ( !b ) {
		return a;
	}

	return gcd(b, a % b);
}

export function range(a, b) {
	if (b - a === 2) {
		return [a + 1];
	} 
		
		var list = range(a, b - 1);
		list.push(b - 1);
		return list;

}

export function sumArray(arr) {
	if (arr.length === 1) {
		return arr[0];
	}

	return arr.pop() + sumArray(arr);
}
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
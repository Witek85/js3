export function factorial1(number) {
	
	if (number === 0) {
		return 1
	}

	return number * factorial1(number - 1);
    
}
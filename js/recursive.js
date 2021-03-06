export function factorial1(number) {
	
	if (number === 0) {
		return 1
	}

	return number * factorial1(number - 1);

}

export function gcd(a, b) {
	// console.log(a, b);
	if ( !b ) {
		return a;
	}

	return gcd(b, a % b);
}

export function range(a, b) {
	// console.log(a, b);
	if (b - a === 2) {
		return [a + 1];
	} 

	var list = range(a, b - 1);
	list.push(b - 1);
	return list;

}

export function sumArray(arr) {
	// console.log(arr);
	if (arr.length === 1) {
		return arr[0];
	}

	return arr.shift() + sumArray(arr);
}

export function exponent(a,b) {
	if (b === 0) {
		return 1;
	} else {
		return a * exponent(a,b-1);
	}
}

export function even_recursion(number) {
  if (number < 0) {
    number = Math.abs(number);
  }
  if (number===0) {
    return true;
  }
  if (number===1) {
    return false;
  } else {
    number = number - 2;
    return even_recursion(number);
  }
}

export function fibonacci(num) {

	if (num === 1) {
		return [0, 1];
	} else {
		var s = fibonacci(num-1);
		// console.log(s);
		s.push(s[s.length - 1] + s[s.length - 2]);
		return s;
	}

}
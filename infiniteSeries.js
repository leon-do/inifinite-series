let total = 0
for (let i = 0; i < 99; i++) {
	//total = total + negativePositive(total)
	// total = total + reciprocal(i)
	// total = total + sumFraction(i)
}
console.log('total:', total)


// 1/1 + 1/2 + 1/3 + 1/n+1
// answer: Infinity
function sumFraction (_num) {
	_num = _num + 1/_num
	console.log(_num)
	return _num
}


// 1/1, 1/2, 1/3, 1/n+1
// answer: approaches 0
function reciprocal (_num) {
	_num = 1/_num
	console.log(_num)
	return _num
}


// 1 + 1 - 1 + 1...
// answer: limit is the sum of the series
function negativePositive (_num) {
	_num = _num + 1
	console.log(_num)
	_num = _num - 1
	console.log(_num)
	return _num
}
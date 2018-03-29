/*
1/2 + 1/4 + 1/8 + 1/16
answer: approaches 0
*/

let total = 0
for (let i = 2; i < 9999; i = i * 2) {
	console.log(`total = ${total} + 1/${i}`)

	// i => 1, 2, 4, 8, 16
	total = total + (1/i)
}

console.log('final:', total)
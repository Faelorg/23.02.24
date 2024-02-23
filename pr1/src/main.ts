import './style.css'

let input: HTMLInputElement = document.querySelector<HTMLInputElement>('input')!

let output: HTMLElement = document.querySelector('p')!

let button: HTMLButtonElement =
	document.querySelector<HTMLButtonElement>('.btn')!

const arrayType: string[] = ['Натуральное', 'Четное', 'Нечетное']

let array: TypeNumber[] = []

button.addEventListener('click', () => {
	output.innerHTML = ''
	console.log('feeve')

	let x: number = parseInt(input.value)
	if (isPrime(x)) {
		array.push(<TypeNumber>{
			x: x,
			type: 0,
		})
	}

	if (x % 2 == 0) {
		array.push(<TypeNumber>{
			x: x,
			type: 1,
		})
	} else {
		array.push(<TypeNumber>{
			x: x,
			type: 2,
		})
	}

	array.forEach(item => {
		output.innerHTML += `${item.x} - ${arrayType[item.type]} <br>`
	})
})

function isPrime(num: number) {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false
	}
	return num !== 1
}

interface TypeNumber {
	x: number
	type: Types
}

enum Types {
	Натуральное,
	Четное,
	Нечетное,
}

import './style.css'
let textarea: HTMLTextAreaElement =
	document.querySelector<HTMLTextAreaElement>('textarea')!

let button: HTMLButtonElement =
	document.querySelector<HTMLButtonElement>('button')!

let output: HTMLElement = document.querySelector('p')!

let outArray: string[] = []

button.addEventListener('click', () => {
	let x: string = textarea.value

	let array: string[] = x.split(' ')
	output.innerHTML = ''

	outArray = []
	array.forEach(item => {
		if (item != '') {
			outArray.push(
				`Слово ${item.toLocaleLowerCase()} встречается ${FindAll(
					array,
					item
				)} раз <br>`
			)
		}
	})
	let res = [...new Set(outArray)]

	res.forEach(item => {
		output.innerHTML += item
	})
})

function FindAll(array: string[], word: string): number {
	let count = 0
	for (let i = 0; i < array.length; i++) {
		if (array[i].toLocaleLowerCase() == word.toLocaleLowerCase()) {
			count++
		}
	}

	return count
}

import './style.css'
let textarea: HTMLTextAreaElement =
	document.querySelector<HTMLTextAreaElement>('textarea')!

let button: HTMLButtonElement =
	document.querySelector<HTMLButtonElement>('button')!

let output: HTMLElement = document.querySelector('p')!

button.addEventListener('click', () => {
	let array: string[] = textarea.value.split(' ')
	let max = Number.MIN_VALUE
	let strngMax: StringOut = <StringOut>{}
	array.forEach(item => {
		if (item != '') {
			if (max < FindAll(array, item)) {
				max = FindAll(array, item)
				strngMax = <StringOut>{
					x: item,
					count: max,
				}
			}
		}
	})

	output.innerHTML = `Слово ${strngMax.x} встречается ${strngMax.count} раз`
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

interface StringOut {
	x: string
	count: number
}

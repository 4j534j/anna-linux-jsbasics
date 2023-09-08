const arr = [1, 2, 3, 4, 5, 8]
const arr2 = new Array()
for (let i = 1;i < 6; i++){
	let randomValue = Math.floor(Math.random() * 100)
	arr2.push(randomValue)
	console.log(randomValue)
}
console.log(arr2)
arr2.forEach((number) =>{
	console.log(number)
})
arr2.sort((x, y)  =>
{
	return y - x
})
console.log(arr2)
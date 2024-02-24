const parseCode = (str) => {
  // your code here
	let arr = str.split('0');
	let filteredArray = arr.filter(str => str !== '');
	let result = { firstName: filteredArray[0], lastName: filteredArray[1], id: filteredArray[2] };
	return result;
	
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));

const summ = (arr) => {
  const newArr = arr.filter(el => el.value && el.value !== 0);
  return newArr.length === 1
  ? newArr[0].value 
  : newArr.reduce((accumulator, currentValue) => accumulator.value + currentValue.value);
}


export {
  summ
}


export function getHighestNumber(array)
{
  let highestnumber=0

  for (let i = 0; i < array.length; i++) {
    if (highestnumber <= array[i]) {
      highestnumber= array[i]
    }

  }
return  highestnumber

}

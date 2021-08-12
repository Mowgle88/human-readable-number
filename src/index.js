module.exports = function toReadable (number) {
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine', 'ten', 'eleven', 'twelve'];
  let dozens = ['thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen' , 'eighteen', 'nineteen'];
  let dozens2 = ['-', 'and', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = 'hundred';

  let result = '';

  if(number >= 0 && number <= 12) {
      return result = units[number];
  } else if(number >= 13 && number <= 19) {
      return result = dozens[number - 13];
  } else if(number >= 20 && number <= 99) {
      for(let i = number.length -1; i > 0; i++) {
          if(numbers[number.length -1] === 0) {
              return result = dozens2[0]
          }
      }
  }
}


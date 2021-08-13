module.exports = function toReadable (number) {
    
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let dozens = [' ', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen' , 'eighteen', 'nineteen'];
    let dozens2 = ['-', 'and', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let h = Math.floor(number/100); //сотый разряд
    let t = Math.floor((number - h*100)/10); // разряд десятков 
    let u = Math.floor(number - h*100 - t*10) // разряд единиц

    if(number >= 0 && number <= 10) {
        return units[number];
    } else if(number >= 11 && number <= 19) {
        return dozens[number-10];
    } else if(number >= 20 && number <= 99) {
        if((number - t*10) === 0) {
            return dozens2[t]
        } return `${dozens2[t]} ${units[u]}`
    } else if(number >= 100 && number <= 999) {
        if((number - h*100) === 0) {
            return `${units[h]} hundred`
        } else if((number - h*100) > 0 && (number - h*100) <= 10) {
            return `${units[h]} hundred ${units[number-h*100]}`
        } else if((number - h*100) > 10 && (number - h*100) < 20) {
            return `${units[h]} hundred ${dozens[u]}`
        } else if((number - h*100) >= 20 && (number - h*100) <= 99) {
            if((number - h*100 - t*10) === 0) {
                return `${units[h]} hundred ${dozens2[t]}`  
            }
            return `${units[h]} hundred ${dozens2[t]} ${units[u]}`
        }
    }
}



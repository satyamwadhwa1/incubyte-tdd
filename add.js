function add(numbers) {
    if (!numbers) return 0;
    
    let delimiter = /[,\n]/;
    if (numbers.startsWith('//')) {
      let customDelimiter = numbers.substring(2, 3);
      numbers = numbers.substring(4); // Ignore the "//;" part and newline
  
      delimiter = new RegExp(customDelimiter);
    }
  
    return numbers.split(delimiter).reduce((acc, num) => acc + parseInt(num || 0), 0);
  }
  
  module.exports = add;
  
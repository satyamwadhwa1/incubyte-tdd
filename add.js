function add(numbers) {
    if (!numbers) return 0;

    let delimiter = /[,\n]/;
    if (numbers.startsWith('//')) {
        let customDelimiter = numbers.substring(2, 3);
        numbers = numbers.substring(4); // Ignore the "//;" part and newline

        delimiter = new RegExp(customDelimiter);
    }

    const nums = numbers.split(delimiter).map(Number);
    const negatives = nums.filter(n => n < 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }

    return nums.reduce((acc, num) => acc + num, 0);
}

module.exports = add;

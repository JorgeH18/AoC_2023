console.log("-- AoC Day 1 --");

// Read input values file and call calculateResult function on that values
var inputValues;
fetch("./src/day_1.txt")
    .then(function (res) {
        return res.text();
    })
    .then(function (data) {
        calculateResultPart1(data);
        calculateResultPart2(data);
    });

// Part 1
function calculateResultPart1(data) {
    var data = data.split(/\r?\n|\r|\n/g);
    var result = 0;
    data.forEach(value => {
        value = value.replace(/\D+/g, '');
        result += parseInt(value[0] + value[value.length - 1]);
    });
    console.log("Part 1 answer: " + result);
}

// Part 2
function calculateResultPart2(data) {
    var data = data.split(/\r?\n|\r|\n/g);
    var result = 0;
    const validSubNumbers = {
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    };
    //build regex: /one|two|three|four|five|six|seven|eight|nine/g
    let re = new RegExp(Object.keys(validSubNumbers).join('|'), 'g');
    // for each line of data
    data.forEach(value => {
        // first replace the matches for the numbers finded
        value = value.replace(re, match => validSubNumbers[match]);
        // then delete non numeric values
        value = value.replace(/\D+/g, '');
        result += parseInt(value[0] + value[value.length - 1]);
    });
    console.log("Part 2 answer: " + result);
}
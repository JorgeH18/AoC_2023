console.log("-- AoC Day 1 --");

// Read input values file and call calculateResult function on that values
var inputValues;
fetch("day_1.txt")
    .then(function (res) {
        return res.text();
    })
    .then(function (data) {
        calculateResult(data);
    });

// Part 1
function calculateResult(data) {
    var data = data.split(/\r?\n|\r|\n/g);
    var result = 0;
    data.forEach(value => {
        value = value.replace(/\D+/g, '');
        result += parseInt(value[0] + value[value.length - 1]);
    });
    console.log("Part 1 answer: " + result);
}

// Part 2
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function calculateDaysBetweenDates(date1, date2) {
  const daysBetween = date2.getTime() - date1.getTime();
  return daysBetween / (1000 * 60 * 60 * 24);
}

// find all the numbers in the array that are divisible by 3
function findNumbers(array) {
  return array.filter(function (num) {
    return num % 3 === 0;
  });
}

// find all the numbers in the array that are odd
function findOdds(array) {
  return array.filter(function (num) {
    return num % 2 !== 0;
  });
}

// find all the records in the array that have a name that starts with "A"
function findRecords(array) {
  return array.filter(function (record) {
    return record.name.startsWith('A');
  });
}

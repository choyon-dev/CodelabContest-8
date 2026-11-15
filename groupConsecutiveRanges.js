function groupConsecutiveRanges(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  let sorted = numbers.slice().sort(function(a, b) {
    return a - b;
  });

  let result = [];
  let start = sorted[0];
  let end = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === end) {
      continue;
    }

    if (sorted[i] === end + 1) {
      end = sorted[i];
    } else {
      if (start === end) {
        result.push(String(start));
      } else {
        result.push(start + "-" + end);
      }

      start = sorted[i];
      end = sorted[i];
    }
  }

  if (start === end) {
    result.push(String(start));
  } else {
    result.push(start + "-" + end);
  }

  return result;
}

// let test = groupConsecutiveRanges([-10, -8, -9, 2, 3, 5, 4]);


console.log(test);
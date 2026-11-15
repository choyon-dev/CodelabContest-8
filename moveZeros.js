function moveZeros(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      result.push(nums[i]);
    }
  }

  while (result.length < nums.length) {
    result.push(0);
  }

  return result;
}


// let test = moveZeros([0, 1, 0, 3, 12]);

// let test = moveZeros([0, 0, 1]);

// let test = moveZeros([1, 2, 3, 4]);

let test = moveZeros([]);
console.log(test);
function findBalancedSplit(nums) {
  let totalSum = 0;

  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  let leftSum = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];

    let rightSum = totalSum - leftSum;

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}


// let test = findBalancedSplit([1, 5, 2, 4]);

// let test = findBalancedSplit([1, 2, 3, 6]);
let test = findBalancedSplit([1, 2, 3, 4]);
console.log(test);
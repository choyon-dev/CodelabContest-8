function findMajorityElement(nums) {
  let counts = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (counts[num] === undefined) {
      counts[num] = 1;
    } else {
      counts[num]++;
    }

    if (counts[num] > nums.length / 2) {
      return num;
    }
  }

  return null;
}


// let test = findMajorityElement([3, 2, 3]);

// let test = findMajorityElement([2, 2, 1, 1, 1, 2, 2]);

// let test = findMajorityElement([1, 2, 3]);

let test = findMajorityElement([5, 5, 5, 5]);


console.log(test);
function nextGreaterElement(nums) {
  let result = new Array(nums.length).fill(-1);
  let stack = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      let index = stack.pop();
      result[index] = nums[i];
    }

    stack.push(i);
  }

  return result;
}


// let test = nextGreaterElement([4, 5, 2, 25]);

// let test = nextGreaterElement([13, 7, 6, 12]);

// let test = nextGreaterElement([1, 2, 3, 4, 5]);

let test = nextGreaterElement([5, 4, 3, 2, 1]);
console.log(test);
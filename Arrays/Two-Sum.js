var twoSum = function (nums, target) {
    const hashMap = {}; // Stores seen numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // The number needed to reach the target

        if (hashMap[complement] !== undefined) {
            return [hashMap[complement], i]; // Return indices of the two numbers
        }

        hashMap[nums[i]] = i; // Store the current number with its index
    }

    return []; // Return empty if no solution exists

};
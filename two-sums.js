/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    let retValue = undefined;
    nums.forEach((value, index) => {
        let y = nums.indexOf(target - value);

        // if (y !== undefined && index !== y && y!==-1) {
        //     if (retValue === undefined)
        //         retValue = [index, y];
        // }

         retValue = y !== undefined && index !== y && y !== -1 ? (retValue === undefined ? [index, y] : retValue) : retValue;
        //retValue = y !== undefined && index !== y && y !== -1 && retValue === undefined ? [index, y] : retValue;
    });

    return retValue;
};

 console.log(twoSum([2, 7, 11, 15], 9));
//console.log(twoSum([3, 2, 4], 6));

//Runtime: 184 ms, faster than 5.19% of JavaScript online submissions for Two Sum.
// Memory Usage: 39.1 MB, less than 23.60% of JavaScript online submissions for Two Sum.

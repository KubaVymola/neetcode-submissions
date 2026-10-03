class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsMap = new Map<number, number>()

        for (let i = 0; i < nums.length; i++) {
            numsMap.set(nums[i], i)
        }

        for (let i = 0; i < nums.length; i++) {
            const required = target - nums[i]

            const foundIdx = numsMap.get(required)

            if (foundIdx !== undefined && foundIdx !== i) {
                return [i, foundIdx].sort()
            }
        }

        throw new Error("Not found")
    }
}

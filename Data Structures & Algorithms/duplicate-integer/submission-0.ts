class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        return nums.sort().reduce((acc, _, idx, arr) => {
            if (acc) return acc
            if (idx === 0) return acc

            return arr[idx] === arr[idx - 1]
        }, false)
    }
}

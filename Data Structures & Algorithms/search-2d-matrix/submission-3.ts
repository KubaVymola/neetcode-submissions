class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const rows = matrix.length
        const cols = matrix[0].length

        const total = rows * cols
        let minIndex = 0
        let maxIndex = total - 1

        while (minIndex <= maxIndex) {
            const middleIndex = Math.trunc((maxIndex + minIndex) / 2)
            const middleValue = matrix[Math.trunc(middleIndex / cols)][middleIndex % cols]

            if (target === middleValue) {
                return true
            }

            if (target < middleValue) {
                maxIndex = middleIndex - 1
            }

            if (target > middleValue) {
                minIndex = middleIndex + 1
            }
        }

        return false
    }
}

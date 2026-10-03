class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups: { [key: string]: string[] } = {}

        for (const str of strs) {
            const sortedStr = Array.from(str).sort().join('')

            const foundGroup = groups[sortedStr]

            if (foundGroup === undefined) {
                groups[sortedStr] = [str]
            } else {
                groups[sortedStr].push(str)
            }
        }

        return Object.values(groups)

    }
}

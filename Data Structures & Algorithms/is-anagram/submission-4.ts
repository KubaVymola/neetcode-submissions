class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const characters1 = new Map<string, number>
        const characters2 = new Map<string, number>

        for (const char of s) {
            const charExists = characters1.get(char) ?? 0
            characters1.set(char, charExists + 1)
        }

        for (const char of t) {
            const charExists = characters2.get(char) ?? 0
            characters2.set(char, charExists + 1)
        }

        if (characters1.size !== characters2.size) {
            return false
        }
        
        for (const key of characters1.keys()) {
            if (characters1.get(key) !== characters2.get(key)) {
                return false
            }
        }

        return true
    }
}

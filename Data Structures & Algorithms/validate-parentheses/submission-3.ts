class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const tmp: string[] = []

        const pairs = { ['[']: ']', ['(']: ')', ['{']: '}'}

        for (const ch of s) {
            if (Object.keys(pairs).includes(ch)) {
                tmp.push(pairs[ch])
            }

            if (Object.values(pairs).includes(ch)) {
                const expected = tmp.pop()

                if (ch !== expected) return false
            }


        }

        return tmp.length === 0

    }
}

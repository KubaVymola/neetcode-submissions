class MinStack {
    private members: number[]
    private minimums: number[]

    constructor() {
        this.members = []
        this.minimums = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.members.push(val)

        if (this.minimums.length === 0 || val <= this.minimums[this.minimums.length - 1]) {
            this.minimums.push(val)
        }

    }

    /**
     * @return {void}
     */
    pop(): void {
        const toReturn = this.members.pop()

        if (toReturn === this.minimums[this.minimums.length - 1]) {
            this.minimums.pop()
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.members[this.members.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minimums[this.minimums.length - 1]
    }
}

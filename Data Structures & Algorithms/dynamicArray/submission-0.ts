class DynamicArray {
    private currentIndex: number = 0
    private data: number[]

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(private capacity: number) {
        this.data = this.createEmptyArray(this.capacity)
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.data[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.data[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.currentIndex === this.getCapacity()) {
            this.resize()
        }

        this.data[this.currentIndex] = n
        this.currentIndex++
    }

    /**
     * @returns {number}
     */
    popback(): number {
        const toReturn = this.data[this.currentIndex - 1]
        
        this.data[this.currentIndex - 1] = undefined
        this.currentIndex--

        return toReturn
    }

    /**
     * @returns {void}
     */
    resize(): void {
        const newCapacity = this.capacity * 2
        const newData = this.createEmptyArray(newCapacity)

        for (let i = 0; i < this.currentIndex; i++) {
            newData[i] = this.data[i]
        }

        this.data = newData
        this.capacity = newCapacity
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.currentIndex
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity
    }

    private createEmptyArray(size: number): Array<number> {
        const toReturn = Array<number>(size)

        for (let i = 0; i < size; i++) {
            toReturn[i] = undefined
        }

        return toReturn
    }
}

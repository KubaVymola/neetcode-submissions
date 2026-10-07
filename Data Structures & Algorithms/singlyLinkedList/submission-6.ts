class ListMember {
    constructor(public value: number, public next: ListMember | undefined) {
    }
}

class LinkedList {
    private head: ListMember | undefined
    
    constructor() {
        this.head = undefined
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let current = this.head

        if (current === undefined) {
            return - 1
        }

        for (let i = 0; i < index; i++) {
            if (current.next === undefined) {
                return -1
            }

            current = current.next    
        }

        return current.value
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const currentHead = this.head

        this.head = new ListMember(val, currentHead)
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        if (this.head === undefined) {
            this.head = new ListMember(val, undefined)
            return
        }

        let tail = this.head
        while(tail.next !== undefined) {
            tail = tail.next
        }

        tail.next = new ListMember(val, undefined)
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        let prev = undefined
        let current = this.head

        for (let i = 0; i < index; i++) {
            if (current.next === undefined) {
                return false
            }

            prev = current
            current = current.next
        }

        if (prev === undefined) {
            if (this.head === undefined) {
                return false
            }

            this.head = this.head.next
        } else {
            prev.next = current.next
        }

        return true
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const toReturn = []

        let current = this.head
        while(current !== undefined) {
            toReturn.push(current.value)
            current = current.next
        }

        return toReturn
    }
}

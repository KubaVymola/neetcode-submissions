class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = []

        for (const token of tokens) {
            if (token === "+") {
                stack.push(stack.pop() + stack.pop())
            }

            else if (token === "-") {
                stack.push(-(stack.pop() - stack.pop()))
            }

            else if (token === "*") {
                stack.push(stack.pop() * stack.pop())
            }

            else if (token === "/") {
                stack.push(parseInt((1 / (stack.pop() / stack.pop())).toString()))
            }
            
            else {
                stack.push(Number(token))
            }
        }

        return stack[0]
    }
}

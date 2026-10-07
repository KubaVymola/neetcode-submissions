/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        const toInvert = [root]

        while (toInvert.length) {
            const current = toInvert.pop()

            if (current === null) {
                continue
            }

            toInvert.push(current.left, current.right)

            const tmp = current.left
            current.left = current.right
            current.right = tmp
        }

        return root
    }
}

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (this.root === null) {
      return 0;
      }
      let min = Infinity;
      const dfs = (node, depth) => {
        if (node === null) {
          return;
          }
          if (node.left === null && node.right === null) {
            min = Math.min(min, depth);
            return;
            }
            dfs(node.left, depth + 1);
            dfs(node.right, depth + 1);
            }
            dfs(this.root, 1);
            return min;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (this.root === null) {
      return 0;
      }
      let max = -Infinity;
      const dfs = (node, depth) => {
        if (node === null) {
          return;
          }
          if (node.left === null && node.right === null) {
            max = Math.max(max, depth);
            return;
            }
            dfs(node.left, depth + 1);
            dfs(node.right, depth + 1);
            }
            dfs(this.root, 1);
            return max;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() { 
    if (this.root === null) {
      return 0;
      }
      let max = -Infinity;
      const dfs = (node, depth, sum) => {
        if (node === null) {
          return;
          }
          if (node.left === null && node.right === null) {
            max = Math.max(max, sum);
            return;
            }
            dfs(node.left, depth + 1, sum + node.value);
            dfs(node.right, depth + 1, sum + node.value);
            } 
            dfs(this.root, 1, 0);
            return max;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root === null) {
      return null;
      }
      let node = this.root;
      let min = Infinity;
      const dfs = (node, min) => {
        if (node === null) {
          return;
          }
          if (node.value > min) {
            return;
            }
            if (node.value < min) {
              min = node.value;
              }
              dfs(node.left, min);
              dfs(node.right, min);
              }
              dfs(this.root, min);
              return min;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (node1 === null || node2 === null) {
      return false;
      }
      if (node1.parent === null || node2.parent === null) {
        return false;
        }
        if (node1.parent.value === node2.parent.value) {
          return true;
          }
          return false;
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {
    return JSON.stringify(this.root);
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };

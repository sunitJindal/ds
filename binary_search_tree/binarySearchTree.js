// Left node will always be smaller or equal to parent.
// Right node will always be equal to or greater than parent.

class BinarySearchTree {
  constructor(value) {
    this.value = null;
    this.left = null;
    this.right = null;

    if (value) {
      this.value = value;
    }
  }

  add(value) {
    if (this.value === null) {
      this.value = value
    } else if (value <= this.value) {
      if (this.left === null) {
        const newNode = new BinarySearchTree(value);
        this.left = newNode;
      } else {
        this.left.add(value);
      }
    } else {
      if (this.right === null) {
        const newNode = new BinarySearchTree(value);
        this.right = newNode;
      } else {
        this.right.add(value);
      }
    }
  }
}
function printTree(root, level) {
  let index = level || 0;
  if (root) {
    console.log(`Level ${index}: ${root.value}`);
    printTree(root.left, index+1);
    printTree(root.right, index+1);
  }
}
const bst = new BinarySearchTree();

bst.add(8);
bst.add(9);

bst.add(10);
bst.add(7);
bst.add(13);
bst.add(11);

bst.add(12);
bst.add(8);
bst.add(10);

bst.add(14);
bst.add(5);
bst.add(6);

bst.add(9);

bst.add(15);

console.log(printTree(bst));
console.log(JSON.stringify(bst));


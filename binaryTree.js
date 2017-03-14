
class BinaryTree {
  constructor(value) {
    this.value = null;
    this.left = null;
    this.right = null;

    if (value) {
      this.value = value;
    }
  }

  add(value) {
    const newNode = new BinaryTree(value);

    let queue = [];
    queue.push(this);

    while (true) {
      let node  = queue.pop();
      if (node.left === null) {
        // if left child is null insert new node as left child
        node.left = newNode;
        return newNode;
      } else {
        // if there is a child available on left, add it to the queue.
        // This node will be picked in case right child also have node
        queue.unshift(node.left);
      }
      if (node.right === null) {
        // if right child is null insert new node as left child
        node.right = newNode;
        return newNode;
      } else {
        // if there is a child available on right child, add it to the queue.
        // This node will be picked in case child of left node are also filled
        queue.unshift(node.right);
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
const bt = new BinaryTree('0');

bt.add('1');
bt.add('2');

bt.add('3');
bt.add('4');

bt.add(5);
bt.add(6);

bt.add(7);
bt.add(8);
bt.add(9);
bt.add(10);
bt.add(11);
bt.add(12);
bt.add(13);
bt.add(14);
bt.add(15);

console.log(printTree(bt));
console.log(JSON.stringify(bt));


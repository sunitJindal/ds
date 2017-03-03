class Node {
  constructor(value) {
     this.value = value;
     this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = null;

    if (value) {
      this.root = new Node(value);
    }
  }

  add(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
      return node;
    }
    //return this.addNode(this.root, node);
    return this.addNode(this.root, node);

  }

//   addNode(root, newNode) {
//     let node  = root;
//     if (node.left === null) {
//       node.left = newNode;
//       return newNode;
//     } else if (node.right === null) {
//       node.right = newNode;
//       return newNode;
//     }

//     let addedToLeft = this.addNode(node.left, newNode);

//     if (!addedToLeft) {
//       return this.addNode(node.right, newNode);
//     }

//     return addedToLeft;
//   }
// }

addNode(root, newNode) {
    let node  = root;
    if (node.left === null) {
      node.left = newNode;
      return newNode;
    } else if (node.right === null) {
      node.right = newNode;
      return newNode;
    }

    if (!node.left.left || !node.left.right) {
      return this.addNode(node.left, newNode);
    }

    if(!node.right.left || !node.right.right) {
      return this.addNode(node.right, newNode);
    }

    return this.addNode(node.left, newNode);

    if (!addedToLeft) {
      return this.addNode(node.right, newNode);
    }

    return addedToLeft;
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
const bt = new BinaryTree('r');

bt.add('l1');
bt.add('r1');

bt.add('l1l2');
bt.add('l1r2');

bt.add('r1l2');
bt.add('r1l2');
console.log(printTree(bt.root));
console.log(JSON.stringify(bt));


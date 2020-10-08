// Binary Search tree class
const Node = require("./node");
class BinarySearchTree {
  constructor() {
    //root of a Binary Search tree
    this.root = null;
  }

//AlgoExpert logic for insert 
insertAlgoExpert(value) {
  let currentNode = this;
   while (true) {
     if (value < currentNode.value) {
       if (currentNode.left === null) {
         currentNode.left = new BST(value)
         break
       } else {
         currentNode = currentNode.left
       }
     } else{
       if (currentNode.right === null) {
         currentNode.right = new BST(value)
         break
       } else {
         currentNode = currentNode.right
     }
   }
   }
   return this;
 }


  // insert data function
  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // returns root of the tree
  getRootNode() {
    return this.root;
  }
  // finds the minimum node in tree
  // searching starts from given node
  findMinNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  /////find closest match///////
  findClosestMatch(tree, target) {
    if (tree === null) {
      return console.log("Invalid tree");
    }

    if (target < tree.data) {
      if (tree.left === null) {
        return tree.data;
      } else {
        if (Math.abs(target - tree.data) > Math.abs(target - tree.left.data)) {
          return this.findClosestMatch(tree.left, target);
        } else {
          return tree.data;
        }
      }
    } else if (target > tree.data) {
      if (tree.right === null) {
        return tree.data
      } else {
        if (Math.abs(target - tree.data) > Math.abs(target - tree.right.data)) {
          return this.findClosestMatch(tree.right, target);
        } else {
          return tree.data
        }
      }
    } else{
      return tree.data;
    }
  }

  //Validate BST
  validateBst(tree) {
    return this.validateBstHelper(tree, -Infinity, Infinity) 
  }
   validateBstHelper(tree, minValue, maxValue) {
    if (tree===null) return true;
    if (tree.data < minValue || tree.data >= maxValue) return false;
    const leftIsValid = this.validateBstHelper (tree.left, minValue, tree.data)
    return leftIsValid && this.validateBstHelper (tree.right, tree.data, maxValue)
  }

}

// create an object for the BinarySearchTree
var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(35);
BST.insert(25);
BST.insert(10);
// BST.insert(7);
// BST.insert(22);
// BST.insert(17);
// BST.insert(13);
// BST.insert(5);
// BST.insert(9);
// BST.insert(27);
// const tree = BST.getRootNode();
// console.log(JSON.stringify(tree, null, 2));

const tree = {
  "data": 15,
  "right": {
    "data": 15,
    "right": null,
    "left":null
  },
  "left": {
    "data": 10,
    "right": null,
    "left": null
  }
}
const validateBst = BST.validateBst(tree)
console.log('validateBst', validateBst);



// remove Node function- This function removes a node with a given data.

// removeNode (node, key)
// {
// if (node===null)
// return null;
// else if (key<node.data){
//   node.left= this.removeNode(node.left, key)
// } else if (key> node.data){
//   node.right = this.removeNode(node.right, key)
// } else {
//   if(node.left ==null && node.right== null){
//     node=null
//     return node
//   }
// }
// }



// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

 

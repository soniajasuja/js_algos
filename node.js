/**
 * In the below code we define a node class having three property 
 * data, left and right, 
 * Left and right are pointers to the left and right node in a Binary Search Tree. 
 * Data is initialized with data which is passed when object for this node is created 
 * and left and right is set to null.
 */

class Node{
  constructor (data)
  {
    this.data= data
    this.right= null
    this.left= null
  }
}

module.exports = Node;
/**
 * Represents a node
 * @Constructor
 * @param data - value to be stored
 */
var Node = function(data){
  this.data=data;
  this.next=null;
}
  
/**
 * Repreents a linked list
 * @constructor
 */ 
var LinkedList = function(){
  this.next=null
}

/**
 * Method to add a new node to a linked list
 * @function
 * @param value
 * @name addNode
 */ 
LinkedList.prototype.addNode = function(value){
  var ref= this;
  while(ref.next != null){
    ref = ref.next
  };
  ref.next = new Node(value)
}

/**
 * Method to find a node in a linked list with specified value
 * @function
 * @param value
 * @name findNode
 * @return Node if node is found else return null
 */
LinkedList.prototype.findNode = function(value){
  var ref= this.next;
  while(ref != null){
    if(ref.data == value){
      return ref
    }
    ref = ref.next
  };

  return null
}

/**
 * Method to remove a node from linked list, with specified value
 * @function
 * @param value
 * @name removeNode
 * @returns TRUE if node is deleted else FALSE if node not found 
 */
LinkedList.prototype.removeNode = function(value){
  var ref= this.next,
      prev = this,
      next = null;
  while(ref != null){
    if(ref.data == value){
      next = ref.next;
      prev.next = next;
      return true;
    }
    prev = ref;
    ref = ref.next;
  };

  return false
}

var ll =new LinkedList();

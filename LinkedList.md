var Node = function(data){
  this.data=data;
  this.next=null;
}
  
var LinkedList = function(){
  this.next=null
}
  
LinkedList.prototype.addNode = function(node){
  var ref= this;
  while(ref.next != null){
    ref = ref.next
  };
  ref.next = node
}

var ll =new LinkedList();

ll.addNode(new Node(10));

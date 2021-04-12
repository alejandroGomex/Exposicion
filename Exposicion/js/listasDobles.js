class  Node{
    constructor(data, next, prev){
        this.data=data
        this.next=next
        this.prev=prev
    };
};

class DoubleLinkedList{
    constructor(){
        this.head=null
        this.tail=null;
        this.size=0;
    };
    agregarNodoI(data){
        const newNode= new Node(data,this.head,null);
        if(this.head){
            newNode.next=this.head;
            this.head.prev=newNode;
            this.head=newNode;
        }else{
            this.head=newNode;
            this.tail=newNode;
        }
        this.size++;
    } ;    
    agregarNodoF(data){
        const newNode= new Node(data,null,this.tail);
        if(this.tail){
            newNode.prev=this.tail;
            this.tail.next=newNode;
            this.tail=newNode;
        }else{
            this.tail=newNode;
            this.head=newNode;
            
        };
        this.size++;
    } 
    insertarNodoPos(data, index){
        if(index<0 || index>this.size){
            return null;
        }
        const newNode=new Node(data, null, null);
        let current=this.head
        let previ;
        if(index===0){
            newNode.next=current;
            current.prev=newnode;
            this.head=newNode
        }else{
            for(let i=0;i<index;i++){
                previ=current;
                current=current.next;
            } 
           newNode.next=current;
           newNode.prev=previ;
           current.prev=newNode;
           previ.next=newNode;
        }
        this.size++;
    }
    print(){
        let current=this.head
        let result='';
        while(current){
            result+=current.data+'<->';
            current=current.next;
        };
        return result+='X';
    }
}
const doubleLinkedList= new DoubleLinkedList();
doubleLinkedList.agregarNodoI(3);
doubleLinkedList.agregarNodoI(4);
doubleLinkedList.agregarNodoF(6);
doubleLinkedList.agregarNodoF(64);
doubleLinkedList.agregarNodoF(26);
doubleLinkedList.insertarNodoPos(99,2);
console.log(doubleLinkedList.print());
console.log(doubleLinkedList);
import DoublyLinkedListNode from "./doubly_linked_list_node.js";

export default class DoublyLinkedList {
    constructor(headNode=null){
        this.head = headNode;
        this.tail = headNode;
    };

    // add a new node containing the newData at the START of the DoublyLinkedList
    prepend(newData){
        let newNode = new DoublyLinkedListNode(newData);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
    };

    // add a new node containing the newData at the END of the DoublyLinkedList
    append(newData){
        let newNode = new DoublyLinkedListNode(newData);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;       
    };

    // add a new node in the nth index in the DoublyLinkedList (count from 0)
    // if n is 0, prepend the new node
    // if n exceeds the number of nodes, the new node is added at the end
    insertAt(index, newData){
        // if n is negative, change n to 0
        index = index < 0 ? 0 : index;

        if (index === 0){
            this.prepend(newData);
            return
        }

        let newNode = new DoublyLinkedListNode(newData);
        let count = 0;
        let curNode = this.head;

        while (count < index && curNode){
            curNode = curNode.next;
            count++;
        }

        // if the end of the list has been reached, just use the append method
        if (curNode === null){
            this.append(newData);
            return
        }
        //otherwise, insert the newNode and update relevant neighbor pointers
        curNode.prev.next = newNode;
        newNode.prev = curNode.prev;
        newNode.next = curNode;
        
    };

    // determine whether a node containing soughtData exists
    // returns a boolean indicating whether or not the soughtData was found
    contains(soughtData){
        let curNode = this.head;
        while (curNode){
            if (curNode.data === soughtData){
                return true
            }
            curNode = curNode.next;
        }
        return false;
    };

    // remove the head node and return it
    // return null if there was no head node
    removeHead(){
        if (this.head){
            let oldHead = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            return oldHead;
        }
        return null;
    };

    // delete the first instance of a node containing data equal to deletedData
    // return true if the data was found and its node deleted, false if it didnt exist
    delete(deleteData){

    };

    // remove the tail node and return it
    // return null if there was no tail node
    removeTail(){
        if (this.tail){
            let oldTail = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            return oldTail;
        }
    };

    // iterate through the doubly linked list and add each node's data to an array
    // upon reaching the end of the list, return the array of data
    getArrayOfData(){
        let curNode = this.head;
        let dataList =[];
        while (curNode){
            dataList.push(curNode.data);
            curNode = curNode.next;
        }
        return dataList;
    };

    // retrieve the dataList from getList() and print it to the console
    // useful for testing
    printData(){
        console.log(this.getArrayOfData());
    };
}
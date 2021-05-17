pragma solidity ^0.6.8;

contract HelloWorld {
    string greetings;
    
    constructor() public {
        greetings = "Hello World!";
    }
    
    function get() public view returns(string memory) {
        return greetings;
    }
    
    function set(string memory _word) public {
        greetings = _word;
    }
}
pragma solidity ^0.6.8;

contract HelloWorld {
    string greetings;
    
    function get() public view returns(string memory) {
        return greetings;
    }
    
    function set(string memory _word) public {
        greetings = _word;
    }
}
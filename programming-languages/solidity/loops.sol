pragma solidity ^0.8.1;

contract Loops {
    function division() public view returns(uint256) {
        return 666/3;
    }
    
    uint public num1 = 0;
    function increment() public returns(uint) {
        return num1++;
    }
    
    
}
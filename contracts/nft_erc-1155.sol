pragma solidity ^0.8.1;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/6a8d977d2248cf1c115497fccfd7a2da3f86a58f/contracts/token/ERC1155/ERC1155.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/6a8d977d2248cf1c115497fccfd7a2da3f86a58f/contracts/access/Ownable.sol";

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/6a8d977d2248cf1c115497fccfd7a2da3f86a58f/contracts/token/ERC1155/IERC1155.sol";

contract NFTContract is ERC1155,Ownable {
    uint256 public constant PNG01  = 0;
    uint256 public constant PNG02  = 1;
    uint256 public constant PNG03  = 2;
    uint256 public constant PNG04  = 3;
    uint256 public constant PNG05  = 4;
    uint256 public constant PNG06  = 5;
    uint256 public constant PNG07  = 6;
    uint256 public constant PNG08  = 7;
    uint256 public constant PNG09  = 8;
    uint256 public constant PNG010  = 9;

    constructor() ERC1155("https://h57cq8sqfjlx.usemoralis.com/{id}.json") {
        _mint(msg.sender,PNG01,1,"");
        _mint(msg.sender,PNG02,2,"");
        _mint(msg.sender,PNG03,3,"");
        _mint(msg.sender,PNG04,4,"");
        _mint(msg.sender,PNG05,5,"");
        _mint(msg.sender,PNG06,6,"");
        _mint(msg.sender,PNG07,7,"");
        _mint(msg.sender,PNG08,8,"");
        _mint(msg.sender,PNG09,9,"");
        _mint(msg.sender,PNG010,10,"");
    }

    function mint(address account,uint256 id,uint256 amount) public onlyOwner {
        
        _mint(account,id,amount,"");
    }

    function burn(address account,uint256 id,uint256 amount) public {
        require(msg.sender == account);
        _burn(account,id,amount);
    }

}
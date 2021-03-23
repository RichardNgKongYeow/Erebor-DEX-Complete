//SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.5.0;

import "./Token.sol";

contract EthSwap {
  string public name = "EthSwap Decentralized Exchange";
  Token public token;
  uint public sellrate = 1780;
  uint public buyrate = 1760;

  event TokensPurchased(
    address account,
    address token,
    uint amount,
    uint sellrate
  
  );

  event TokensSold(
    address account,
    address token,
    uint amount,
    uint buyrate
  );

  constructor(Token _token) public {
    token = _token;
  }

  function buyTokens() public payable {
    // Calculate the number of tokens to buy
    uint tokenAmount = msg.value * buyrate;

    // Require that EthSwap has enough token
    require(token.balanceOf(address(this)) >= tokenAmount);

    // Transfer tokens to the user
    token.transfer(msg.sender, tokenAmount);

    // Emit an event
    emit TokensPurchased(msg.sender, address(token), tokenAmount, sellrate);
  }

  function sellTokens(uint _amount) public {
    // User can't sell more tokens than they have
    require(token.balanceOf(msg.sender) >= _amount);

    // Calculate the amount of Ether to redeem
    uint etherAmount = _amount / sellrate;

    // Require that EthSwap has enough Ether
    require(address(this).balance >= etherAmount);

    // Perform sale
    token.transferFrom(msg.sender, address(this), _amount);
    msg.sender.transfer(etherAmount);

    // Emit an event
    emit TokensSold(msg.sender, address(token), _amount, buyrate);
  }

}
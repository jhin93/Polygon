// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter; // using..for.. 해석필요. 라이브러리(Counters) 사용법같음.
    Counters.Counter private _tokenIds // 해석필요. 변수설정 방식인 듯
    
}



















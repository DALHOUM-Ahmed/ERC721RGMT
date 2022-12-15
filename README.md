# ERC721RGMT

ERC721RGMT is build on top of the standard erc721;
erc721 standard functions are the same, please refer to this link before continuing:
https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#core


> This NFT type is derived from the standard erc721
> adding minting random id capability,
> distinguishing between 3 possible groups,
> with ability to have an early mint and/or a discount


the following is a list for the added functions

## Special functions

Dillinger uses a number of open source projects to work properly:

- [publicMint] - taking 4 parameters:     
    uint8[] _groups,
    bytes32[] _proofOfDiscount,
    uint256 chosenGroupForDiscount,
    bytes32[] _proofOfEarlyMint
  Example:
    
    [1,2,3],
    [0x0000000000000000000000000000000000000000000000000000000000000000],
    0
    [0x0000000000000000000000000000000000000000000000000000000000000000]
###### _proofOfDiscount and _proofOfEarlyMint are proofs for discount and early mint

- [setPrice] - taking 3 parameters representing the price for each group
    uint256 _Aprice,
    uint256 _Bprice,
    uint256 _Cprice
- [toggleLaunch] - the owner can execute to launch the contract to allow public sell
- [setPaused] - this will allow the owner to pause/unpause the public mint
- [updateDiscountRoot] - will allow the owner to update root for the discounted list
- [updateEarlyMintRoot] - will allow the owner to update root for the early mint list
###### a root is a 32 bytes presenting the merkle root for an action

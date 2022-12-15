<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="ERC721RGMT_0"></a>ERC721RGMT</h1>
<p class="has-line-data" data-line-start="2" data-line-end="5">ERC721RGMT is build on top of the standard erc721;<br>
erc721 standard functions are the same, please refer to this link before continuing:<br>
<a href="https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#core">https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#core</a></p>
<blockquote>
<p class="has-line-data" data-line-start="7" data-line-end="11">This NFT type is derived from the standard erc721<br>
adding minting random id capability,<br>
distinguishing between 3 possible groups,<br>
with ability to have an early mint and/or a discount</p>
</blockquote>
<p class="has-line-data" data-line-start="13" data-line-end="14">the following is a list for the added functions</p>
<h2 class="code-line" data-line-start=15 data-line-end=16 ><a id="Special_functions_15"></a>Special functions</h2>
<ul>
<li class="has-line-data" data-line-start="19" data-line-end="30">
<p class="has-line-data" data-line-start="19" data-line-end="25">[publicMint] - taking 4 parameters:<br>
uint8[] _groups,<br>
bytes32[] _proofOfDiscount,<br>
uint256 chosenGroupForDiscount,<br>
bytes32[] _proofOfEarlyMint<br>
Example:</p>
<p class="has-line-data" data-line-start="26" data-line-end="30">[1,2,3],<br>
[0x0000000000000000000000000000000000000000000000000000000000000000],<br>
0<br>
[0x0000000000000000000000000000000000000000000000000000000000000000]</p>
</li>
</ul>
<h6 class="code-line" data-line-start=30 data-line-end=31 ><a id="_proofOfDiscount_and__proofOfEarlyMint_are_proofs_for_discount_and_early_mint_30"></a>_proofOfDiscount and _proofOfEarlyMint are proofs for discount and early mint</h6>
<ul>
<li class="has-line-data" data-line-start="32" data-line-end="36">[setPrice] - taking 3 parameters representing the price for each group<br>
uint256 _Aprice,<br>
uint256 _Bprice,<br>
uint256 _Cprice</li>
<li class="has-line-data" data-line-start="36" data-line-end="37">[toggleLaunch] - the owner can execute to launch the contract to allow public sell</li>
<li class="has-line-data" data-line-start="37" data-line-end="38">[setPaused] - this will allow the owner to pause/unpause the public mint</li>
<li class="has-line-data" data-line-start="38" data-line-end="39">[updateDiscountRoot] - will allow the owner to update root for the discounted list</li>
<li class="has-line-data" data-line-start="39" data-line-end="40">[updateEarlyMintRoot] - will allow the owner to update root for the early mint list</li>
<li class="has-line-data" data-line-start="39" data-line-end="40">[setBaseURIs] - will allow the owner to set the base uri for revealing, being able to set _revealed to true, on reveal</li>
<li class="has-line-data" data-line-start="39" data-line-end="40">[toggleRevealed] - will allow the owner to reveal/unreveal</li>
<li class="has-line-data" data-line-start="39" data-line-end="40">[setUnrevealedURIs] - will allow the owner to set unrevealed uri</li>
</ul>
update those variables to specify the is range for each group
<ul>
<li>_inclusiveLowerBorder_A</li>
<li>_inclusiveUpperBorder_A</li>
<li>_inclusiveLowerBorder_B</li>
<li>_inclusiveUpperBorder_B</li>
<li>_inclusiveLowerBorder_C</li>
<li>_inclusiveUpperBorder_C</li>
</ul>

<h6 class="code-line" data-line-start=40 data-line-end=41 ><a id="a_root_is_a_32_bytes_presenting_the_merkle_root_for_an_action_40"></a>a root is a 32 bytes presenting the merkle root for an action</h6>

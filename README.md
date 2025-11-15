# Airdropper – ERC-20 Batch Airdrop Tool

Airdropper is a lightweight smart-contract tool for sending ERC-20 tokens to multiple wallet addresses in a single transaction.
Author wallet (BSC): 0x0c687dac139e4724C8b43e520C55c6D953B7AaFc

## Features
- Batch ERC-20 token transfer
- One-click airdrop
- Simple front-end demo & smart contract

## Quick start (testnet)
1. Open `contracts/Airdropper.sol` in Remix and compile.
2. Deploy to BSC Testnet (use WalletConnect / MetaMask).
3. Approve token spending:
   `token.approve(<AirdropperAddress>, <totalAmount>)`
4. Call:
   `airdropTokens(token, recipients[], totalAmount)`

## Files
- `contracts/Airdropper.sol` — Solidity contract
- `frontend/index.html` + `frontend/script.js` — simple demo UI
- `demo-script.txt` — demo recording script (silent)

## Contract Deployed At
`<PUT_YOUR_CONTRACT_ADDRESS_HERE>`  ← 把你部署后的合约地址替换在这里

## Demo video
Please see `demo-script.txt` for the exact steps to record a silent demo.

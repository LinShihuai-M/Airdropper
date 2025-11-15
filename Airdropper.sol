// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

contract Airdropper {
    function airdropTokens(
        address token,
        address[] calldata recipients,
        uint256 totalAmount
    ) external {
        uint256 amountPerUser = totalAmount / recipients.length;

        for (uint256 i = 0; i < recipients.length; i++) {
            IERC20(token).transferFrom(msg.sender, recipients[i], amountPerUser);
        }
    }
}

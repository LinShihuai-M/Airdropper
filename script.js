const provider = new ethers.providers.Web3Provider(window.ethereum);
let signer;

async function connect() {
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();
}
connect();

document.getElementById("airdrop").onclick = async () => {
  const token = document.getElementById("token").value.trim();
  const recipients = document.getElementById("recipients").value.split(",").map(a => a.trim()).filter(a => a);
  const totalAmount = document.getElementById("amount").value;

  const contractAddress = "<PUT_YOUR_CONTRACT_ADDRESS_HERE>";
  const abi = [
    "function airdropTokens(address token, address[] calldata recipients, uint256 totalAmount) external"
  ];

  const contract = new ethers.Contract(contractAddress, abi, signer);

  const tx = await contract.airdropTokens(token, recipients, totalAmount);
  await tx.wait();

  alert("Airdrop Completed!");
};

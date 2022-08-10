const CONTRACT_ADDRESS = "0x98B3273c57715997D0dFBE05e41736e905876bEc"
const META_DATA_URL = "ipfs://bafyreidjtqcllzoeqqk6ctzbnbw2yurkzmdq5iin6e4wqikoanflorsgj4/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });
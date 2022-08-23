const CONTRACT_ADDRESS = "0x435744aBe876326671Ddb045A10143242bBAe8a0"
const META_DATA_URL = "ipfs://bafyreiehtfiwma4oy6lplo43ihbfjhpabw644mm3yyvitdgxiz5nuyf4yy/metadata.json"

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
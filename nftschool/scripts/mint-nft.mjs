const CONTRACT_ADDRESS = "0x08fA7fBa153B46D4F4aDD29D5dc5de00403C35e4"
const META_DATA_URL = "ipfs://bafyreib2n75w5afnuy6e6dhpmp7trcnvsoplohe2iydpppn6hnz2daucom/metadata.json"

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
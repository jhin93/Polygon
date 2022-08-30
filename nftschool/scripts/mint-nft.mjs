const CONTRACT_ADDRESS = "0x6847b851404cF62C7B9c61C677CDe28005F30f87"
const META_DATA_URL = "ipfs://bafyreiamoxttvxsnivhwgozb653vqd5q6kyqqom3mw6xauajneseb6nisi/metadata.json"

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
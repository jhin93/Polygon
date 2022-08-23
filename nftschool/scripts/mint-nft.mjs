const CONTRACT_ADDRESS = "0xA9D77BD48d514B5B909d185f8FE6C3a3B30acFf2"
const META_DATA_URL = "ipfs://bafyreiapt6cmp5ymzgkqengkcvzs3l2cz72ndw3e2zmzsv4omjthyqnkiu/metadata.json"

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
const CONTRACT_ADDRESS = "0x79daf157C85772d6975b88cdCE4606ae33FBace6"
const META_DATA_URL = "ipfs://bafyreiehxnpe7jhwv3gb7k23hirfdzuf77qb2qpd2kiav47s5736wdwrca/metadata.json"

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
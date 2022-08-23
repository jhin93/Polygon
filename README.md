## Polygon
Polygon solution 개발을 테스트하는 공간입니다.

## nftschool
polygon testnet에서 nft를 테스트 발행.

### Article
https://clo.atlassian.net/wiki/spaces/CNP/pages/2243624965/Polygon+NFT

### Memo
#### directory
contract - Solidity로 작성된 Polygon 스마트 컨트랙트
assets - Mint 할 디지털 에셋
scripts - 사전 작업과 Mint 과정을 도와줄 파일

## test-marketplace

### Stack
- Polygon : 블록체인 플랫폼
- Next.js : 개발 프레임워크
- Tailwindcss : ui/css 라이브러리
- Hardhat : solidity 개발환경
- Ethers.js : 블록체인 client 라이브러리
- chai : test
- ipfs : 분산형 파일 시스템

* 라이브러리 설치 명령어
npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers web3modal @openzeppelin/contracts ipfs-http-client axios
(web3modal은 유저에게 지갑 선택지를 주는 권한 라이브러리)

npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p

### Article
https://dev.to/edge-and-node/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb

### Video
https://www.youtube.com/watch?v=GKJBEEXUha0&list=LL&index=7

### docs
- polygon testnet : https://docs.polygon.technology/docs/develop/network-details/network/#mumbai-pos-testnet

import { publicKey } from '@metaplex-foundation/umi'
import { format } from 'date-fns'

export const COLLECTION_NAME = 'Skeet The Epics Dev'
export const COLLECTION_SYMBOL = 'STED'
export const COLLECTION_DESCRIPTION =
  'Epics using Skeet. Welcome early adoptooooooooooooors!'
export const FEE_PERCENT = 5.5
export const EXTERNAL_URL = 'https://skeet.dev/'
export const COLLECTION_IMAGE_PATH = 'scripts/solana/cNFT/example/TheDev.png'
export const CREATORS = [
  {
    address: publicKey('6QkPvmBMGCdonNZcynrCg4UAY3ULV71EU2rUH5h5b1Ta'),
    share: 100
  }
]
// After create NFT collection, we can get the collection address:
export const COLLECTION_MINT = publicKey(
  'itzdT5XgD9cLRtFSTbLAeEqKM3aT3UeSTCJ5h1A9cNN'
)
// After create merkle tree, we can get the merkle tree address:
export const MERKLE_TREE = publicKey(
  'AqWn6rLoJJvexv9Eyu6MiYyAjzptJqMRTiMnopjRW38Q'
)

export const MINT_ITEM_TO = publicKey(
  'ELLBGa6DTdEVui6Ydt8vqsnsyybAxyVLPwY7oH6onbUq'
)
export const NFT_ITEM_NAME = 'STED Limited Edition #0'
export const NFT_ITEM_IMAGE_URL =
  'https://bafkreihwkrj3su3r6mz5wvmu46h5iriomh2b6njwd3m2s3f6whwd3qxude.ipfs.nftstorage.link/'
export const NFT_ITEM_ATTRIBUTES = [
  {
    trait_type: 'Status',
    value: 'Early adaptooooooooooors',
  },
  {
    trait_type: 'Minted',
    value: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
  },
]

// for RPC
export const OWNER_ADDRESS = '6QkPvmBMGCdonNZcynrCg4UAY3ULV71EU2rUH5h5b1Ta'
export const COLLECTION_MINT_ADDRESS =
  'itzdT5XgD9cLRtFSTbLAeEqKM3aT3UeSTCJ5h1A9cNN'

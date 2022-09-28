import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { nfts } from "..";

export default function NFTDetails() {
  const router = useRouter();
  const nft  = nfts.find((nft) => nft.id === router.query.id);
  console.log(nft);
  return (
    <div>
      <Head>
        <title>{nft.name} NFT - Details Page</title>
      </Head>

      <div className="mt-24 flex space-x-[10%]">
        <img className="rounded-[1.25rem] w-[45%] h-auto" src={nft?.image} alt={nft?.name}/>
        
        <div className="ml-10 w-[45%]">
          <h1 className="text-5xl font-bold">{nft?.name}</h1>
          <p className="text-[#93989A] mt-4">{nft?.description}</p>
          
          <hr className="w-full border-[#242634] mt-8 mb-4" />

          <div>
            <p className="text-[#93989A]">Creator</p>
            <p>{nft?.author}</p>
          </div>

          <hr className="w-full border-[#242634] mt-8 mb-4" />
          
          <div>
            <button className="bg-[#FF2748] py-4 px-6 rounded-xl hover:scale-105 active:scale-95 transition-transform">
              Place a Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
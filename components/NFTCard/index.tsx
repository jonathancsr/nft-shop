import Eth from "../../assets/Eth";

/* eslint-disable @next/next/no-img-element */
type NFTCardProps = {
  nft: {
    id: string;
    name: string;
    price: string;
    author: string;
    image: string;
    descriptions: string;
  };
};

export function NFTCard({ nft }: NFTCardProps) {
  return (
    <div className="w-[24rem] h-[31rem] bg-[#242634] rounded-[1.25rem] cursor-pointer hover:scale-105 transition-transform">
      <div>
        <img
          src={nft.image}
          alt={nft.name}
          className="rounded-[1.25rem] p-2 w-96 h-80"
        />
      </div>
      <div className="mx-6 mt-4">
        <div className="mb-5">
          <p className="text-2xl font-semibold">{nft.name}</p>
          <p className="text-[#93989A]">By {nft.author}</p>
        </div>

        <div>
          <p className="text-[#93989A]">Current Bid</p>
          <div className="flex mt-0.5">
            <Eth />
            <p className="text-xl font-semibold">{nft.price} ETH</p>
          </div>

          <div className="relative">
            <button className="absolute right-1 bottom-0.5 bg-[#FF2748] py-[0.625rem] px-5 rounded-xl hover:scale-105 active:scale-95 transition-transform">
              Place a Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { NFTCard } from "../components/NFTCard";

export const nfts = [
  {
    id: "1",
    name: "#4473",
    price: "0.1",
    author: "EA4E545",
    image: "https://ik.imagekit.io/bayc/assets/ape1.png",
    description: "Description description",
  },
  {
    id: "2",
    name: "#6148",
    price: "84.4444",
    author: "jordanlyall-vault",
    image:
      "https://img.seadn.io/files/b0a2331a53def406ee438364ed530b4f.png?fit=max&w=1000",
    description: "Description description",
  },
  {
    id: "3",
    name: "#2071",
    price: "90",
    author: "Minco-Trading",
    image:
      "https://img.seadn.io/files/e05ae6dd46deff2de4ab4e124b3a786c.png?fit=max&w=1000",
    description: "Description description",
  },
  {
    id: "4",
    name: "#8528",
    price: "84.51",
    author: "00C850",
    image:
      "https://img.seadn.io/files/2e17aa8e5388382edefbe5280ca8daed.png?fit=max&w=1000",
    description: "Description description",
  },
];

export default function Home() {
  const [search, setSearch] = useState('')

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  },[])

  const filteredNfts = useMemo(() => {
    return nfts.filter((nft) => search ? nft.name.toLowerCase().includes(search.toLowerCase()) : true)
  }, [search, nfts])

  return (
    <div className="h-full w-screen bg-[#1d1f2b] px-24">
      <Head>
        <title>Starck NFT</title>
      </Head>
      <div className="flex justify-between items-baseline">
        <h2 className="text-5xl font-bold mt-24">Discover</h2>
        <input placeholder="Search item" className="h-12 w-64 p-4 rounded-xl" onChange={handleSearch} value={search}/>
      </div>

      <hr className="w-full border-[#242634] mt-12" />

      <div className="flex-col items-start gap-7 mt-12">
        <h2 className="text-5xl font-bold">Popular Bid</h2>
        <div className="flex flex-wrap items-start gap-7 mt-7 min-h-[50%]">
          {filteredNfts.map((nft, index) => (
            <NFTCard key={index} nft={nft} />
          ))}
        </div>
      </div>
    </div>
  );
}

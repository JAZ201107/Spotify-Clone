"use client";
import PlayButton from "@/components/PlayButton";
import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

interface SongItemProps {
  onClick: (id: string) => void;
  data: Song;
}

const SongItem: FC<SongItemProps> = ({ onClick, data }) => {
  const imagePath = useLoadImage(data);
  console.log(imagePath);

  return (
    <div
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
      onClick={() => onClick(data.id)}
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden ">
        <Image
          className="object-cover"
          src={imagePath || "/images/liked.png"}
          fill
          alt="Image"
        />
      </div>

      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">
          By {data.author}
        </p>
        <div className="absolute bottom-24 right-5">
          <PlayButton />
        </div>
      </div>
    </div>
  );
};

export default SongItem;

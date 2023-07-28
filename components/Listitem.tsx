"use client";

import React, { FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface ListitemProps {
  image: string;
  name: string;
  href: string;
}

const Listitem: FC<ListitemProps> = ({ image, name, href }) => {
  const router = useRouter();
  const onClick = () => {
    // Add authentication before push
    router.push(href);
  };

  return (
    <button
      className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
      onClick={onClick}
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image
          src={image}
          className="object-cover fill "
          alt="Like Button Image"
          width={64}
          height={64}
        />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default Listitem;

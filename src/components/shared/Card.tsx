import React from "react";
import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { trimText } from "@/utils/helper";
import { MdOutlineRemoveRedEye } from "react-icons/md";

interface IProps {
  data: {
    id: string | number;
    imageUrl?: string;
    title?: string;
    type?: string;
    location?: {
      postalCode?: string;
      city?: string;
    };
    details?: {
      rooms?: number;
      bathrooms?: number;
      size_m2?: number;
      listingType?: string;
      price_eur?: number;
    };
    views?: number;
  };
}

const Card = ({ data }: IProps) => {
  return (
    <div className="relative max-w-sm bg-[#F0F2F3] border border-gray-200 rounded-lg shadow-sm text-[#31393D]">
      <Image
        className="rounded-t-lg w-full h-48 object-cover"
        src={data?.imageUrl || "/images/house-img-1.png"}
        alt={data?.title || "Property Image"}
        width={400}
        height={200}
      />
      <div className="p-6">
        <h5 className="mb-2 text-xl font-semibold min-h-14">
          {trimText(data?.title as string, 50) || "Property Title"}
        </h5>

        <div className="text-sm mb-1 mt-6">
          ID: {data?.id} | {data?.type} | {data?.location?.postalCode}{" "}
          {data?.location?.city}
        </div>
        <div className="text-sm mb-2">
          {data?.details?.rooms} Zimmer | {data?.details?.bathrooms} Bad |{" "}
          {data?.details?.size_m2} m² | {data?.details?.listingType}
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="text-xl font-bold mb-2">
            €{data?.details?.price_eur?.toLocaleString()}
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1">
              {data?.views || 150}
              <MdOutlineRemoveRedEye fontSize={20} />
            </span>
          </div>
        </div>
        <span className="text-white absolute top-6 right-6">
          <BiHeart fontSize={24} className="cursor-pointer" />
        </span>
      </div>
    </div>
  );
};

export default Card;

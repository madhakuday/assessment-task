"use client";
import { useState, useEffect } from "react";
import { CustomSearch, CustomSelect, CustomRange } from "@/components";
import { LuSlidersHorizontal } from "react-icons/lu";
import {
  buyOptions,
  areaOptions,
  priceOptions,
  roomsOptions,
  typeOptions,
} from "@/lib/filterOptions";
import { IObjectType } from "@/lib/types";

interface IProps {
  query: IObjectType;
  setQuery: (params: IObjectType) => void;
}

const Filters = ({ query, setQuery }: IProps) => {
  const [searchValue, setSearchValue] = useState("");

  const [buyValue, setBuyValue] = useState("");
  const [typeValue, setTypeValue] = useState("");

  const [priceValue, setPriceValue] = useState("");
  const [customPrice, setCustomPrice] = useState(false);
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  const [areaValue, setAreaValue] = useState("");
  const [customArea, setCustomArea] = useState(false);
  const [areaFrom, setAreaFrom] = useState("");
  const [areaTo, setAreaTo] = useState("");

  const [roomsValue, setRoomsValue] = useState("");
  const [customRooms, setCustomRooms] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    const q: IObjectType = {};

    if (searchValue) q.search = searchValue;
    if (buyValue) q.listingType = buyValue;
    if (typeValue) q.type = typeValue;

    if (customPrice && priceFrom && priceTo) {
      q.minPrice = priceFrom;
      q.maxPrice = priceTo;
    } else {
      if (priceValue === "Under €100k") {
        q.maxPrice = 100000;
      } else if (priceValue === "€100k - €300k") {
        q.minPrice = 100000;
        q.maxPrice = 300000;
      } else if (priceValue === "€300k - €500k") {
        q.minPrice = 300000;
        q.maxPrice = 500000;
      } else if (priceValue === "€500k+") {
        q.minPrice = 500000;
      }
    }

    if (customArea && areaFrom && areaTo) {
      q.minSize = areaFrom;
      q.maxSize = areaTo;
    } else {
      if (areaValue === "Under 50m²") {
        q.maxSize = 50;
      } else if (areaValue === "50-100m²") {
        q.minSize = 50;
        q.maxSize = 100;
      } else if (areaValue === "100-150m²") {
        q.minSize = 100;
        q.maxSize = 150;
      } else if (areaValue === "150m²+") {
        q.minSize = 150;
      }
    }

    if (roomsValue === "1 Room") {
      q.minRooms = 1;
      q.maxRooms = 1;
    } else if (roomsValue === "2 Rooms") {
      q.minRooms = 2;
      q.maxRooms = 2;
    } else if (roomsValue === "3 Rooms") {
      q.minRooms = 3;
      q.maxRooms = 3;
    } else if (roomsValue === "4+ Rooms") {
      q.minRooms = 4;
      q.maxRooms = 40;
    }

    setQuery({
      ...query,
      ...q,
    });
  }, [
    searchValue,
    buyValue,
    typeValue,
    priceValue,
    customPrice,
    priceFrom,
    priceTo,
    areaValue,
    customArea,
    areaFrom,
    areaTo,
    roomsValue,
    customRooms,
  ]);

  const resetFilters = () => {
    setSearchValue("");
    setBuyValue("");
    setTypeValue("");
    setPriceValue("");
    setCustomPrice(false);
    setPriceFrom("");
    setPriceTo("");
    setAreaValue("");
    setCustomArea(false);
    setAreaFrom("");
    setAreaTo("");
    setRoomsValue("");
    setQuery({ limit: query.limit });
  };

  return (
    <div className="rounded-lg p-4 mb-4">
      <div className="flex flex-col lg:flex-row gap-4 lg:justify-center">
        <div className="w-full lg:flex-1 lg:max-w-xs lg:block flex gap-6">
          <CustomSearch
            value={searchValue}
            onChange={setSearchValue}
            placeholder="State, City or Postal Code"
          />

          <button
            className="block lg:hidden p-2.5 border max-h-10 border-gray-300 rounded-md max-w-10"
            onClick={() => setShowMobileFilters((prev) => !prev)}
          >
            <LuSlidersHorizontal
              size={18}
              className="text-gray-600 cursor-pointer"
            />
          </button>
        </div>

        <div
          className={`${
            showMobileFilters ? "flex" : "hidden"
          } flex-col sm:flex-row sm:flex-wrap lg:flex lg:flex-nowrap gap-3 lg:gap-2`}
        >
          <CustomSelect
            label="Buy"
            options={buyOptions}
            value={buyValue}
            onChange={setBuyValue}
            className="w-full sm:w-32"
          />

          <CustomSelect
            label="Type"
            options={typeOptions}
            value={typeValue}
            onChange={setTypeValue}
            className="w-full sm:w-32"
          />

          <div className="relative">
            <CustomSelect
              label="Price"
              options={priceOptions}
              value={priceValue}
              onChange={(val) => {
                setPriceValue(val);
                setCustomPrice(val === "Custom");
              }}
              className="w-full sm:w-32"
            />

            {customPrice && (
              <div className="md:absolute -bottom-12 -right-3">
                <CustomRange
                  label="Price (€)"
                  min={0}
                  max={1000000}
                  from={priceFrom}
                  to={priceTo}
                  setFrom={setPriceFrom}
                  setTo={setPriceTo}
                  step={1000}
                />
              </div>
            )}
          </div>

          <div className="relative">
            <CustomSelect
              label="Area"
              options={areaOptions}
              value={areaValue}
              onChange={(val) => {
                setAreaValue(val);
                setCustomArea(val === "Custom");
              }}
              className="w-full sm:w-32"
            />

            {customArea && (
              <div className="md:absolute -right-[10rem] -bottom-12">
                <CustomRange
                  label="Size (m²)"
                  min={10}
                  max={500}
                  from={areaFrom}
                  to={areaTo}
                  setFrom={setAreaFrom}
                  setTo={setAreaTo}
                  step={5}
                />
              </div>
            )}
          </div>

          <CustomSelect
            label="Rooms"
            options={roomsOptions}
            value={roomsValue}
            onChange={(val) => {
              setRoomsValue(val);
              setCustomRooms(val === "Custom");
            }}
            className="w-full sm:w-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;

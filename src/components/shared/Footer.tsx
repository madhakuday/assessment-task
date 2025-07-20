import Link from "next/link";
import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  const links1 = ["About us", "	Contact us", "My Account", "Buy", "Rent"];
  const links2 = [
    "FAQ",
    "Property-related Services",
    "Practical Guides",
    "Property Knowledge",
    "Consulting Services",
  ];
  return (
    <div className="bg-[#33443C] lg:px-28 lg:pt-28 p-5 mt-5 rounded-[8px] text-white ">
      <div className="flex mb-16 flex-wrap gap-8 lg:gap-0">
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div>
            <span>Fyipi immo-online GmbH</span>
            <p>Forchheimergasse 3/13, 1230 Wien, Österreich </p>
          </div>
          <span>office@fylpi.at | www.fylpi.at</span>
          <div className="flex gap-3 items-center">
            <AiOutlineYoutube fontSize={36} />
            <span>YouTube</span>
          </div>
        </div>
        <div className="w-full flex lg:gap-10 lg:w-1/2">
          <ul className="flex flex-col w-1/2 gap-3.5">
            {links1.map((link, index) => (
              <Link key={index} href={"#"} className="">
                {link}
              </Link>
            ))}
          </ul>
          <ul className="flex flex-col w-1/2 gap-3.5">
            {links2.map((link, index) => (
              <Link key={index} href={"#"} className="">
                {link}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t text-[#ABC0B6] py-4 flex justify-between border-white">
        <span>© 2024 Fyipi. All rights reserved.</span>
        <div className="flex gap-6">
          <span>Legal Notice</span>
          <span>Terms of Use</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { IoEarthOutline } from "react-icons/io5";

function Footer2() {
  return (
    <div className="h-50 w-full bg-[#D8CEDF] md:flex md:flex-row-reverse ">
      <div className="h-[20%] w-full md:h-full md:w-[50%] bg-[#D8CEDF] flex items-start justify-center md:pt-15 lg:pt-18 lg:justify-end xl:justify-end lg:pr-15 2xl:pt-20 gap-8">
        <div className=" flex items-center ">
          <IoEarthOutline className="text-xl" />
          <select
            className="border-0 outline-0 underline cursor-pointer text-[14px] tracking-widest bg-[#D8CEDF] "
            name="language"
          >
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
            <option value="urdu">Urdu</option>
            <option value="Japanese">Japanese</option>
            <option value="Russian">Russian</option>
            <option value="Chinese">Chinese</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Portuguese">portuguese</option>
            <option value="Indonesian">Indonesian</option>
          </select>
        </div>

        <div className="flex">
          <select
            className="border-0 outline-0 underline w-[100x] text-[14px] tracking-wider bg-[#D8CEDF] cursor-pointer"
            name="Currency"
          >
            <option value="INR">India (INR)</option>
            <option value="SAR">Arabia(SAR)</option>
            <option value="AED">UAE(AED)</option>
            <option value="QAR">Qatar(QAR)</option>
            <option value="KWD">Kuwait(KWD)</option>
            <option value="JPY">Japan(JPY)</option>
            <option value="AUD">Australia(AUD)</option>
            <option value="CNY">China(CNY)</option>
            <option value="EUR">Europe(EUR)</option>
            <option value="CHF">Switzerland(CHF)</option>
          </select>
        </div>
      </div>
      <div className="h-[80%] w-full md:h-full md:w-[50%] bg-[#D8CEDF] flex items-center md:items-start md:pl-10 justify-center gap-2 flex-col">
        <p className="text-[12px] tracking-wider">
          © 2025, Slowdown Studio. All rights reserved.
        </p>
        <div className="text-[12px] flex  justify-center flex-wrap gap-2 2xl:gap-5  md:justify-start  ">
          <p>powered by Shopify.</p>
          <p>Refund Policy.</p>
          <p>privacy Policy.</p>
          <p>Terms of Service.</p>
          <p>Shipping Policy.</p>
          <p>Contact information</p>
        </div>
      </div>
    </div>
  );
}

export default Footer2;

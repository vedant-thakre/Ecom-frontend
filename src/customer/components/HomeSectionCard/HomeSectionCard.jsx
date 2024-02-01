import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div
      className="flex flex-col cursor-pointer items-center bg-white rounded-lg 
     shadow-lg overflow-hidden w-[15rem] mx-3 border"
    >
      <div className="h-[13rem] w-[8rem] ">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>

      {/* contain div   */}
      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">{ product.brand }</h3>
        <p className="mt-2 text-sm text-gray-500">
          { product.title }
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;

import React from "react";
import mask from "../../assest/services/river (1).jpg";
const Offers = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 items-center lg:ml-48">
      <h1 className="text-5xl text-center">
        Enjoy a <span className="text-red-600">30%</span> discount on our
        stunning face mask embroidery collection.
      </h1>
      <img src={mask} alt="img" className="" />
    </div>
  );
};

export default Offers;

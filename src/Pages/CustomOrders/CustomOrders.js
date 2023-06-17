import React from "react";
import PrimaryButton from "../../Component/PrimeryButton";
import { Link } from "react-router-dom";

const CustomOrders = () => {
  return (
    <div className=" py-8 bg-base-100 ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl  lg:text-5xl text-red-500 text-center font-bold mb-6">
          Custom Orders
        </h2>

        <p className="mb-6 w-1/2 text-center mx-auto">
          At NokshiBibi, we offer personalized embroidery services to bring your
          unique vision to life. Whether you have a specific design in mind or
          need assistance in creating a custom embroidery piece, our skilled
          artisans are here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg shadow-2xl ">
            <h3 className="text-xl font-bold mb-4">Create Your Own Design</h3>
            <p className="mb-4">
              Have a specific design or logo you'd like to see embroidered? Our
              team will work closely with you to bring your vision to reality.
              From company logos to personal monograms, we can translate your
              ideas into exquisite embroidered pieces.
            </p>
            <p>
              Contact our team to discuss your design requirements and we'll
              provide you with a quote and timeline for your custom order.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-2xl ">
            <h3 className="text-xl font-bold mb-4">Design Assistance</h3>
            <p className="mb-4">
              Not sure where to start with your custom embroidery? Our expert
              designers can assist you in creating a unique design that matches
              your style and preferences. We'll work closely with you to
              understand your vision and provide creative suggestions to bring
              it to life.
            </p>
            <p>
              Get in touch with us to discuss your ideas, and our design team
              will collaborate with you to develop the perfect embroidery design
              for your needs.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to={"/contact"}>
            <PrimaryButton>Contact Us for Custom Orders</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomOrders;

import React from "react";

const EmbroidaryInfo = () => {
  // Dummy data for employee number and number of clients
  const employeeNumber = 20;
  const numberOfClients = 5000;
  const ClientsServices = 50;

  return (
    <div className=" py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-red-500 text-2xl  lg:text-5xl text-center">
          Embroidery Service Information
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-10 ">
          <div className="text-center md:text-left border-8 border-solid rounded-full  border-red-900 px-5 py-11">
            <h3 className="text-2xl text-black font-bold mb-2">Employees</h3>
            <p className="text-2xl text-black font-extrabold text-center">
              {employeeNumber}+
            </p>
          </div>
          <div className="text-center md:text-left border-8 border-solid rounded-full  border-red-900  p-8">
            <h3 className="text-2xl text-black font-bold mb-2">Clients</h3>
            <p className="text-2xl text-black font-extrabold text-center">
              {numberOfClients}+
            </p>
          </div>
          <div className="text-center md:text-left border-8 border-solid rounded-full  border-red-900 px-5  py-8">
            <h3 className="text-2xl text-black font-bold mb-2">Services</h3>
            <p className="text-2xl text-black font-extrabold text-center">
              {ClientsServices}+
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbroidaryInfo;

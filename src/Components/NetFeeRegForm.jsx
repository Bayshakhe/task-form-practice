import React from "react";

const NetFeeRegForm = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center font-semibold text-4xl m-6">
        Registration Form
      </h2>
      <form action="" className="max-w-xl mx-auto">
        <div className="mb-5">
          <label htmlFor="name" className="font-semibold text-lg">
            Institute Name:
          </label>{" "}
          <br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder=""
            className="input input-bordered input-info w-full max-w-lg"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="name" className="font-semibold text-lg">
            Institute Name:
          </label>{" "}
          <br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder=""
            className="input input-bordered input-info w-full max-w-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default NetFeeRegForm;

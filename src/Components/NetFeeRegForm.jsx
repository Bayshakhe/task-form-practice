import React, { useState } from "react";

const NetFeeRegForm = () => {
  const [customer, setCustomer] = useState([]);

  const handleCustomer = (e) => {
    if (e.target.checked) {
      setCustomer([...customer, e.target.value]);
    } else {
      const remaining = customer.filter(
        (element) => element !== e.target.value
      );
      setCustomer(remaining);
    }
  };
  const handleClear = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const instituteName = e.target.instituteName.value;
    const adminName = e.target.adminName.value;
    const mobile = e.target.mobile.value;
    const email = e.target.email.value;
    const gender = e.target.gender.value;
    const division = e.target.division.value;
    const address = e.target.address.value;
    const packageName = e.target.package.value;
    const referenceName = e.target.referenceName.value;
    const referenceMobile = e.target.referenceMobile.value;

    const registerObject = {
      instituteName,
      adminName,
      mobile,
      email,
      gender,
      division,
      address,
      packageName,
      reference: { referenceName, referenceMobile },
      customer,
    };

    console.log(registerObject);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-center font-semibold text-4xl m-6">
        Registration Form
      </h2>
      <form onSubmit={handleSubmit} action="" className="max-w-xl mx-auto">
        <div className="mb-5">
          <label htmlFor="instituteName" className="font-semibold text-lg">
            Institute Name:
          </label>{" "}
          <br />
          <input
            type="text"
            name="instituteName"
            id="instituteName"
            placeholder=""
            className="input input-bordered input-info w-full max-w-lg"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="adminName" className="font-semibold text-lg">
            Admin Name:
          </label>{" "}
          <br />
          <input
            type="text"
            name="adminName"
            id="adminName"
            placeholder=""
            className="input input-bordered input-info w-full max-w-lg"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="mobile" className="font-semibold text-lg">
            Mobile No:
          </label>{" "}
          <br />
          <input
            type="tel"
            name="mobile"
            id="mobile"
            placeholder=""
            className="input input-bordered input-info w-full max-w-lg"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="font-semibold text-lg">
            Email:
          </label>{" "}
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder=""
            className="input input-bordered input-info w-full max-w-lg"
          />
        </div>
        <div className="mb-5 flex items-center gap-5">
          <label htmlFor="gender" className="font-semibold text-lg">
            Gender:
          </label>{" "}
          <div>
            <input type="radio" name="gender" value="male" className="" />
            Male
          </div>
          <div>
            <input type="radio" name="gender" value="female" className="" />
            Female
          </div>
          <div>
            <input type="radio" name="gender" value="other" className="" />
            Other
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="division" className="font-semibold text-lg">
            Select Division:
          </label>{" "}
          <br />
          <select
            name="division"
            id=""
            className="select select-info w-full max-w-lg"
          >
            <option value="">...</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>
        <div className="mb-5">
          <label htmlFor="address" className="font-semibold text-lg">
            Address:
          </label>{" "}
          <br />
          <textarea
            id="address"
            name="address"
            className="textarea textarea-info textarea-bordered textarea-xs w-full resize-none max-w-lg"
          ></textarea>
        </div>
        <div className="mb-5">
          <button className="btn bg-red-600 text-white text-xl w-full max-w-lg">
            50% Discount (Sign Up Fee)
          </button>
        </div>
        <div className="mb-5">
          <label htmlFor="package" className="font-semibold text-lg">
            Your Favorite Package:
          </label>{" "}
          <br />
          <select
            name="package"
            id="package"
            className="select select-info w-full max-w-lg"
          >
            <option value="">Select Package</option>
            <option value="100">P1-100</option>
            <option value="200">P2-200</option>
            <option value="300">P3-300</option>
          </select>
        </div>
        <div className="mb-5">
          <label htmlFor="customer" className="font-semibold text-lg">
            Type of Customer:
          </label>{" "}
          <div className="flex gap-5">
            <div>
              <input
                type="checkbox"
                value="PPPOE"
                id=""
                checked={customer.includes("PPPOE")}
                onChange={handleCustomer}
              />
              PPPOE
            </div>
            <div>
              <input
                type="checkbox"
                value="Static"
                id=""
                checked={customer.includes("Static")}
                onChange={handleCustomer}
              />
              Static
            </div>
            <div>
              <input
                type="checkbox"
                value="Hotspot"
                id=""
                checked={customer.includes("Hotspot")}
                onChange={handleCustomer}
              />
              Hotspot
            </div>
          </div>
        </div>
        <div className="border max-w-lg p-5 mb-5">
          <div className="mb-5">
            <label htmlFor="referenceName" className="font-semibold text-lg">
              Reference Name:
            </label>{" "}
            <br />
            <input
              type="text"
              name="referenceName"
              id="referenceName"
              placeholder=""
              className="input input-bordered input-info w-full max-w-lg"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="referenceMobile" className="font-semibold text-lg">
              Reference Mobile:
            </label>{" "}
            <br />
            <input
              type="tel"
              name="referenceMobile"
              id="referenceMobile"
              placeholder=""
              className="input input-bordered input-info w-full max-w-lg"
            />
          </div>
        </div>
        <input
          type="submit"
          name=""
          id=""
          value="Register"
          className="btn btn-info hover:bg-sky-600 w-[200px] text-white"
        />
        <button
          onClick={handleClear}
          className="btn bg-gray-400 hover:bg-gray-600 w-[200px] text-white ml-3"
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default NetFeeRegForm;

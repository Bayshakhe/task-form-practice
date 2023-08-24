import React, { Component } from "react";

class NestedFormProperty extends Component {
  state = {
    instituteName: "",
    adminName: "",
    mobile: "",
    email: "",
    gender: "",
    division: "",
    address: "",
    packageName: "",
    reference: {
      referenceName: "",
      referenceMobile: "",
      referenceaddress: {
        referenceDistrict: {
          referenceUpazila: {
            referenceVillage: "",
            referenceUnion: "",
            referencePostOffice: "",
          },
          referenceCode: "",
        },
        referenceZipCode: "",
      },
    },
    customer: [],
  };

  handleChange = (e) => {
    if (e.target.name === "referenceName") {
      this.setState({
        ...this.state,
        reference: {
          ...this.state.reference,
          referenceName: e.target.value,
        },
      });
    } else if (e.target.name === "referenceMobile") {
      this.setState({
        ...this.state,
        reference: {
          ...this.state.reference,
          referenceMobile: e.target.value,
        },
      });
    } else if (e.target.name === "referenceZipCode") {
      this.setState({
        ...this.state,
        reference: {
          ...this.state.reference,
          referenceaddress: {
            ...this.state.reference.referenceaddress,
            referenceZipCode: e.target.value,
          },
        },
      });
    } else if (e.target.name === "referenceCode") {
      this.setState({
        ...this.state,
        reference: {
          ...this.state.reference,
          referenceaddress: {
            ...this.state.reference.referenceaddress,
            referenceDistrict: {
              ...this.state.reference.referenceaddress.referenceDistrict,
              referenceCode: e.target.value
            },
          },
        },
      });
    } else if (e.target.name === "referenceVillage" || e.target.name === "referenceUnion" || e.target.name === "referencePostOffice") {
      this.setState({
        ...this.state,
        reference: {
          ...this.state.reference,
          referenceaddress: {
            ...this.state.reference.referenceaddress,
            referenceDistrict: {
              ...this.state.reference.referenceaddress.referenceDistrict,
              referenceUpazila: {
                ...this.state.reference.referenceaddress.referenceDistrict.referenceUpazila,
                [e.target.name]: e.target.value
              }
            },
          },
        },
      });
    } else {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
      });
    }
  };
  handleCustomer = (e) => {
    // console.log(e)
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container mx-auto">
        <h2 className="text-center font-semibold text-4xl m-6 mb-16 underline">
          Registration Form (Class Component)
        </h2>
        <form action="" className="max-w-xl mx-auto">
          <div className="mb-5">
            <label htmlFor="instituteName" className="font-semibold text-lg">
              Institute Name:
            </label>{" "}
            <br />
            <input
              onChange={this.handleChange}
              type="text"
              name="instituteName"
              id="instituteName"
              className="input input-bordered input-info w-full max-w-lg"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="adminName" className="font-semibold text-lg">
              Admin Name:
            </label>{" "}
            <br />
            <input
              onChange={this.handleChange}
              type="text"
              name="adminName"
              id="adminName"
              className="input input-bordered input-info w-full max-w-lg"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="mobile" className="font-semibold text-lg">
              Mobile No:
            </label>{" "}
            <br />
            <input
              onChange={this.handleChange}
              type="tel"
              name="mobile"
              id="mobile"
              className="input input-bordered input-info w-full max-w-lg"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="font-semibold text-lg">
              Email:
            </label>{" "}
            <br />
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              id="email"
              className="input input-bordered input-info w-full max-w-lg"
            />
          </div>
          <div className="mb-5 flex items-center gap-5">
            <label htmlFor="gender" className="font-semibold text-lg">
              Gender:
            </label>{" "}
            <div>
              <input
                onChange={this.handleChange}
                type="radio"
                name="gender"
                value="male"
                className=""
              />
              Male
            </div>
            <div>
              <input
                onChange={this.handleChange}
                type="radio"
                name="gender"
                value="female"
                className=""
              />
              Female
            </div>
            <div>
              <input
                onChange={this.handleChange}
                type="radio"
                name="gender"
                value="other"
                className=""
              />
              Other
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="division" className="font-semibold text-lg">
              Select Division:
            </label>{" "}
            <br />
            <select
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
            <label htmlFor="packageName" className="font-semibold text-lg">
              Your Favorite Package:
            </label>{" "}
            <br />
            <select
              onChange={this.handleChange}
              name="packageName"
              id="packageName"
              className="select select-info w-full max-w-lg"
            >
              <option value="">Select Package</option>
              <option value="P1-100">P1-100</option>
              <option value="P2-200">P2-200</option>
              <option value="P3-300">P3-300</option>
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
                  checked={this.state.customer.includes("PPPOE")}
                  onChange={this.handleCustomer}
                />
                PPPOE
              </div>
              <div>
                <input
                  type="checkbox"
                  value="Static"
                  checked={this.state.customer.includes("Static")}
                  onChange={this.handleCustomer}
                />
                Static
              </div>
              <div>
                <input
                  type="checkbox"
                  value="Hotspot"
                  checked={this.state.customer.includes("Hotspot")}
                  onChange={this.handleCustomer}
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
                onChange={this.handleChange}
                type="text"
                name="referenceName"
                id="referenceName"
                className="input input-bordered input-info w-full max-w-lg"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="referenceMobile"
                className="font-semibold text-lg"
              >
                Reference Mobile:
              </label>{" "}
              <br />
              <input
                onChange={this.handleChange}
                type="tel"
                name="referenceMobile"
                id="referenceMobile"
                className="input input-bordered input-info w-full max-w-lg"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="referenceZipCode"
                className="font-semibold text-lg"
              >
                Reference ZipCode:
              </label>{" "}
              <br />
              <input
                onChange={this.handleChange}
                type="tel"
                name="referenceZipCode"
                id="referenceZipCode"
                className="input input-bordered input-info w-full max-w-lg"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="referenceCode" className="font-semibold text-lg">
                Reference Code:
              </label>{" "}
              <br />
              <input
                onChange={this.handleChange}
                type="tel"
                name="referenceCode"
                id="referenceCode"
                className="input input-bordered input-info w-full max-w-lg"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="referenceVillage"
                className="font-semibold text-lg"
              >
                Reference Village:
              </label>{" "}
              <br />
              <input
                onChange={this.handleChange}
                type="tel"
                name="referenceVillage"
                id="referenceVillage"
                className="input input-bordered input-info w-full max-w-lg"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="referenceUnion" className="font-semibold text-lg">
                Reference Union:
              </label>{" "}
              <br />
              <input
                onChange={this.handleChange}
                type="tel"
                name="referenceUnion"
                id="referenceUnion"
                className="input input-bordered input-info w-full max-w-lg"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="referencePostOffice"
                className="font-semibold text-lg"
              >
                Reference PostOffice:
              </label>{" "}
              <br />
              <input
                onChange={this.handleChange}
                type="tel"
                name="referencePostOffice"
                id="referencePostOffice"
                className="input input-bordered input-info w-full max-w-lg"
              />
            </div>
          </div>
          <input
            onClick={this.handleSubmit}
            type="submit"
            value="Register"
            className="btn btn-info hover:bg-sky-600 w-[200px] text-white"
          />
          <button className="btn bg-gray-400 hover:bg-gray-600 w-[200px] text-white ml-3">
            Clear
          </button>
        </form>
      </div>
    );
  }
}

export default NestedFormProperty;

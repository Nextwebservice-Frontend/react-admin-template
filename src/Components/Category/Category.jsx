import { Dropdown } from "semantic-ui-react";

const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" },
  { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
  { key: "ao", value: "ao", flag: "ao", text: "Angola" },
  { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", flag: "ag", text: "Antigua" },
  { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
  { key: "am", value: "am", flag: "am", text: "Armenia" },
  { key: "aw", value: "aw", flag: "aw", text: "Aruba" },
  { key: "au", value: "au", flag: "au", text: "Australia" },
  { key: "at", value: "at", flag: "at", text: "Austria" },
  { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
  { key: "by", value: "by", flag: "by", text: "Belarus" },
  { key: "be", value: "be", flag: "be", text: "Belgium" },
  { key: "bz", value: "bz", flag: "bz", text: "Belize" },
  { key: "bj", value: "bj", flag: "bj", text: "Benin" },
];


const Category = () => {
    return (
        <div>
          <p className="mt-2 ms-2 mb-2 text-gray-500">
            Category<sup className="text-red-600">*</sup>
          </p>
          <div className="mb-4">
          <Dropdown
              placeholder="Select Country"
              fluid
              search
              selection
              clearable
              options={countryOptions}
            />
          </div>
    
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-1/2  "
            />
            <button className="btn btn-primary lg:w-40 ">Search</button>
            <button className="btn btn-error lg:w-40">Reset</button>
          </div>
    
          <div className="lg:flex gap-5  ">
            <div className="card w-44 bg-base-100 border-2 border-gray-400  ">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body mb-0">
                <h2 className="text-blue-600">Mobile</h2>
                <p className="text-green-600">
                  <span className="text-blue-600">Price</span> : 400$
                </p>
              </div>
            </div>
    
            <div className="">
              <div className="card w-44 bg-base-100 border-2 border-gray-400 ">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1575024357670-2b5164f470c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-blue-600">Mobile</h2>
                  <p className="text-green-600">
                    <span className="text-blue-600">Price</span> : 400$
                  </p>
                </div>
              </div>
            </div>
          </div>
    
          <div className=" mx-auto flex gap-5 mt-5 justify-center items-center">
            <button className="btn btn-active">Previous</button>
            <button className="btn btn-active">Next</button>
          </div>
        </div>
      );
};

export default Category;
import React from "react";
import MyDatePicker from "../UIcomponents/DatePicker";
import MyDateRange from "../UIcomponents/RangeDatePicker";

export default function Report() {
  return (
    <div>
      <div className="flex flex-row max-w-md gap-10 items-center">
      <div>
        <select className="select  select-sm select-info w-full max-w-xs ">
          <option disabled selected>
            pilih produk
          </option>
          <option>English</option>
          <option>Japanese</option>
          <option>Italian</option>
        </select>
      </div>
      <div>
        <MyDatePicker />
      </div>
      <div>
        <button className="btn btn-info btn-xs">Search</button>
      </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      <div></div>
    </div>
  );
}

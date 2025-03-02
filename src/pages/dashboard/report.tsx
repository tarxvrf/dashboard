import React, { useEffect, useState } from "react";
import MyDatePicker from "../UIcomponents/DatePicker";
import MyDateRange from "../UIcomponents/RangeDatePicker";

export default function Report() {
const [allproduk, setallproduk] = useState<[]>([]);
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);
};
  useEffect(() => {
    const data = async () => {
      const response = await fetch("http://localhost:3000/api/allproduk");
      const allproduk = await response.json();
      setallproduk(allproduk);
    };
    data();
  }, []);
  
  return (
    <div>
      <div className="flex flex-row max-w-lg gap-10 items-center">
      <div className="">
        <select className="select  select-sm select-info w-full max-w-sm ">
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

      <div className="overflow-x-auto overflow-y-scroll h-[500px]">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>id</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>createdAt</th>
              <th>updateAt</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allproduk.map((item:any,index)=> 
            <tr key={index}>                      
              <td>{item.id}</td>
              <td>{item.nama}</td>
              <td>{`${formatCurrency(item.harga)}`}</td>
              <td>{item.stok}</td>
              <td>{item.createdAt}</td>
              <td>{item.updatedAt}</td>
               </tr>
              )}           
          </tbody>
        </table>
      </div>

      
      <div></div>
    </div>
  );
}

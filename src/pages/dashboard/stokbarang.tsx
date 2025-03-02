import React, { useEffect, useState } from "react";
import {toast,ToastContainer} from "react-toastify";

export default function Stok() {
  const [allproduk, setallproduk] = useState<[]>([]);
  const [nama,setnama]=useState('')
  const [harga, setharga] = useState(0);
  const [stok, setstok] = useState(0);
  const [id,setid]=useState(0)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(value);
  };

  async function handlesave(event: React.FormEvent<HTMLFormElement>){
   event.preventDefault();
   const res = await fetch('http://localhost:3000/api/postproduk',{
    method: 'POST',
    body:JSON.stringify({
      nama:nama,
      harga:Number(harga),
      stok:Number(stok)
    }),
    headers: {
      'Content-Type': 'application/json',
     },
   })
   const data = await res.json();
   if(data){
    toast.success("data sudah tersimpan",{
      position: "top-right",  })
      const response = await fetch("http://localhost:3000/api/allproduk");
      const allitem = await response.json();
      setallproduk(allitem);
   }else{
    toast.error("data gagal tersimpan"),{
      position: "top-right",
   }
  }
  }


  useEffect(() => {
    const data = async () => {
      const response = await fetch("http://localhost:3000/api/allproduk");
      const allitem = await response.json();
      setallproduk(allitem);
    };
    data();
    console.log("ada useeffect")
  }, []);




  async function handlehapus(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const response = await fetch(`http://localhost:3000/api/deleteproduk/${parseInt(event as any)}`,{
      method: 'DELETE',

    });
    if (response.ok) {      
      // Menghapus item dari state setelah berhasil dihapus dari database
      const response = await fetch("http://localhost:3000/api/allproduk");
      const allitem = await response.json();
      setallproduk(allitem);
    }
  }

  return (
    <div>
      <div className="flex flex-row max-w-lg gap-10 items-center">
        <div>
        </div>
      </div>
      <div className="w-64">
        <form onSubmit={handlesave} className="flex flex-col gap-5">
          <div className="">
          <select  className="select  select-sm select-info w-full max-w-sm ">
        {allproduk.map((item:any,index)=>
         <option key={index} value={item.id}>{item.nama}</option>
        )}
        </select>
          </div>

          <div className="flex flex-col gap-1"><label htmlFor="">Nama produk</label>
            <input type="text" placeholder="nama" onChange={(e)=>setnama(e.target.value)}/></div>

          <div className="flex flex-col gap-1"><label htmlFor="">Harga</label>
            <input type="text" placeholder="Rp 0" onChange={(e)=>setharga(Number(e.target.value))} /></div>

          <div className="flex flex-col gap-1" > <label htmlFor="">Stok</label>
            <input type="number" placeholder="0" min={0} className="w-20" onChange={(e)=>setstok(Number(e.target.value))} /></div>
          <button type="submit" className="btn btn-info btn-xs">Save</button>
        </form>
        <ToastContainer/>
      </div>

      <div className="overflow-x-auto overflow-y-auto h-[500px] ">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>createdAt</th>
              <th>updateAt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allproduk.map((item: any, index) =>
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.nama}</td>
                <td>{`${formatCurrency(item.harga)}`}</td>
                <td>{item.stok}</td>
                <td>{item.createdAt}</td>
                <td>{item.updatedAt}</td>
                <td className="flex gap-5"><button className="btn btn-warning btn-xs">Edit</button>
                  <button onClick={(e)=>handlehapus(item.id)} className="btn btn-error btn-xs">Delete</button>
                </td>

              </tr>
            )}
          </tbody>
        </table>
      </div>


      <div></div>
    </div>
  );
}

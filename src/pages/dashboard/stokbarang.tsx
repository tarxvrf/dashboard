import React, { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Swal from 'sweetalert2';

export default function Stok() {
  const [allproduk, setallproduk] = useState<[]>([]);
  const [nama, setnama] = useState('')
  const [harga, setharga] = useState(0);
  const [stok, setstok] = useState(0);
  const modref = useRef<HTMLDialogElement>(null)
  const [modnama, setmodnama] = useState('')
  const [modharga, setmodharga] = useState(0);
  const [modstok, setmodstok] = useState(0);
 
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(value);
  };

  async function handlesave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const res = await fetch('http://localhost:3000/api/postproduk', {
      method: 'POST',
      body: JSON.stringify({
        nama: nama,
        harga: Number(harga),
        stok: Number(stok)
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json();
    if (data) {
      toast.success("data sudah tersimpan", {
        position: "top-right",
      })
      const response = await fetch("http://localhost:3000/api/allproduk");
      const allitem = await response.json();
      setallproduk(allitem);
    } else {
      toast.error("data gagal tersimpan"), {
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




  function handlehapus(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        const hapus = async () => {
          const response = await fetch(`http://localhost:3000/api/deleteproduk/${parseInt(event as any)}`, {
            method: 'DELETE',
          });
          if (response.ok) {
            // Menghapus item dari state setelah berhasil dihapus dari database
            const response = await fetch("http://localhost:3000/api/allproduk");
            const allitem = await response.json();
            setallproduk(allitem);
          }
        }
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        hapus();
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });

  }

  function sethandleedit(id: any) {
    if (modref.current) {
      modref.current.showModal()

    }
  }

  async function modsave(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
     
    const response= await fetch('http://localhost:3000/api/updateproduk/48', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nama: modnama,
        harga: Number(modharga),
        stok:Number(modstok)
      })
    })
    const data = await response.json()
    if(data){
      toast.success("Data berhasil diubah",{
        position: "top-right",
      })
    }else{
      toast.error("Data gagal diubah",{
        position: "top-right",
        })
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
            <select className="select  select-sm select-info w-full max-w-sm ">
              {allproduk.map((item: any, index) =>
                <option key={index} value={item.id}>{item.nama}</option>
              )}
            </select>
          </div>

          <div className="flex flex-col gap-1"><label htmlFor="">Nama produk</label>
            <input type="text" placeholder="nama" onChange={(e) => setnama(e.target.value)} /></div>

          <div className="flex flex-col gap-1"><label htmlFor="">Harga</label>
            <input type="text" placeholder="Rp 0" onChange={(e) => setharga(Number(e.target.value))} /></div>

          <div className="flex flex-col gap-1" > <label htmlFor="">Stok</label>
            <input type="number" placeholder="0" min={0} className="w-20" onChange={(e) => setstok(Number(e.target.value))} /></div>
          <button type="submit" className="btn btn-info btn-xs">Save</button>
        </form>
        <ToastContainer />
      </div>

      <div className="overflow-x-auto  overflow-y-auto h-[500px] ">
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
                <td className="flex gap-5"><button onClick={(e) => sethandleedit(item.id)} className="btn btn-warning btn-xs">Edit</button>
                  <button onClick={(e) => handlehapus(item.id)} className="btn btn-error btn-xs">Delete</button>
                </td>

              </tr>
            )}
          </tbody>
        </table>
      </div>


      <div>
        <dialog ref={modref} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <form >              
                <div className="flex flex-col gap-1"><label htmlFor="">Nama produk</label>
                  <input  type="text" placeholder="nama" onChange={(e) => setmodnama(e.target.value)} /></div>

                <div className="flex flex-col gap-1"><label htmlFor="">Harga</label>
                  <input type="text" placeholder="Rp 0" onChange={(e) => setmodharga(Number(e.target.value))} /></div>

                <div className="flex flex-col gap-1" > <label htmlFor="">Stok</label>
                  <input type="number" placeholder="0" min={0} className="w-20" onChange={(e) => setmodstok(Number(e.target.value))} /></div>

              </form>
            <div className="modal-action">
              <form method="dialog">
             
                {/* if there is a button in form, it will close the modal */}
                <button className="btn" onClick={modsave}>Save</button>
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog></div>
    </div>
  );
}

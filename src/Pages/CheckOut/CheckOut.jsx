import { useLoaderData } from "react-router-dom";
import serviceimg from "../../assets/images/banner/4.jpg";
// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
  const services = useLoaderData();
//   const {users} = useContext(AuthContext)
  console.log(services);
  const { title, _id, img, price } = services;

  const handleCheckOut = e =>{
    e.preventDefault();
    const form = e.target;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const textarea = form.textarea.value;
    const checkout = {
        fname,
        lname,
        title,
        _id,
        img,
        price,
        phone,
        email,
        textarea
    }

    console.log(checkout);

    fetch('http://localhost:5000/bookings', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(checkout)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })

  }
  return (
    <div>
      <div
        className="hero h-72 rounded-2xl my-10"
        style={{
          backgroundImage: `url(${serviceimg}`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md ">
            <h1 className="mb-5 text-5xl font-bold">CheckOut</h1>
            <button className="btn bg-[#FF3811] border-none text-white -mb-44  ">
              Home/CheckOut
            </button>
          </div>
        </div>
      </div>

      <div className="bg-base-200 my-10">
        <form onSubmit={handleCheckOut} className="card-body m-10">
          <div className="flex w-full gap-5">
            <div className="form-control w-1/2">
              
              <input
                type="text"
                placeholder="First Name"
                name="fname"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-1/2">
              <input
                type="text"
                placeholder="Last Name"
                name="lname"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex w-full gap-5 my-5">
            <div className="form-control w-1/2">
              <input
                type="text"
                placeholder="Your Phone"
                name="phone"
                className="input input-bordered"
                required
              />

            </div>
            <div className="form-control w-1/2">
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control my-5">
           <textarea name="textarea" id="" cols="30" rows="10" placeholder="your message" className="p-5"></textarea>
          </div>
          <div className="form-control mt-6">
            <input type="submit" className="btn btn-block bg-[#FF3811] text-white" value="Order Confirm" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;

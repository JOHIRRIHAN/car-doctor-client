import { Link, useLoaderData } from "react-router-dom";
import serviceimg from '../../assets/images/banner/4.jpg'
const ServiceDetails = () => {
  const service = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const { title, _id } = service;

  return (
    <div>
      <div>
        <div
          className="hero h-72 rounded-2xl my-10"
          style={{
            backgroundImage:
              `url(${serviceimg}`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md ">
              <h1 className="mb-5 text-5xl font-bold">Service Details</h1>
              <button className="btn bg-[#FF3811] border-none text-white -mb-44  ">Home/Service Details</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 h-screen py-10">
            <div className="border-2 col-span-9"></div>
            <div className="border-2 col-span-3">
                <Link to={`/checkout/${_id}`}><button className="btn">Proceed CheckOut</button></Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

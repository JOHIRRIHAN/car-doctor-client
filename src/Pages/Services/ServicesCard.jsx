import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesCard = ({service}) => {
    const {title, price, img} = service;
  return (
    <div className="card border-2 bg-base-100 shadow-xl">
  <figure className="p-3"><img className="border-2 rounded-xl" src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{title}</h2>
    <p className="text-orange-600 text-xl font-semibold">Price: ${price}</p>
    <div className="card-actions justify-end">
    <Link><FaArrowRight /></Link>
    </div>
  </div>
</div>
  )
}

export default ServicesCard
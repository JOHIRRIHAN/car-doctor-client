/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import serviceImg from "../../assets/images/banner/4.jpg";

const CardDetails = () => {
  const [cards, setCards] = useState([]);
  console.log(cards);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings`)
      .then((result) => result.json())
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = id => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "DELETE",
        })
        .then(res => {
            if (!res.ok) {
                if (res.status === 404) {
                    throw new Error("Booking not found.");
                } else {
                    throw new Error("Failed to delete booking.");
                }
            }
            return res.json();
        })
        .then(data => {
            console.log("Deleted:", data.message);
            // Update the UI or state to reflect the deletion
        })
        .catch(error => {
            console.error("Error deleting data:", error.message);
        });
    }
};




  return (
    <div>
      <div
        className="hero h-72 rounded-2xl my-10"
        style={{
          backgroundImage: `url(${serviceImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md ">
            <h1 className="mb-5 text-5xl font-bold">Card Details</h1>
            <button className="btn bg-[#FF3811] border-none text-white -mb-44">
              Home/Card Details
            </button>
          </div>
        </div>
      </div>
      <h3 className="text-5xl text-center">cards: {cards.length}</h3>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cards.map((card) => (
              <tr key={card._id}>
                <th>
                  <button onClick={()=>handleDelete(card._id)} className="btn btn-circle btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="rounded-xl w-24 h-24">
                        <img
                          src={card.img} // Ensure you have an 'image' field in your card data
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">
                        {card.fname} {card.lname}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-lg font-semibold">$ {card.price}</td>

                <td>
                  <div className="text-base opacity-50">{card.email}</div>
                </td>
                <td className="text-lg">{card.phone}</td>
                <th>
                  <button className="btn bg-[#FF3811] text-white">
                    Pending
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardDetails;

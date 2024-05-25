import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    fetch("services.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setServices(data);
        console.log("Fetched services data:", data); // Log the fetched data
      })
      .catch((error) => {
        console.error("Error fetching services data:", error);
      });
  }, []);
  
  return (
    <div>
      <div className="text-center">
        <h3 className="text-lg text-orange-600 font-bold">Services</h3>
        <h3 className="text-3xl font-bold my-5">Our Service Area</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 my-5">
        
        {/* Render services data */}
        {services.length > 0 ? (
          services.map((service) => (
            <ServicesCard key={service.id} service={service} />
          ))
        ) : (
          <p>No services available</p>
        )}
      </div>
    </div>
  );
};

export default Services;

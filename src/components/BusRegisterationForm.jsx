import { useState } from "react";

const BusRegistrationForm = () => {
  const [busDetails, setBusDetails] = useState({
    busNumber: "",
    ownerName: "",
    routes: [
      {
        departureLocation: "",
        arrivalLocation: "",
        schedules: [
          { departureDateTime: "", arrivalDateTime: "", availableSeats: [], bookedSeats: [] }
        ],
      },
    ],
    totalSeats: 0,
    ticketPrice: 0,
  });

  const addRoute = () => {
    setBusDetails({
      ...busDetails,
      routes: [
        ...busDetails.routes,
        {
          departureLocation: "",
          arrivalLocation: "",
          schedules: [
            { departureDateTime: "", arrivalDateTime: "", availableSeats: [], bookedSeats: [] }
          ],
        },
      ],
    });
  };

  const addSchedule = (routeIndex) => {
    const updatedRoutes = [...busDetails.routes];
    updatedRoutes[routeIndex].schedules.push({
      departureDateTime: "",
      arrivalDateTime: "",
      availableSeats: [],
      bookedSeats: [],
    });
    setBusDetails({ ...busDetails, routes: updatedRoutes });
  };

  const handleChange = (e, index, type, subIndex) => {
    const { name, value } = e.target;

    if (type === "busDetails") {
      setBusDetails({ ...busDetails, [name]: value });
    } else if (type === "routes") {
      const updatedRoutes = [...busDetails.routes];
      updatedRoutes[index][name] = value;
      setBusDetails({ ...busDetails, routes: updatedRoutes });
    } else if (type === "schedules") {
      const updatedSchedules = [...busDetails.routes[index].schedules];
      updatedSchedules[subIndex][name] = value;
      const updatedRoutes = [...busDetails.routes];
      updatedRoutes[index].schedules = updatedSchedules;
      setBusDetails({ ...busDetails, routes: updatedRoutes });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(busDetails); 
    
  };

  return (
    <form className="grid p-4 border-2 w-fit" onSubmit={handleSubmit}>
      <h2 className="text-center my-4 font-bold text-2xl">Bus Information</h2>
      
      <label htmlFor="busNumber">Bus Number</label>
      <input
        type="text"
        name="busNumber"
        placeholder="Enter Bus Number"
        value={busDetails.busNumber}
        className="border-2 w-[30rem] py-1 px-2 mb-2"
        onChange={(e) => handleChange(e, null, "busDetails")}
      />
      
      <label htmlFor="ownerName">Owner Name</label>
      <input
        type="text"
        name="ownerName"
        placeholder="Enter Owner Name"
        value={busDetails.ownerName}
        className="border-2 w-[30rem] py-1 px-2 mb-2"
        onChange={(e) => handleChange(e, null, "busDetails")}
      />

      <label htmlFor="totalSeats">Total Seats</label>
      <input
        type="number"
        name="totalSeats"
        placeholder="Enter Total Seats"
        value={busDetails.totalSeats}
        className="border-2 w-[30rem] py-1 px-2 mb-2"
        onChange={(e) => handleChange(e, null, "busDetails")}
      />

      <label htmlFor="ticketPrice">Ticket Price</label>
      <input
        type="number"
        name="ticketPrice"
        placeholder="Enter Ticket Price"
        value={busDetails.ticketPrice}
        className="border-2 w-[30rem] py-1 px-2 mb-2"
        onChange={(e) => handleChange(e, null, "busDetails")}
      />

      <button
        className="py-1 px-2 bg-blue-500 text-white mb-4"
        type="button"
        onClick={addRoute}
      >
        Add Route
      </button>

      {busDetails.routes.map((route, routeIndex) => (
        <div key={routeIndex} className="grid border p-4 mb-4">
          <h3 className="text-lg font-bold">Route {routeIndex + 1}</h3>
          <label htmlFor={`departureLocation-${routeIndex}`}>Departure Location</label>
          <input
            type="text"
            name="departureLocation"
            placeholder="Enter Departure Location"
            value={route.departureLocation}
            className="border-2 w-[30rem] py-1 px-2 mb-2"
            onChange={(e) => handleChange(e, routeIndex, "routes")}
          />
          <label htmlFor={`arrivalLocation-${routeIndex}`}>Arrival Location</label>
          <input
            type="text"
            name="arrivalLocation"
            placeholder="Enter Arrival Location"
            value={route.arrivalLocation}
            className="border-2 w-[30rem] py-1 px-2 mb-2"
            onChange={(e) => handleChange(e, routeIndex, "routes")}
          />

          <button
            className="py-1 px-2 bg-green-500 text-white"
            type="button"
            onClick={() => addSchedule(routeIndex)}
          >
            Add Schedule
          </button>

          {route.schedules.map((schedule, scheduleIndex) => (
            <div key={scheduleIndex} className="grid mt-4">
              <h4 className="text-md font-bold">Schedule {scheduleIndex + 1}</h4>
              <label htmlFor={`departureDateTime-${routeIndex}-${scheduleIndex}`}>Departure Date & Time</label>
              <input
                type="time"
                name="departureDateTime"
                value={schedule.departureDateTime}
                className="border-2 w-[30rem] py-1 px-2 mb-2"
                onChange={(e) => handleChange(e, routeIndex, "schedules", scheduleIndex)}
              />
              <label htmlFor={`arrivalDateTime-${routeIndex}-${scheduleIndex}`}>Arrival Date & Time</label>
              <input
                type="time"
                name="arrivalDateTime"
                value={schedule.arrivalDateTime}
                className="border-2 w-[30rem] py-1 px-2 mb-2"
                onChange={(e) => handleChange(e, routeIndex, "schedules", scheduleIndex)}
              />
            </div>
          ))}
        </div>
      ))}

      <button
        className="py-2 px-4 bg-red-500 text-white mt-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default BusRegistrationForm;

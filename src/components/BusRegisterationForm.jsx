import { useState } from "react";

const BusRegistrationForm = () => {
  const [busDetails, setBusDetails] = useState({
    busName: "",
    busNumber: "",
    busType: "Normal",
    seats: 0,
    routes: [],
    schedules: [],
  });

  const addSchedule = () => {
    setBusDetails({
      ...busDetails,
      schedules: [
        ...busDetails.schedules,
        { departureTime: "", arrivalTime: "", days: [] },
      ],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusDetails({ ...busDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic
  };

  return (
    <form className="grid p-4 border-2 w-fit" onSubmit={handleSubmit}>
      <h2 className="text-center my-4 font-bold text-2xl">Bus Information</h2>
      <label htmlFor="busName">Bus Name</label>
      <input
        type="text"
        name="busName"
        placeholder="Enter Bus Name"
        className="border-2 w-[30rem] py-1 px-2 mb-2"
        onChange={handleChange}
      />
      <label htmlFor="busName">Bus Number</label>
      <input
        type="text"
        name="busNumber"
        placeholder="Enter Bus Number"
        className="border-2 w-[30rem] py-1 px-2 mb-2"
        onChange={handleChange}
      />
      <label htmlFor="busName">Number Of Seats</label>
      <input
        type="number"
        name="seats"
        placeholder="Enter Number of Seats"
        className="border-2 w-[30rem] py-1 px-2 mb-2"
        onChange={handleChange}
      />

      <h2>Route Details</h2>
      <div className="grid">
        <input
          type="text"
          name="startingLocation"
          placeholder="Starting Location"
          className="border-2 w-[30rem] py-1 px-2 mb-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="destinationLocation"
          placeholder="Destination Location"
          className="border-2 w-[30rem] py-1 px-2 mb-2"
          onChange={handleChange}
        />
        <button className="py-1 px-2 bg-red-500" type="button" onClick={addSchedule}>
          Add Schedule
        </button>
      </div>

      {busDetails.schedules.map((schedule, index) => (
        <div key={index} className="grid">
          <label htmlFor="">Departure Time</label>
          <input
            type="time"
            className="border-2 w-[30rem] py-1 px-2 mb-2"
            placeholder="Departure Time"
          />
          <label htmlFor="">Arrival Time</label>
          <input
            type="time"
            className="border-2 w-[30rem] py-1 px-2 mb-2"
            placeholder="Arrival Time"
          />
        </div>
      ))}

      <button className="py-1 px-2 bg-green-600 mt-2" type="submit">Register Bus</button>
    </form>
  );
};

export default BusRegistrationForm;

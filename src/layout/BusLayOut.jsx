import { useState } from "react";
import Seat from "../components/Seat";


const initialSeats = [
    { number: 1, status: 'available' },
    { number: 2, status: 'available' },
    { number: 3, status: 'booked' },
    { number: 4, status: 'available' },
    
  ];

const BusLayOut = () => {
    const [seats, setSeats] = useState(initialSeats);

  const handleSelectSeat = (seatNumber) => {
    const updatedSeats = seats.map((seat) =>
      seat.number === seatNumber
        ? { ...seat, status: seat.status === 'selected' ? 'available' : 'selected' }
        : seat
    );
    setSeats(updatedSeats);
  };

    return (
        <div className="flex flex-wrap justify-center">
        {seats.map((seat) => (
          <Seat
            key={seat.number}
            seatNumber={seat.number}
            status={seat.status}
            onSelect={handleSelectSeat}
          />
        ))}
      </div>
    );
};

export default BusLayOut;
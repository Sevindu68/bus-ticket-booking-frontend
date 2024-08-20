const Seat = ({ seatNumber, status, onSelect }) => {
  return (
    <div>
      <button
        className={`w-8 h-8 m-2 border rounded ${
          status === "available"
            ? "bg-green-500"
            : status === "selected"
            ? "bg-orange-500"
            : status === "booked"
            ? "bg-red-500 cursor-not-allowed"
            : ""
        }`}
        onClick={() => onSelect(seatNumber)}
        disabled={status === "booked"}
      >
        {seatNumber}
      </button>
    </div>
  );
};

export default Seat;

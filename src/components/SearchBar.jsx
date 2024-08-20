import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [start, setStart] = useState("Matara");
  const [end, setEnd] = useState("Matara");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let date_1=new Date(date);
    let date_2=new Date()
    if(date_1<date_2){
      alert('enter valid date')
    }else{
       navigate(`/result?from=${start}&to=${end}&date=${date}`);
    }

  };

  return (
    <div className="px-8 py-5 border-solid border-2 rounded-lg h-fit	bg-white m-4 w-[50%]">
      <form onSubmit={handleSubmit}>
        <div>
          <h3 className="font-medium text-[25px] text-center mb-4">
            Search Your Bus Here
          </h3>

          <div className="flex justify-between">
            <div className="grid">
              <label htmlFor="start">From</label>
              <select
                id="start"
                className=" w-[12.5rem] border-solid border-2 rounded py-2 px-8"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                required
              >
                <option value="Matara">Matara</option>
                <option value="Galle">Galle</option>
                <option value="Colombo">Colombo</option>
              </select>
            </div>
            <div className="grid">
              <label htmlFor="end">To</label>
              <select
                id="end"
                className=" w-[12.5rem] border-solid border-2 rounded py-2 px-8"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                required
              >
               <option value="Matara">Matara</option>
                <option value="Galle">Galle</option>
                <option value="Colombo">Colombo</option>
              </select>
            </div>
            <div className="grid">
              <label htmlFor="start">Date</label>
              <input
                className="w-[12.5rem] border-solid border-2 rounded py-2 px-8"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="w-[100%] flex justify-center mt-4">
          <button className="px-32 py-2 bg-[#1cc277] rounded-md">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

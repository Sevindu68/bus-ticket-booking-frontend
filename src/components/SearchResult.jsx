import { Link, useLocation } from "react-router-dom";

const useQuery=()=>{
  return new URLSearchParams(useLocation().search)
}

const SearchResult = () => {

  

  const query= useQuery();

  const start=query.get('from');
  const end=query.get('to');
  const date=query.get('date');

  console.log(start, end ,date)


  return (
    <div className="flex justify-center">
      <div className="px-8 py-5 border-solid border-2 rounded-lg  flex justify-between	bg-white m-4 w-[60%] items-center">
        <div className="grid">
          <div>
            <span className="text-lg font-medium">Matara</span> to{" "}
            <span className="text-lg font-medium">Kadawatha</span>
          </div>
          <span className="text-lg">
            Bus Number : <span className="text-lg font-medium">ND-2078</span>
          </span>
          <span className="text-lg">
            Duration : <span className="text-lg font-medium">2 hours</span>
          </span>
        </div>

        <div className="grid">
          <div>
            <span className="text-lg font-medium">Departure from: </span>
            <span className="text-lg font-medium">Kadawatha</span>
          </div>
          <span className="text-lg">
            Departure Time : <span className="text-lg font-medium">4am</span>
          </span>
          <span className="text-lg">
            Arrived Time : <span className="text-lg font-medium">6am</span>
          </span>
        </div>
        <div>
          <Link to="/bus">
            <button className="px-6 py-2 bg-neutral-400 rounded">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;

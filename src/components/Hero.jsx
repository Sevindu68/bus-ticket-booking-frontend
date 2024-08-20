import SearchBar from "./SearchBar";


const Hero = () => {

    return (
        <div className="bg-[url('/hero-img.jpg')] bg-no-repeat bg-cover h-[88.6vh] w-[100%] py-40 backdrop-brightness-75 flex justify-center">
            <SearchBar/>
        </div>
    );
};

export default Hero;
import AdminNavBar from "../components/AdminNavBar";
import BusRegistrationForm from "../components/BusRegisterationForm";

const AdminPage = () => {

    return (
        <div className="grid grid-cols-[1fr_5fr] gap-4 p-4">
           <div className="border-r-2"><AdminNavBar/></div> 
           <div><BusRegistrationForm /></div> 
        </div>
    );
};

export default AdminPage;
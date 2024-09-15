import { IoIosArrowRoundForward } from "react-icons/io";
import { TiSocialPinterest } from "react-icons/ti";
import { navItem } from "./assets/data.jsx";
import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
//import Home from "./Home"
import SimpleTable from "./SimpleTable.jsx";

const Sidebar = () => {

  const [click, setClick] = useState(false);

  return (
    <BrowserRouter>
    
    <div className="flex items-start">
      <div className={`h-[100vh] w-64 shadow-2xl text-gray-400 text-[18px] transition-all duration-300 ${click && 'w-[50px]'}`}>
        <div className="flex items-start gap-[20px] p-4">
         <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg p-[4px] items-center transition-all duration-300"><TiSocialPinterest/> </div>
         {!click && <p className="text-blue-600 text-[24px] font-semibold">IyMP Watcher</p>}
        </div>
        <ul className="flex flex-col gap-14 p-4 mt-10">
        {
          navItem.map((item) => (<li className="flex items-center gap-x-2 transition-all duration-300" key={item.id}><span title={item.title}>{item.icon}</span>{!click && item.title}</li>))
        }
      </ul>
  
      </div>
      
      <button onClick={() => setClick(!click)} className={`bg-white shadow-lg rounded-full p-2 ms-[-20px] mt-4 transition-all duration-300 ${click && 'transform rotate-180'}`}>
        <IoIosArrowRoundForward/>
        </button>
        
        <div>
          <Routes>
            <Route path="/" element={<SimpleTable />}></Route>
          </Routes>
    </div>
    </div>
    
    </BrowserRouter>
  );
};

export default Sidebar;
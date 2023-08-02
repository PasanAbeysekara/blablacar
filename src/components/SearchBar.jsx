import React from 'react';
import { AiOutlineUser,AiOutlineEnvironment,AiOutlineCompass,AiOutlineCalendar } from "react-icons/ai";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DemoDateComponent from './mui/DemoDate';

const SearchBar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex items-center justify-center mt-[250px]">
      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <AiOutlineEnvironment size={20} />
        </span>
        <input
          type="text"
          className="border border-gray-400 rounded-l-lg py-[16px] px-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Departure location"
        />
      </div>
      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <AiOutlineCompass size={20} />
        </span>
        <input
          type="text"
          className="border border-gray-400 py-[16px]  px-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Destination"
        />
      </div>
    
      {/* <InlineDatePickerDemo/> */}
      <DemoDateComponent/>
      
      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <AiOutlineUser size={20} />
        </span>
        <input
          type="number"
          min="1"
          max="10"
          className="pl-10 pr-4 w-[90px] border border-gray-400 rounded-r-none py-[16px] px-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="1"
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-[16px] px-6 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

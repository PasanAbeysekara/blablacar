import React from 'react';	
import { useState } from "react";

const HelpReusableCard = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div>
        <p className="text">
            {isReadMore ? text.slice(0, 200)+"..." : text}
        </p>
        <span onClick={toggleReadMore} className="text-blue-500 font-semibold hover:cursor-pointer flex justify-end read-or-hide">
            {isReadMore ? "read more" : " show less"}
        </span>
    </div>
  );
};
        
export default HelpReusableCard;
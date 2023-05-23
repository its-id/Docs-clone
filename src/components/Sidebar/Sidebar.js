import React from "react";
import googleCalender from "../../assets/google-calendar.png";
import googleKeep from "../../assets/google-keep.png";
import googleTasks from "../../assets/google-tasks.png";
import googleContacts from "../../assets/google-contacts.png";
import googleMaps from "../../assets/google-maps.png";

const Sidebar = () => {
  // Downloaded official Google Icons
  return (
    <div className="h-[82vh] w-[4%] flex flex-col items-center py-5 px-1 space-y-10">
      <div className="w-9 rounded-full cursor-pointer px-2 py-2 hover:bg-gray-100">
        <img src={googleCalender} alt="Google Calender" className="w-full" />
      </div>
      <div className="w-9 rounded-full cursor-pointer px-2 py-2 hover:bg-gray-100">
        <img src={googleKeep} alt="Google Keep" className="w-full" />
      </div>
      <div className="w-8 rounded-full cursor-pointer px-1 py-1 hover:bg-gray-100">
        <img src={googleTasks} alt="Google Tasks" className="w-full" />
      </div>
      <div className="w-8 rounded-full cursor-pointer px-2 py-1 hover:bg-gray-100">
        <img src={googleContacts} alt="Google Contacts" className="w-full" />
      </div>
      <div className="w-8 rounded-full cursor-pointer px-2 py-1 hover:bg-gray-100">
        <img src={googleMaps} alt="Google Maps" className="w-full" />
      </div>
      <div className="w-7 border-t border-gray-300"></div>
      <div className="w-10 rounded-full pl-2 pr-3 pt-2 cursor-pointer hover:bg-gray-100">
        <span class="material-symbols-outlined">add</span>
      </div>
    </div>
  );
};

export default Sidebar;

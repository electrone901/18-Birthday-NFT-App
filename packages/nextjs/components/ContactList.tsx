import React from "react";
import MemberCard from "./MemberCard";

const list = [
  {
    id: 1,
    name: "Jhonny Bear",
    user_avatar: "/assets/download.png",
    user_wallet: "0x6598317c9DfFDa99ee6084D87c95F56E0F7459c1",
    total_donations: "0.2 Eth",
  },
  {
    id: 2,
    name: "Emily Smith",
    user_avatar: "/assets/download.png",
    user_wallet: "0x8AaF65B39bC0E14e19bC7Af12e736EC2cBE12620",
    total_donations: "0.4 Eth",
  },
  {
    id: 3,
    name: "Alex Johnson",
    user_avatar: "/assets/download.png",
    user_wallet: "0x5c3FcF89d2Aa58A54822e66a515cC8Bb1D318fc1",
    total_donations: "0.02 Eth",
  },
  {
    id: 4,
    name: "Sophia Garcia",
    user_avatar: "/assets/download.png",
    user_wallet: "0x3D67B8E6aA8E87fEf3C66F5A312B9cF42cF71E51",
    total_donations: "0.12 Eth",
  },
  {
    id: 5,
    name: "Ethan Brown",
    user_avatar: "/assets/download.png",
    user_wallet: "0xC8535A3B6a943B47D09eD6F736dDdBCf0d735A7C",
    total_donations: "0.2 Eth",
  },
];

function ContactList() {
  return (
    <div className="w-4/5 p-4 ml-auto">
      <h2 className="text-2xl font-bold mb-4">Family members contact list</h2>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md float-right">
        Add Family Member
      </button>

      <div className="mt-20">
        {list.map(contact => (
          <MemberCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}

export default ContactList;

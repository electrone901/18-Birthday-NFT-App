import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { HomeIcon, QueueListIcon } from "@heroicons/react/24/outline";
import ContactList from "~~/components/ContactList";

function Dashboard() {
  const { address } = useAccount();
  const [wallet, setWallet] = useState<any>("");
  const [isActive, setIsActive] = useState<any>("Dashboard");

  useEffect(() => {
    setWallet(address);
  }, [address]);

  return (
    <div className="bg-gray-100 flex">
      <div className="bg-blue-600 text-white h-screen w-1/5 p-4">
        <img
          src="https://assets.codepen.io/137754/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1597542102&width=512"
          alt="Avatar"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <div className="text-center">
          <p className="text-lg">Welcome back!</p>
          <p className="text-semibold">{`${wallet.slice(0, 4)}...${wallet.slice(wallet.length - 4)}`}</p>
        </div>
        <ul>
          <li
            className={`flex items-center space-x-2 my-3 mt-40 p-2 ${isActive === "Dashboard" ? "bg-green-500" : ""}`}
            onClick={() => setIsActive("Dashboard")}
          >
            <HomeIcon className="h-8 w-8" />
            <span>Dashboard</span>
          </li>
          <li
            className={`flex items-center space-x-2 my-3 p-2 ${isActive === "Transactions" ? "bg-green-500" : ""}`}
            onClick={() => setIsActive("Transactions")}
          >
            <QueueListIcon className="h-8 w-8" />
            <span>Transactions</span>
          </li>
        </ul>
      </div>

      {/* should be a component */}
      <ContactList />
    </div>
  );
}

export default Dashboard;

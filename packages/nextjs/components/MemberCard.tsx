import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/outline";

const MemberCard = ({ contact }: any) => {
  const { name, user_avatar, user_wallet, total_donations } = contact;
  return (
    <div className=" px-20 m-1">
      <div className="border rounded-lg border-gray-300  p-4 ">
        <div className="flex items-center">
          <div className="flex-1">
            <Link href={`/member-details/${contact.user_wallet}`}>
              <div className="flex items-center">
                <Image
                  width={100}
                  height={100}
                  className="mr-4 h-[50px] w-[50px] rounded-full"
                  src={user_avatar}
                  alt="Avatar"
                />
                <p className="text-[18px] font-bold leading-[28px] mb-0 mt-2">{name}</p>
              </div>
            </Link>

            <p className="font-semibold leading-[0px]  text-sm ">{user_wallet}</p>
          </div>

          <div className="flex items-center">
            <p className="text-lightGray text-sm leading-4 font-normal text-right  mr-2">
              Total donations: {total_donations}
            </p>
            <HeartIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;

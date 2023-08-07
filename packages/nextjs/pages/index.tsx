import Link from "next/link";
import type { NextPage } from "next";
import { LockClosedIcon, UserGroupIcon, GiftIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">18 Birthday NFT App</span>
          </h1>
          <p className="text-center text-lg">
            Empowers parents and family members to gift crypto tokens to their loved ones, which can be redeemed for
            financial assets and support critical life goals after turning <strong>18 years old</strong>.
          </p>
          <p className="text-center text-lg">
            The app aims to provide young adults with the means to achieve their dreams, whether it is funding college
            education, purchasing a car, or saving for a house, with the support of their family.
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <UserGroupIcon className="h-8 w-8 fill-secondary" />
              <p>
                Parents and family members can create personalized gifting profiles for their loved ones, outlining
                their dreams, aspirations, and financial objectives.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <GiftIcon className="h-8 w-8 fill-secondary" />
              <p>
                On their 18th birthday, the recipients can redeem their accumulated crypto tokens for fiat currency or
                other financial assets to support their intended life goals.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <LockClosedIcon className="h-8 w-8 fill-secondary" />
              <p>
                Secure Crypto Wallet: Each user will have a secure crypto wallet within the app, where they can store
                and manage their gifted tokens safely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

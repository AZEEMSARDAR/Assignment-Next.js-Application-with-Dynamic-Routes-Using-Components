import Nav from "./components/nav";
import React from "react";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="text-center text-3xl p-5 w-max rounded-xl m-auto mt-20 ">
        <h1 className="bg-green-400 text-3xl py-2 px-10 rounded-3xl mb-2">
          Hello
        </h1>
        <h1 className="bg-green-400 text-3xl py-2 px-10 rounded-3xl mb-2">
          Welcome to my Next.js
        </h1>
        <h1 className="bg-green-400 text-3xl py-2 px-10 rounded-3xl mb-2">
          Application with Dynamic Routes Using Component
        </h1>
      </div>
    </div>
  );
}

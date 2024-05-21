import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="px-10">
        <h1 className="text-xl md:text-4xl lg:text-4xl font-bold py-5 ">
          Mbolo Samba <br /> nous sommes sur ma Todo liste faite en Next JS
        </h1>
        <div className="flex flex-col py-10 bg-slate-300  p-5 rounded">
          <label className="font-bold text-3xl pb-2" htmlFor="task">
            Entrez vos taches
          </label>
          <input
            className=" outline-none border-2  h-12"
            type="text"
            placeholder="le nom de votre tache"
            id="task"
          />
          <div className="pt-5">
            <button className="bg-black h-12 w-28 text-white font-bold rounded">Ajouter</button>
          </div>
          <h3 className="text-3xl font-bold py-5">
            Liste de toutes le taches
          </h3>
          <ul>

          </ul>

        </div>
      </div>
    </>
  );
}

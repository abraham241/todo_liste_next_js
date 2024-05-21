import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="px-20">
        <h1 className="text-5xl font-bold py-5">
          Mbolo Samba <br /> nous sommes sur ma Todo liste faite en Next JS
        </h1>
        <div className="flex flex-col py-10 bg-slate-300  p-5 rounded">
          <label className="font-bold text-3xl pb-2">Entrez vos taches</label>
          <input className=" outline-none border-2 " type="text" placeholder="le nom de votre tache"/>
        </div>
      </div>
    </>
  );
}

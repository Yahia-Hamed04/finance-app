"use client";

import { useContext, useEffect } from "react";
import { NavBarContext } from "@/app/_components/NavBar";
import Pot from "@/app/_components/Pot";
import data from "@/app/data.json";

export default function Page() {
 const {setPage} = useContext(NavBarContext);
 useEffect(() => setPage("pots"), [setPage]);
 const {pots} = data;

 return (
  <>
   <header className="header">
    <div className="header__text">Pots</div>
    <button className="header__add-pot-btn">+ Add New Pot</button>
   </header>
   <section className="pots-grid">
    {pots.map((pot, i) => <Pot key={i} {...pot} />)}
   </section>
  </>
 );
}
"use client";

import OverviewIcon from "@/public/assets/icon-nav-overview.svg";
import TransactionsIcon from "@/public/assets/icon-nav-transactions.svg";
import BudgetsIcon from "@/public/assets/icon-nav-budgets.svg";
import PotsIcon from "@/public/assets/icon-nav-pots.svg";
import RecurringBillsIcon from "@/public/assets/icon-nav-recurring-bills.svg";
import MinimizeMenuIcon from "@/public/assets/icon-minimize-menu.svg";
import Logo from "@/public/assets/images/logo-large.svg";
import Link from "next/link";
import { createContext, useContext, useState } from "react";

export const NavBarContext = createContext();

function NavLink({currentPage, icon, text, link}) {
 return (
  <Link className={`nav__item${currentPage == link ? " nav__item--active" : ""}`} href={"/" + link}>
   <span className="nav__icon">{icon}</span>
   <span className="nav__name">{text}</span>
  </Link>
 );
}

export function NavBarProvider({children}) {
 const [page, setPage] = useState("");
 
 return (
  <NavBarContext.Provider value={{page, setPage}}>
   {children}
  </NavBarContext.Provider>
 );
}

export default function NavBar() {
 const [hidden, setHidden] = useState(false);
 const {page} = useContext(NavBarContext);

 return (
  <nav className={`nav${hidden ? " nav--hidden" : ""}`}>
   <div className="nav__logo"><Logo /></div>
   <ul className="nav__items">
    <li><NavLink currentPage={page} link="" icon={<OverviewIcon />} text="Overview" /></li>
    <li><NavLink currentPage={page} link="transactions" icon={<TransactionsIcon />} text="Transactions" /></li>
    <li><NavLink currentPage={page} link="budgets" icon={<BudgetsIcon />} text="Budgets" /></li>
    <li><NavLink currentPage={page} link="pots" icon={<PotsIcon />} text="Pots" /></li>
    <li><NavLink currentPage={page} link="recurring-bills" icon={<RecurringBillsIcon />} text="Recurring Bills" /></li>
   </ul>
   <button className="nav__item nav__toggle" onClick={() => setHidden(_ => true)}>
    <span className="nav__icon"><MinimizeMenuIcon /></span>
    <span className="nav__name">Minimize Menu</span>
   </button>
  </nav>
 );
}
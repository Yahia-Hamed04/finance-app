"use client";
import PotIcon from "@/public/assets/icon-pot.svg";
import RightCaretIcon from "@/public/assets/icon-caret-right.svg";

import Table from "@/app/_components/Table";
import { useContext, useEffect } from "react";
import { NavBarContext } from "@/app/_components/NavBar";
import Image from "next/image";
import dayjs from "dayjs";
import data from "@/app/data.json";
import Link from "next/link";

export default function Home() {
 const {setPage} = useContext(NavBarContext);
 useEffect(() => setPage(""), [setPage]);
 const {transactions} = data;

 return (
  <>
   <header className="header">
    Overview
   </header>
   <section className="overview">
    <div className="component component--dark">
     <span className="component__title">Current Balance</span>
     <span className="component__amount">$4,836.00</span>
    </div>
    <div className="component">
     <span className="component__title">Income</span>
     <span className="component__amount">$3,814.25</span>
    </div>
    <div className="component">
     <span className="component__title">Expenses</span>
     <span className="component__amount">$1,700.50</span>
    </div>
   </section>
   <div className="grid">
    <section className="section pots">
     <header className="section__header">
      <span className="section__header-title">Pots</span>
      <Link href="/pots" className="section__header-link">See Details <RightCaretIcon /></Link>
     </header>
     <div className="section__content">
      <div className="pots__total-saved">
       <div className="pots__total-saved-icon"><PotIcon /></div>
       <div className="component component--transparent" style={{alignItems: "center"}}>
        <span className="component__title">Total Saved</span>
        <span className="component__amount">$850</span>
       </div>
      </div>
      <div className="pots__data">
       <div className="pots__component">
        <div className="pots__component-tag bg-green"></div>
        <div className="component component--small">
         <span className="component__title">Savings</span>
         <span className="component__amount">$159</span>
        </div>
       </div>
       <div className="pots__component">
        <div className="pots__component-tag bg-cyan"></div>
        <div className="component component--small">
         <span className="component__title">Gift</span>
         <span className="component__amount">$40</span>
        </div>
       </div>
       <div className="pots__component">
        <div className="pots__component-tag bg-navy"></div>
        <div className="component component--small">
         <span className="component__title">Concert Ticket</span>
         <span className="component__amount">$110</span>
        </div>
       </div>
       <div className="pots__component">
        <div className="pots__component-tag bg-yellow"></div>
        <div className="component component--small">
         <span className="component__title">New Laptop</span>
         <span className="component__amount">$10</span>
        </div>
       </div>
      </div>
     </div>
    </section>
    <section className="section budgets">
     <header className="section__header">
      <span className="section__header-title">Budgets</span>
      <Link href="/budgets" className="section__header-link">See Details <RightCaretIcon /></Link>
     </header>
     {/* Add budgets data */}
    </section>
    <section className="section transactions">
     <header className="section__header">
      <span className="section__header-title">Transactions</span>
      <Link href="/transactions" className="section__header-link">View All <RightCaretIcon /></Link>
     </header>
     <Table prefix="transactions" data={transactions.slice(0, 6)} TableRow={TableRow} />
    </section>
    <section className="section bills">
     <header className="section__header">
      <span className="section__header-title">Recurring Bills</span>
      <Link href="/recurring-bills" className="section__header-link">See Details <RightCaretIcon /></Link>
     </header>
     <div className="bills__data">
      <div className="component bills__component border-green">
       <span className="component__title">Paid Bills</span>
       <span className="component__amount">$190.00</span>
      </div>
      <div className="component bills__component border-cyan">
       <span className="component__title">Total Upcoming</span>
       <span className="component__amount">$194.98</span>
      </div>
      <div className="component bills__component border-yellow">
       <span className="component__title">Due Soon</span>
       <span className="component__amount">$59.98</span>
      </div>
     </div>
    </section>
   </div>
  </>
 );
}

function TableRow({data}) {
 const {avatar, name, date, amount} = data;
 const { basePath } = useRouter();

 return (
  <>
   <div className="transactions__entry">
    <div className="transactions__entry-profile">
     <Image alt={name} width={40} height={40} src={basePath + avatar} className="transactions__entry-image" />
     <span className="transactions__entry-name">{name}</span>
    </div>
    <div className="transactions__entry-details">
     <span className={`transactions__entry-amount${amount > 0 ? " text-green" : ""}`}>{amount >= 0 ? "+": "-"} ${Math.abs(amount).toFixed(2)}</span>
     <span className="transactions__entry-date">{dayjs(date).format("DD MMM YYYY")}</span>
    </div>
   </div>
   <div className="seperator"></div>
  </>
 );
}
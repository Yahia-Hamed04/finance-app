"use client";

import { useContext, useEffect } from "react";
import { NavBarContext } from "@/app/_components/NavBar";
import Image from "next/image";

import SearchIcon from "@/public/assets/icon-search.svg";
import RecurringBillsIcon from "@/public/assets/icon-recurring-bills.svg";
import BillPaidIcon from "@/public/assets/icon-bill-paid.svg";
import BillDueIcon from "@/public/assets/icon-bill-due.svg";
import data from "@/app/data.json";
import Table from "@/app/_components/Table";
import dayjs from "dayjs";
import AdvancedFormat from "dayjs/plugin/advancedFormat";
import { useRouter } from "next/router";

dayjs.extend(AdvancedFormat);

export default function Page() {
 const {setPage} = useContext(NavBarContext);
 useEffect(() => setPage("recurring-bills"), [setPage]);

 const {bills} = data;
 const tableHeaders = {title: "Title", date: "Due Date", amount: "Amount"};

 return (
  <>
    <header className="header">
     <div className="header__text">Recurring Bills</div>
    </header>
    <section className="bills-s">
     <div className="bills__summary">
      <div className="bills__total">
       <div><RecurringBillsIcon /></div>
       <div className="bills__total-text">
        <div className="text-preset-4">Total Bills</div>
        <div className="text-preset-1 bold">$384.98</div>
       </div>
      </div>
      <div className="budgets__summary">
       <div className="budgets__summary-spending">
        <div className="budgets__summary-header">Summary</div>
        <div className="budgets__summary-items">
         <div className="budgets__summary-item">
          <div className="budgets__summary-item-name">
           <span>Paid Bills</span>
          </div>
          <div className="budgets__summary-item-money">
           <span className="text-grey-900 text-preset-3">4 ($190.00)</span>
          </div>
         </div>
         <div className="seperator"></div>
         <div className="budgets__summary-item">
          <div className="budgets__summary-item-name">
           <span>Total Upcoming</span>
          </div>
          <div className="budgets__summary-item-money">
           <span className="text-grey-900 text-preset-3">4 ($194.98)</span>
          </div>
         </div>
         <div className="seperator"></div>
         <div className="budgets__summary-item text-red">
          <div className="budgets__summary-item-name">
           <span>Due Soon</span>
          </div>
          <div className="budgets__summary-item-money">
           <span className="text-preset-3">2 ($59.98)</span>
          </div>
         </div>
         <div className="seperator"></div>
        </div>
       </div>
      </div>
     </div>
     <section className="bills__table transactions">
      <form action="" className="filters">
       <div className="filters__search">
        <input className="filters__search-input" id="filters__search-input" type="text" placeholder="Search transaction" />
        <label htmlFor="filters__search-input" className="filters__search-icon"><SearchIcon /></label>
       </div>
       <div className="filters__criteria">
        <div className="filters__filter filters__sort">
         <label htmlFor="filters__sort-menu" className="filters__sort-label">Sort by</label>
         <select className="filters__menu filters__sort-menu" id="filters__sort-menu">
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="alpha">A to Z</option>
          <option value="rev-alpha">Z to A</option>
          <option value="highest">Highest</option>
          <option value="lowest">Lowest</option>
         </select>
        </div>
       </div>
      </form>
      <Table prefix="bills" headers={tableHeaders} data={bills} TableRow={TableRow} />
     </section>
    </section>
   </>
 );
}

function TableRow({data}) {
 const {avatar, name, type, date, amount, paid} = data;
 const { basePath } = useRouter();

 return (
  <tr className="table-row">
   <td className="bills__title">
    <Image width={40} height={40} alt={name} src={basePath + avatar} className="transactions__target-image" />
    <span className="bills__title-name">{name}</span>
   </td>
   <td className={`bills__date ${dayjs().date() >= date && !paid ? " text-red" : ""}`}>
    {type} - {dayjs().date(date).format("Do")}
    {dayjs().date() >= date ? (paid ? <BillPaidIcon /> : <BillDueIcon />) : null}
   </td>
   <td className="bills__amount">${amount.toFixed(2)}</td>
  </tr>
 );
}
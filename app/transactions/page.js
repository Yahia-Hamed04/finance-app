"use client";

import { useContext, useEffect, useState } from "react";
import { NavBarContext } from "@/app/_components/NavBar";
import Image from "next/image";
import Pagination from "@/app/_components/Pagination";
import Table from "@/app/_components/Table";
import data from "@/app/data.json";
import dayjs from "dayjs";
import { useRouter } from "next/router";

export default function Page() {
 const {setPage} = useContext(NavBarContext);
 const [pageIndex, setPageIndex] = useState(0);
 const [sort, setSort] = useState("latest");
 const [query, setQuery] = useState("");
 const [category, setCategory] = useState("all");

 const sortFns = {
  "alpha": (a, b) => a.name.localeCompare(b.name),
  "rev-alpha": (a, b) => -1 * a.name.localeCompare(b.name),
  "lowest": (a, b) => a.amount - b.amount,
  "highest": (a, b) => b.amount - a.amount,
  "oldest": (a, b) => dayjs(a.date).diff(dayjs(b.date)),
  "latest": (a, b) => -1 * dayjs(a.date).diff(dayjs(b.date)),
 }

 useEffect(() => setPage("transactions"), [setPage]);
 
 const tableHeaders = {target: "Recipient / Sender", category: "Category", date: "Transaction Date", amount: "Amount"};
 const tableData = data.transactions
  .filter(t => category === "all" || t.category.toLowerCase() === category)
  .sort(sortFns[sort])
 const tableDataPage = tableData.slice(10*pageIndex, 10*(pageIndex + 1) - 1)

 return (
  <>
   <header className="header">
    Transactions
   </header>
   <section className="transactions-s">
    <form action="" className="transactions__filters" onSubmit={e => e.preventDefault()}>
     <div className="transactions__search">
      <input className="transactions__search-input" id="transactions__search-input" type="text" placeholder="Search transaction" />
      <label htmlFor="transactions__search-input" className="transactions__search-icon"><svg fill="none" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m13.3538 13.1462-3.1294-3.1287c.907-1.08894 1.3593-2.48564 1.2628-3.89955-.0966-1.41391-.7345-2.73618-1.78109-3.69173-1.0466-.95555-2.42131-1.470821-3.83815-1.438621-1.41683.032201-2.76671.609391-3.76883 1.611501-1.00211 1.00212-1.579301 2.352-1.611501 3.76883-.0322 1.41684.483071 2.79155 1.438621 3.83817.95556 1.0466 2.27782 1.6845 3.69173 1.781 1.41391.0966 2.81061-.3557 3.89954-1.2627l3.12878 3.1293c.0464.0465.1016.0833.1623.1085.0607.0251.1257.0381.1914.0381s.1308-.013.1915-.0381c.0607-.0252.1158-.062.1623-.1085.0464-.0464.0833-.1016.1084-.1623.0252-.0607.0381-.1257.0381-.1914s-.0129-.1308-.0381-.1915c-.0251-.0607-.062-.1158-.1084-.1623zm-11.85378-6.64621c0-.89002.26392-1.76005.75839-2.50007.49446-.74002 1.19727-1.31679 2.01954-1.65739.82226-.34059 1.72706-.42971 2.59998-.25607.87291.17363 1.67473.60221 2.30407 1.23155s1.0579 1.43116 1.2316 2.30407c.1736.87292.0845 1.77772-.2561 2.59999-.34062.82226-.91739 1.52507-1.65741 2.01953-.74002.4945-1.61005.7584-2.50007.7584-1.19307-.0013-2.33689-.4759-3.18052-1.31949-.84363-.84363-1.31816-1.98745-1.31948-3.18052z" fill="#201f24"/></svg></label>
     </div>
     <div className="transactions__criteria">
      <div className="transactions__filter transactions__sort">
       <label htmlFor="transactions__sort-menu" className="transactions__sort-label">Sort by</label>
       <select className="filters__menu transactions__sort-menu" id="transactions__sort-menu" onChange={e => setSort(e.target.value)}>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="alpha">A to Z</option>
        <option value="rev-alpha">Z to A</option>
        <option value="highest">Highest</option>
        <option value="lowest">Lowest</option>
       </select>
      </div>
      <div className="transactions__filter transactions__category-filter">
       <label htmlFor="menu" className="transactions__category-label">Category</label>
       <select className="filters__menu transactions__category-menu" id="menu" onChange={e => setCategory(e.target.value)}>
        <option value="all">All Transactions</option>
        <option value="entertainment">Entertainment</option>
        <option value="bills">Bills</option>
        <option value="groceries">Groceries</option>
        <option value="dining out">Dining Out</option>
        <option value="transportation">Transportation</option>
        <option value="personal care">Personal Care</option>
        <option value="education">Education</option>
        <option value="lifestyle">Lifestyle</option>
        <option value="shopping">Shopping</option>
        <option value="general">General</option>
       </select>
      </div>
     </div>
    </form>
    <Table prefix="transactions" headers={tableHeaders} data={tableDataPage} TableRow={TableRow} />
    <Pagination currentPage={pageIndex} numPages={Math.ceil(tableData.length / 10)} setPage={setPageIndex} />
   </section>
  </>
 );
}

function TableRow({data}) {
 const {avatar, name, category, date, amount} = data;
 const { basePath } = useRouter();

 return (
  <tr className="table-row">
   <td className="transactions__target">
    <Image width={40} height={40} src={basePath + avatar} alt={name} className="transactions__target-image" />
    <span className="transactions__target-name">{name}</span>
   </td>
   <td className="transactions__category">{category}</td>
   <td className="transactions__date">{dayjs(date).format("DD MMM YYYY")}</td>
   <td className={`transactions__amount${amount > 0 ? " text-green" : ""}`}>{amount >= 0 ? "+": "-"}${Math.abs(amount).toFixed(2)}</td>
  </tr>
 );
}
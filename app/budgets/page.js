"use client";
import Image from "next/image";

import EllipsisIcon from "@/public/assets/icon-ellipsis.svg";
import JamesThompson from "@/public/assets/images/avatars/james-thompson.jpg";
import PixelPlayground from "@/public/assets/images/avatars/pixel-playground.jpg";
import RinaSato from "@/public/assets/images/avatars/rina-sato.jpg";

import { useContext, useEffect } from "react";
import { NavBarContext } from "@/app/_components/NavBar";
import Table from "@/app/_components/Table";

export default function Page() {
 const {setPage} = useContext(NavBarContext);
 useEffect(() => setPage("budgets"), [setPage]);

 return (
  <>
   <header className="header">
    <div className="header__text">Budgets</div>
    <button className="header__add-pot-btn">+ Add New Budget</button>
   </header>
   <section className="budgets">
    <div className="budgets__summary">
     <div className="budgets__summary-chart"></div>
     <div className="budgets__summary-spending">
      <div className="budgets__summary-header">Spending Summary</div>
      <div className="budgets__summary-items">
       <div className="budgets__summary-item">
        <div className="budgets__summary-item-name">
         <div className="tag bg-green"></div>
         <span>Entertainment</span>
        </div>
        <div className="budgets__summary-item-money">
         <span className="text-grey-900 text-preset-3">$15.00</span> of $50.00
        </div>
       </div>
       <div className="seperator"></div>
       <div className="budgets__summary-item">
        <div className="budgets__summary-item-name">
         <div className="tag bg-cyan"></div>
         <span>Bills</span>
        </div>
        <div className="budgets__summary-item-money">
         <span className="text-grey-900 text-preset-3">$150.00</span> of $750.00
        </div>
       </div>
       <div className="seperator"></div>
       <div className="budgets__summary-item">
        <div className="budgets__summary-item-name">
         <div className="tag bg-yellow"></div>
         <span>Dining Out</span>
        </div>
        <div className="budgets__summary-item-money">
         <span className="text-grey-900 text-preset-3">$133.75</span> of $75.00
        </div>
       </div>
       <div className="seperator"></div>
       <div className="budgets__summary-item">
        <div className="budgets__summary-item-name">
         <div className="tag bg-navy"></div>
         <span>Personal Care</span>
        </div>
        <div className="budgets__summary-item-money">
         <span className="text-grey-900 text-preset-3">$40.00</span> of $100.00
        </div>
       </div>
       <div className="seperator"></div>
      </div>
     </div>
    </div>
    <div className="budgets__details">
     <div className="budgets__budget">
      <div className="pots-grid__card-heading">
       <div className="pots-grid__card-heading__combo">
        <div className="circular-tag bg-green"></div>
        <div className="pots-grid__card-heading__title">Savings</div>
       </div>
       <button className="pots-grid__card-heading__btn"><EllipsisIcon /></button>
      </div>
      <div className="budget__usage">
       <div className="budget__usage-max">Maximum of $50</div>
       <div className="budget__usage-bar">
        <div className="budget__usage-fill bg-green" style={{width: "25%"}}></div>
       </div>
      </div>
      <div className="budget__spent-remaining">
       <div className="pots__component">
        <div className="tag bg-green"></div>
        <div className="component component--small">
         <span className="component__title">Spent</span>
         <span className="component__amount">$15.00</span>
        </div>
       </div>
       <div className="pots__component">
        <div className="tag bg-beige-100"></div>
        <div className="component component--small">
         <span className="component__title">Remaining</span>
         <span className="component__amount">$35.00</span>
        </div>
       </div>
      </div>
      <div className="budget__spending">
       <header className="budget__spending-header">
        <span className="budget__spending-header-title">Latest Spending</span>
        <span className="budget__spending-header-link">See All</span>
       </header>
       {/* <Table prefix="transactions" data={transactions.slice(0, 6)} TableRow={TableRow} /> */}
       
       <div className="transactions__entries">
        <div className="transactions__entry">
         <div className="transactions__entry-profile">
          <Image alt="James Thompson" src={JamesThompson} className="transactions__entry-image" />
          <span className="transactions__entry-name">James Thompson</span>
         </div>
         <div className="transactions__entry-details">
          <span className="transactions__entry-amount">-$5.00</span>
          <span className="transactions__entry-date">11 Aug 2024</span>
         </div>
        </div>
        <div className="seperator bg-grey-300"></div>
        <div className="transactions__entry">
         <div className="transactions__entry-profile">
          <Image alt="Pixel Playground" src={PixelPlayground} className="transactions__entry-image" />
          <span className="transactions__entry-name">Pixel Playground</span>
         </div>
         <div className="transactions__entry-details">
          <span className="transactions__entry-amount">-$10.00</span>
          <span className="transactions__entry-date">11 Aug 2024</span>
         </div>
        </div>
        <div className="seperator bg-grey-300"></div>
        <div className="transactions__entry">
         <div className="transactions__entry-profile">
          <Image alt="Rina Sato" src={RinaSato} className="transactions__entry-image" />
          <span className="transactions__entry-name">Rina Sato</span>
         </div>
         <div className="transactions__entry-details">
          <span className="transactions__entry-amount">-$10.00</span>
          <span className="transactions__entry-date">13 Jul 2024</span>
         </div>
        </div>
        <div className="seperator bg-grey-300"></div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}

function TableRow({data}) {
 const {avatar, name, date, amount} = data;

 return (
  <>
   <div className="transactions__entry">
    <div className="transactions__entry-profile">
     <Image alt={name} width={40} height={40} src={avatar} className="transactions__entry-image" />
     <span className="transactions__entry-name">{name}</span>
    </div>
    <div className="transactions__entry-details">
     <span className="transactions__entry-amount">{amount >= 0 ? "+": "-"} ${Math.abs(amount).toFixed(2)}</span>
     <span className="transactions__entry-date">{dayjs(date).format("DD MMM YYYY")}</span>
    </div>
   </div>
   <div className="seperator bg-gray-300"></div>
  </>
 );
}

/* 
  Add budget data 

  Add/Edit budget start 

  Add New Budget
  Choose a category to set a spending budget. These categories can help you monitor spending.

  Edit Budget
  As your budgets change, feel free to update your spending limits.
  
  Budget Category
  Entertainment
  Bills
  Groceries
  Dining Out
  Transportation
  Personal Care
  Education
  Lifestyle
  Shopping
  General

  Maximum Spend

  Theme
  Green
  Yellow
  Cyan
  Navy
  Red 
  Purple
  Turquoise
  Brown
  Magenta
  Blue
  Navy Grey
  Army Green
  Pink
  Gold
  Orange

  Add Budget / Save Changes
  
   Add/Edit budget end 

   Delete budget start 

  Delete ' budget name '

  Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever.

  Yes, Confirm Deletion
  No, Go Back

   Delete budget end
*/
"use client";

import PrevIcon from "@/public/assets/icon-caret-left.svg";
import NextIcon from "@/public/assets/icon-caret-right.svg";

export default function Pagination({currentPage, numPages, setPage}) {
 return numPages > 1 ? (
  <div className="pagination">
   <button className={`pagination-prev${currentPage == 0 ? " hidden" : ""}`} onClick={() => setPage(currentPage - 1)}>
    <span><PrevIcon /></span>
    <span>Prev</span>
   </button>
   <div className="pagination-pages">
    {Array(numPages).fill(0).map((_, i) => 
      <button className="pagination-page" key={i} onClick={() => setPage(i)} disabled={currentPage == i}>{i + 1}</button>)
    }
   </div>
   <button className={`pagination-next${currentPage == numPages - 1 ? " hidden" : ""}`}onClick={() => setPage(currentPage + 1)}>
    <span>Next</span>
    <span><NextIcon /></span>
   </button>
  </div>
 ) : null;
}
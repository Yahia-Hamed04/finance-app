import EllipsisIcon from "@/public/assets/icon-ellipsis.svg";

export default function Pot({name, theme, target, total}) {
 const percentage = (100 * total / target).toFixed(2) + "%";

 return (
  <div className="pots-grid__card">
   <div className="pots-grid__card-heading">
    <div className="pots-grid__card-heading__combo">
     <div className="circular-tag" style={{backgroundColor: theme}}></div>
     <div className="pots-grid__card-heading__title">{name}</div>
    </div>
    <button className="pots-grid__card-heading__btn"><EllipsisIcon /></button>
   </div>
   <div className="pots-grid__card-saved">
    <div className="pots-grid__card-total-saved">
     <span className="pots-grid__card-total-saved-text">Total Saved</span>
     <span className="pots-grid__card-total-saved-amount">${total.toFixed(2)}</span>
    </div>
    <div className="pots-grid__card-progress-bar">
     <div className={`pots-grid__card-progress-fill`} style={{width: percentage, backgroundColor: theme}}></div>
    </div>
    <div className="pots-grid__card-target">
     <span className="pots-grid__card-target-percentage">{percentage}</span>
     <span className="pots-grid__card-target-text">Target of ${target.toFixed(2)}</span>
    </div>
   </div>
   <div className="pots-grid__card-money-btns">
    <button className="pots-grid__card-money-btn">+ Add Money</button>
    <button className="pots-grid__card-money-btn">Withdraw</button>
   </div>
  </div>
 );
}
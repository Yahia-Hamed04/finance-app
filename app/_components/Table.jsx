"use client";

export default function Table({headers, prefix, data, TableRow}) {
 const rows = data.map((datum, i) => <TableRow key={i} data={datum} />);

 return headers ? (
  <table className="table">
    <thead className="table-header">
     <tr className="table-header-data">
      {Object.entries(headers).map(([k, v], i) => <td className={`${prefix}__${k}-header`} key={i}>{v}</td>)}
     </tr>
    </thead>
   <tbody className="table-body">
    {rows}
   </tbody>
  </table>
 ) : <div className={`${prefix}__entries`}>{rows}</div>;
}
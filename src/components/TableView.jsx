import Pagination from "./Pagination"
import  '../styles/globalStyles.css'

const TableView =({data,order,kpi,teamNames,units,totalItems,paginate,itemsPerPage,currentPage,setOrder})=>{
    return(
        <>
        <label>
          <input
            type="checkbox"
            checked={order}
            onChange={() => setOrder()}
          />
          Descending Order
        </label>
        <table className="business-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Team</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{order ? index + 1 : data.length - index}</td>
            <td>{teamNames[row.team - 1]}</td>
            <td>{row.value} {units[kpi]}</td>
          </tr>
        ))}
      </tbody>
    </table>
        <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        paginate={paginate}
        currentPage={currentPage}
        />
        </>
    )
}
export default TableView
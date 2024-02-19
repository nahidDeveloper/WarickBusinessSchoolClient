import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TableView from './TableView';


const KpiList =()=>{
const [date, setDate] = useState('2023-06-19');
const [kpi, setKpi] = useState('scores');
const [rankings, setRankings] = useState([]);
const [order,setDescendingOrder]= useState(true);//To set order
const[currentPage ,setCurrentPage]= useState(1);
const[itemsPerPage] = useState(10);
const[TEAM_NAMES,setTEAM_NAMES]= useState([]);
const apiUrl = process.env.REACT_APP_API_BASE_URL;
const [searchTerm, setSearchTerm] = useState('');//Added search functionality

const UNITS = {
    "wacc": "%",
    "scores": "",
    "factory_utilization": "%",
    "employee_engagement": "%",
    "interest_coverage": "x",
    "marketing_spend_rev": " USD",
    "e_cars_sales": " units",
    "co2_penalty": "M (USD)"
}

const fetchTeamNames = async () => {
  try {
    const response = await axios.get(apiUrl+'team');
    const names = response.data.map(team => team.name); // Extracting only the names
    setTEAM_NAMES(names);
  } catch (error) {
    console.error('Error fetching team names:', error);
  }
};

useEffect(() => {
    fetchTeamNames();
    fetchdata();
}, [date, kpi,order,searchTerm]);

const fetchdata = async () => {
  let updatedData;
  try {
    const response = await axios.get(apiUrl+`data?date=${date}&metric=${kpi}`);
    const data = response.data;

    // Extracting teamId and value from each entry in the response data
    const extractedData = data.map(entry => ({
      team: entry.team.id,
      teamName: entry.team.name,
      value: entry.value
    }));

    // Apply search filter if search term is provided
    const filteredData = searchTerm
    ? extractedData.filter(entry => entry.teamName.toString().includes(searchTerm))
    : extractedData;
    if (order) {
      updatedData = filteredData.sort((a, b) => b.value - a.value);
  } else {
      updatedData = filteredData.sort((a, b) => a.value - b.value);
  }
  const rows=updatedData;
  setRankings(rows);
  } catch (error) {
    console.error('Error fetching team names:', error);
  }
};



//Get currentItems
const indexOfLastItem = currentPage* itemsPerPage;
const indexOfFirstItem = indexOfLastItem -itemsPerPage
const currentItems = rankings.slice(indexOfFirstItem,indexOfLastItem)

const handleSearch = (e) => {
  setSearchTerm(e.target.value);
};

const paginate =(pageNumber)=>{
    setCurrentPage(pageNumber);
}

const sortOrder =()=>{
  setDescendingOrder(!order)
}

return (
    <div>
      <h1>Business in Practice - KPI Rankings</h1>
      <div>
      <input type="text" placeholder="Search team..." value={searchTerm} onChange={handleSearch} />
      <select value={date} onChange={(e) => setDate(e.target.value)}>
                    <option value="2023-06-19">Day 1</option>
                    <option value="2023-06-20">Day 2</option>
                    <option value="2023-06-21">Day 3</option>
                    <option value="2023-06-23">Day 4</option>
                    <option value="2023-06-24">Day 5</option>
                    <option value="2023-06-25">Day 6</option>
                </select>
                <select value={kpi} onChange={(e) => setKpi(e.target.value)}>
                    <option value="scores">Scores</option>
                    <option value="wacc">WACC</option>
                    <option value="factory_utilization">Factory Utilisation</option>
                    <option value="employee_engagement">Employee Engagement</option>
                    <option value="interest_coverage">Interest Coverage</option>
                    <option value="marketing_spend_rev">Cumulative Marketing Spend/Rev</option>
                    <option value="e_cars_sales">eCar Sales</option>
                    <option value="co2_penalty">CO2 Penalty</option>
                </select>
      </div>
      <TableView
        data={currentItems}
        order={order}
        kpi={kpi}
        teamNames={TEAM_NAMES}
        units={UNITS}
        totalItems={rankings.length}
        paginate={paginate}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setOrder={sortOrder}
      />
     
    </div>
  );
};
export default KpiList
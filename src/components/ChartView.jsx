// import { Bar } from 'react-chartjs-2';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const ChartView =({ data, kpi,units })=>{
return(
    <VictoryChart
      domainPadding={10}
      theme={VictoryTheme.material}
      title={kpi}
    >
      <VictoryAxis
        tickValues={data.map(entry => entry.teamName)}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={(x) => x+units[kpi]}
      />
      <VictoryBar
        data={data}
        x="teamName"
        y="value"
      />
    </VictoryChart>
  );
  

}

export default ChartView
import './App.css';
import { useEffect, useState } from 'react';
import HighCharts from "./HighCharts";
import { useDispatch, useSelector } from 'react-redux';
import { changeDataSet, dataRecieved } from './store/actions';

const url = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json";

function App() {

  // const [data, setData] = useState([]);
  // const [chartData, setChartData] = useState({});
  // const [active, setActive] = useState();

  const dispatch = useDispatch();
  const data = useSelector((store) => store? store.dataSets : []);
  const chartData = useSelector(store => store? store.chartData : {});
  const active = useSelector(store => store? store.activeSetIndex: 0);


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        // setData(res);
        dispatch(dataRecieved(res));
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleButtonClick = (index) => {
    let chartData = data[index];
    // setChartData(chartData);
    dispatch(changeDataSet(chartData, index));
  }

  return (
    <div className="App">
      <header className="App-header">
      Clootrack Software Engineer Frontend Hiring Challenge
      </header>
      <div style={{margin: '10px'}}>
        {
          data.map((res, index) => (
            <button
              key={index}
              className = {active === index ? 'active': ''}
              onClick = {() => handleButtonClick(index)}
            >
              dataset {index}
            </button>
          ))
        }
      </div>
      <HighCharts 
        chartData = {chartData}
      />
    </div>
  );
}

export default App;

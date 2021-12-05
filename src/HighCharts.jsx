import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

function HighCharts(props) {
    const [chartOptions, setChartoptions] = useState({});

    useEffect(() => {
        let chartOptions = {
            chart: {
                type: props.chartData.type === "Bar" ? 'column' : 'pie',
                height: 450,
                // width: 450
            },
            title: {
                text: ''
            },
            plotOptions: {
                pie: {
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                    }
                },
                column: {
                    colorByPoint: true,
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                data: props.chartData.elements ? props.chartData.elements : []
            }]
        };
        setChartoptions(chartOptions);
    }, [props.chartData])

    return (
        <HighchartsReact
            options={chartOptions}
            highcharts={Highcharts}
        // constructorType={'chart'}
        />
    )
}

export default HighCharts;
import React, { useState, useEffect } from 'react';
import Dygraph from 'dygraphs';
import './index.css';

import {AdvancedRealTimeChart, AdvancedRealTimeChartProps} from 'react-ts-tradingview-widgets';
import DygraphCanvasRenderer from "dygraphs/src/dygraph-canvas";

const BarChart = ({collectionId, onTemp}) =>{
    const [data, setData] = useState([]);
    const [lineGraphData, setLineGraphData] = useState([]);

  useEffect(() => {
    if (collectionId !== '') {
      asyncFetch();
    }
  }, [collectionId]);

  useEffect(() => {
    const lineData = [];
    data.forEach((datum) => {
      lineData.push([new Date(datum.time), parseFloat(datum.sevenDayAveragePrice), parseFloat(datum.floorPrice), parseFloat(datum.oneDayVolume)]);
    });
    setLineGraphData(lineData);
  }, [data]);

  useEffect(() => {
    new Dygraph('graph', lineGraphData, {
      labels: [ 'Date', 'Seven Day Average Price', 'Floor Price', 'Daily Volume' ],
      colors: [ 'white', 'red', 'green' ],
      series: {
        'Daily Volume': {
          // color: 'transparent',
          plotter: barChartPlotter,
          axis: 'y',
        },
        'Seven Day Average Price': {
          axis: 'y2',
        },
        'Floor Price': {
          axis: 'y2'
        }
      },
      // axes: {
      //   y2: {
      //     logscale: true,
      //   }
      // },
      axisLineColor: 'white'
    });
  }, [lineGraphData]);

  const asyncFetch = async () => {
    const response = await fetch(`http://localhost:3001/api/collection/${collectionId}`);
    const json = await response.json();
    setData(json.data.pricing);
    onTemp(json.data.stats);
  };

  const darkenColor = (colorStr) => {
    // Defined in dygraph-utils.js
    const color = Dygraph.toRGB_(colorStr);
    color.r = Math.floor((255 + color.r) / 2);
    color.g = Math.floor((255 + color.g) / 2);
    color.b = Math.floor((255 + color.b) / 2);
    return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
  }
  const barChartPlotter = (e) => {
    const ctx = e.drawingContext;
    const points = e.points;
    const y_bottom = e.dygraph.toDomYCoord(0);

    ctx.fillStyle = darkenColor(e.color);

    // Find the minimum separation between x-values.
    // This determines the bar width.
    let min_sep = Infinity;
    for (let i = 1; i < points.length; i++) {
      const sep = points[i].canvasx - points[i - 1].canvasx;
      if (sep < min_sep) min_sep = sep;
    }
    const bar_width = Math.floor(2.0 / 3 * min_sep);

    // Do the actual plotting.
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      const center_x = p.canvasx;

      ctx.fillRect(center_x - bar_width / 2, p.canvasy,
        bar_width, y_bottom - p.canvasy);

      ctx.strokeRect(center_x - bar_width / 2, p.canvasy,
        bar_width, y_bottom - p.canvasy);
    }
  }

    return(
      <div>
        <div id='graph' style={{height: '600px', width: '100%'}}/>
      </div>
    )
}

export default BarChart;

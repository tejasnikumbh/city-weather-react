import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import _ from 'lodash';

const _average = (data) => {
  var vals = data.map((val) => val.amt);
  var avg =  _.sum(vals) / vals.length;
  return _.round(avg);
}

const Chart = function (props) {
  return(
    <div className="area-chart">
      <AreaChart width={175} height={125} data={props.data}>
        <Area type="monotone" dataKey="amt" stroke={props.color} fill = {props.color} dot = {false}/>
      </AreaChart>
      <span className="graph-avg-val"> Average: { _average(props.data) } { props.unit }</span>
    </div>
  );
}

export default Chart;

import React, {useState, useEffect} from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {useSelector} from "react-redux";
import update from 'react-addons-update';

const data = [
  {name: "Jan", Revenue: undefined}, 
  {name: 'Feb', Revenue: undefined},
  {name: 'Mar', Revenue: undefined},
  {name: 'Apr', Revenue: undefined}, 
  {name: 'May', Revenue: undefined}, 
  {name: 'Jun', Revenue: undefined},
  {name: 'Aug', Revenue: undefined}, 
  {name: 'Sep', Revenue: undefined},
  {name: 'Oct', Revenue: undefined},
  {name: 'Nov', Revenue: undefined}, 
  {name: 'Dec', Revenue: undefined}, ]

export const Chart = ({MonthRevenue}) => { 
  return (
    <>
      <LineChart width={700} height={350} data={MonthRevenue}>
        <Line type="monotone" dataKey="Revenue" stroke="#03a9f4" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
    </LineChart>
    </>
  )
}

export default React.memo(Chart);
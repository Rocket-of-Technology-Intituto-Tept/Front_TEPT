import React, { useState, useEffect } from 'react'
import './DayCardst.js'
import { Days } from '../Calendario/DayCardst';

function DayCard(props) {
  const [state, setState] = useState("");

  const day = props.day._d;

  useEffect(() => {
    const currentMonth = new Date(props.month + ",01," + props.year);

    if (day.getMonth() !== currentMonth.getMonth()) {
      setState("nonPertenceMonth")
      return;
    }
  }, [])

  return (
    <div>
      <Days state={state} onClick={() => console.log(props.day._d.getDate())} >
        {props.day.format("DD").toString()}
      </Days>
    </div>
  )
}

export default DayCard
import React, { useState, useEffect } from 'react'
import moment from 'moment';
import DayCard from './DayCard';
import Build from './Build';

import './Calender.css'

function MonthCard(props) {
    const [value, setValue] = useState(
        moment().locale("pt").month(props.month).year(props.currentYear)
    );

    const [calender, setCalender] = useState([]);
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]

    useEffect(() => {
        setValue(value.year(props.currentYear))
        setCalender(Build(value))
    },[value, props.currentYear])

    return (
        <div>
            <div className='month-card'>
                <div className='header-month'>
                    {value.format("MMMM")}
                </div>
                <div className='week-days'>
                    {weekDays.map(value => (
                        <div className='week-day'>
                            {value}
                        </div>
                    ))}
                </div>

                {
                    calender.map((week) => (
                        <div className='week' key={week}>
                            {week.map((day) => (
                                <DayCard
                                    key={day._d.getTime() + props.month}
                                    day={day}
                                    month={props.month}
                                    year={props.currentYear}
                                    dateSelected={props.dateSelected}
                                    setDateSelected={props.setDateSelected}
                                />
                            ))}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default MonthCard

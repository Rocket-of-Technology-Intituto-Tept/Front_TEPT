import React, { useState } from 'react'
import moment from 'moment';
import MonthCard from './MonthCard';
import { IconButton } from '@mui/material'
import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';

import '../Calendario/Calender.css'

function Calendario() {
    const [currentYear, setCurrentYear] = useState(2022);

    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    moment.updateLocale("pt", {
        months: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
        ],
    });
    return (
        <div div='calender-page'>
            <div className='header-cal'>
                <IconButton
                    size='small'
                    onClick={() => setCurrentYear(currentYear - 1)}
                >
                    <KeyboardArrowLeftTwoToneIcon />
                </IconButton>
                {currentYear}
                <IconButton
                    size='small'
                    onClick={() => setCurrentYear(currentYear + 1)}
                >
                    <KeyboardArrowRightTwoToneIcon />
                </IconButton>
            </div>
            <div className='content'>
                {month.map(value => (
                    <MonthCard
                        key={value}
                        month={value}
                        currentYear={currentYear}
                    />
                ))}
            </div>
        </div>
    )
}

export default Calendario
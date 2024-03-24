'use client'
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

export default function DateReserve ({onDateChange}: {onDateChange: Function}) {

    const [date, setDate] = useState<Dayjs | null>(null);

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={date} onChange={(value) => {onDateChange(value); setDate(value)}}/>
            </LocalizationProvider>
        </div>
    );
}
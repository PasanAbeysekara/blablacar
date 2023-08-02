import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DemoDateComponent() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx={{bgcolor:"white",'& .MuiOutlinedInput-root': {
                    '& fieldset': {
                    borderRadius: 0,
                    },},}}
            PopperProps={{
                sx: {
                  '& .MuiPaper-root': {
                    padding: '10px',
                  },
                },
            }}
            InputProps={{ disableUnderline: true}} 
            slotProps={{ textField: { placeholder: 'Pick a date' } }} inputVariant="standard" disablePast
            />
        </LocalizationProvider>
    );
}

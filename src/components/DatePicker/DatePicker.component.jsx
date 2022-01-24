import React from 'react';
import { useImage } from '../../providers/Images.provider.jsx';
import './DatePicker.styles.js';
import {
  ButtonDatePicker,
  FormDatePicker,
  InputDatePicker,
} from './DatePicker.styles.js';

function DatePicker() {
  const { date, setDate } = useImage();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date);
  };

  const handleDateValue = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <FormDatePicker onSubmit={handleSubmit}>
        <InputDatePicker
          type="date"
          role="date-input"
          value={date}
          onChange={handleDateValue}
        />
        <ButtonDatePicker role="date-submit" type="submit">
          Buscar
        </ButtonDatePicker>
      </FormDatePicker>
    </>
  );
}

export default DatePicker;

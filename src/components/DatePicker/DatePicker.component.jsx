import React from 'react';
import { useImage } from '../../providers/Images.provider.jsx';
import './DatePicker.styles.js';
import {
  ButtonDatePicker,
  FormDatePicker,
  InputDatePicker,
} from './DatePicker.styles.js';

function DatePicker() {
  const { dateValue, setDateValue } = useImage();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDateValue = (e) => {
    setDateValue(e.target.value);
  };

  return (
    <>
      <FormDatePicker onSubmit={handleSubmit}>
        <InputDatePicker
          type="date"
          role="date-input"
          value={dateValue}
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

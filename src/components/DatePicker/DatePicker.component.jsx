import React, { memo, useState } from 'react';
import { useImage } from '../../providers/Images.provider.jsx';
import './DatePicker.styles.js';
import {
  ButtonDatePicker,
  FormDatePicker,
  InputDatePicker,
} from './DatePicker.styles.js';

function DatePicker() {
  const { dateValue, setterDate } = useImage();
  const [dateInput, setDateInput] = useState(dateValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setterDate(dateInput);
  };

  const handleDateValue = (e) => {
    setDateInput(e.target.value);
  };

  return (
    <>
      <FormDatePicker onSubmit={handleSubmit}>
        <b>{'Select date: '}</b>
        <InputDatePicker
          type="date"
          role="date-input"
          value={dateInput}
          onChange={handleDateValue}
        />
        <ButtonDatePicker role="date-submit" type="submit">
          Buscar
        </ButtonDatePicker>
      </FormDatePicker>
    </>
  );
}

export default memo(DatePicker);

import { render, screen, fireEvent } from '@testing-library/react';
import DatePicker from '../../../components/DatePicker/DatePicker.component';
import AppContext from '../../../context/AppContext.context';
import { getDateToday } from '../../../utils/getDateToday';

describe('Testing DatePicker.component', () => {

  const context = {
    setterDate: function(){}, 
    dateValue: '2022-01-23',
    image: {}
  };

  test('should return initial date', () => {
    render(
      <AppContext.Provider value={context}>
        <DatePicker/>
      </AppContext.Provider>
    );
    
    const input = screen.getByRole('date-input');
    expect(input.value).toBe('2022-01-23');
  });

  test('should change date input', () => {
    render(
      <AppContext.Provider value={context}>
        <DatePicker/>
      </AppContext.Provider>
    );
    
    const input = screen.getByRole('date-input');
    fireEvent.change(input, {target: {value: '2022-01-20'}});
    expect(input.value).toBe('2022-01-20');
    
  });
  
});

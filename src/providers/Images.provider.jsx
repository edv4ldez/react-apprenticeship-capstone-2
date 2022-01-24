import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext.context';
import useDataFetch from '../hooks/useDataFetch';
import { getDateToday } from '../utils/getDateToday';

function useImage() {
  const context = useContext(AppContext);

  if (!context) {
    return new Error('You can not use useImage without an ImageProvider');
  }

  return context;
}

function ImageProvider({ children }) {
  const today = getDateToday();
  const [dateValue, setDateValue] = useState(today);
  const { data } = useDataFetch(dateValue);
  return (
    <AppContext.Provider value={{ data, dateValue, setDateValue }}>
      {children}
    </AppContext.Provider>
  );
}

export { useImage };

export default ImageProvider;

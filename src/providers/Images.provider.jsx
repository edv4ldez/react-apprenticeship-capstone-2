import React, { useCallback, useContext, useState } from 'react';
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
  const image = useDataFetch(dateValue);
  const setterDate = useCallback(
    (date) => {
      setDateValue(date);
    },
    [setDateValue]
  );
  return (
    <AppContext.Provider value={{ image, dateValue, setterDate }}>
      {children}
    </AppContext.Provider>
  );
}

export { useImage };

export default ImageProvider;

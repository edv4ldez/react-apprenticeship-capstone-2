import useDataFetch from "../../hooks/useDataFetch";
import { renderHook } from '@testing-library/react-hooks';

describe('', () => {
  test('should return the data in data', async() => {
    
    const { result, waitForNextUpdate } = renderHook( () => useDataFetch('2022-01-21') );
    await waitForNextUpdate();
  
    expect(result.current.data.date).toBe('2022-01-21');
  });

  test('should return the error for invalid data', async() => {
    
    const { result, waitForNextUpdate } = renderHook( () => useDataFetch('2022-01-29') );
    await waitForNextUpdate();
    
    expect(result.current.error).toBe('There was an error, please try again');
  });
  
});

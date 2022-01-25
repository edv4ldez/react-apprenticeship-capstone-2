import { getDateToday } from "../../utils/getDateToday";

describe('Testing getDateToday function', () => {
  test('', () => {
    const date = getDateToday();
    
    expect(date).toBe('2022-01-25');
  });
  
});

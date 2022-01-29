export const getDateToday = () => {
  return new Date().toISOString().substring(0, 10);
};

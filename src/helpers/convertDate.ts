const timeFormat: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const convertCreatedDate = (date: string): string => {
  const currentDate = new Date(date);

  return currentDate.toLocaleString('en-US', timeFormat);
};

const convertSigninDate = (date: number): string => {
  const currentDate = new Date(Number(date));

  return currentDate.toLocaleString('en-US', timeFormat);
};

export { convertCreatedDate, convertSigninDate };

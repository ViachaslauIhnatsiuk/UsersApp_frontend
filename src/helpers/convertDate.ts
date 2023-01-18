const convertCreatedDate = (date: string) => {
  const currentDate = new Date(date);

  const timeFormat: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return currentDate.toLocaleString('en-US', timeFormat);
};

const convertSigninDate = (date: number) => {
  const currentDate = new Date(Number(date));

  const timeFormat: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return currentDate.toLocaleString('en-US', timeFormat);
};

export { convertCreatedDate, convertSigninDate };

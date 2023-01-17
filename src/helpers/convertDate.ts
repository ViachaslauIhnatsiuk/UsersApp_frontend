export const convertDate = (createdAt: string) => {
  const date = new Date(createdAt);

  const timeFormat: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleString('en-US', timeFormat);
};

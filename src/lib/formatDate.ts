const formatDate = (d: string, locale: string /* , format = '' */) => {
  if (!d) {
    return '';
  }
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  };

  return new Date(d).toLocaleDateString(locale, options);
};

export default formatDate;

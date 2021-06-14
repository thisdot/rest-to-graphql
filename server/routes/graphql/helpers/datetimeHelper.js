const formatDateTime = (value, format = null) => {
  if (!value) return null;

  const dt = new Date(value);
  switch (format) {
    case 'DATETIME':
      return dt;
    case 'MILLISECONDS':
      return dt.getTime();
    case 'SECONDS':
    default:
      return parseInt(dt.getTime() / 1000, 10);
  }
};

module.exports = {
  formatDateTime,
};

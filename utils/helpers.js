const dayjs = require('dayjs');
module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return dayjs(date).format("MMM D, YYYY");
  }
}



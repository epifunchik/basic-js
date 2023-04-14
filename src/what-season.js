const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  let month = date.getMonth();
  console.log(typeof month)
  if (month <= 1 || month === 11){
    month = 'winter'
  }
  else if (month === 4 || month === 2 || month === 3){
    month = 'spring'
    console.log('dvds')
  }
  else if (month <= 7 || month > 4 || month === 'jun' || month === 'jul' || month === 'aug'){
    month = 'summer'
  }
  else if (month === 10 || month === 8 || month === 9){
    month = 'autumn'
  }
console.log(date)
return month
}

// getSeason(752, 10, 10, 22, 51, 3, 797)

module.exports = {
  getSeason
};

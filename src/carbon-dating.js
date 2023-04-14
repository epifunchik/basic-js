const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let date = 0;
  const k = Math.log(2) / 5730
  if (typeof sampleActivity !== 'string'){
    return false
  }
  else{
    date = Math.ceil(Math.log(15/ Number(sampleActivity))/k);
  }
return typeof date === 'number' && date !== Infinity && date > 0 ? date : false
}

module.exports = {
  dateSample
};

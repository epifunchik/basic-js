const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false
  }
  let names = [];
  let name = [];
  for (let key of members){
    if(typeof key == 'string'){
      names.push(key.trim())
    }
  }
  if (names.length === 0){
    return false
  }
  for (let key of names){
    name.push(key[0].toUpperCase())
  }
  return name.sort().join('')
}

module.exports = {
  createDreamTeam
};

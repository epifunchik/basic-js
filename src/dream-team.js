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
  console.log(members)
  if (members === null || members === undefined || typeof members === Boolean || typeof members === Number){
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
console.log(names)
  for (let key of names){
    console.log(key[0])
    name.push(key[0].toUpperCase())
  }
  console.log(typeof members === Number)
  return name.sort().join('')
}
// createDreamTeam(3)

module.exports = {
  createDreamTeam
};

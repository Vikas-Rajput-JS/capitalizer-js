const capitalizeFirstLetter =  (str)=> {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
const log = capitalizeFirstLetter('hello developers')
console.log(log)

module.export = capitalizeFirstLetter;
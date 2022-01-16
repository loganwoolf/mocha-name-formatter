const nameInverter = function(name) {
  let honRegex = new RegExp(/[a-z]+\.$/i);
  let manySpaces = new RegExp(/ {2,}/g);
  name.replace(manySpaces, ' ');
  name = name.trim();
  if (name === '') return '';
  
  name = name.split(' ');
  let honorificPosition = name.findIndex(x => honRegex.test(x));
  let honorific = name[honorificPosition];
  if (honorificPosition >= 0) {
    name.splice(honorificPosition, 1);
  }
  if (!name.length) return '';
  name.reverse();
  name = name.join(', ');

  return typeof honorific === 'string' && honorific.length > 1
    ? honorific + ' ' + name
    : name;
};

module.exports = nameInverter;
var members = ['hanmin', '21years old', 'student'];
console.log(members[1]);
var i = 0;
while(i<members.length){
  console.log('array loop',members[i]);
  i = i + 1;
}

var roles = {
  'programmer':'hanmin',
  'old':'21years old',
  'job':'student'
}

console.log(roles.old);

for(var name in roles){
  console.log('object =>',name, 'value =>', roles[name]);
}

#!/usr/local/bin/node
require('datejs');
var args = process.argv.slice(2);
//console.log(args);
//6л.  10м.  25д.
//var arg = args[0].split(/ /);
//var arg = args[0].split('.');

console.log(args);
years=args[0].match(/(\d?\d?)л./);
months=args[0].match(/(\d?\d?)м./);
count=years[1]*365;
console.log(years[1],months[1]);

//if(arg[2]) {
  day=args[0].match(/(\d?\d?)д./);
  count+=day[1]*1;

//}
//console.log(count);

count+=(months[1]*30);
//console.log(count);

///console.log(count);
//console.log(years+" "+months+" "+day);
//console.log(Date.today().add(-count).days().toShortDateString());
console.log(Date.today().add(-count).days().toString('dd/MM/yyyy')   );

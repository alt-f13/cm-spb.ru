#!/usr/local/bin/node
require('datejs');
var args = process.argv.slice(2);
//console.log(args);

var arg = args[0].split(/ /);
//console.log(arg);
years=arg[0].slice(0, -1);
months=arg[1].slice(0, -1);
count=years*365;

if(arg[2]) {
  day=arg[2].slice(0, -1);
  count+=day*1;

}
//console.log(count);

count+=months*30;
//console.log(count);

///console.log(count);
///console.log(years+" "+months+" "+day);
console.log(Date.today().add(-count).days().getTime());

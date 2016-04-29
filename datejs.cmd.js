#!/usr/local/bin/node
require('datejs');
var args = process.argv.slice(2);
///console.log(args);
years=args[0].slice(0, -1);
months=args[1].slice(0, -1);
day=args[2].slice(0, -1);
count=years*365;
///console.log(count);

count+=months*30;
///console.log(count);

count+=day*1;
///console.log(count);
///console.log(years+" "+months+" "+day);
console.log(Date.today().add(-count).days().toString('dd/MM/yyyy')   );

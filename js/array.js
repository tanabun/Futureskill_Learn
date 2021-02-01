var ayarr = ["a", "b", "c"];
var ayarr2 = [123, 456, 789, 101112];
var ayarr3 = [{ key1: "TestKey1" }, { key2: "TestKey2" }];
var ayarr4 = [["Test1"], ["Test2"]];
var ayarr5 = [true, true, false];

console.log(ayarr);

console.log("index: ", ayarr5.length, "Frist idex value: ", ayarr5[0]);

for (let i = 0; i < ayarr5.length; i++) {
  console.log("index: " + i, ayarr5[i]);
}

ayarr5[3] = true;
// log(ayarr5);

ayarr5.push(false);
// log(ayarr5);

ayarr5.pop();
// log(ayarr5);

ayarr5.unshift(false);
// log(ayarr5);

ayarr5.shift();
log(ayarr5);

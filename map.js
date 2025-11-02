// JAVASCRIPT STRUCTURE MAP 
const course1 = {name: "programing hero"}
const course2 = {name: "next level"};
const map = new Map()
map.set(course1, {courseId: "level1"})
map.set(course2, {courseId: "level2"})

// map.forEach((value, key) => console.log("key:", key, "value: ", value))
// console.log(map);
// console.log([...map.keys()]);
// console.log([...map.values()]);
for(let key of map.keys()){
    key.name = "shohoz sorol simple " + key.name
}
console.log(map.entries());

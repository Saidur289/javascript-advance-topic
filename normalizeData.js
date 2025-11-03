const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];

const posts = [
  { id: 1, userId: 102, title: "My first post" },
  { id: 2, userId: 101, title: "React Hooks" },
  { id: 3, userId: 101, title: "Data Structures" },
  { id: 4, userId: 103, title: "CSS is fun" },
  { id: 5, userId: 102, title: "Node.js streams" },
];
const postByUserId =  posts.reduce((table, post) =>{
    const {userId} = post;
    console.log(post, "firstly");
    if(!table[userId]){
        table[userId] = []
    }
    table[userId].push(post)
    console.log(table);
    return table;
}, {})
const userWithPost = users.map((user) => {
    return {
        ...user,
        posts: postByUserId[user.id] || []
    }
})
console.log(JSON.stringify(userWithPost));
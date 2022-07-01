// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

const postsEl = document.getElementById("posts");

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

getData("https://jsonplaceholder.typicode.com/posts").then((data) => {
  for(key in data){
    console.log(data[key]);
    postsEl.innerHTML += `
  <div class="box">
  <h2>${data[key].title}</h2>
  <h2>User id: ${data[key].userId}</h2>
  <p>
    ${data[key].body}
  </p>
</div>`;
  }
});

console.log(getData("https://jsonplaceholder.typicode.com/posts"));

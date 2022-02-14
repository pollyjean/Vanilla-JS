//XHR
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/");
xhr.setRequestHeader("Content-type", "application/json");
xhr.send();

xhr.onload = () => {
  if (xhr.status === 200) {
    const res = JSON.parse(xhr.response);
    console.log(res[0]);
  } else {
    console.error(xhr.status, xhr.statusText);
  }
};

const xhr2 = new XMLHttpRequest();
xhr2.open("POST", "https://jsonplaceholder.typicode.com/posts/");
xhr2.setRequestHeader("Content-type", "application/json;charset=UTF-8");
xhr2.send(JSON.stringify({ title: "foo", body: "bar", userId: 1 }));

xhr2.onload = () => {
  if (xhr2.status === 201) {
    const res2 = JSON.parse(xhr2.response);
    console.log(res2);
  } else {
    console.error(xhr2.status, xhr.statusText);
  }
};

const xhr3 = new XMLHttpRequest();
xhr3.open("PUT", "https://jsonplaceholder.typicode.com/posts/1");
xhr3.setRequestHeader("Content-type", "application/json;charset=UTF-8");
xhr3.send(JSON.stringify({ title: "Vanilla", body: "Javascript", userId: 2 }));

xhr3.onload = () => {
  if (xhr3.status === 200) {
    const res = JSON.parse(xhr3.response);
    console.log(res);
  } else {
    console.error(xhr3.status, xhr3.statusText);
  }
};

const xhr4 = new XMLHttpRequest();
xhr4.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
xhr4.setRequestHeader("Content-type", "application/json;charset=UTF-8");
xhr4.send();
xhr4.onload = () => {
  if (xhr4.status === 200) {
    const res = JSON.parse(xhr4.response);
    console.log(res);
  } else {
    console.error(xhr4.status, xhr4.statusText);
  }
};

//Fetch API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "content-type": "application/json;charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "alto",
    body: "ids",
    userId: 1,
  }),
  headers: {
    "content-type": "application/json;charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//Promise
// const promise = new Promise((resolve, reject) => {
//   if (/* success */) {
//     resolve("result data")
//   } else {
//     reject(new Error("error"));
//   }
// })

// function getNoPromiseData() {
//   const xhr5 = new XMLHttpRequest();
//   xhr5.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
//   xhr5.setRequestHeader("content-type", "application/json");
//   xhr5.send();
//   xhr5.onload = () => {
//     if (xhr5.status === 200) {
//       const res = JSON.parse(xhr5.response);
//       console.log(res);
//       return res;
//     } else {
//       console.error(xhr5.status, xhr5.statusText);
//       return;
//     }
//   };
// }

// const res5 = getNoPromiseData();
// console.log(res5);
// console.log("Next Level");

function getDataPromise() {
  return new Promise((resolve, reject) => {
    const xhr6 = new XMLHttpRequest();
    xhr6.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
    xhr6.setRequestHeader("content-type", "application/json");
    xhr6.send();
    xhr6.onload = () => {
      if (xhr6.status === 200) {
        const res6 = JSON.parse(xhr6.response);
        resolve(res6);
      } else {
        console.error(xhr6.status, xhr6.statusText);
        reject(new Error(xhr6.status));
      }
    };
  });
}

getDataPromise().then((res) => {
  console.log(res);
  console.log("Next Level");
});

//Async/Await
async function asyncAwaitFn(params) {
  const res7 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const res7Json = await res7.json();
  console.log(res7Json);

  const res8 = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "Pepper",
      body: "mint",
      userId: 1,
    }),
    headers: { "content-type": "application/json;charset=UTF-8" },
  });
  const res8Json = await res8.json();
  console.log(res8Json);
}

asyncAwaitFn();

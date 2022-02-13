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

//Fetch

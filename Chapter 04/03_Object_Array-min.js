let fruits=["Apple","Banana","Tomato","Pear","Watermelon","Strawberry","Mango","Pineapple","Kiwi"];console.log(fruits.toString()),console.log(fruits.join(" / "));let lastFruit=fruits.pop();console.log(fruits.toString()),console.log(lastFruit),fruits.push("Blueberry"),console.log(fruits.toString());let firstFruit=fruits.shift();console.log(firstFruit),console.log(fruits.toString()),fruits.unshift("Korean Apple"),console.log(fruits.toString()),fruits[7]="Ananas",console.log(fruits.toString()),fruits.splice(3,0,"Lemon","Orange"),console.log(fruits.toString());let nonFruits=["Kale","Cinnamon"],waters=["Cola","Cider"],juice=fruits.concat(nonFruits,waters);console.log(juice.toString());let selectedJuice=juice.slice(2,4);console.log(selectedJuice),fruits.sort(),console.log(fruits),fruits.reverse(),console.log(fruits);let points=[100,40,90,80,72];points.sort((function(t,o){return t-o})),console.log(points),points.sort((function(t,o){return o-t})),console.log(points);let longJuice=juice.filter((function(t){return t.length>6}));console.log(longJuice);let artistList=[{name:"Seo Taiji",active:!0,albums:9},{name:"Lee Sora",active:!0,albums:9},{name:"KIRARA",active:!0,albums:4},{name:"Beatles",active:!1,albums:12},{name:"Nirvana",active:!1,albums:4}],artistName=artistList.map((function(t){return{name:t.name}}));console.log(artistName),console.log(artistName[0].name);
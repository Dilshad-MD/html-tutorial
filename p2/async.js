// async function dilshad() {
//   return 5;
// }

// dilshad().then((x) => {
//   alert(x);
// });
// ======================

// async function dilshad() {
//   let Delhiweather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("27 deg");
//     }, 1000);
//   });

//   let Odishaweather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("25 deg");
//     }, 5000);
//   });
//   //   Delhiweather.then(alert);
//   //   Odishaweather.then(alert);
//   let Delhiw = await Delhiweather;
//   let Odishaw = await Odishaweather;
//   return [Delhiw, Odishaw];
// }
// console.log("Welcome to weather control room");
// let a = dilshad();
// console.log(a);

async function dilshad() {
  let Delhiweather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 deg");
    }, 2000);
  });

  let Odishaweather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("25 deg");
    }, 5000);
  });
  //   Delhiweather.then(alert);
  //   Odishaweather.then(alert);
  console.log("Fetching Delhi weather Please wait...");
  let Delhiw = await Delhiweather;
  console.log("Fetched Delhi weather: " + Delhiw);
  console.log("Fetching Odisha weather Please wait...");
  let Odishaw = await Odishaweather;
  console.log("Fetched Odisha weather: " + Odishaw);
  return [Delhiw, Odishaw];
}
console.log("Welcome to weather control room");
let a = dilshad();
a.then((value) => {
  console.log(value);
});

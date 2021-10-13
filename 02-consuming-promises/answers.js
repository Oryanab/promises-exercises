//  const changeColor = (color, time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randNum = Math.floor(Math.random() * 10 + 1);
//       if (randNum > 0) {
//         const body = document.body;
//         body.style.backgroundColor = color;
//         console.log(color);
//         resolve();
//       } else {
//         reject();
//       }
//       return color;
//     }, time);
//   });
// };
/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {thunk} action
 *
 */
function waitForPromise(promise, action) {
  return new Promise((promise, action) => {
    setTimeout(() => {
      promise();
    }, 1000);
  }).then(() => {
    action();
  });
}
/**
 *
 * EXERCISE 2
 *
 * @param {Promise} promise
 * @param {consumer} consumer
 * @param {handler} handler
 */

//  async function calc() {
//throw "error"; // thorw you to reject
// return "hey"; // get you into resolve (hey will go to data)
// }
function consumePromise(promise, consumer, handler) {
  async function promis() {
    return promise;
  }
  promis()
    .then((result) => {
      consumer(result);
    })
    .catch((err) => {
      handler(err);
    });
}

/**
 * @callback thunk
 * @returns {void}
 */
module.exports = {
  waitForPromise,
  consumePromise,
};

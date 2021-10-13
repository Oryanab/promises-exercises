/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 * If the first promise rejects with an error, the new promise rejects with that error.
  * If the first promise resolves with a result, 
  * -it calls the transformer with the value as an argument.
  * If the transformer returns with a value, the new promise resolves with that value.
  * If the transformer throws an error, the new promise rejects with that error.

 */
function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    try {
      resolve(promise);
    } catch {
      reject(promise);
    }
  }).then((value) => {
    return transformer(value);
  });
}

/*
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return numberPromise.then((result) => {
    return new Promise((resolve, reject) => {
      if (!isNaN(result)) {
        resolve(result * result);
      } else {
        reject(` "Cannot convert ${result} to a number!"`);
      }
    });
  });
}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise).catch((value) => {
    return 0;
  });
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
  return promise.then(
    (response) => Promise.reject(response),
    (rejected) => Promise.resolve(rejected)
  );
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};

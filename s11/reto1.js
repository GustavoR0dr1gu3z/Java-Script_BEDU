function promiseAll(promises) {
    return new Promise((resolve, reject) => {

        let arrayPromise = [];
        let arr = promises.length;
        for (let i = 0; i < promises.length; i++) {
          promises[i].then(result => {
            arrayPromise[i] = result;
            arr--;
            if (arr === 0) resolve(arrayPromise);
          }).catch(reject);
        }
        if (promises.length === 0) resolve(arrayPromise);
    })
}

function soon(value) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), 1000)
    })
}

  // Test cases
promiseAll([])
    .then(arrayPromise => {
        console.log('Expected result []: ', arrayPromise)
    })

promiseAll([soon(1), soon(2), soon(3)])
    .then(arrayPromise => {
        console.log('Expected result [1, 2, 3]: ', arrayPromise)
    })

promiseAll([soon(1), Promise.reject('X'), soon(3)])
    .then(arrayPromise => {
        console.log('We should not get here')
    })
    .catch(error => {
        console.log('Expected error X: ', error)
    })

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 'Hello World';
}

function log(value) {
    wait().then((promesaWait) => console.log(promesaWait))
}

log()

function startProcess() {
    console.log('Start Phase 1. Wait one second...');
    setTimeout(function () {
        console.log('Phase 1 completed. Wait two seconds...');
        setTimeout(function () {
            console.log('Phase 2 completed.');
        }, 2000);
    }, 1000);
}

startProcess();

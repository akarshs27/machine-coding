export function apiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number  = Math.floor(Math.random() * 10);
            console.log("Number",number);
            if(number > 5) {
                resolve('SUCCESS');
            } else {
                reject('FAILED');
            }
        },500);
    })
}

export function retry(callback, n = 5) {
    return new Promise((resolve, reject) => {
        let retries = 0;
        const interval = setInterval(async () => {
            retries++;
            if(retries === n) {
                console.log(`Trying for the last ${n}th time`);
                clearInterval(interval);
            }
            try {
                await callback();
                clearInterval(interval);
                console.log(`Operation successful, retried ${retries} times`);
                resolve(true);
            } catch (err) {
                console.log(`Operation Unsuccessful, retried ${retries} times`, err);
            }
        },2000)
    })
}
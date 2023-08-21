
function message(msg) {
    console.log(msg);
}

function sampler(callback, count = 1) {
    let currentRun = 1;

    return function (...args)  {
        if(currentRun % count === 0) {
            callback(...args);
        } 
        currentRun++;
    }
}

const sample = sampler(message, 4);
sample("a");
sample("b");
sample("c"); 
sample("d"); // d
sample("e");
sample("f");
sample("g");
sample("h"); // h

// const sample = sampler(message, 3);
// sample("a");
// sample("b");
// sample("c"); // c
// sample("d"); 
// sample("e");
// sample("f"); // f
// sample("g");
// sample("h"); 


function buyOranges() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('Buy oranges from store'));
        }, 2000);    
    });
};

function cutAndPeelOranges() {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
            resolve(console.log('Cut the oranges and peel off the skin'));
        }, 1000);
    });
    
};

function addOrangesInJuicer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('add peeled peices of oranges to juicer'));       
        }, 1000);
    });
}

async function executeTheProcess() {
    await buyOranges();
    await cutAndPeelOranges();
    await addOrangesInJuicer();
};

executeTheProcess();

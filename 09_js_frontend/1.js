const random = new Promise((resolve, reject) => {
    const r = Math.floor(Math.random() * 2);
    if (r == 0) {
        resolve();
    } else {
        reject();
    }
});
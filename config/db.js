const mongoose = require('mongoose')

const DB_URI = 'mongodb+srv://rranzag:6pvB60waqdEriSCy@cluster0.x2qjfy0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


//create a function that returns a Promise
function connectToDatabase() {
    return new Promise((resolve, reject) => {
        mongoose.connect(
            DB_URI)
            .then(() => {
                console.log('DB: Conexión correcta!!!');
                resolve();  // Resolve the promise when connected
            })
            .catch((err) => {
                console.error('DB:error', err);
                reject(err);// Reject the promise on error
                console.log('DB:error', err);
            });
    });
}
connectToDatabase()
//usage




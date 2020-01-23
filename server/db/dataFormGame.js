const connection = require('./config');

function postGame(data) {
    const {user_name, min_number, max_number, user_number, computer_guess} = data;

    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO games( user_name, min_number, max_number, user_number, computer_guess)
                            VALUES ('${user_name}', '${min_number}', '${max_number}', '${user_number}', '${computer_guess}')`, (error, results, fields) => {
                                                    
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

function getAllgames(data) {
    const {user_name} = data;
    console.log(user_name);
    return new Promise((resolve, reject) => {
        try {
            connection.query(`SELECT * FROM games where user_name = ?`,[user_name],(error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            console.log(results);
            resolve(results);
            });
        } catch (error) {
            console.log(error);
        }
    });
}


module.exports = {
    postGame,
    getAllgames
};
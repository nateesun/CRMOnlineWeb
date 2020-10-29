module.exports = () => {
    const Task = require('../model/Redeem.model')();
    const config = require('../config')
    const module = {}

    module.createOrUpdateFromFile = (data_in_file) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = JSON.parse(data_in_file)
                const query = [];
                for(let payload of data){
                    query.push(await Task.getQuery({ ...payload, database: config.apiServiceDB })); 
                }
                if(query.length>0){
                    const response = await Task.bulkInsert(query);
                    resolve(response);
                }else{
                    resolve('not found data to create')
                }
            } catch (error) {
                reject(error);
            }
        })
    }

    return module;
}

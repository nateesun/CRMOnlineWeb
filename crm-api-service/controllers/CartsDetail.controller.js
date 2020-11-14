/* CartsDetail.controller code generator by automatic script */

module.exports = database => {
    const Task = requireModel(CartsDetail)(database);
    const module = {}

    module.findAll = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await Task.findAll();
                const resultJson = JSON.parse(result.data);
                return resolve({
                    status: 200,
                    bizStatus: 200,
                    message: 'Find all data success',
                    error: '',
                    data: resultJson,
                });
            } catch (error) {
                return reject({
                    status: 500,
                    bizStatus: 500,
                    message: 'Error to find all data',
                    error,
                    data: [],
                });
            }
        })
    }

    module.findById = (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await Task.findById(id);
                const resultJson = JSON.parse(result.data);
                return resolve({
                    status: 200,
                    bizStatus: 200,
                    message: `Found id ${id}`,
                    error: '',
                    data: resultJson,
                });
            } catch (error) {
                return reject({
                    status: 500,
                    bizStatus: 500,
                    message: `Error to find id ${id}`,
                    error,
                    data: [],
                });
            }
        })
    }

    module.findByCode = (code) => {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await Task.findByCode(code);
                const resultJson = JSON.parse(result.data);
                return resolve({
                    status: 200,
                    bizStatus: 200,
                    message: `Found code ${code}`,
                    error: '',
                    data: resultJson,
                });
            } catch (error) {
                return reject({
                    status: 500,
                    bizStatus: 500,
                    message: `Error to find code ${code}`,
                    error,
                    data: [],
                });
            }
        })
    }

    module.create = (model) => {
        return new Promise(async (resolve, reject)=>{
            try {
                // check code exists or not
                const { code } = model;
                let result = await Task.findByCode(code);
                let resultJson = JSON.parse(result.data);
                if (resultJson.length > 0){
                    return reject({
                        status: 400,
                        bizStatus: 400,
                        message: `CartsDetail code [${code}] already in use`,
                        error: '',
                        data: [],
                    });
                }
                result = await Task.create(model)
                resultJson = JSON.parse(result.data)
                return resolve({
                    status: 200,
                    bizStatus: 200,
                    message: `Create CartsDetail success`,
                    error: '',
                    data: {
                        uuid: resultJson
                    },
                });
            } catch (error) {
                return reject({
                    status: 500,
                    bizStatus: 500,
                    message: `Error to create CartsDetail`,
                    error,
                    data: [],
                });
            }
        })
    }

    module.update = (model) => {
        return new Promise(async (resolve, reject)=>{
            try {
                // check id already exists or not
                const { uuid_index } = model;
                let result = await Task.findById(uuid_index);
                let resultJson = JSON.parse(result.data);
                if (resultJson.length === 0){
                    return reject({
                        status: 400,
                        bizStatus: 400,
                        message: `CartsDetail id not found in database`,
                        error: '',
                        data: [],
                    });
                }
                result = await Task.update(model)
                resultJson = JSON.parse(result.data)
                return resolve({
                    status: 200,
                    bizStatus: 200,
                    message: `Update CartsDetail success`,
                    error: '',
                    data: resultJson,
                });
            } catch (error) {
                return reject({
                    status: 500,
                    bizStatus: 500,
                    message: `Error to update CartsDetail`,
                    error,
                    data: [],
                });
            }
        })
    }

    module.updatePatch = (model) => {
        return new Promise(async (resolve, reject) => {
            try {
                // check id already exists or not
                const { uuid_index } = model;
                let result = await Task.findById(uuid_index);
                let resultJson = JSON.parse(result.data);
                if (resultJson.length === 0){
                    return reject({
                        status: 400,
                        bizStatus: 400,
                        message: `CartsDetail id not found in database`,
                        error: '',
                        data: [],
                    });
                }
                result = await Task.updatePatch(model)
                resultJson = JSON.parse(result.data)
                return resolve({
                    status: 200,
                    bizStatus: 200,
                    message: `Update patch CartsDetail success`,
                    error: '',
                    data: resultJson,
                });
            } catch (error) {
                return reject({
                    status: 500,
                    bizStatus: 500,
                    message: `Error to update patch CartsDetail`,
                    error,
                    data: [],
                });
            }
            
        })
    }

    module.delete = (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                // check id already exists or not
                let result = await Task.findById(id);
                let resultJson = JSON.parse(result.data);
                if (resultJson.length === 0){
                    return reject({
                        status: 400,
                        bizStatus: 400,
                        message: `CartsDetail id not found in database`,
                        error: '',
                        data: [],
                    });
                }
                result = await Task.delete(id)
                resultJson = JSON.parse(result.data)
                return resolve({
                    status: 200,
                    bizStatus: 200,
                    message: `Delete CartsDetail success`,
                    error: '',
                    data: {
                        uuid_index: resultJson
                    },
                });
            } catch (error) {
                return reject({
                    status: 500,
                    bizStatus: 500,
                    message: `Error to delete CartsDetail`,
                    error,
                    data: [],
                });
            }
        })
    }

    return module;
}

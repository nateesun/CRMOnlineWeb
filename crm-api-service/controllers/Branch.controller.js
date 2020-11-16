module.exports = database => {
    const Task = requireModel("Branch")(database);
    const module = {}

    const NotFoundResponse = (msg) => {
        return {
            status: 404,
            bizStatus: 404,
            message: 'NOT_FOUND',
            error: msg,
            data: []
        }
    }
    const ErrorResponse = (msg) => {
        return {
            status: 500,
            bizStatus: 500,
            message: 'ERROR',
            error: msg,
            data: []
        }
    }

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
                return reject(ErrorResponse('Error to find all data'))
            }
        })
    }

    module.findById = (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await Task.findById(id);
                const resultJson = JSON.parse(result.data);
                if (resultJson.length === 0) {
                    return resolve(NotFoundResponse(`Not found id ${id}`))
                }
                return resolve({
                    status: 200,
                    bizStatus: 200,
                    message: `Found id ${id}`,
                    error: '',
                    data: resultJson,
                });
            } catch (error) {
                return reject(ErrorResponse(`Error to find id ${id}`))
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
                return reject(ErrorResponse(`Error to find code ${code}`))
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
                        message: `Branch code [${code}] already in use`,
                        error: '',
                        data: [],
                    });
                }
                result = await Task.create(model)
                resultJson = JSON.parse(result.data)
                return resolve({
                    status: 200,
                    bizStatus: 200,
                    message: `Create branch success`,
                    error: '',
                    data: {
                        uuid: resultJson
                    },
                });
            } catch (error) {
                return reject(ErrorResponse(`Error to create branch`))
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
                        message: `Branch id not found in database`,
                        error: '',
                        data: [],
                    });
                }
                result = await Task.update(model)
                resultJson = JSON.parse(result.data)
                return resolve({
                    status: 200,
                    bizStatus: 200,
                    message: `Update branch success`,
                    error: '',
                    data: resultJson,
                });
            } catch (error) {
                return reject(ErrorResponse(`Error to update branch`))
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
                        message: `Branch id not found in database`,
                        error: '',
                        data: [],
                    });
                }
                result = await Task.updatePatch(model)
                resultJson = JSON.parse(result.data)
                return resolve({
                    status: 200,
                    bizStatus: 200,
                    message: `Update patch branch success`,
                    error: '',
                    data: resultJson,
                });
            } catch (error) {
                return reject(ErrorResponse(`Error to update patch branch`))
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
                        message: `Branch id not found in database`,
                        error: '',
                        data: [],
                    });
                }
                result = await Task.delete(id)
                resultJson = JSON.parse(result.data)
                return resolve({
                    status: 200,
                    bizStatus: 200,
                    message: `Delete branch success`,
                    error: '',
                    data: {
                        uuid_index: resultJson
                    },
                });
            } catch (error) {
                return reject(ErrorResponse(`Error to delete branch`))
            }
        })
    }

    return module;
}

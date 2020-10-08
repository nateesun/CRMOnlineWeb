module.exports = () => {
    const module = {};

    module.getDB = (db, table) => {
        const database = db ? `${db}.`: '';
        const table_name = `${database}${table}`;
        return table_name;
    }

    module.zeroPad = (num, places) => String(num).padStart(places, '0')

    return module
}
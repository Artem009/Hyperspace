

const is_at = async (
    Model,
    {
        type = 'separate', // of 'where' if custom
        key = '',
        value = null,
        where = {}
    }) => {
        let searchObject = {};

        if(type === 'separate')
            searchObject[key] = value;

        const data = await Model.findAll({ where: searchObject });
        let is = false;
        if(data && data !== []) is = true;

        return { is, data };
}

module.exports = { is_at };
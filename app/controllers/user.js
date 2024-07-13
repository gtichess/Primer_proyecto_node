/*
exports.getData=(req,res)=>{
    res.send({data:'esto viene desde USER'})
}
   */
const model = require('../models/user');
const options = {
    page: 1,
    limit: 3
};

exports.getData = async (req, res) => {
    try {
        const docs = await model.paginate({}, options);
        res.send({ items: docs });
    } catch (err) {
        // handle error
        res.status(500).send(err);
    }
};
exports.insertData = async (req, res) => {
    try {
        const data = req.body;
        const docs = await model.create(data);
        res.send({ data: docs });
    } catch (err) {
        res.status(500).send({ error: 'ERROR' }, 422);
    }
};
//
const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}

exports.updateSingle = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const docs = await model.updateOne({ _id: parseId(id) }, body);
                res.send({ items: docs });
    } catch (err) {
        res.status(510).send(err);
    }
};
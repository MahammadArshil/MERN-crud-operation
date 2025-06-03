const crudModel = require('../model/crudModel');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const crud_data = await crudModel.find({});
    res.send(crud_data);
});

router.post('/add', async (req, res) => {
    try {
        const body = req.body;
        // console.log(body);
        const name = body.name;
        const email = body.email;
        const password = body.password;
        const profession = body.profession;
        const experience = body.experience;

        const newData = new crudModel({
            name: name,
            email: email,
            password: password,
            profession: profession,
            experience: experience,
        });

        const result = await newData.save();

        return res.status(200).send(result);
    }
    catch (error) {
        console.log(`Error in Adding Data: ${error}`);
        return res.status(500).send(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await crudModel.findByIdAndDelete(id);
        console.log("result:",result);
        if (!result) {
            return res.status(404).send("Data not Found.");
        }
        return res.status(200).send("Data Deleted..");
    }
    catch (error) {
        console.log(`Error in Deleting Data: ${error}`);
        return res.status(500).send(err);
    }
});

router.put('/edit/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const body = req.body;
        const name = body.name;
        const email = body.email;
        const password = body.password;
        const profession = body.profession;
        const experience = body.experience;
        const updateData = await crudModel.findByIdAndUpdate(id, {name: name, email: email, password: password, profession: profession, experience: experience});
        const result = await updateData.save();
        return res.status(200).send(result);
    }
    catch (error) {
        console.log(`Error in Editing Data: ${error}`);
        return res.status(500).send(err);
    }
});

module.exports = router;

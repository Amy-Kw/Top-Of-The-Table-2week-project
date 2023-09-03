const express = require('express');
const router = express.Router();
const { getAllinfo, getInfoById, createInfo, updateInfo, deleteInfo } = require('../db/dogs');


//infos = information    info = info

// GET - /api/info - get all info
router.get('/', async (req, res, next) => {
    try{
        const information = await getAllInformation();
        res.send(information);
    } catch (error) {
        next(error);
    }
});

// GET - /api/info/:infoId - get info by id
router.get('/:infoId', async (req, res, next) => {
    try{
        const info = await getInfoById(req.params.infoId);
        res.send(info);
    } catch (error) {
        next(error);
    }
});


// POST - /api/info - create a new info
router.post('/', async (req, res, next) => {
    try{
        const info = await createInfo(req.body);
        res.send(info);
    } catch (error) {
        next(error);
    }
});


// PUT - /api/info/:infoId - update a info
router.put('/:infoId', async (req, res, next) => {
    try{
        const info = await updateInfo(req.params.infoIdId, req.body);
        res.send(info);
    } catch (error) {
        next(error);
    }
});

// DELETE - /api/info/:infoId - delete a info
router.delete('/:infoId', async (req, res, next) => {
    try{
        const dog = await deleteInfo(req.params.infoId);
        res.send(info);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();
module.exports = router;
const apiRagazzeController=require("../controller/apiRagazze");

router.get('/api/ragazze',       apiRagazzeController.getRagazze);
router.get('/api/ragazze/:id',    apiRagazzeController.getRagazza);
router.post('/api/ragazze',      apiRagazzeController.insertRagazza);
router.delete('/api/ragazze/:id', apiRagazzeController.deleteRagazza);
router.put('/api/ragazze/:id',    apiRagazzeController.updateRagazza);

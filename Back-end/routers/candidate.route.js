const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidate.controller');

router.post('/applyJob', candidateController.applyJob);
router.get('/jobList', candidateController.getAllJobs);
router.get('/appliedJobs', candidateController.getAppliedJob);
router.get('/singleJob', candidateController.isAlreadyApplied);


module.exports = router;

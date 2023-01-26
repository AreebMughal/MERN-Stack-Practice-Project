const express = require('express');
const employerController = require('./employer.route');

const router = express.Router();


router.post('/jobPost', employerController.postJob);
router.get('/postedJobs', employerController.employerPostedJobs);
router.put('/UpdatePostedJob', employerController.employerUpdatePostedJob);
router.post('/companyData', employerController.addCompanyData);
router.get('/getCompanyData', employerController.getCompanyData);


module.exports = router;
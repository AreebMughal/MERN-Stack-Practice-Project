const express = require('express');

const router = express.Router();

router.post('/jobPost');
router.get('/postedJobs');
router.put('/UpdatePostedJob');
router.post('/companyData');
router.get('/getCompanyData');


// if (splitUrl.includes('employer')) {
//     // console.log('Employer');
//     if (splitUrl.includes('jobPost')) {
//         userController.postJob(data);
//     }
//     else if (splitUrl.includes('postedJobs')) {
//         userController.employerPostedJobs(data);
//     }
//     else if (splitUrl.includes('UpdatePostedJob')) {
//         userController.employerUpdatePostedJob(data);
//     }
//     else if (splitUrl.includes('companyData')) {
//         userController.addCompanyData(data);
//     }
//     else if (splitUrl.includes('getCompanyData')) {
//         userController.getCompanyData(data);
//     }
// }
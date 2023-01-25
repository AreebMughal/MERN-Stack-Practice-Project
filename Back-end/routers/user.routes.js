const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');

router.post('/signup');
router.post('/signin',

    // console.log('in login', req.body);
    userController.login
);

// function userRouter(req, res, data = null) {
//     const splitUrl = req.url.split('/');
//     userController = new UserController(req, res);
//     // console.log('user Router');
//     if (splitUrl.includes('signin')) {
//         userController.login(data);
//     }
//     else if (splitUrl.includes('signup')) {
//         userController.addUser(data);
//     }
//     else if (splitUrl.includes('employer')) {
//         // console.log('Employer');
//         if (splitUrl.includes('jobPost')) {
//             userController.postJob(data);
//         }
//         else if (splitUrl.includes('postedJobs')) {
//             userController.employerPostedJobs(data);
//         }
//         else if (splitUrl.includes('UpdatePostedJob')) {
//             userController.employerUpdatePostedJob(data);
//         }
//         else if (splitUrl.includes('companyData')) {
//             userController.addCompanyData(data);
//         }
//         else if (splitUrl.includes('getCompanyData')) {
//             userController.getCompanyData(data);
//         }
//     }
//     else if (splitUrl.includes('candidate')) {
//         if (splitUrl.includes('jobList')) {
//             userController.getAllJobs();
//         }
//         else if (splitUrl.includes('singleJob')) {
//             userController.isAlreadyApplied(data)
//         }
//         else if (splitUrl.includes('applyJob')) {
//             userController.applyJob(data)
//         }
//         else if (splitUrl.includes('appliedJobs')) {
//             userController.getAppliedJob(data)
//         }
//     }
// }

module.exports = router;
const express = require('express');
const router = express.Router();

router.post('/applyJob');
router.get('/jobList');
router.get('/appliedJobs');
router.get('/singleJob');


module.exports = router;
// if (splitUrl.includes('candidate')) {
//     if (splitUrl.includes('jobList')) {
//         userController.getAllJobs();
//     }
//     else if (splitUrl.includes('singleJob')) {
//         userController.isAlreadyApplied(data)
//     }
//     else if (splitUrl.includes('applyJob')) {
//         userController.applyJob(data)
//     }
//     else if (splitUrl.includes('appliedJobs')) {
//         userController.getAppliedJob(data)
//     }
// }
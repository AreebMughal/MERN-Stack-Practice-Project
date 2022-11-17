const AdminController = require('../controllers/admin.controller');


function adminRouter(req, res, data = null) {
    const splitUrl = req.url.split('/');
    if (splitUrl.includes('login')) {
        console.log('yes login');
        adminController = new AdminController(req, res, data);
        adminController.login();
    }
}

module.exports = adminRouter;
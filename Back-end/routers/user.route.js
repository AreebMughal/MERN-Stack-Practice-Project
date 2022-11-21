const UserController = require('../controllers/user.controller');



function userRouter(req, res, data = null) {
    const splitUrl = req.url.split('/');
    userController = new UserController(req, res);
    if (splitUrl.includes('signin')) {
        userController.login(data);
    } else if (splitUrl.includes('signup')) {
        userController.addUser(data);
    }
    else if (splitUrl.includes('employer')) {
        if (splitUrl.includes('jobPost')) {

        }
    }
}

module.exports = userRouter;
const express        = require('express');
const router         = express.Router();
const userController = require('../app/controllers/UserController');
const validate       = require('../app/requests/UserCreateRequest');
const multer         = require('multer'); // sử dụng thư viện multer để upload files
const upload         = multer({ dest: './public/uploads/' }); // khởi tạo instance của multer để upload file vào thư mục public/uploads

router.get('/create', userController.create); // user create page
router.post('/create',upload.single('image'),validate.dataCreateUser , userController.store); // save new user
router.get('/search', userController.search); // user search page
router.get('/:id', userController.show); // user show page
router.get('/', userController.index);// homepage

module.exports = router;

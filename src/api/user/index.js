const express = require('express');
const auth = require('../../service/auth')
var controller = require('./controller');
const router = express();

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/getUsers', auth, controller.index);
router.get('/getById', controller.getById);
router.delete('/deleteUser', controller.remove);

// getUsers api
/**
 * @swagger
 *  description: get all users
 * /api/user/getUsers:
 *  get:
 *      tags: [Auth]
 *      responses:
 *        default:
 *          description: default response
 */

// Signup api
/**
 * @swagger
 *  description: get all users
 * /api/user/register:
 *  post:
 *      tags: [Auth]
 *      summary: Creates a new user.
 *      consumes:
 *       - application/json
 *      parameters:
 *        - in: body
 *          name: user
 *          schema:
 *            type: object
 *            properties:
 *              firstName:
 *                type: string
 *              lastName:
 *                type: string
 *              contact:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *      responses:
 *        default:
 *          description: default response
 */

// Login api
/**
 * @swagger
 *  description: get all users
 * /api/user/login:
 *  post:
 *      tags: [Auth]
 *      summary: Login user.
 *      consumes:
 *       - application/json
 *      parameters:
 *        - in: body
 *          name: user
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *      responses:
 *        default:
 *          description: default response
 */

// getUsers api
/**
 * @swagger
 *  description: get all users
 * /api/user/deleteUser:
 *  delete:
 *      tags: [Auth]
 *      consumes:
 *       - application/json
 *      parameters:
 *        - in: body
 *          name: user
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *      responses:
 *        default:
 *          description: default response
 */

// getUser by ID api
/**
 * @swagger
 *  description: get all users
 * /api/user/getById:
 *  get:
 *      tags: [Auth]
 *      consumes:
 *       - application/json
 *      parameters:
 *        - in: body
 *          name: user
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *      responses:
 *        default:
 *          description: default response
 */
module.exports = router;

// *       parameters:
// *         - in: body
// *           name: user
// *           description: The user to create.
// *           schema:
// *             type: object
// *             required:
// *               - firstName
// *             properties:
// *               firstName:
// *                 type: string
// *               lastName:
// *                 type: string
// *               contact:
// *                 type: string
// *               email:
// *                 type: string
// *               password:
// *                 type: string
const express = require('express');
var controller = require('./controller');
const router = express();

router.post('/register', controller.register);
router.get('/getUsers', controller.index);
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
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                firstName:
 *                  type: string
 *                  default: Husen
 *                lastName:
 *                  type: string
 *                  default: Husen
 *                contact:
 *                  type: string
 *                  default: Husen
 *                email:
 *                  type: string
 *                  default: Husen
 *                password:
 *                  type: string
 *                  default: Husen
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
 *      responses:
 *        default:
 *          description: default response
 */


// getUsers api
/**
 * @swagger
 *  description: get all users
 * /api/user/getById:
 *  get:
 *      tags: [Auth]
 *      responses:
 *        default:
 *          description: default response
 */
module.exports = router;

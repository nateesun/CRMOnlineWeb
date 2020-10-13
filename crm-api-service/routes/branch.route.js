const express = require("express")
const router = express.Router()
const { body, param, validationResult } = require('express-validator');
const Task = require("../models/Branch.model")
/**
 * @swagger
 *
 * /branch:
 *  get:
 *    tags:
 *      - Branch
 *    description: Show all branch list
 *    parameters:
 *      - name: database
 *        type: string
 *        in: header
 *        required: true
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthoriztion API request
 *      '500':
 *        description: Internal Server Error
 */
router.get("/", async (req, res) => {
  try {
    const response = await Task(req.headers.database).findAll()
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

/**
 * @swagger
 * 
 * /branch/{id}:
 *  get:
 *    tags:
 *      - Branch
 *    description: Show all branch list
 *    parameters:
 *      - name: database
 *        type: string
 *        in: header
 *        required: true
 *      - name: id
 *        type: string
 *        in: path
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthoriztion API request
 *      '500':
 *        description: Internal Server Error
 */
router.get("/:id", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: 'Error', errors: errors.array() });
  }
  try {
    const response = await Task(req.headers.database).findById(req.params.id)
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

/**
 * @swagger
 * 
 * /branch:
 *  post:
 *    tags:
 *      - Branch
 *    description: Create new branch
 *    parameters:
 *      - name: branch input
 *        in: body
 *        description: Branch input to create
 *        schema:
 *          type: object
 *          properties:
 *            code:
 *              type: string
 *            name:
 *              type: string
 *            map_latitude:
 *              type: string
 *            map_longitude:
 *              type: string
 *      - name: database
 *        type: string
 *        in: header
 *        required: true
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthoriztion API request
 *      '500':
 *        description: Internal Server Error
 */
router.post("/", [
  body('code').not().isEmpty().trim(),
  body('name').not().isEmpty().trim(),
  body('code').custom((branch_code, { req }) => {
    return Task(req.headers.database).findByCode(branch_code).then(branch => {
      if (JSON.parse(branch.data).length === 1) {
        return Promise.reject(`Branch code [${branch_code}] already in use`);
      }
    })
  })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: 'Error', errors: errors.array() });
  }

  try {
    const response = await Task(req.headers.database).create(req.body)
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

/**
 * @swagger
 * 
 * /branch/{id}:
 *  put:
 *    tags:
 *      - Branch
 *    description: Update old branch
 *    parameters:
 *      - name: branch input
 *        in: body
 *        description: Branch input to update
 *        schema:
 *          type: object
 *          properties:
 *            code:
 *              type: string
 *            name:
 *              type: string
 *            map_latitude:
 *              type: string
 *            map_longitude:
 *              type: string
 *      - name: database
 *        type: string
 *        in: header
 *        required: true
 *      - name: id
 *        type: string
 *        in: path
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthoriztion API request
 *      '500':
 *        description: Internal Server Error
 */
router.put("/:id", [
  param('id').custom((id, { req }) => {
    return Task(req.headers.database).findById(id).then(branch => {
      if (JSON.parse(branch.data).length === 0) {
        return Promise.reject(`Branch id not found in database`)
      }
    })
  })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: 'Error', errors: errors.array() });
  }
  try {
    const payload = {...req.body, uuid_index: req.params.id}
    const response = await Task(req.headers.database).update(payload)
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

/**
 * @swagger
 * 
 * /branch/{id}:
 *  patch:
 *    tags:
 *      - Branch
 *    description: Update old branch
 *    parameters:
 *      - name: branch input
 *        in: body
 *        description: Branch input to update
 *        schema:
 *          type: object
 *          properties:
 *            map_latitude:
 *              type: string
 *            map_longitude:
 *              type: string
 *      - name: database
 *        type: string
 *        in: header
 *        required: true
 *      - name: id
 *        type: string
 *        in: path
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthoriztion API request
 *      '500':
 *        description: Internal Server Error
 */
router.patch("/:id", [
  param('id').custom((id, { req }) => {
    return Task(req.headers.database).findById(id).then(branch => {
      if (JSON.parse(branch.data).length === 0) {
        return Promise.reject(`Branch id not found in database`)
      }
    })
  })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: 'Error', errors: errors.array() });
  }
  try {
    const payload = {...req.body, uuid_index: req.params.id}
    const response = await Task(req.headers.database).updatePatch(payload)
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

/**
 * @swagger
 * 
 * /branch/{id}:
 *  delete:
 *    tags:
 *      - Branch
 *    description: Delete branch by id
 *    parameters:
 *      - name: database
 *        type: string
 *        in: header
 *        required: true
 *      - name: id
 *        type: string
 *        in: path
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthoriztion API request
 *      '500':
 *        description: Internal Server Error
 */
router.delete("/:id", [
  param('id').custom((id, { req }) => {
    return Task(req.headers.database).findById(id).then(branch => {
      if (JSON.parse(branch.data).length === 0) {
        return Promise.reject(`Branch id not found in database`)
      }
    })
  })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: 'Error', errors: errors.array() });
  }
  try {
    const response = await Task(req.headers.database).delete(req.params.id)
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

module.exports = router

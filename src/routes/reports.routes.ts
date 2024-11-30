import express from 'express';
import {
	createReportWeb,
	getReportsForProjectWeb,
	getReportByIdWeb,
	updateReportWeb,
	deleteReportWeb,
	getReportsWithWordWeb,
} from '../controllers/reports.controller';

const router = express.Router();

/**
 * @swagger
 * /reports:
 *   post:
 *     summary: Create a new report
 *     tags: [Reports]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               project_id:
 *                 type: integer
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Report created successfully
 *       400:
 *         description: Bad request (missing parameters)
 *       500:
 *         description: Internal server error
 */
router.post('/', createReportWeb);

/**
 * @swagger
 * /reports/project/{projectId}:
 *   get:
 *     summary: Get all reports for a specific project
 *     tags: [Reports]
 *     parameters:
 *       - in: path
 *         name: projectId
 *         required: true
 *         schema:
 *           type: integer
 *           description: The ID of the project
 *     responses:
 *       200:
 *         description: A list of reports for the specified project
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   project_id:
 *                     type: integer
 *                   content:
 *                     type: string
 *       404:
 *         description: Project not found
 *       500:
 *         description: Internal server error
 */
router.get('/project/:projectId', getReportsForProjectWeb);

/**
 * @swagger
 * /reports/{id}:
 *   get:
 *     summary: Get a report by ID
 *     tags: [Reports]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           description: The ID of the report
 *     responses:
 *       200:
 *         description: The report details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 project_id:
 *                   type: integer
 *                 content:
 *                   type: string
 *       404:
 *         description: Report not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getReportByIdWeb);

/**
 * @swagger
 * /reports/{id}:
 *   put:
 *     summary: Update a report by ID
 *     tags: [Reports]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           description: The ID of the report to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               project_id:
 *                 type: integer
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Report updated successfully
 *       400:
 *         description: Bad request (missing parameters)
 *       404:
 *         description: Report not found
 *       500:
 *         description: Internal server error
 */
router.put('/:id', updateReportWeb);

/**
 * @swagger
 * /reports/{id}:
 *   delete:
 *     summary: Delete a report by ID
 *     tags: [Reports]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           description: The ID of the report to delete
 *     responses:
 *       200:
 *         description: Report deleted successfully
 *       404:
 *         description: Report not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteReportWeb);

/**
 * @swagger
 * /reports/word/{word}:
 *   get:
 *     summary: Get reports containing a specific word at least three times
 *     tags: [Reports]
 *     parameters:
 *       - in: path
 *         name: word
 *         required: true
 *         schema:
 *           type: string
 *           description: The word to search for in the reports
 *     responses:
 *       200:
 *         description: A list of reports containing the word at least three times
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   project_id:
 *                     type: integer
 *                   content:
 *                     type: string
 *       404:
 *         description: No reports found with the word
 *       500:
 *         description: Internal server error
 */
router.get('/word/:word', getReportsWithWordWeb);

export default router;

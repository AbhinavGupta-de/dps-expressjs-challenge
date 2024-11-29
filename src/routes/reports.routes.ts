import express from 'express';
import {
	createReport,
	getReportsForProject,
	getReportById,
	updateReport,
	deleteReport,
	getReportsWithWord,
} from '../controllers/reports.controller';

const router = express.Router();

router.post('/reports', createReport);
router.get('/reports/project/:projectId', getReportsForProject);
router.get('/reports/:id', getReportById);
router.put('/reports/:id', updateReport);
router.delete('/reports/:id', deleteReport);
router.get('/reports/word/:word', getReportsWithWord);

export default router;

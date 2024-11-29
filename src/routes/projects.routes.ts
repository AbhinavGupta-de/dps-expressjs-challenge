import express from 'express';
import {
	createProject,
	getProject,
	updateProject,
	deleteProject,
} from '../controllers/projects.controller';

const router = express.Router();

router.post('/projects', createProject);
router.get('/projects/:id', getProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);

export default router;

import { Request, Response } from 'express';
import {
	createProject,
	getProjectById,
	getAllProjects,
	updateProject,
	deleteProject,
} from '../models/project.model';

export const createProjectWeb = async (req: Request, res: Response) => {
	const { name, description } = req.body;
	try {
		const project = { name, description };
		createProject(project);
		res.status(201).json({ message: 'Project created successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error creating project', error });
	}
};

// Get project by ID
export const getProject = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const project = await getProjectById(id);
		console.log(project);
		if (project) {
			res.status(200).json(project);
		} else {
			res.status(404).json({ message: 'Project not found' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Error fetching project', error });
	}
};

// Get all projects
export const getAllProjectsWeb = async (req: Request, res: Response) => {
	try {
		const projects = await getAllProjects();
		res.status(200).json(projects);
	} catch (error) {
		res.status(500).json({ message: 'Error fetching projects', error });
	}
};

// Update a project
export const updateProjectWeb = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { name, description } = req.body;
	try {
		const project = { name, description };
		await updateProject(id, project);
		res.status(200).json({ message: 'Project updated successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error updating project', error });
	}
};

// Delete a project
export const deleteProjectWeb = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		await deleteProject(id);
		res.status(200).json({ message: 'Project deleted successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error deleting project', error });
	}
};

import { Request, Response } from 'express';
import {
	createReport,
	getReportsForProject,
	getReportById,
	updateReport,
	deleteReport,
	getReportsWithWord,
} from '../models/report.model';

// Create a new report
export const createReportWeb = async (req: Request, res: Response) => {
	const { project_id, content } = req.body;
	try {
		const report = { project_id, content };
		await createReport(report);
		res.status(201).json({ message: 'Report created successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error creating report', error });
	}
};

// Get reports for a specific project
export const getReportsForProjectWeb = async (req: Request, res: Response) => {
	const { projectId } = req.params;
	try {
		const reports = await getReportsForProject(Number(projectId));
		res.status(200).json(reports);
	} catch (error) {
		res.status(500).json({
			message: 'Error fetching reports for project',
			error,
		});
	}
};

// Get a specific report by ID
export const getReportByIdWeb = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const report = await getReportById(Number(id));
		if (report) {
			res.status(200).json(report);
		} else {
			res.status(404).json({ message: 'Report not found' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Error fetching report', error });
	}
};

// Update a report
export const updateReportWeb = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { project_id, content } = req.body;
	try {
		const report = { project_id, content };
		await updateReport(Number(id), report);
		res.status(200).json({ message: 'Report updated successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error updating report', error });
	}
};

// Delete a report
export const deleteReportWeb = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		await deleteReport(Number(id));
		res.status(200).json({ message: 'Report deleted successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error deleting report', error });
	}
};

// Get reports containing a specific word at least 3 times
export const getReportsWithWordWeb = async (req: Request, res: Response) => {
	const { word } = req.params;
	try {
		const reports = await getReportsWithWord(word);
		res.status(200).json(reports);
	} catch (error) {
		res.status(500).json({
			message: 'Error fetching reports with word',
			error,
		});
	}
};

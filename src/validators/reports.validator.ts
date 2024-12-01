import { body, param, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validator for creating a report
export const validateCreateReport = [
	body('project_id')
		.notEmpty()
		.withMessage('Project ID is required')
		.isString()
		.withMessage('Project ID must be a string'),
	body('content')
		.notEmpty()
		.withMessage('Content is required')
		.isString()
		.withMessage('Content must be a string'),
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];

// Validator for getting reports for a specific project
export const validateGetReportsForProject = [
	param('projectId')
		.notEmpty()
		.withMessage('Project ID is required')
		.isString()
		.withMessage('Project ID must be a string'),
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];

// Validator for getting a specific report by ID
export const validateGetReportById = [
	param('id')
		.notEmpty()
		.withMessage('Report ID is required')
		.isString()
		.withMessage('Report ID must be a string'),
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];

// Validator for updating a report
export const validateUpdateReport = [
	param('id')
		.notEmpty()
		.withMessage('Report ID is required')
		.isString()
		.withMessage('Report ID must be a string'),
	body('project_id')
		.optional()
		.isString()
		.withMessage('Project ID must be a string if provided'),
	body('content')
		.optional()
		.isString()
		.withMessage('Content must be a string if provided'),
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];

// Validator for deleting a report
export const validateDeleteReport = [
	param('id')
		.notEmpty()
		.withMessage('Report ID is required')
		.isString()
		.withMessage('Report ID must be a string'),
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];

// Validator for getting reports with a specific word
export const validateGetReportsWithWord = [
	param('word')
		.notEmpty()
		.withMessage('Word is required')
		.isString()
		.withMessage('Word must be a string'),
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];

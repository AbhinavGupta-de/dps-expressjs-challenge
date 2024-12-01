import { body, param, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Validator for creating a project
export const validateCreateProject = [
	body('name')
		.notEmpty()
		.withMessage('Project name is required')
		.isString()
		.withMessage('Project name must be a string'),
	body('description')
		.notEmpty()
		.withMessage('Project description is required')
		.isString()
		.withMessage('Project description must be a string'),
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];

// Validator for updating a project
export const validateUpdateProject = [
	param('id')
		.notEmpty()
		.isString()
		.withMessage('Project ID is required and should be a string'),
	body('name')
		.optional()
		.isString()
		.withMessage('Project name should be a string if provided'),
	body('description')
		.optional()
		.isString()
		.withMessage('Project description should be a string if provided'),
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];

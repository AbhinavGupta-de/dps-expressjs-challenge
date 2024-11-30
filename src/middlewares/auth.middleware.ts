import { Request, Response, NextFunction } from 'express';

const AUTH_TOKEN = 'Password123';

export const authenticate = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const token = req.headers['authorization'];

	if (!token) {
		return res
			.status(403)
			.json({ message: 'No authorization token provided' });
	}

	if (token !== `Bearer ${AUTH_TOKEN}`) {
		return res.status(401).json({ message: 'Unauthorized access' });
	}

	next();
};

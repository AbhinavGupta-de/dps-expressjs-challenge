import db from '../services/db.service';

interface Project {
	id?: string;
	name: string;
	description: string;
}

const generateId = (): string => {
	return Math.random().toString(36).substr(2, 9);
};

export const createProject = (project: Project) => {
	const id = generateId();
	const sql =
		'INSERT INTO projects (id, name, description) VALUES (@id, @name, @description)';
	return db.run(sql, {
		id,
		name: project.name,
		description: project.description,
	});
};

export const getProjectById = (id: string) => {
	const sql = 'SELECT * FROM projects WHERE id = @id';
	const result = db.query(sql, { id });
	return result[0];
};

export const getAllProjects = () => {
	const sql = 'SELECT * FROM projects';
	return db.query(sql);
};

export const updateProject = (id: string, project: Project) => {
	const sql =
		'UPDATE projects SET name = @name, description = @description WHERE id = @id';
	return db.run(sql, {
		name: project.name,
		description: project.description,
		id,
	});
};

export const deleteProject = (id: string) => {
	const sql = 'DELETE FROM projects WHERE id = @id';
	return db.run(sql, { id });
};

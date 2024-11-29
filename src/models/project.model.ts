import db from '../services/db.service';

interface Project {
	id?: number;
	name: string;
	description: string;
}

export const createProject = (project: Project) => {
	const sql =
		'INSERT INTO projects (name, description) VALUES (@name, @description)';
	return db.run(sql, {
		name: project.name,
		description: project.description,
	});
};

export const getProjectById = (id: number) => {
	const sql = 'SELECT * FROM projects WHERE id = @id';
	const result = db.query(sql, { id });
	return result[0];
};

export const getAllProjects = () => {
	const sql = 'SELECT * FROM projects';
	return db.query(sql);
};

export const updateProject = (id: number, project: Project) => {
	const sql =
		'UPDATE projects SET name = @name, description = @description WHERE id = @id';
	return db.run(sql, {
		name: project.name,
		description: project.description,
		id,
	});
};

export const deleteProject = (id: number) => {
	const sql = 'DELETE FROM projects WHERE id = @id';
	return db.run(sql, { id });
};

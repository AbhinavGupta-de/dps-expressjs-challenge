import db from '../services/db.service';

interface Report {
	id?: string;
	project_id: string;
	content: string;
}

const generateId = (): string => {
	return Math.random().toString(36).substr(2, 9);
};

export const createReport = (report: Report) => {
	const id = generateId();
	const sql =
		'INSERT INTO reports (id, projectid, text) VALUES (@id, @project_id, @content)';
	return db.run(sql, {
		id,
		project_id: report.project_id,
		content: report.content,
	});
};

export const getReportsForProject = (projectId: string) => {
	const sql = 'SELECT * FROM reports WHERE projectid = @project_id';
	return db.query(sql, { project_id: projectId });
};

export const getReportById = (id: string) => {
	const sql = 'SELECT * FROM reports WHERE id = @id';
	const result = db.query(sql, { id });
	return result[0];
};

export const getReportsWithWord = (word: string) => {
	const sql = `
    SELECT * FROM reports
    WHERE LENGTH(text) - LENGTH(REPLACE(text, @word, '')) >= 3 * LENGTH(@word)
  `;
	return db.query(sql, { word });
};

export const updateReport = (id: string, report: Report) => {
	const sql = 'UPDATE reports SET text = @content WHERE id = @id';
	return db.run(sql, {
		content: report.content,
		id,
	});
};

export const deleteReport = (id: string) => {
	const sql = 'DELETE FROM reports WHERE id = @id';
	return db.run(sql, { id });
};

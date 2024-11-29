import db from '../services/db.service';

interface Report {
	id?: number;
	project_id: number;
	content: string;
}

export const createReport = (report: Report) => {
	const sql =
		'INSERT INTO reports (project_id, content) VALUES (@project_id, @content)';
	return db.run(sql, {
		project_id: report.project_id,
		content: report.content,
	});
};

export const getReportsForProject = (projectId: number) => {
	const sql = 'SELECT * FROM reports WHERE project_id = @project_id';
	return db.query(sql, { project_id: projectId });
};

export const getReportById = (id: number) => {
	const sql = 'SELECT * FROM reports WHERE id = @id';
	const result = db.query(sql, { id });
	return result[0];
};

export const getReportsWithWord = (word: string) => {
	const sql = `
    SELECT * FROM reports
    WHERE LENGTH(content) - LENGTH(REPLACE(content, @word, '')) >= 3 * LENGTH(@word)
  `;
	return db.query(sql, { word });
};

export const updateReport = (id: number, report: Report) => {
	const sql = 'UPDATE reports SET content = @content WHERE id = @id';
	return db.run(sql, {
		content: report.content,
		id,
	});
};

export const deleteReport = (id: number) => {
	const sql = 'DELETE FROM reports WHERE id = @id';
	return db.run(sql, { id });
};

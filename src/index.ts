import express from 'express';
import projectRoutes from './routes/projects.routes';
import reportRoutes from './routes/reports.routes';
import { swaggerSpec, swaggerUi } from './swagger';

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/projects', projectRoutes);
app.use('/reports', reportRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

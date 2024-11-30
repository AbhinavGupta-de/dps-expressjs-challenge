import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
	swaggerDefinition: {
		openapi: '3.0.0',
		info: {
			title: 'Projects and Reports API',
			description: 'API documentation for managing projects and reports',
			version: '1.0.0',
		},
		servers: [
			{
				url: 'http://localhost:3000',
			},
		],
	},
	apis: ['./src/routes/*.ts'],
};

// Create Swagger specification
const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };

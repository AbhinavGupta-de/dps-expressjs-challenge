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
		components: {
			securitySchemes: {
				BearerAuth: {
					type: 'apiKey',
					in: 'header',
					name: 'Authorization',
					description:
						'Enter the password token as `Bearer Password123`',
				},
			},
		},
		security: [
			{
				BearerAuth: [],
			},
		],
	},
	apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };

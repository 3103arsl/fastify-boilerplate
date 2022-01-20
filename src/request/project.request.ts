export const ProjectRequest = {
    schema: {
        body: {
            type: 'object',
            requiredKeys: ['name', 'description'],
            properties: {
                name: { type: 'string' },
                description: { type: 'string' },
            },
            required: ['name', 'description']
        },
    },
};
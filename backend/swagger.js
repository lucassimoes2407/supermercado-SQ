const swaggerAutogen = require('swagger-autogen')({ language: 'pt-BR' });

const outputFile = './swagger_output.json';
const endpointsFiles = [
    './app.js',
];

const doc = {
    info: {
      version: '0.5.1',      // by default: '1.0.0'
      title: 'Supermercado SQ - Devhub API Documentation',        // by default: 'REST API'
      description: "Devhub's API documentation for SupermercadoSQ, developed during Atlantico Academy Bootcamp",  // by default: ''
    },
    host: `localhost:${process.env.PORT || 3001}`
  };

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app.js');
})
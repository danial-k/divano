const app = require('./app');

app.listen(app.get('PORT'), () => {
  console.log(`Server is listening at http://localhost:${app.get('PORT')}`);
});

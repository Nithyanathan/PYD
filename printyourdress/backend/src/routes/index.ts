export const setRoutes = (app) => {
    const IndexController = require('../controllers/index').IndexController;
    const indexController = new IndexController();

    app.post('/api/designs', indexController.createDesign);
    app.get('/api/designs/:id', indexController.getDesign);
    app.put('/api/designs/:id', indexController.updateDesign);
    app.get('/api/designs', indexController.getAllDesigns);
    
    // Additional routes can be added here
};
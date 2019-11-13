## Purpose 

The purpose of this repository was to test Azure Dev Ops Pipelines for deploying a Node Js application. The Sample application was generated using [Web Template studio](https://marketplace.visualstudio.com/items?itemName=WASTeamAccount.WebTemplateStudio-dev-nightly). Instructions below for getting the project running locally. The azure-pipelines.yml file describes the build pipeline.

## Getting Started

In the root directory of the project...

1. Install node modules `npm install`.
2. Start development server `npm start`.

## Next Steps

Deploy using Azure DevOps! See the azure-pipelines.yml for the build pipeline. 

### Sample Data

Replace the sample data stored in /server/sampleData.js.
Replace the default images stored in /src/images.


### Adding a New Page

1. Create a folder in `/src/app/app-shell` with your angular modules.
2. Add a child route for your page to `/src/app/*.module.ts`.
3. Add a button to the navigation bar in `/src/app/app-shell/nav-bar/nav-bar.component.html`.


### Deployment

If you want to deploy directly from Visual Studio code to an Azure App Service follow these steps to create a new web app and deploy:

1. Press `Ctrl + Shift + P` in Windows/Linux or `Shift ⇧ + Command ⌘ + P` in Mac and type/select `Azure App Service: Create New Web App...` to create a new web app.
   - Select your subscription
   - Enter your web app name
   - Select Linux as your OS
   - Select Node.js 10.14 for a Node/Express application, Python 3.7 for a Flask application
2. Once the creation is done, click "Deploy" in the notification window on the lower right corner.
   - Click "Browse" on the top middle section of your screen and select the server folder within your project
   - Click "Yes" in the notification window on the lower right corner (build prompt)
   - Click "Deploy" on the window pop up
   - Click "Yes" in the notification window on the lower right corner again
3. Once the deployment is done, click "Browse website" in the notification window on the lower right corner to check out your newly deployed app.

Consider adding authentication and securing back-end API's by following [Azure App Service Security](https://docs.microsoft.com/en-us/azure/app-service/overview-security).

Full documentation for deployment to Azure App Service can be found here: [Deployment Docs](https://github.com/Microsoft/WebTemplateStudio/blob/dev/docs/deployment.md).

## File Structure

The back-end is based on [Express Generator](https://expressjs.com/en/starter/generator.html).
The front-end is based on [Angular cli "ng"](https://angular.io/cli).

The front-end is served on http://localhost:3000/ and the back-end on http://localhost:3001/.

```
.
├── server/ - Express server that provides API routes and serves front-end
│ ├── routes/ - Handles API calls for routes
│ ├── app.js - Adds middleware to the express server
│ ├── sampleData.js - Contains all sample text data for generate pages
│ ├── constants.js - Defines the constants for the endpoints and port
│ └── server.js - Configures Port and HTTP Server
├── src - Angular front-end
│ └── app - Angular main root module
│    ├── app-shell - Angular main components
│    └── app.module.ts - Angular root module.
└── README.md
```

## Additional Documentation

- Angular Docs - https://angular.io/docs
- Angular Router - https://angular.io/guide/router

- Bootstrap CSS - https://getbootstrap.com/
- Express - https://expressjs.com/


  This project was created using [Microsoft Web Template Studio](https://github.com/Microsoft/WebTemplateStudio).

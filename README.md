# Installable Metadata Template
This is a template for creating metadata repositories with a "Deploy to Salesforce" button, courtesy of [afawsett](https://github.com/afawcett/githubsfdeploy)

## How to Use
- Click "Use this template" -> "Create a new repository"
- Name the repository and take note of the name
- Populate the force-app\main\default directory with metadata you wish to deploy
- Update the URL of the button below, replacing {REPOSITORY-NAME} with the name of your Github repo

## Deploy
<a href="https://githubsfdeploy.herokuapp.com?owner=Enclude-Components&repo={REPOSITORY-NAME}&ref=main">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>
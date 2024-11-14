# Installable Metadata Template
An LWC component that can be placed on a flow screen to automatically redirect the user to the specified record detail page

> [!IMPORTANT]  
> This component only works in Lightning Experience, not in Classic

## How to Use
In Flow Builder, while editing a screen, drag the component onto the screen from the left. Configure the two input variables:
- objectApiName: API name of the object being redirected to (ex. Contact, My_Custom_Object__c)
- recordId: ID of the record

## Deploy
<a href="https://githubsfdeploy.herokuapp.com?owner=Enclude-Components&repo=Flow-Record-Page-Redirect&ref=main">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>
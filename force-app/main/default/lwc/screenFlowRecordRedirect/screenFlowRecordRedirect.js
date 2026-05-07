import { LightningElement, api } from 'lwc';

export default class ScreenFlowRecordRedirect extends LightningElement {
   @api objectApiName;
   @api recordId;
   
   connectedCallback() {
      window.location.href = `/lightning/r/${this.objectApiName}/${this.recordId}/view`;
   }
}

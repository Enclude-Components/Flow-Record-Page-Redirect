import { LightningElement, api } from 'lwc';

export default class ScreenFlowRecordRedirect extends LightningElement {
   @api objectApiName;
   @api recordId;

   connectedCallback() {
      if (!this.objectApiName || !this.recordId) {
         this.displayText = 'Invalid parameters set; cannot redirect'
      }
      window.location.href = `/lightning/r/${this.objectApiName}/${this.recordId}/view`;
   }
}
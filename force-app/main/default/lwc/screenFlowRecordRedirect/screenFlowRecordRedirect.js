import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class ScreenFlowRecordRedirect extends NavigationMixin(LightningElement) {
   @api objectApiName;
   @api recordId;

   connectedCallback() {
      this[NavigationMixin.Navigate]({
         type: 'standard__recordPage',
         attributes: {
            recordId: this.recordId,
            objectApiName: this.objectApiName,
            actionName: 'view'
        },
      });
   }
}
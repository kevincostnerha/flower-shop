import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import LEAD_NAME from '@salesforce/schema/Lead';
import NAME_FIELD from '@salesforce/schema/Lead.Name';
import COMPANY_FIELD from '@salesforce/schema/Lead.Company';
import DESCRIPTION_FIELD from '@salesforce/schema/Lead.Description';

export default class RecordForm extends LightningElement {
    // need to make variable public using @api decorator
    @api recordId;
    @api objectApiName = LEAD_NAME;

    fields = [NAME_FIELD, COMPANY_FIELD, DESCRIPTION_FIELD];
    
    handleSuccess() {
        const toastEvent = new ShowToastEvent({
            title: 'Success',
            message: 'Record saved.',
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }
    
}
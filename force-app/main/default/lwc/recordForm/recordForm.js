import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUNT_NAME from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import DESCRIPTION_FIELD from '@salesforce/schema/Account.Description';

export default class RecordForm extends LightningElement {
    // need to make variable public using @api decorator
    @api recordId;
    @api objectApiName = ACCOUNT_NAME;

    fields = [NAME_FIELD, PHONE_FIELD, DESCRIPTION_FIELD];
    
    handleSuccess() {
        const toastEvent = new ShowToastEvent({
            title: 'Success',
            message: 'Record saved.',
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }
    
}
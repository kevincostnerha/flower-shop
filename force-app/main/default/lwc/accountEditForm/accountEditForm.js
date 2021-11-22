import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

// need to make these fields in the Account object
import SLA_FIELD from '@salesforce/schema/Account.SLA__c';
import SLA_EXPIRATION_FIELD from '@salesforce/schema/Account.SLAExpirationDate__c';
import SLA_SERIAL_NUMBER_FIELD from '@salesforce/schema/Account.SLASerialNumber__c';


export default class AccountEditForm extends LightningElement {
    // need to make variable public using @api decorator
    @api recordId;
    @api objectApiName;

    name = NAME_FIELD;
    phone = PHONE_FIELD;
    website = WEBSITE_FIELD;
    
    sla = SLA_FIELD;
    slaExpiration = SLA_EXPIRATION_FIELD;
    slaSerialNumber = SLA_SERIAL_NUMBER_FIELD;
    

    // don't think there's anything wrong with the handleSuccess function
    // source: https://developer.salesforce.com/docs/component-library/bundle/lightning-platform-show-toast-event/documentation
    handleSuccess() {
        const toastEvent = new ShowToastEvent({
            title: 'Success',
            message: 'Record saved.',
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }
}
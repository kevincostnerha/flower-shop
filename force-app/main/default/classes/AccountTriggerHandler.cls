public with sharing class AccountTriggerHandler {
    public static void CreateAccounts(List<Account> acctList) {
        System.debug('message inside method');
        for (Account a:acctList) {
            if(a.Name != NULL) {
                a.Description = 'flower';
            }

            if(a.ShippingAddress != NULL) {
                a.BillingCity = a.ShippingCity;
                a.BillingCountry = a.ShippingCountry;
                a.BillingPostalCode = a.ShippingPostalCode;
                a.BillingState = a.ShippingState;
                a.BillingStreet = a.ShippingStreet;
            }
            
            /*
            if(a.Mobile_Phone__c != a.Phone) {
                a.Mobile_Phone__c = a.Phone;
            }
            */

            // creating a "label" to use as a filter
            /*
            if(a.Flower_Label__c == NULL) {
                a.Flower_Label__c = 'flower';
            }
            */
            
        }

    }
        
        
}

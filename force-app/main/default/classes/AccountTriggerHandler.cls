public with sharing class AccountTriggerHandler {
    public static void CreateAccounts(List<Account> acctList) {
        System.debug('message inside method');
        for (Account a:acctList) {
            if(a.Mobile_Phone__c != a.Phone) {
                a.Mobile_Phone__c = a.Phone;
            }

            // creating a "label" to use as a filter
            if(a.Flower_Label__c == NULL) {
                a.Flower_Label__c = 'flower';
            }
            
        }
    }
}

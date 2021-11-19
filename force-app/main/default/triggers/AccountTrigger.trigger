trigger AccountTrigger on Account (before insert, before update) {
    if((trigger.isBefore) || (trigger.isInsert)) {
        AccountTriggerHandler.CreateAccounts(trigger.new);
    }
    System.debug('message in trigger');

}

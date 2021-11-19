import { LightningElement } from 'lwc';
import My_Resource from '@salesforce/resourceUrl/myResource';


export default class HelloWorld extends LightningElement {
  field = My_Resource + '/field.jpg';

}
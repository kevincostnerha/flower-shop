import { LightningElement } from 'lwc';
import My_Resource from '@salesforce/resourceUrl/myResource';


export default class HelloWorld extends LightningElement {
  red = My_Resource + '/red00.jpeg';
  white = My_Resource + '/white00.jpeg';
  pink = My_Resource + '/pink00.jpeg';
}
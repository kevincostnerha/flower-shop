import { LightningElement } from 'lwc';
import My_Resource from '@salesforce/resourceUrl/myResource';


export default class HelloWorld extends LightningElement {
  red = My_Resource + '/red.jpg';
  white = My_Resource + '/white.jpg';
}
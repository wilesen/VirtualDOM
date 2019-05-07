import {TEXT_TYPE} from './Symbols.js';

export default function VirtualText(text){
    this.text=String(text);
}

VirtualText.prototype.$$elementType=TEXT_TYPE;
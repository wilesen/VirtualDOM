import {NODE_TYPE} from './Symbols.js';

export default function VirtualNode(tagName,properties,children,key){
    this.tagName=tagName;
    this.properties=properties;
    this.children=children;
    this.key=String(key);
    this.count=children?children.length:0
}
VirtualNode.prototype.$$elementType=NODE_TYPE;
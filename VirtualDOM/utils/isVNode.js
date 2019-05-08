export default function isVNode(VNode){
    return VNode.$$elementType===Symbol.for('virtual.Node');
}
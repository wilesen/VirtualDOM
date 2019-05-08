export default function isVText(VText){
    return VText.$$elementType===Symbol.for('virtual.Text');
}
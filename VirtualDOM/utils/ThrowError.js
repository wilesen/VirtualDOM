
export default {
    UnsupportedValueType
}

function UnsupportedValueType(){
    let err=new Error();
    err.type='Unsupported-Value-Type';
    err.message=`Expected a ${err.exprcted},but got:${err.received} \n `
    throw err;
}

function TypeError(){
    let err=new Error();
    err.type='Type-Error';
    err.message=`Expected a ${err.exprcted},but got:${err.received} \n `
    throw err;
}
import VTools from '../utils/tools.js';

const {isVNode,isVText}=VTools;

export default function createElement(VDOM, Options) {
    console.log("VDOM:", VDOM, 'Options:', Options);
    const {count,children}=VDOM;
    let node = Options ? Options.Mount : document;
    var dom = node.createElement(VDOM.tagName);
    if(count){
        for (var child of children){
            if(isVNode(child)){
                if(child.children) createElement(child) 
                
            }else if(isVText(child)){

            }else{

            }
        }
    }else{

    }
    console.log(dom)
};
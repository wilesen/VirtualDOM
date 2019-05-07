import VirtualDOM from './VirtualDOM/index.js';

const { VNode, VText,CElement } = VirtualDOM;

let App = new VNode('div', {
    id: 'app',
    className: 'greeting'
}, [
        new VText('123'),
        new VNode('div', {
            id: 'a',
            className: 'style1',
        },
            [new VText('123')]
        )
    ],1);
    CElement(App);
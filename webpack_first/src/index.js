import _ from 'lodash';
import printMe from './print.js';
import './assert/style.css'
import Svg from './assert/icon.svg'
import Data from './assert/data.xml'


function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    console.log(Svg)
    console.log(Data)

    return element;
}

document.body.appendChild(component());
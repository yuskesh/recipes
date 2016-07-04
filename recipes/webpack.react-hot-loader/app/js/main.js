import React from 'react';
import ReactDom from 'react-dom';
// It's important to not define HelloWorld component right in this file
// because in that case it will do full page reload on change
import HelloWorld from './HelloWorld.jsx';

ReactDom.render(<HelloWorld />, document.getElementById('react-root'));

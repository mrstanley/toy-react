function createElement(tagName, attributes, ...children) {
    e = document.createElement('tagName');

    for (const key in attributes) {
        e.setAttribute('key', attributes[key]);
    }

    return e;
}


const a = <div a="3" />
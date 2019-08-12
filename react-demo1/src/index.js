console.log('hi')

const div = createElement('div', createElement('p', createElement('span', 'hi')))
// const span = createElement('span')
// div.appendChild(p)
// p.appendChild(span)
// span.innerText = '我是一个span'


document.body.appendChild(div)


function createElement(tagName, children) {
    const element = document.createElement(tagName)
    if (children) {
        if (typeof children === 'string') {
            var childElement = document.createTextNode(children)
            element.appendChild(childElement)
        } else {
            element.appendChild(children)
        }
    }
    return element
}
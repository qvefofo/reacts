import React from 'react'
import ReactDOM from 'react-dom'

// const div = (
//     React.createElement('div', null,
//         React.createElement('p', null,
//             React.createElement('span', null, 'hi')))
// )

// 先声明再使用
const Header = (
    <header>
        header
    </header>
)
const Header2 = function (props) {
    return (
        <header>
            header {props.name}
        </header>
    )
}
const Bottom = (
    <div>
        Button
    </div>
)
// 函数组件
const Bottom2 = function () {
    const [n, setN] = React.useState(0) // 初始化
    return (
        <div>
            {n}
            <button onClick={function () {
                setN(n + 1) // 使用 useState 修改内部值
            }}>+1</button>
        </div>
    )
}
// 类组件
class Bottom3 extends React.Component {
    render() {
        return (
            <div>bottom 3</div>
        )
    }
}

const div = (
    <div>
        {Header}
        {Header2({ name: 'jack' })}
        <Header2 name="jacks" />
        <p>
            <span>hi</span>
        </p>
        <Bottom2 />
        <Bottom3 />
    </div >
)



console.log(div) // 虚拟的 element

// document.body.appendChild(div)
ReactDOM.render(div, document.getElementById('root'))


import '@/public/styles/components/header.less'
import  Router from "next/router";
import { Row, Col, Menu } from "antd";

const { Item, SubMenu } = Menu
export default function Head() {
    const headerMenu = [
        { key:"home", type:"home", text: "博客", route:'blog', children: [{ text: 'vuex', route: 'vuex'}]},
        { key:"video", type:"yotube", text: "视频", route: 'video'},
        { key:"life", type:"smile", text: "生活", route: 'life'},
    ]
    const navgateTo = (route) =>() => Router.push(route)
    return (
        <div className="header">
            <Row className="header-nav">
                <Menu mode="horizontal" className="menu">
                    <Col>
                        <span className="title" onClick={ navgateTo('/index') }>Breeze</span>
                    </Col>
                    { headerMenu.reverse().map(i => {
                        return (
                            <Item className="menu-item" key={ i.key } onClick={  navgateTo(`/${i.route}`) }>
                                { i.text }
                            </Item>
                        )

                    })}
                </Menu>
            </Row>
        </div>
    )
}

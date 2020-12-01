import './header.css';
import logo from '../../logo-en.png';
import { Button, Col, Layout, Row, Space, Avatar, Menu, Dropdown, Badge, Divider, Image } from 'antd';
import { BellFilled, DownOutlined, UserOutlined, } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faPhone, faQuestionCircle, faSearch, faSitemap, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
const { Header } = Layout;


export default function HeaderComponent() {

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/"> 2nd menu item</a>
            </Menu.Item>
        </Menu>
    );
    return (
        <Header>
            <Row justify='space-between'>
                <Col span={4}>
                    <Image width={277} src={logo} />
                </Col>



                <Col span={6} offset={9}>
                    <span style={{ color: 'black', marginRight: 20 }} > عربي</span>
                    <FontAwesomeIcon icon={faVolumeUp} size="lg" color="black" />
                    <Divider type="vertical" />

                    <FontAwesomeIcon icon={faSitemap} size="lg" color="black" />
                    <Divider type="vertical" />

                    <FontAwesomeIcon icon={faPhone} size="lg" color="black" />
                    <Divider type="vertical" />

                    <FontAwesomeIcon icon={faQuestionCircle} size="lg" color="black" />
                    <Divider type="vertical" />

                    <FontAwesomeIcon icon={faSearch} size="lg" color="black" />
                    <Divider type="vertical" />

                    <FontAwesomeIcon icon={faMicrophone} size="lg" color="black" />

                </Col>

                <Col span={4}>
                    <Space size='middle'>

                        <Badge count={4}>
                            <Avatar icon={<BellFilled />} />
                        </Badge>

                        <Dropdown overlay={menu} placement='topLeft' >
                            <span style={{ color: 'black' }}>
                                <DownOutlined />  User Name
                            </span>
                        </Dropdown>

                        <Avatar size={50} icon={<UserOutlined />} />

                    </Space>
                </Col>

            </Row>
            <Divider style={{ marginTop: 10 }} />

        </Header>
    );
}
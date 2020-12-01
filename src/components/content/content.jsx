import './content.css'
import { Button, Card, Col, Layout, Row, Space, Steps, Table } from 'antd';
import { useState } from 'react';
const { Content } = Layout;
const { Step } = Steps;


export default function ContentComponent() {
    const [current, setCurrent] = useState(0);
    const onChangeTap = (tapNumber) => {
        setCurrent(tapNumber);
    }
    return (
        <Content>
            <Row>
                <Col span={6} offset={10}>
                    <Steps current={current} onChange={onChangeTap} direction="vertical">
                        <Step title={<TabComponent />} />
                        <Step title={<TabComponent />} />
                        <Step title={<TabComponent />} />
                        <Step title={<TabComponent />} />
                        <Step title={<TabComponent />} />
                        <Step title={<TabComponent />} />
                    </Steps>
                </Col>

            </Row>

        </Content>
    )
}

const TabComponent = () => {
    return (
        <div style={{ backgroundColor: 'green', fontSize: 12, textAlign: "center" }}>
            <h2> steeeeeeeep form </h2>
        </div>
    )
}
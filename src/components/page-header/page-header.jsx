import './page-header.css';
import { Breadcrumb, Col, Divider, Row, } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


export default function PageHeaderComponent() {

    return (
        <>
            <Row style={{ marginTop: 15 }} justify='space-between'>
                <Col span={10}>
                    <h2> New License Pharmaceutical Establishment</h2>
                </Col>
                <Col span={10}>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>
                            <FontAwesomeIcon icon={faHome} size="lg" color="black" />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="">Services</Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                            <span style={{ fontSize: 12, fontWeight: 'bold' }}>
                                New License Pharmaceutical Establishment
                            </span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Divider style={{ marginTop: 5, marginBottom: 0 }} />
        </>
    );
}
// Main React Import
import React from 'react';
// Content components Imports
import {Col, Divider, Drawer, Row} from "antd";

const pStyle = {
    fontSize: 16,
    color: 'rgba(0,0,0,0.85)',
    lineHeight: '24px',
    display: 'block',
    marginBottom: 16,
};

const drawerStyle = {
    width: '75%',
};

const DescriptionItem = ({ title, content }) => (
    <div
        style={{
            fontSize: 14,
            lineHeight: '22px',
            marginBottom: 7,
            color: 'rgba(0,0,0,0.65)',
        }}
    >
        <p
            style={{
                marginRight: 8,
                display: 'inline-block',
                color: 'rgba(0,0,0,0.85)',
            }}
        >
            {title}:
        </p>
        {content}
    </div>
);

function ListItemDrawer(props) {

    const itemData = props.itemData;
    return (
        <Drawer
            width={drawerStyle.width}
            placement="right"
            closable={false}
            onClose={() => props.setDrawerVisibility(false)}
            visible={props.drawerVisibility}
        >
            <p style={{ ...pStyle, marginBottom: 24 }}>{itemData.title}</p>
            <img

                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
            <Divider />
            <p style={pStyle}>Personal</p>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Full Name" content={itemData.title} />{' '}
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Account" content="AntDesign@example.com" />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="City" content="HangZhou" />
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Country" content="China🇨🇳" />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Birthday" content="February 2,1900" />
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Website" content="-" />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <DescriptionItem
                        title="Message"
                        content="Make things:simple as possible but no simpler."
                    />
                </Col>
            </Row>
            <Divider />
            <p style={pStyle}>Company</p>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Position" content="Programmer" />
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Responsibilities" content="Coding" />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Department" content="AFX" />
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <DescriptionItem
                        title="Skills"
                        content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                    />
                </Col>
            </Row>
            <Divider />
            <p style={pStyle}>Contacts</p>

        </Drawer>
    );
}

export default ListItemDrawer;
// Main React Import
import React, {useState} from 'react';
// Content components Imports
import {Card, Icon, List} from "antd";
import ListItemDrawer from "./ListItemDrawer";



function ListItem(props) {

    const [drawerVisibility, setDrawerVisibility] = useState(false);

    const itemData = props.itemData;

    return (
        <List.Item>
            <Card
                hoverable
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[<Icon type="setting"/>, <h5 onClick={() => setDrawerVisibility(true)}>More Information</h5>, <Icon type="ellipsis"/>]}
            >
                <Card.Meta
                    title={itemData.title}
                    description={itemData.description}
                />
            </Card>

            <ListItemDrawer itemData={itemData} drawerVisibility={drawerVisibility} setDrawerVisibility={setDrawerVisibility}/>


        </List.Item>
    );
}

export default ListItem;
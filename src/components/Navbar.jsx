import React from 'react';
import { Button , Typography, Menu , Avatar} from "antd"
import {Link} from "react-router-dom"
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from "../images/cryptocurrency.png"
import { MenuItem } from 'rc-menu';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar  src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
            </div>
                <Menu theme="dark">
                    <MenuItem icon={<HomeOutlined />} >
                        <Link to="/">
                            <HomeOutlined />  Home
                        </Link>
                    </MenuItem>
                    <MenuItem icon={<FundOutlined />} >
                        <Link to="/cryptocurrencies">
                            <FundOutlined /> Cryptocurrencies
                        </Link>
                    </MenuItem>
                    <MenuItem icon={<MoneyCollectOutlined />} >
                        <Link to="/exchanges">
                            <MoneyCollectOutlined /> Exchanges
                        </Link>
                    </MenuItem>
                    <MenuItem icon={<BulbOutlined />} >
                        <Link to="/news">
                            <BulbOutlined />  News
                        </Link>
                    </MenuItem>
                </Menu>
        </div>
    )
}

export default Navbar

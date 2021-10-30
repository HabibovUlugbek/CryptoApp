import React from 'react'
import millify from "millify";
import { Typography, Col ,Row , Statistic } from "antd"
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi';


const {Title} = Typography;

const Hoempage = () => {

    const { data , isFetching } = useGetCryptosQuery();
    const globalStats = data?.data;
    console.log(globalStats)

    if(isFetching) return 'Loading ...'

    return (
        <>
            <Title level={2} className="heading" >
                Global Crypto Stats
            </Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats?.totalCoins} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value="5" /></Col>
                <Col span={12}><Statistic title="Total 24h volume" value="5" /></Col>
                <Col span={12}><Statistic title="Total Markets" value="5" /></Col>
            </Row>
        </>
    )
}

export default Hoempage

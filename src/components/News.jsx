import React from 'react'
import { Avatar,Row,Col,     Card, Select, Typography } from 'antd'
import moment from 'moment'

import { useGetCryptosNewsQuery } from '../services/cryptoNewsApi'

const { Text, Title} = Typography;
const {Option } = Select;

const News = ({simplified}) => {
    const {data:cryptoNews, isFetching} = useGetCryptosNewsQuery({newsCategory:'Cryptocurrency', count:simplified ? 6 :12});
   
    if(!cryptoNews?.value) return 'Loading ...'

    return (
        <Row gutter={[24,24]}>
                {
                    cryptoNews?.value?.map((news,i) => (
                        <Col xs={24} sm={12} lg={8} key={i}>
                            <Card hoverable className="news-card">
                                <a href={news.url} target='_blank' >
                                    <div className="news-image-container">
                                        <Title className="news-title" level={4}>
                                                {news.name}
                                        </Title>
                                    </div>
                                </a>
                            </Card>
                        </Col>  
                    ))
                }
        </Row>
    )   
}

export default News

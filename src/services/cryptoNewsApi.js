import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '450d71d4d1mshf24c803ed2d808ap1c7b17jsn1385acfd15f8'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers:cryptoApiHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints:(builder) => ({
        getCryptosNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCryptosNewsQuery } = cryptoNewsApi;
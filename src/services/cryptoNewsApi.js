import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoNewsHeaders =  {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '16315c24b1msh670a30fe2c92ad1p112f51jsnf81d94d06234'
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
  const createRequest = (url) => ({url, headers:
    cryptoNewsHeaders})

    export const cryptoNewsApi = createApi({
        reducerPath:'cryptoNewsApi',
        baseQuery: fetchBaseQuery({ baseUrl }),
        endpoints: (builder) =>({
            getCryptoNews: builder.query({
                query:({newsCategory, count}) =>  createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
            })
        })
    });   

    export const { useGetCryptoNewsQuery } = cryptoNewsApi;
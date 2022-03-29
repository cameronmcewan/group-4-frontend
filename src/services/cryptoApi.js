import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '16315c24b1msh670a30fe2c92ad1p112f51jsnf81d94d06234'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequests = (url) => ({url, headers:
cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query:(count) => createRequests(`/coins? limit=${count}`),
        })
    })
});

export const { 
    useGetCryptosQuery,
} = cryptoApi;
// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       tiers: '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '16315c24b1msh670a30fe2c92ad1p112f51jsnf81d94d06234'
//     }
//   };
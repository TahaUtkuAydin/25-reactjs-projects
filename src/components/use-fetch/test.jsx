import React from 'react'
import UseFetch from '.'

export default function UseFetchHookTest() {
const {data,error,pending} = UseFetch("https://dummyjson.com/products")

return (
    <div>
        <h1>Use Fetch Hook</h1>
        {pending ? "Please wait" : null }
        {error ? error : null}
        {data && data.products ? data.products.map((item,index)=> (
            <p key={index}>{item.title} </p>
        )):null}
    </div>
)

}

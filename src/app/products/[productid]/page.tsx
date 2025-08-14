interface ProductParams{
    params:{productid:string};
}

export default async function ProductDetails({params}:ProductParams){

    const pId = await params.productid;
    return <h1>Product Details {pId}</h1>
}
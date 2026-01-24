const getProducts = async (query) => {
    const resp = await fetch(`https://dummyjson.com/products/search?q=${query}`)
    const data = await resp.json()
    return  data.products
};

export default getProducts;
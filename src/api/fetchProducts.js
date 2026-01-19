const getProducts = async (query) => {
    console.log("Oi")
    const resp = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    const data = await resp.json()
    return data
};

export default getProducts;
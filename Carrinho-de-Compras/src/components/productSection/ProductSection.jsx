import './ProductSection.css'

function ProductSection () {

   const getProducts = async (query) => {

    try {
        const resp = await fetch(`https://dummyjson.com/products/search?q=${query}`)
        const data = await resp.json()

        console.log(data)
    } catch( err ) {
        console.log("Erro de CORS ou rede", err)
    }

   };

    return (
        <div className='product-container'>
            <div className='products-box'>
                
            </div>
        </div>
    )
}

export default ProductSection;
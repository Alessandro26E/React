import { useEffect, useState } from 'react';
import './ProductSlider.css'

function ProductSlider() {
    const [activeSlider, setActiveSlider] = useState(1)

    useEffect(() => {
    const interval = setInterval(() => {
        setActiveSlider((prev) => (prev === 4 ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
}, []);

    return (
        <div className='slider-container'>

            <div className='slides-div'>

                <input type="radio" name='radio-btn' id='radio1' checked={activeSlider === 1} onChange={() => setActiveSlider(1)} />
                <input type="radio" name='radio-btn' id='radio2' checked={activeSlider === 2} onChange={() => setActiveSlider(2)} />
                <input type="radio" name='radio-btn' id='radio3' checked={activeSlider === 3} onChange={() => setActiveSlider(3)} />
                <input type="radio" name='radio-btn' id='radio4' checked={activeSlider === 4} onChange={() => setActiveSlider(4)} />
                
                <div className='slide first'>
                    <img src="https://lh3.googleusercontent.com/t_smulMkVK9BIDgw76l2-tgp5sejn9XqU8NdErdmoF7fEJ8HNEkqriRVBxGTJTIeN-yFj2mxO_u4MWtt9AFDPAlXD-S57Bij_4BdLeC1j7DdT19xDFpA8chbcYjPp0GXavDCNZUw9iLuHMBnJBZxNI8"/>
                </div>

                <div className='slide'>
                    <img src="https://hdnoval.com.br/wp-content/uploads/2024/09/BANNER-2048x785.jpg"/>
                </div>

                <div className='slide'>
                    <img src="https://d3gdr9n5lqb5z7.cloudfront.net/fotos/limpeza-de-cozinhalimpeza-de-cozinhahl-ype-limpeza-de-cozinha.png"/>
                </div>

                <div className='slide'>
                    <img src="https://lh3.googleusercontent.com/AJID2qnC3bzeRhR2K3ITfLrJSuzlAVHTV-zVL6EN13Ir2nSBLE8rHVodS8LKdmdfNFl6cNcbJN5BDLNvvcAT14DJ-YAID3SJcIM5WC3TbH0YM_UNZPkm6fbUCMh4TG80Hs7UATj5eotbRlVQl9hvFMs"/>
                </div>

                <div className='navigator-auto'>
                    <div className='auto-btn1'></div>
                    <div className='auto-btn2'></div>
                    <div className='auto-btn3'></div>
                    <div className='auto-btn4'></div>
                </div>

            </div>

            <div className="navigation-manual">
                <label htmlFor="radio1" className='manual-btn'></label>
                <label htmlFor="radio2" className='manual-btn'></label>
                <label htmlFor="radio3" className='manual-btn'></label>
                <label htmlFor="radio4" className='manual-btn'></label>
            </div>

        </div>
    )
}

export default ProductSlider;
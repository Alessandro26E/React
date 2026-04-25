import './List.css'

function List() {

    return (
        <div id='card-list' className='bg-[#ffffff] w-[600px] h-[550px] rounded-[20px] border-1 border-[#d6d6d6]'>
            <div className=' w-full h-[140px]'>

                <div id='input-div' className='flex items-center justify-center gap-2 w-full h-[70px]'>
                    <input id='input-card' type="text" placeholder='O que precisa ser feito hoje?'  className='font-[Inter] pl-3 text-[14px] border-1 border-[#d6d6d6] rounded-[15px] w-[460px] h-[50px]'/>
                    <button id='button-add' className='bg-[#6E47E5] text-white font-[Inter] font-light text-2xl w-[50px] h-[45px] text-center rounded-[16px] cursor-pointer'>+</button>
                </div>

            </div>
        </div>
    )
}

export default List;
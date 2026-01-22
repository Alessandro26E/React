function MainButton({ActionText, onFunc}) {
    

    return (
        <button onClick={onFunc} className="bg-black text-white border-gray-500 border-1 w-[200px] h-[50px] cursor-pointer rounded-md m-2">{ActionText}</button>
    )
}

export default MainButton
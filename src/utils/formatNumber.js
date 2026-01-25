const formatNumber = (value) => {
    return Number(value).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}

export default formatNumber;
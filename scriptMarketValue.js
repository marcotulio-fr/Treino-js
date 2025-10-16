const company = [
    { name: 'samsung', ceo: 'Pietro', foundedOn: 1958, value: 90 },
    { name: 'spotify', ceo: 'Lara', foundedOn: 2006, value: 30 },
    { name: 'lg', ceo: 'Marco Tulio', foundedOn: 1990, value: 130 },
    { name: 'mondial', ceo: 'Mariah', foundedOn: 2002, value: 256 },
    { name: 'positivo', ceo: 'Michele', foundedOn: 1991, value: 137 }
]

const companyValue = company.map(value => {
    value.value = value.value - value.value / 10
    return value
}).filter(value => value.foundedOn < 2000).reduce((acc, value) => {
    return acc + value.value
}, 0)
console.log("O valor de todas as companhias é: R$" + companyValue)
// import {getProducts} from "./productUtils";

export const sortAZ = (products) => {
    return products.sort((a, b) => {return a.title.localeCompare(b.title)}).slice()
}
export const sortZA = (products) => {
    return products.sort((b, a) => {return a.title.localeCompare(b.title)}).slice()
}

export const sortPriceIncrease = (products) => {
    return products.sort((a, b) => {return a.price-b.price}).slice()
}

export const sortPriceDecrease = (products) => {
    return products.sort((b, a) => {return a.price-b.price}).slice()
}

export const sortRatingIncrease = (products) => {
    return products.sort((a, b) => {return a.rating.rate-b.rating.rate}).slice()
}

export const sortRatingDecrease = (products) => {
    return products.sort((b, a) => {return a.rating.rate-b.rating.rate}).slice()
}

export const filterCategory = (products, category) => {
    return products.filter((product, i) => {return product.category===category})
}

export const filterSearch = (products, searchString) => {
    return products.filter((product, i) => {return product.title.toLowerCase().includes(searchString)})
}

/*
export const sorteeriKolmasTahtAZ = () => {
    tooted.sort((a, b) => {return b.nimi[2].localeCompare(a.nimi[2])})
    setTooted(tooted.slice());

}
export const filtreeriALopus = () => {
    //tooted.filter((a, i) => {return a.toLowerCase().substring(-1)==='a'})
    const filtreeritud = tootedJSON.filter((toode, i) => {return toode.nimi.toLowerCase().endsWith('a')})
    setTooted(filtreeritud);
}
export const filtreeriKolmasTahtS = () => {
    const filtreeritud = tootedJSON.filter((toode, i) => {return toode.nimi[2].toLowerCase()==='s'})
    setTooted(filtreeritud);
}
export const filtreeriVahemaltViis = () => {
    const filtreeritud = tootedJSON.filter((toode, i) => {return toode.nimi.length>=5})
    setTooted(filtreeritud);
}
export const filtreeriKuus = () => {
    const filtreeritud = tootedJSON.filter((toode, i) => {return toode.nimi.length===6})
    setTooted(filtreeritud);
}

export const filtreeriSisaldabLyhendit = () => {
    const filtreeritud = tootedJSON.filter((a, i) => {return a.nimi.toLowerCase().includes('be')})
    setTooted(filtreeritud);
}*/



const concat = (...args) =>
    args.reduce((acc, val) => [...acc, ...val])


const unique = (field, flags) => (features) => features.filter((item, index) => {
    
    valid = flags[`${item[field]}-${item.description}`]
    flags[`${item[field]}-${item.description}`] = true;

    return !valid

}).sort((a,b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0))


const singleFilters = (field, features) => unique(field, [])(features.reduce((prev, next) => concat(prev || [], next)))

// let concatAndDeDuplicateObjectsDeep = (field,...arrs) => 
//         [ ...new Set( [].concat(...arrs).map(a => JSON.stringify(a)) ) ]
//         .map(a => JSON.parse(a))
//         .sort((a,b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0))

// const singleReducer = (field, features) => features.reduce((prev, next) => concatAndDeDuplicateObjectsDeep(field, prev || [], next))


const filterProducts = (features, skus) => {
    return skus.filter(sku => {

        var length = 0;

        features.map(feature => sku.features.map(skufeature => {
            if(skufeature.type === feature.type && skufeature.description === feature.description)
                length ++
        }))

        return length === features.length
    })
}



module.exports = {
    singleFilters,
    // singleReducer,
    filterProducts
}
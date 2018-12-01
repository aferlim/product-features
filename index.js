var fs = require('fs');

var product = JSON.parse(fs.readFileSync('./products.json', 'utf8'));


const { singleFilters, filterProducts } = require('./resolveFeatures')


var f = singleFilters('type', product.product.skus.map(sku => sku.features))


console.log(JSON.stringify(f, null, '\t'))


var productsFilter = filterProducts([
{
    type: 1,
    typeDescription: "color",
    description: "Red"
},
{
    type: 2,
    typeDescription: "size",
    description: "10"
}
], product.product.skus)


console.log(JSON.stringify(productsFilter, null, '\t'))
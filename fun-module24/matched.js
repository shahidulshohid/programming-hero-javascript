 const products = [
    {id:1, name:'xiami phone one night', price:'19000'},
    {id:1, name:'iphone', price:'19000'},
    {id:1, name:'mac book air', price:'19000'},
    {id:1, name:'lenovo yoga laptop 2025', price:'19000'},
    {id:1, name:'dell inspiron laptop', price:'19000'},
    {id:1, name:'Samsung phone note 7', price:'19000'},
    {id:1, name:'Nokia old age phone gone', price:'19000'},
    {id:1, name:'Phone one', price:'19000'},
    {id:1, name:'MI cheap not cheap lapTOP', price:'19000'},
 ]
 function matchedProducts(arr, search){
    let matched = [];
    for(const product of arr){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched;
 }
 console.log(matchedProducts(products, "lapTOP"))
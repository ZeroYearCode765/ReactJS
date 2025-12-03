const arr = [
    {cloth:"Tshirt", Offer:"20-40%Off",price : 2000},
    {cloth:"Pant", Offer:"30-50%Off", price : 3000},
    {cloth:"Skirt", Offer:"10-20%Off",price : 3500},
    {cloth:"Kurta", Offer:"30-60%Off",price : 2900},
    {cloth:"Patloon", Offer:"11-40%Off",price : 2800},
    {cloth:"Shoes", Offer:"40-60%Off",price : 3100},
    {cloth:"Shirt", Offer:"10-20%Off",price : 3200},
    {cloth:"Bag", Offer:"15-40%Off",price : 3300}
]

export function greet(){
    return <h1>Hello Coder Army</h1>
}

export function meet(){
    return <h1>Hello Bhaiya ji</h1>
}

export default arr; 
// we can use  export default only once inside a single file the next time e will use export only . also we cant use export default in front of const 

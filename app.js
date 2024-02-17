const container = document.querySelector("#root")
const getProduct = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        const products = await response.json()
        container.innerHTML = products?.map(item => {
            return `
            <div class="flex w-full h-full justify-center items-center grid grid-rows-3 border-black border-2 p-0">
            <h3>${item.title}</h3>
            <img src=${item.image} width="100px"/>
            <span class="w-[200px]">${item.description}</span>
            <span>$${item.price}</span>
            </div>
            `
        }).join("")
    } catch (error) {
        if (error) {
            alert(error.message)
        }
    }
}
getProduct()

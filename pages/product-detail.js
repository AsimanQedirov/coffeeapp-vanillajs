class ProductDetail extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.append("Product detail page")
    }
}

customElements.define("product-detail-page", ProductDetail)

export default ProductDetail;
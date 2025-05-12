class FormElement extends HTMLElement{
    #data = {
        fullname : "",
        phoneNumber : ""
    }
    constructor(){
        super()
    }
    changeFormElementsValue(form){        
        this.#data = new Proxy(this.#data , {
            set(target, property , value){
                target[property] = value;
                form.elements[property].value = value
                return true
            }
        });
        for(let element of Array.from(form.elements)){
            element.addEventListener("change" , event => {
               this.#data[element.name] = event.target.value
            })
        }
    }
    submitForm(){
        if(this.#data.fullname && this.#data.phoneNumber){
            alert(`Your order completed : ${this.#data.fullname}`)
            this.#data.fullname = ""
            this.#data.phoneNumber = ""
        }
    }
    createFormElements(){
        const form  = document.createElement('form');
        const formElements = [
            {
                type : "text",
                name : "fullname",
                placeholder : "Enter fullname"
            },
            {
                type : "text",
                name : "phoneNumber",
                placeholder : "Enter phone number"
            }
        ];

        for(let element of formElements){
            const input = document.createElement("input");
            input.setAttribute("type" , element.type);
            input.setAttribute("name" , element.name);
            input.setAttribute("placeholder" , element.placeholder);
            input.setAttribute("class" , "mt-10");
            form.append(input)
        }
        const submitButton = document.createElement("button");
        submitButton.setAttribute("type" , "submit");
        submitButton.textContent = "Submit Order";
        
        form.append(submitButton)
        form.addEventListener("click", (event)  => {
            event.preventDefault()
            this.submitForm()
        })
        
        return form;
    }
    connectedCallback(){
        const form = this.createFormElements()
        this.append(form);
        this.changeFormElementsValue(form);
    }
}
customElements.define("basket-form-element" , FormElement);
export default FormElement;
class Item {

    constructor(id, name, category, description, image){
        this.id = id 
        this.name = name
        this.category = category
        this.description = description
        this.image = image
        this.renderItem()
    }


// delete items?
deleteItem(){
    console.log("clicked delete item bruv")
}

itemHTML(){
    return `
    <img src="${this.image}" />
    <h3>${this.name}</h3>
      <p>Catergory: ${this.category}</P
      <p>${this.description}</p>
      <button class="delete" data-id"${this.id}. delete?</button>
    `
}


//render itmes
renderItem(){
    const itemList = document.getElementById('item-list')

}
//link items to show page

}
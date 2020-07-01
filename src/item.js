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
    
    <h3>${this.name}</h3>
      <p>Catergory: ${this.category}</P
      <p>${this.description}</p>
      <button class="delete" data-id"${this.id}> Delete?</button>
      <button class="review" data-id"${this.id}> Add Review</button
    `
}


//render itmes
renderItem(){
    const itemList = document.getElementById('item-list')
    const innerItem = document.createElement('div')
    innerItem.classList.add('item')
    innerItem.id = this.id 
    innerItem.innerHTML += this.itemHTML()
    itemList.appendChild(innerItem)
}
//link items to show page

}
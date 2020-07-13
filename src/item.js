
class Item {

    constructor(id, name, category, description, image, reviews){
        this.id = id 
        this.name = name
        this.category = category
        this.description = description
        this.image = image
        this.reviews = reviews
        this.renderItem()
    }


// delete items?
deleteItem(e){
    const id = parseInt(e.target.parentElement.id)
    fetch(`${BACKEND_URL}/items/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        document.getElementById('item-list').removeChild(document.getElementById(id))
    })
    //console.log("clicked delete item bruv")
}

itemHTML(){
    return `
    
    <h3>${this.name}</h3>
      <p>Catergory: ${this.category}</P
      <p>${this.description}</p>
      <button class="delete" data-id"${this.id}> Delete Item?</button>
      <button class="review-button" data-id"${this.id}> Add Review</button>
      ${this.reviews.map(function(review){ 
        return (`
            <div id="${review.id}"> 
                <h2> 
                    ${review.title}
                </h2>
                <p> 
                    ${review.rating}
                </P>
                <p> 
                    ${review.content}
                </P>
            </div>
        
        `)
        
    
    }).join('')}
     
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
    innerItem.addEventListener('click', e => {
        if (e.target.className.includes('delete')) this.deleteItem(e)
        if(e.target.className.includes('review-button')) Review.reviewForm(e)
    })
}
//link items to show page


}
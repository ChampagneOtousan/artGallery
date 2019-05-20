class Classic {
  constructor(art_url) {
    this.frame = "black-border"
    // thing_to_set_to =
    this.art_url = art_url ? art_url : "default_url"
  }

  render() {
    let el = document.createElement("img")
    el.style.width = "400px"
    el.style.height = "400px"
    el.style.backgroundColor = "black"
    el.style.border = "5px solid black"
    document.body.appendChild(el)
  }
}

class Meme extends Classic {
 constructor(meme_url) {
 super(meme_url)
 this.frame1 = 'red-border'
 this.meme_url = meme_url ? meme_url : "default_url"
}

 render() {
   super.render()
   let el = document.createElement('img')
   el.src = this.meme_url
   el.style.border = '5px solid red'
   document.body.appendChild(el)
 }
}


classic1 = new Classic("https://www.thesun.co.uk/wp-content/uploads/2016/03/2711729.main_image.jpg?strip=all")
meme1 = new Meme("https://i.redd.it/cc9ainnkj9z21.jpg")

class Classic {
  constructor(art_url) {
    this.frame = "black-border"
    // thing_to_set_to =
    this.art_url = art_url ? art_url : "default_url"
  }

  render() {
    let el = document.createElement("div")
    el.style.width = "100px"
    el.style.height = "100px"
    el.style.backgroundColor = "black"
    document.body.appendChild(el)
  }
  classic1 = new Classic("http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg")
}

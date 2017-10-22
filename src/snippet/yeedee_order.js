class Sale {
  constructor(price_id, time_id, btn_id, max_price) {
    this.price = $('#' + price_id)
    this.time = $('#' + time_id)
    this.btn = $('#' + btn_id)
    this.max_price = Number(max_price)
  }

  getPrice() {
    return Number(this.price.text())
  }

  placeOrder() {
    if (this.getPrice() < this.max_price) {
      this.btn.click()
    } else {
      console.log("Too Expensive!!!!Quit!!!")
    }
  }

  getTime() {
    return this.time.text()
  }

  main() {
    if (this.getTime() === '0:00:02') {
      this.placeOrder()
    }
    setTimeout(this.main, 1000)
  }
}
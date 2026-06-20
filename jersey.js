function showProduct(name,price,img,productId){
      document.getElementById("sidebarImg").src=img
      document.getElementById("sidebarName").textContent=name
      document.getElementById("sidebarPrice").textContent=price
      document.getElementById("sidebar").classList.add("open")
}

function hideSidebar(){
    document.getElementById("sidebar").classList.remove("open")
}
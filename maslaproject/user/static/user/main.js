document.addEventListener('DOMContentLoaded', () => {
    //buttons
    //var add_to_cart = document.querySelectorAll(".add-to-cart");
    //var add_to_cart = document.getElementsByClassName('popup');
    //add_to_cart.forEach(cart => {
    //add the selected product to cart
    //cart.addEventListener("click", () => {
    document.addEventListener('click', event => {

        const element = event.target;
        if (element.className === "popup") {

            var dishdiv = element.parentElement;
            //alert(dishdiv.innerHTML);
            dishid = dishdiv.dataset.dishid;
            var restaurantid = dishdiv.dataset.restaurant_nameid;

            //the object item
            const item = {
                "dishid": dishid,
                "restaurantid": restaurantid
            }
            const convert = JSON.stringify(item);

            //request
            const request = new XMLHttpRequest();
            request.open('GET', `/cart/cart_item/${convert}`, true);

            request.onload = () => {
                const data = JSON.parse(request.responseText);
                if (data.success) {
                    //alert("Added to cart!");
                    var popup = document.getElementById('myPopup');
                    popup.classList.toggle("show");

                    /*    setTimeout(() => {
                            popup.hidden = true;
                        }, 4000);*/
                }
                else {
                    alert("Please login to add to cart");
                }
            }

            request.send();
            return false;
        }
    })

})
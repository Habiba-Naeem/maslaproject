function count() {
    var count = 0;
    document.querySelectorAll("#cart-item-total").forEach(t => {
        count = parseFloat(t.dataset.total) + count;
    })
    document.querySelector("#total").textContent = "Rs" + count.toFixed(2);
    document.querySelector("#totalhidden").value = count.toFixed(2);
    return count.toFixed(2);
}
document.addEventListener('click', event => {

    const element = event.target;
    if (element.id === "checkout-button") {
        var checkoutform = document.getElementById('checkout-form');
        checkoutform.style.display = "block";
    }
})
//var checkout = document.getElementById('checkout-form');
document.addEventListener('DOMContentLoaded', () => {

    var checkout = document.getElementById('checkout-form');
    console.log(checkout);
    checkout.style.display = "none";

    var rows = document.querySelectorAll(".row");
    var cancel = document.querySelectorAll(".cancel");

    rows.forEach(row => {
        const prices = row.querySelector("#product-price");
        const quantity = row.querySelector("#quantity");
        var total = row.querySelector("#cart-item-total");

        total.textContent = "Rs" + (prices.dataset.price * parseInt(quantity.value)).toFixed(2);
        total.setAttribute("data-total", `${(prices.dataset.price * parseInt(quantity.value)).toFixed(2)}`);

        quantity.addEventListener("change", () => {
            total.textContent = "Rs" + (prices.dataset.price * parseInt(quantity.value)).toFixed(2);
            total.setAttribute("data-total", `${(prices.dataset.price * parseInt(quantity.value)).toFixed(2)}`);
            count();

            const request = new XMLHttpRequest();
            request.open('GET', `/cart/quantity/${row.id}/${quantity.value}`);

            request.onload = () => {
                const data = JSON.parse(request.responseText);
            };

            request.send();
            return false;
        })
    })
    count();

    cancel.forEach(can => {
        can.addEventListener("click", () => {
            const parent = can.parentNode.parentNode;
            const id = parent.id;
            console.log(id);

            var table = document.querySelector("#table");
            table.deleteRow(parent.rowIndex);
            count();

            const request = new XMLHttpRequest();
            request.open('GET', `/cart/cancel/${id}`, true);

            request.send();
            return false;

        })
    })
})
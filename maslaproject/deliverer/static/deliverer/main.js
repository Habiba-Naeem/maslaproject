document.addEventListener('DOMContentLoaded', () => {
    // var confirm_delivery = document.querySelectorAll(".confirm_delivery");

    // confirm_delivery.forEach(d => {
    //   d.addEventListener("click", () => {
    document.addEventListener('click', event => {

        const element = event.target;
        if (element.className === "popup") {
            var id = element.parentElement.parentElement.parentElement;
            console.log(id)
            id = parseInt(id.dataset.order)
            const request = new XMLHttpRequest();
            request.open('GET', `/deliverer/${id}`);
            request.onload = () => {
                const data = JSON.parse(request.responseText);
                if (data.success) {
                    //alert("successful")
                    var popup = document.getElementById('myPopupD');
                    popup.classList.toggle("show");

                    var status = document.querySelectorAll(".status");
                    status.forEach(s => {
                        var parent = s.parentElement.parentElement;
                        if (id === parseInt(parent.dataset.order)) {
                            s.innerHTML = "Delivered";
                            s.className = " mx-auto alert alert-success py-2 ";
                            var delivered = document.querySelector(".delivered");
                            var pending = document.querySelector(".pending");
                            delivered.textContent = parseInt(delivered.dataset.delivered) + 1;
                            delivered.setAttribute("data-delivered", `${parseInt(delivered.dataset.delivered) + 1}`);
                            pending.textContent = parseInt(pending.dataset.pending) - 1;
                            pending.setAttribute("data-pending", `${parseInt(pending.dataset.pending) - 1}`)
                        }
                    })
                }
                else {
                    alert("unsuccesssufl")
                }
            };
            request.send();
            return false;
        }
    })

})

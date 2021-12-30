function sendToast(title, when, msg) {
    id = "toast-"+ (Math.random() * 100);
    let toastBody = document.createElement("div");
    toastBody.innerHTML = `<div id="${id}" class="toast" role="alert" data-bs-delay="16000" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">${title}</strong>
          <small class="text-muted">${when}</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          ${msg}
        </div>
    </div>`;

    let toastContainer = document.getElementById("toast-container");
    toastContainer.appendChild(toastBody.firstChild);
    toastElement = document.getElementById(id)
    var toast = new bootstrap.Toast(toastElement)
    toast.show()
}

function saveProducts(products) {
    localStorage.setItem('storeProducts', JSON.stringify(products));
}

function getProducts() {
    let jsonProds = localStorage.getItem('storeProducts');
    if (jsonProds) {
        return JSON.parse(jsonProds, (key, value) => {    
            if (!isNaN(key) && !Array.isArray(value)) {
                return Object.assign(new Product, value)
            }
            return value;
        });
    } else {
        return [];
    }
    
}
//------own form validation by disabling default validation of browser
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
 
        form.classList.add('was-validated')
        }, false)
    })
})();


//--------confirmation before deletion 
function confirmDelete() {
    return confirm("Are you sure you want to delete this listing?");
}


// ---------date formating
function formatDate(isoDate) {
    const date = new Date(isoDate);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    return date.toLocaleDateString('en-US', options);
}


//----delete confirmation
function confirmDelete() {
    return confirm("Are you sure you want to delete this listing?");
}


//----tax-button
let taxSwitch = document.getElementById("flexSwitchCheckDefault");
taxSwitch.addEventListener("click", () => {
    let taxInfo = document.getElementsByClassName("tax-info");
    for (let info of taxInfo) {
        if (info.style.display != "inline") {
            info.style.display = "inline";
        } else {
            info.style.display = "none";
        }
    }
});



//------listings filtering
document.querySelectorAll('.filter').forEach(filter => {
    filter.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        fetch(`/listings/filter?category=${category}`)
            .then(response => response.json())
            .then(data => {
                // Update the DOM with the new listings
                const listingsContainer = document.querySelector('.row');
                listingsContainer.innerHTML = ''; // Clear existing listings
                
                data.listings.forEach(listing => {
                    listingsContainer.innerHTML += `
                        <a href="/listings/${listing._id}" class="listing-link">
                            <div class="card col listing-card">
                                <img src="${listing.image.url}" class="card-img-top" alt="listing" style="height: 20rem;">
                                <div class="card-img-overlay"></div>
                                <div class="card-body">
                                    <p class="card-text">
                                        <b>${listing.title}</b> <br>
                                        &#8377; ${listing.price.toLocaleString("en-IN")} / night
                                        <i style="opacity: 0.8;" class="tax-info">&nbsp; +18% GST</i>
                                    </p>
                                </div>
                            </div>
                        </a>
                    `;
                });
            });
    });
});



// ----maps

//custom select

const elSelectCustom = document.getElementsByClassName("js-selectCustom")[0];
const elSelectCustomValue = elSelectCustom.children[0];
const elSelectCustomOptions = elSelectCustom.children[1];
const defaultLabel = elSelectCustomValue.getAttribute("data-value");

// Listen for each custom option click
Array.from(elSelectCustomOptions.children).forEach(function (elOption) {
  elOption.addEventListener("click", (e) => {
    // Update custom select text too
    elSelectCustomValue.textContent = e.target.textContent;
    // Close select
    elSelectCustom.classList.remove("isActive");
  });
});

// Toggle select on label click
elSelectCustomValue.addEventListener("click", (e) => {
  elSelectCustom.classList.toggle("isActive");
});

// close the custom select when clicking outside.
document.addEventListener("click", (e) => {
  const didClickedOutside = !elSelectCustom.contains(event.target);
  if (didClickedOutside) {
    elSelectCustom.classList.remove("isActive");
  }
});
const elSelectCustom1 = document.getElementsByClassName("js-selectCustom1")[0];
const elSelectCustomValue1 = elSelectCustom1.children[0];
const elSelectCustomOptions1 = elSelectCustom1.children[1];
const defaultLabel1 = elSelectCustomValue.getAttribute("data-value");

// Listen for each custom option click
Array.from(elSelectCustomOptions1.children).forEach(function (elOption) {
  elOption.addEventListener("click", (e) => {
    // Update custom select text too
    elSelectCustomValue1.textContent = e.target.textContent;
    // Close select
    elSelectCustom1.classList.remove("isActive");
  });
});

// Toggle select on label click
elSelectCustomValue1.addEventListener("click", (e) => {
  elSelectCustom1.classList.toggle("isActive");
});

// close the custom select when clicking outside.
document.addEventListener("click", (e) => {
  const didClickedOutside1 = !elSelectCustom1.contains(event.target);
  if (didClickedOutside1) {
    elSelectCustom1.classList.remove("isActive");
  }
});

//custom select
// filter

const filterBox = document.querySelectorAll('.products_catalog-items');

elSelectCustom.addEventListener('click' , event => {
    if(event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['value']
    filterBox.forEach( el => {
        el.classList.remove('hide')
        if (!el.classList.contains(filterClass)) {
            el.classList.add('hide');
        }
    })
})

elSelectCustom1.addEventListener('click' , event => {
    if(event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['value']
    filterBox.forEach( el => {
        el.classList.remove('hide')
        if (!el.classList.contains(filterClass)) {
            el.classList.add('hide');
        }
    })
})


// filter
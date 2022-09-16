//-----------Variables DEVCLARATIONS----------
const navigationLinks = document.querySelectorAll('header nav ul li a');
const sections = document.querySelectorAll('main section');
const navigationElments = [...sections, document.querySelector('body > footer')]

//-----------Function DEVCLARATIONS----------
function goToSection(index) {
    navigationElments[index].scrollIntoView()
}

// ----------------MAIN-----------------
for (let index = 0; index < navigationLinks.length; index++) {
    navigationLinks[index].addEventListener('click', function () {
        goToSection(index)
    })
}

const selectElement = document.querySelector('header .select-element');
const selectCurrentElement = document.querySelector('header .select-current');
const selectOverlayElement = document.querySelector('header .select-overlay');
const selectOptionsElement = document.querySelectorAll('header .select-option');


selectElement.addEventListener('click', function(event){
    if(selectOverlayElement.classList.value.includes('active')){
        selectOverlayElement.classList.remove('active')
    } else {
        selectOverlayElement.classList.add('active')
    }
})

const currentOption = {}

console.log(selectOptionsElement)

for (selectOption of selectOptionsElement) {
    
    if(selectOption.attributes['selected']){
        selectCurrentElement.innerHTML = selectOption.innerHTML
    }

    const option = selectOption
    selectOption.addEventListener('click', function (event) {
        selectCurrentElement.innerHTML = option.innerHTML

    })
}




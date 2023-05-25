const expandTypesButton = document.querySelector('.tech-types-section__expand-types-button')
const expandBrandsButton = document.querySelector('.brands-section__expand-brands-button')
const readMoreButton = document.querySelector('.about-section__read-more-button')

expandBrandsButton.addEventListener('click', () => {
    const brandList = document.querySelector('.brands-section__brand-list')
    const expandButtonText = expandBrandsButton.querySelector('.expand-button__text')

    if(expandBrandsButton.classList.contains('expand-button_toggled')) {
        expandBrandsButton.classList.remove('expand-button_toggled')
        expandButtonText.textContent = 'Показать все'
        brandList.classList.remove('brands-section__brand-list_expanded')
    }
    else {
        expandBrandsButton.classList.add('expand-button_toggled')
        expandButtonText.textContent = 'Свернуть'
        brandList.classList.add('brands-section__brand-list_expanded')
    }
})

expandTypesButton.addEventListener('click', () => {
    const techTypeList = document.querySelector('.tech-types-section__tech-type-list')
    const expandButtonText = expandTypesButton.querySelector('.expand-button__text')
    
    if(expandTypesButton.classList.contains('expand-button_toggled')) {
        expandTypesButton.classList.remove('expand-button_toggled')
        expandButtonText.textContent = 'Показать все'
        techTypeList.classList.remove('tech-types-section__tech-type-list_expanded')
    }
    else {
        expandTypesButton.classList.add('expand-button_toggled')
        expandButtonText.textContent = 'Свернуть'
        techTypeList.classList.add('tech-types-section__tech-type-list_expanded')
    }
})

readMoreButton.addEventListener('click', () => {
    const aboutText = document.querySelector('.about-section__text')
    const readMoreButtonText = readMoreButton.querySelector('.about-section__read-more-button-text')

    if(readMoreButton.classList.contains('about-section__read-more-button_toggled')) {
        readMoreButton.classList.remove('about-section__read-more-button_toggled')
        readMoreButtonText.textContent = 'Показать все'
        aboutText.classList.remove('about-section__text_expanded')
    }
    else {
        readMoreButton.classList.add('about-section__read-more-button_toggled')
        readMoreButtonText.textContent = 'Свернуть'
        aboutText.classList.add('about-section__text_expanded')
    }
})
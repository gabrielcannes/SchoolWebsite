// navbar scroll js 
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window_scroll', window.scrollY > 0)
})

// show/hide faqs
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        // toggle unbind and bind the faq class to the open class depending on its current state
        faq.classList.toggle('open'); 

        // change icon
        const icon = faq.querySelector('.faq_icon i')
        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus'
        }
        else icon.className = 'uil uil-plus'
    })
})

// show nav menu in tablet/smartphone mode 
const navMenu = document.querySelector('.nav_menu')
const navMenuBtnOpen = document.querySelector('#open-menu-btn')
const navMenuBtnClose = document.querySelector('#close-menu-btn')

navMenuBtnOpen.addEventListener('click', () => {
    if (navMenu.style.display === 'none'){
        navMenu.style.display = 'flex'
    } else {
        navMenu.style.display = 'none'
    }
})
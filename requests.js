const testimonialRequest = 'https://randomuser.me/api/'
const section = document.getElementsByClassName('testimonials_container')
const list = document.createDocumentFragment();

fetch(testimonialRequest)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let testimonials = data
        console.log(testimonials)
        Object.keys(testimonials).map(function(testimonial) {
            let article = document.createElement('article')
            let divAvatar = document.createElement('div')
            let img = document.createElement('img')
            // let divInfo = document.createElement('div')
            // let h5 = document.createElement('h5')
            // let small = document.createElement('small')
            // let divBody = document.createElement('div')
            // let p = document.createElement('p')

            img.innerHTML = `testimonial.results.picture.medium`
            console.log(img)
            divAvatar.append(img)
            article.appendChild(divAvatar)
            section[0].appendChild(article)
        })
    })


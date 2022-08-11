const testimonialRequest = 'https://randomuser.me/api/'
const section = document.getElementsByClassName('testimonials_container')
const list = document.createDocumentFragment()

for (let i = 0; i < 5; i++)
{
    fetch(testimonialRequest)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let testimonials = data
        
        let article = document.createElement('article')
        article.classList.add('testimonial')

        let divAvatar = document.createElement('div')
        divAvatar.classList.add('avatar')

        let img = document.createElement('img')


        let divInfo = document.createElement('div')
        divInfo.classList.add('testimonial_info')

        let h5 = document.createElement('h5')

        let small = document.createElement('small')

        let divBody = document.createElement('div')
        divBody.classList.add('testimonial_body')

        let p = document.createElement('p')

        img.src = testimonials.results[0].picture.medium
        divAvatar.append(img)
        article.appendChild(divAvatar)

        h5.innerHTML = (testimonials.results[0].name.first) + ' ' + (testimonials.results[0].name.last)
        divInfo.appendChild(h5)

        small.innerHTML = testimonials.results[0].name.title
        divInfo.appendChild(small)

        article.appendChild(divInfo)
        
        p.innerHTML = "Lorem ipsum dolor sit amet. Qui praesentium odio et aliquam nisi et enim quos ut sunt vero non iure animi aut nisi dolor ab sunt nostrum. Ut reprehenderit porro id dolores sapiente sit itaque doloremque ea perspiciatis debitis et impedit totam non Quis fugiat et similique voluptatem.";
        
        divBody.appendChild(p)
        article.appendChild(divBody)

        section[0].appendChild(article)
    })
}



const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
        web: {
            blog: 'https://johndoe.com'
        }, 
        social: {
            facebook: 'https://facebook.com/john.doe',
            instagram: 'https://instagram.com/john.doe'
        } 
    }
}

const {instagram:ig, facebook:fb} = person.links.social

console.log(fb, ig)
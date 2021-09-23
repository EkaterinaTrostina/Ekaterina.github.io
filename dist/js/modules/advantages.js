class URLManager {
    constructor(url) {
        this.url = url
    }
    getAdvantages() {
        const advant = await fetch(url);

        if(!advant.ok){
            throw new Error(`error ${advant.starus}`)
        };

        data = await advant.json();
        return data.forEach(({img, alt, title, descr}) => {
            new Advantages(img, alt, title, descr);
        })
    }
}

class LocalManager {
    getAdvantages() {
        [
            new Advantages('https://www.modlabs.net/uploads/gallery/blogs/the-cloud.jpg', "Some", "Title 1", "Descr 1"),
            new Advantages('https://www.modlabs.net/uploads/gallery/blogs/the-cloud.jpg', "Some", "Title 2", "Descr 2"),
            new Advantages('https://www.modlabs.net/uploads/gallery/blogs/the-cloud.jpg', "Some", "Title 3", "Descr 3")
        ]
    }
}

function createAdvantagesCard() {
    // dbmanager = URLManager('http://localhost:3000/advantages')
    dbmanager = LocalManager()
    async function getAdvantages(url) {
        const advant = await fetch(url);

        if(!advant.ok){
            throw new Error(`error ${advant.starus}`)
        };

        return await advant.json();
    }
    

    class Advantages {

        constructor(img, alt, title, descr){
            this.img = img;
            this.alt = alt;
            this.title = title; 
            this.descr = descr;
        }
        render() {
            const advant = document.createElement('div');
            advant.classList.add('advantages__icon', 'advantages__icon_animated');
            advant.innerHTML = `
                <img class="advantages__img" src=${this.img} alt=${this.alt}> 
                <div class="advantages__subtitle">${this.title}</div>
                <div class="advantages__descr">${this.descr} </div>
            `;
            document.querySelector('.advantages__wrapper').append(advant);
        };

    }
    advantages = dbmanager.getAdvantages()
    advantages.forEach(item => {
        item.render()
    })
    // getAdvantages('http://localhost:3000/advantages')
    //     .then(data => {
    //         data.forEach(({img, alt, title, descr}) => {
    //             new Advantages(img, alt, title, descr).render();
    //         })
    //     })

}
export default createAdvantagesCard;
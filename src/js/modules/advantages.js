function createAdvantagesCard() {

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

    getAdvantages('http://localhost:3000/advantages')
        .then(data => {
            data.forEach(({img, alt, title, descr}) => {
                new Advantages(img, alt, title, descr).render();
            });
        })

}
export default createAdvantagesCard;
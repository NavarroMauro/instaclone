let linkFetch = document.querySelector('#fetchLink');
let mainWraper = document.querySelector('div');
let urlImg = 'quotes.json';
// let counter = 0;

let fetchImages = async (event) => {
    event.currentTarget.removeEventListener('click', fetchImages);
    let res = await fetch(urlImg);
    let data = await res.json();
    for (let obj of data) {
        let mainContainer = document.createElement('SECTION');
        let imageContainer = document.createElement('IMG');
        let titleContainer = document.createElement('H2');
        let quoteContainer = document.createElement('P');

        imageContainer.src = obj.address;
        titleContainer.innerText = obj.title;
        quoteContainer.innerText = obj.description;

        mainContainer.appendChild(imageContainer);
        mainContainer.appendChild(titleContainer);
        mainContainer.appendChild(quoteContainer);

        imageContainer.addEventListener('click', () => {
            let newContainer = document.createElement('ARTICLE');
            let newImage = document.createElement('IMG');
            let span = document.createElement('SPAN');

            newImage.src = obj.address;
            span.innerText = 'X';
            document.body.appendChild(newContainer);
            newContainer.appendChild(newImage);
            newContainer.appendChild(span);

            span.addEventListener('click', (ev) => {
                ev.currentTarget.parentElement.style.display = 'none';
            })
        })

        // Send all single items to a main wrapper
        mainWraper.appendChild(mainContainer);
    }    
}

linkFetch.addEventListener('click', fetchImages);
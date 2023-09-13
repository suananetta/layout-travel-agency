

let directionCards = [
    {
        url: './images/direct-lake.jpg',
        rate: '4.9',
        description: 'Озеро возле гор',
        price: '480 $',
        mark: 'романтическое приключение'
    },
    {
        url: './images/direct-night.jpg',
        rate: '4.5',
        description: 'Ночь в горах',
        price: '500 $',
        mark: 'в компании друзей'
    },
    {
        url: './images/direct-yoga.jpg',
        rate: '5.0',
        description: 'Йога в горах',
        price: '230 $',
        mark: 'для тех, кто забоится о себе'
    }
];

let blogCards = [
    {
        url: './images/blog-italy.jpg',
        title: 'Красивая Италя, какая она в реальности?',
        body: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
        date: '01/04/2023',
        source: ''
    },
    {
        url: './images/blog-flight.jpg',
        title: 'Долой сомнения! Весь мир открыт для вас!',
        body: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
        date: '01/04/2023',
        source: ''
    },
    {
        url: './images/blog-preparation.jpg',
        title: 'Как подготовиться к путешествию в одиночку?',
        body: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
        date: '01/04/2023',
        source: ''
    },
    {
        url: './images/blog-india.jpg',
        title: 'Индия ... летим?',
        body: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
        date: '01/04/2023',
        source: ''
    }
]

let pics = [
    {
        url: './images/impression1.jpg',
        alt: 'hot air balloon flight'
    },
    {
        url: './images/impression2.jpg',
        alt: 'map and camera'
    },
    {
        url: './images/impression3.jpg',
        alt: 'Burj Al Arab, Dubai'
    },
    {
        url: './images/impression4.jpg',
        alt: 'beach, boats near the shore'
    },
    {
        url: './images/impression5.jpg',
        alt: 'Horseshoe Canyon (Horseshoe Bend)'
    },
    {
        url: './images/impression6.jpg',
        alt: 'map and camera'
    },
]

let deviceType;

// window.addEventListener('load', resize);
// window.addEventListener('resize',resize);

let directionBlock = document.querySelector('.direction-cards');
let blogBlock = document.querySelector('.blog-cards');
let picsBlock = document.querySelector('.impression-pics');

function resize() {
    let screenWidth = window.innerWidth;

    if(screenWidth >= 360 && screenWidth < 600) {
        deviceType = 'mobile'
    } else if(screenWidth >= 600 && screenWidth < 1024) {
        deviceType = 'tablet'
    } else if(screenWidth >= 1024) {
        deviceType = 'desktop'
    }
    console.log(deviceType);
}

function onClickDisplay(content, contentSource) {
    content.addEventListener('touchend', () => {
        let currentCard = +content.querySelector('.active').dataset.index;
        let nextCard = currentCard+1 >= contentSource.length? 0 : currentCard+1;

        content.querySelector('.active').classList.remove('active');
        content.querySelector('.item' + nextCard).classList.add('active');

        console.log(currentCard);
        console.log(nextCard);
    })
}

function displayDirectionContent() {
    directionCards.forEach((card, index) => {      
        let directionCard = document.createElement('div');
        directionCard.className = `direction-card item${index} ${deviceType === 'desktop'? 'active' : index === 0? 'active':''}`;
        directionCard.setAttribute('data-index', `${index}`);
        directionCard.style.backgroundImage = `url(${card.url})`;

        directionCard.innerHTML = ` 
            <div class="direction-card-rate">
                <img src="./images/rate.svg" alt="rate star">
                ${card.rate}
            </div>
            <div class="direction-card-info">
                <div>
                    ${card.description}
                    <span>${card.mark}</span>
                </div>
                <div class="price-badge">${card.price}</div>
            </div>
            
        `
        directionBlock.append(directionCard);
    })

    deviceType === 'desktop'? '' : onClickDisplay(directionBlock, directionCards);   
}

function displayBlogContent() {
    blogCards.forEach((card, index) => {
        let blogCard = document.createElement('div');
        blogCard.className = `blog-card item${index} ${deviceType === 'desktop'? 'active' : index === 0? 'active':''}`;
        blogCard.setAttribute('data-index', `${index}`);
        // blogCard.style.backgroundImage = `url(${card.url})`

        blogCard.innerHTML = ` 
            <img src='${card.url}' alt='${card.title}'>
            <div class="blog-card-body">
                <h3>${card.title}</h3>
                <p>${card.body}</p>
                <div class="blog-card-footer">
                    <span>${card.date}</span>
                    <a href="${card.source}">читать статью</a>
                </div>
            </div>
        `
        blogBlock.append(blogCard);
    })

    deviceType === 'desktop'? '' : onClickDisplay(blogBlock, blogCards);
}

function displayPicsContent() {
    pics.forEach((pic, index) => {
        let image = document.createElement('img');
        image.className = `impression-img item${index} ${deviceType === 'desktop'? 'active' : index === 0? 'active':''}`;
        image.setAttribute('data-index', `${index}`);

        image.src = pic.url;
        image.alt = pic.alt

        picsBlock.append(image);
    })

    deviceType === 'desktop'? '' : onClickDisplay(picsBlock, pics);
}

document.addEventListener('DOMContentLoaded', () => {
    resize();
    displayDirectionContent();
    displayBlogContent();
    displayPicsContent();
});


let screenWidth = window.innerWidth;

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
        title: 'Красивая Италя, какая она в реальности?',
        body: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
        date: '01/04/2023',
        source: ''
    },
    {
        title: 'Долой сомнения! Весь мир открыт для вас!',
        body: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
        date: '01/04/2023',
        source: ''
    },
    {
        title: 'Как подготовиться к путешествию в одиночку?',
        body: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
        date: '01/04/2023',
        source: ''
    },
    {
        title: 'Индия ... летим?',
        body: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
        date: '01/04/2023',
        source: ''
    }
]

// let template = document.getElementById('direction-card');
// let content = template.content.querySelectorAll('.direction-item');
let directionBlock = document.querySelector('.direction-cards');
let blogBlock = document.querySelector('.blog-cards');



function displayDirectionContent() {
    directionCards.forEach((card, index) => {
        let directionCard = document.createElement('div');
        directionCard.className = `direction-card item${index} ${index === 0? 'active':''}`;
        directionCard.setAttribute('data-index', `${index}`);

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

    directionBlock.addEventListener('touchend', () => {
        let currentCard = +directionBlock.querySelector('.active').dataset.index;
        let nextCard = currentCard+1 >= directionCards.length? 0 : currentCard+1;

        directionBlock.querySelector('.active').classList.remove('active');
        directionBlock.querySelector('.item' + nextCard).classList.add('active');
        // sliderBlock.getAttribute()
        // .classList.add('active');

    // directionCard.classList.remove('active');
    console.log(currentCard);
    console.log(nextCard);
    })
    
}

function displayBlogContent() {
    blogBlock.forEach((card, index) => {
        let blogCard = document.createElement('div');
        blogCard.className = `blog-card item${index} ${index === 0? 'active':''}`;
        blogCard.setAttribute('data-index', `${index}`);

        blogCard.innerHTML = ` 
            <img src=${card.url} alt="blog-italy">
            <h3>Красивая Италя, какая она в реальности?</h3>
            <p>Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
            <div class="blog-cart-footer">
                <span>01/04/2023</span>
                <a href="#">читать статью</a>
            </div>
        `
        directionBlock.append(blogCard);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    displayDirectionContent();
    console.log();
});


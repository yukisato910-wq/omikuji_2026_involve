const cards = [
    { name: "10", imageUrl: "img/10.png" },
    { name: "11", imageUrl: "img/11.png" },
    { name: "12", imageUrl: "img/12.png" },
    { name: "13", imageUrl: "img/13.png" },
    { name: "8", imageUrl: "img/8.png" },
    { name: "9", imageUrl: "img/9.png" },
    // その他のカードを追加
];

window.onload = function() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];

    // カード画像を表示
    document.getElementById('card-image').src = selectedCard.imageUrl;
};

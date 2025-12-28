const cards = [
    { name: "1", imageUrl: "img/1.png" },
    { name: "2", imageUrl: "img/2.png" },
    { name: "3", imageUrl: "img/3.png" },
    { name: "4", imageUrl: "img/4.png" },
    { name: "5", imageUrl: "img/5.png" },
    { name: "6", imageUrl: "img/6.png" },
    // その他のカードを追加
];

window.onload = function() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];

    // カード画像を表示
    document.getElementById('card-image').src = selectedCard.imageUrl;
};

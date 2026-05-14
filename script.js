// Генератор красивого падения твоих лепестков
function createLilacRain() {
    const container = document.body;
    const maxPetals = 30; // Количество лепестков в воздухе одновременно

    for (let i = 0; i < maxPetals; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.classList.add('lilac-petal');
            
            // Распределяем случайным образом по ширине экрана
            petal.style.left = Math.random() * 100 + 'vw';
            // Задаем разную скорость падения для реалистичности
            petal.style.animationDuration = (Math.random() * 5 + 6) + 's';
            // Разная задержка старта
            petal.style.animationDelay = Math.random() * 6 + 's';
            // Легкое различие в размерах лепестков
            const scale = Math.random() * 0.4 + 0.8;
            petal.style.transform = `scale(${scale})`;
            
            container.appendChild(petal);
        }, i * 250);
    }
}

// Запуск анимации сразу после открытия страницы
window.onload = function() {
    createLilacRain();
};


document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const questionHeading = document.getElementById('question');
    const buttonsContainer = document.querySelector('.buttons');
    const celebrationDiv = document.getElementById('celebration');
    const floatingContainer = document.querySelector('.floating-container');

    // Move "No" button on hover or touch
    const moveButton = () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

        noBtn.style.position = 'fixed'; // Change to fixed to move freely around screen
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    };

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('touchstart', moveButton); // For mobile

    // "Yes" button click
    yesBtn.addEventListener('click', () => {
        questionHeading.style.display = 'none';
        buttonsContainer.style.display = 'none';
        celebrationDiv.classList.remove('hidden');

        // Trigger flower shower
        createFlowers();
    });

    function createFlowers() {
        const flowers = ['🌸', '💐', '🌺', '🌷', '🌹', '🌻', '💜'];
        const amount = 50;

        for (let i = 0; i < amount; i++) {
            setTimeout(() => {
                const flower = document.createElement('div');
                flower.classList.add('flower');
                flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

                flower.style.left = Math.random() * 100 + 'vw';
                flower.style.animationDuration = Math.random() * 2 + 3 + 's';
                flower.style.fontSize = Math.random() * 1.5 + 1.5 + 'rem';

                floatingContainer.appendChild(flower);

                // Remove element after animation
                setTimeout(() => {
                    flower.remove();
                }, 5000);
            }, i * 100);
        }

        // Keep creating flowers every few seconds
        setInterval(() => {
            const flower = document.createElement('div');
            flower.classList.add('flower');
            flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
            flower.style.left = Math.random() * 100 + 'vw';
            flower.style.animationDuration = Math.random() * 3 + 3 + 's';
            floatingContainer.appendChild(flower);
            setTimeout(() => flower.remove(), 6000);
        }, 300);
    }
});

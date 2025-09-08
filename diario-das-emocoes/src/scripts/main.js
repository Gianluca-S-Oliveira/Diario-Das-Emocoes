document.addEventListener('DOMContentLoaded', () => {
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        document.body.appendChild(bubble);

        // Set random position and animation duration
        bubble.style.left = Math.random() * window.innerWidth + 'px';
        bubble.style.animationDuration = Math.random() * 2 + 3 + 's';

        // Remove bubble after animation ends
        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }

    // Create bubbles at intervals
    setInterval(createBubble, 1000);

    // Bubble animation background
    const colors = ['#ffe066', '#ffd600', '#fffbe6'];
    for (let i = 0; i < 12; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        const size = Math.random() * 80 + 60;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 90}%`;
        bubble.style.background = `radial-gradient(circle at 30% 30%, ${colors[i % colors.length]} 60%, ${colors[(i+1)%colors.length]} 100%)`;
        bubble.style.animationDuration = `${10 + Math.random() * 8}s`;
        bubble.style.animationDelay = `${Math.random() * 6}s`;
        document.body.appendChild(bubble);
    }
});
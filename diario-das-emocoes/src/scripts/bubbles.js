document.addEventListener('DOMContentLoaded', () => {
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
        bubble.style.position = 'fixed';
        bubble.style.zIndex = '0';
        bubble.style.animation = `float ${10 + Math.random() * 8}s ease-in-out infinite`;
        bubble.style.animationDelay = `${Math.random() * 6}s`;
        document.body.appendChild(bubble);
    }
});
// Function to create flower elements on the screen with random positions
        function createFlowers() {
            const celebrationDiv = document.getElementById('celebrateAnimation');

            for (let i = 0; i < 50; i++) {
                const flower = document.createElement('div');
                flower.classList.add('celebrate-flower');
                flower.style.left = `${Math.random() * 100}vw`;
                flower.style.top = `${Math.random() * 100}vh`;
                flower.style.animationDelay = `${Math.random() * 5}s`;
                flower.style.transform = `rotate(${Math.random() * 360}deg)`;
                celebrationDiv.appendChild(flower);
            }
        }

        // Function to show the celebration animation
        function startCelebration() {
            const celebrationDiv = document.getElementById('celebrateAnimation');
            celebrationDiv.style.display = 'block';
            createFlowers();
        }

        // Click event for heart to show the message and enable the button
document.querySelector('.heart').addEventListener('click', function() {
    const message = document.querySelector('.message');
    const heart = document.querySelector('.heart');
    const isOpen = message.classList.contains('open');

    if (isOpen) {
        // Close the message
        closeMessage();
    } else {
        // Open the message and enable the button
        message.classList.add('open');
        heart.classList.add('openHer');
        document.querySelector('.heart-section').style.backgroundColor = "#f48fb1";
        document.getElementById('celebrateBtn').disabled = false;
        document.getElementById('scrollHint').style.display = 'none';
        
        // Add close button if it doesn't exist
        if (!document.querySelector('.close-btn')) {
            const closeBtn = document.createElement('button');
            closeBtn.classList.add('close-btn');
            closeBtn.innerHTML = '×';
            closeBtn.addEventListener('click', closeMessage);
            message.appendChild(closeBtn);
        }
    }
});

// Function to close the message
function closeMessage() {
    const message = document.querySelector('.message');
    const heart = document.querySelector('.heart');
    
    message.classList.remove('open');
    heart.classList.remove('openHer');
    document.querySelector('.heart-section').style.backgroundColor = "#fce4ec";
    document.getElementById('scrollHint').style.display = 'block';
    
    // Remove close button after animation
    setTimeout(() => {
        const closeBtn = document.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.remove();
        }
    }, 500);
}

        // Celebration button click event
        document.getElementById('celebrateBtn').addEventListener('click', startCelebration);
        
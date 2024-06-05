// This example does not require JavaScript to animate the ball, 
// but you can add interactions or additional functionality if needed.
// For instance, changing the ball color on click.

document.getElementById('ball').addEventListener('click', function() {
    this.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

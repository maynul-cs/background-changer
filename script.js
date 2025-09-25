const body = document.getElementById('body');
const button = document.querySelectorAll('li');

button.forEach(function (value) {
    value.addEventListener('click', function() {
        let className = this.classList[0];
        let color = '';
        if (className === 'red') {
            color = '#ff7675';
        }
        else if (className === 'blue') {
            color = '#74b9ff';
        }
        else if (className === 'green') {
            color = '#55efc4';
        }
        else if (className === 'pink') {
            color = '#fd79a8';
        }
        body.style.backgroundColor = color;
    });
});
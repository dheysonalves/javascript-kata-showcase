const arr = ['dubling', 'ireland', 'new zealand'];

const result = arr
                .filter(name => name === 'dubling')
                .map(name => `I love ${name}`);
console.log(result);


const btn = document.getElementById('btn');

btn.addEventListener('click',(e) => {
     console.log(this);this.childElementCount;
     e.preventDefault();
})
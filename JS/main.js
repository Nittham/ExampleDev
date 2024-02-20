const btn = document.querySelector('.btn');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('click');
    document.querySelector('#my-form').style.background='#ccc';
});

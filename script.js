'use strict';

const rateCard = document.querySelector('.rate-card');
const rating = document.querySelectorAll('.rating');
const submit = document.querySelector('.submit');
const thanksCard = document.querySelector('.thanks-card');
const points = document.querySelector('.points');

for (let rate of rating) {
    rate.addEventListener('click', ()=>{
        for (let i of rating) {
            if (i == rate) continue;
            i.classList.remove('select');
        }
        rate.classList.toggle('select');
    });
}

submit.addEventListener('click', e=>{
    e.preventDefault();
    let rate;
    for (let i of rating) {
        if (i.classList.contains('select')) rate = i;
    }
    if (rate != undefined) {
        points.textContent = rate.value;
        thanksCard.classList.add('active');
        rateCard.classList.add('inactive');
    } else {
        submit.classList.add('wrong');
        setTimeout(()=> submit.classList.remove('wrong'), 450);
    }
});
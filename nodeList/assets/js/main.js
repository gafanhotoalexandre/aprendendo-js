const paragraph = document.querySelector('.paragraph');
const ps = paragraph.querySelectorAll('p');

const bodyStyles = getComputedStyle(document.body);
const bodyBackgroundColor = bodyStyles.backgroundColor;
const textColorWhite = '#fff';

for (let p of ps) {
    p.style.backgroundColor = bodyBackgroundColor;
    p.style.color = textColorWhite;

}
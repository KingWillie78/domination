function lineThrough (){
    const unorderedItem = document.querySelector('#arguments li');
    unorderedItem.style.textDecoration = 'line-through';
}

lineThrough();

function setImage (id, url){
    const image = document.querySelector(id);
    image.src = url;
}

setImage ("#image-1", "https://media.gettyimages.com/photos/devout-african-or-african-american-man-prays-hands-clasped-picture-id1205467379?k=6&m=1205467379&s=612x612&w=0&h=tCPBIAEPcpKmhm_vjfs2kA-q5eJqkCZbWrkk-8k7x2c=")
setImage ("#image-2", "https://www.orbcfamily.org/site/wp-content/uploads/2019/01/Depositphotos_206156826_m-2015-1000x675.jpg")
setImage ("#image-3", "https://www.rccgkassel.org/wp-content/uploads/2016/07/The-Gifts-of-the-Holy-Spirit.jpg")

function removesLastLi (){
    let unorderedItem2 =document.querySelector('ul');
    let last = unorderedItem2.lastChild;
    last.remove();
    last = unorderedItem2.lastChild;
    last.remove();
}

removesLastLi();
removesLastLi();

function changeSize (size, id){
    const text = document.querySelector(id);
    text.style.fontSize = size;
}

changeSize ('20px', 'h1');

function passElement (element){
    const unorderedItem = document.querySelector('#arguments');
    unorderedItem.appendChild(element);
}

const image = document.createElement('img');
image.src = "https://www.lds.org/bc/content/bible-videos/videos/jesus-heals-a-possessed-man/images/jesus-heals-a-man-possessed.jpg"

passElement (image);

function imgSize (image){
    image.style.height = '30px';
}
const image1 = document.querySelector('#image-1');
imgSize (image1);

function invisible (element){
    element.classList.add('invisible');
}
const element1 = document.querySelector("#thing-1");
invisible (element1);

function addText(text){
    const newLi = document.createElement('li');
    newLi.innerText = text;
    passElement(newLi);
}

addText('this is a new <li>')

function newHeader(headerSize, text){
    const size = 'h'+ headerSize;
    const header = document.createElement(size);
    header.innerText = text;
    passElement(header);
}

newHeader ('3', 'here is a new header');
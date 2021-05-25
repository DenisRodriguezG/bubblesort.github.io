"use strict";
//we call element restore with id restore
const restoreBtn = document.getElementById('restore');

//we call element with class bubble-sort to show 
const bubble_sort = document.querySelector('.bubble-sort');

//we call number of input with id
const number = document.getElementById('number');

//we call the id of button
const enterBtn = document.getElementById('enter-btn');

//we call class show-enter of the element
const show_numbers = document.querySelector('.show-enter');

//we create new element div
const div = document.createElement('div');

var array = [];
var arrayTwo = [];
var arrayThree = [];
var sort = 0;
//we add a event to enterBtn
enterBtn.addEventListener('click', () => {
    show_numbers.style.display = 'block';
    //we create variable equals to number
    let numbers = parseInt(number.value);
    
    if(numbers)
    {
        bubble_sort.innerText = '';
        bubble_sort.style.display = 'none';
        show_numbers.innerText = '';
        array.push(`<input type = "button" class="array" value="${numbers}"/>`);
    
        div.innerHTML = `${array.join('')}`,

        show_numbers.appendChild(div);
        number.value = '';
        number.focus();
    }
    else
    {
        show_numbers.innerHTML = `<h3 class="alert">Please, you must entered a number</h3> `;
    }
    
});

//we call element button with class or id start
const startBtn = document.getElementById('start');

//we create event to startBtn
startBtn.addEventListener('click', () => {

    bubble_sort.style.display = 'block';
    //we call all button with class array 
    const arrayElements = document.querySelectorAll('.array');
     
    arrayElements.forEach((e) => {
        arrayTwo.push(parseInt(e.value));
    });
    
    console.log(arrayTwo.length)
    if(arrayTwo.length === 0)
    {
        bubble_sort.innerHTML =  `<h3 class="alert">Please, you must entered a number</h3> `;
   
}
else
    {
        let temp;

        
        
        //Start bubble sort
        for(let i = 1; i < arrayTwo.length; i++)
        {
            for(let j = 0; j <= arrayTwo.length; j++)
            {
                if(arrayTwo[j] > arrayTwo[j + 1])
                {
                    temp = arrayTwo[j + 1];
                    arrayTwo[j + 1] = arrayTwo[j];
                    arrayTwo[j] = temp;
                    sort++;
                }
            }
        }
        for(let i = 0; i < arrayTwo.length; i++)
        {
            arrayThree.push('<button class="array">' + arrayTwo[i] + '</button>');
        }
        if(sort > 0)
        {
            bubble_sort.innerHTML = `${arrayThree.join('')}`;
        }
        else
        {
           bubble_sort.innerHTML =  `<h3 class="alert">sorry, the numbers that you entered are sort. And you must press restore</h3> `;
        }
        sort = 0;
        arrayTwo = [];
        arrayThree = [];
      
    }
});

//we create event to restoreBtn
restoreBtn.addEventListener('click', () => {
    show_numbers.innerText = '';
    show_numbers.style.display = 'none'
    bubble_sort.innerText = '';
    bubble_sort.style.display = 'none';
    div.innerText = '';
    array = [];
    arrayTwo = [];
    arrayThree = [];
    sort = 0;
});



//Первое задание
const numsArr = document.getElementById('array');
const target = document.getElementById('target');
const textOutput = document.getElementById('textOutput');

const add = document.getElementById('add');
const output = document.getElementById('output');

let array = [];
add.addEventListener('click', () =>
{
    if(-109 <= numsArr.value && numsArr.value <= 109)
    {
        array.push(numsArr.value);
    }
});

function testLenArr()
{
    if (array.length < 2)
    {
        alert("Введите ещё хотя бы одно целое число в массив");
    }
}

output.addEventListener('click', () =>
{
    testLenArr();

    for (let i = 0; i < array.length; i++)
    {
        for (let j = i + 1; j < array.length; j++)
        {
           if(Number(array[i]) + Number(array[j]) == target.value)
            {
                textOutput.innerText = `Индексы двух чисел, сумма которых равна ${target.value}: [${i},${j}]`;
                break;
            }

        }
    }
});

//Второе задание
const text = document.getElementById('text');
const txtTurn = document.getElementById('txtTurn');

const turn = document.getElementById('turn');

function turnText(str)
{
    return str.split("").reverse().join("") ;
}

turn.addEventListener('click', () =>
{
   txtTurn.innerText = turnText(text.value);
});

//Третье задание
const textTr = document.getElementById('textTr');
const check = document.getElementById('check');

const turnCheck = document.getElementById('turnCheck');

turnCheck.addEventListener('click', () =>
{
   if(turnText(textTr.value)==textTr.value)
   {
       check.innerText = "true";
   }
   else check.innerText="false";
});

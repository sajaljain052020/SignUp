document.querySelector('.student-form').style.backgroundColor = 'brown'
var table = document.getElementsByTagName("table");
table[0].style.textAlign = "left";
table[0].style.marginLeft = "90px";


var input = document.querySelectorAll("input");
var select = document.querySelectorAll("select");
let Success = document.querySelector('.success')

let countError;


const arr = [input[0], input[1], input[2], input[3], input[4], input[5], input[6], select[0], select[1], select[2]];

select[0].setAttribute("id", "schoolList");
select[1].setAttribute("id", "departmentList");
select[2].setAttribute("id", "courseList");

input[7].setAttribute("id", "reset");
input[4].setAttribute("class", "email");

input[7].addEventListener("click", reset);
function reset() {
    input[8].disabled = false;
    Success.classList.add('d-none')
    arr.forEach((element) => {
        if (element == input[2] || element == input[3]) {
            element.checked = false
            element.parentNode.nextElementSibling.innerHTML = ''
            element.style.borderColor = ""
        } else {
            element.value = '';
            element.style.borderColor = ""
            element.nextElementSibling.innerHTML = ''
        }
    })
}

input[8].addEventListener("click", validation);

function validation() {
    checkValue();
    blur();
    emailValidation();
    mobileValidation();
    nameValidation();

    if ((input[0] != "" && input[1] != "" && input[2] != "" && input[3] != "" && input[4] != "" && input[5] != "") && (input[2].checked || input[3].checked)) {
        Success.classList.remove('d-none')
    }

}
function checkValue() {
    countError = 0;
    arr.forEach((element) => {
        console.log(element)
        if (element == input[2] || element == input[3]) {
            if (document.querySelector("input[name='gender']:checked") == null) {
                success = false
                element.parentNode.nextElementSibling.innerHTML = 'this field is required'
                countError++
            } else if (document.querySelector("input[name='gender']:checked") != null) {
                element.parentNode.nextElementSibling.innerHTML = ''

            }
        } else if (element.value == "") {
            success = false
            countError++;
            element.nextElementSibling.innerHTML = 'this field is required'
            element.style.borderColor = 'red'
        } else if (element.value != "") {
            element.nextElementSibling.innerHTML = ''
            element.style.borderColor = "green"
        }
    })

    if (countError === 0) {
        input[8].disabled = false;
    }
    else {
        input[8].disabled = true;
    }
}
function emailValidation() {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!input[4].value.match(filter)) {
        input[8].disabled = true;
    }
}


function mobileValidation() {
    var filter = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;
    if (!input[6].value.match(filter)) {
        input[8].disabled = true;
    }
}


function blur() {
    arr.forEach((element) => {
        element.addEventListener('blur', checkValue)
    })
}


function nameValidation() {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!input[0].value.match(regName)) {
        input[8].disabled = true
    }
}








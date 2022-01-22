const cardInput = document.getElementById("card_number");
const cardNumberContainer = document.querySelector(".card_numbers_div");
const cardName = document.getElementById("card_name");
const cardNameContainer = document.getElementById("card_name_value");
const cardNameDiv = document.querySelector(".card_name_container")
const cardDateContainer = document.querySelector(".card_date_container")

cardName.addEventListener("input", () => {
    cardNameContainer.textContent = cardName.value
})

const monthDropdown = document.getElementById("month_dropdown")
const monthArray = [
    "01","02","03","04","05","06","07","08","09","10","11","12"
];

for(let i = 0; i < monthArray.length; i++){
    let option_month = document.createElement("option")
    monthDropdown.appendChild(option_month)
    option_month.textContent = monthArray[i]
};
const monthSpan = document.getElementById("month_span")
monthDropdown.addEventListener("change", () => {
    monthSpan.textContent = monthDropdown.value
});

const yearDropdown = document.getElementById("year_dropdown");
const yearArray = [
    "2022","2023","2024","2025","2026","2027","2028","2029","2030"
];

for(let y = 0; y < yearArray.length; y++){
    let option_year = document.createElement("option")
    yearDropdown.appendChild(option_year)
    option_year.textContent = yearArray[y]
}
const yearSpan = document.getElementById("year_span");
yearDropdown.addEventListener("change", () => {
    let a = yearDropdown.value.substr(2,2)
    yearSpan.textContent = a
})

const ccvInput = document.querySelector(".cvv_input");
ccvInput.addEventListener("focus", () => {
    let card = document.querySelector('.flip-card');      
      if(card.classList.contains('active')) { 
          card.classList.remove('active');
        }
        else {
            card.classList.add('active');
        }
    })
    
    ccvInput.addEventListener("focusout", () => {
        document.querySelector('.flip-card').classList.remove("active")
    })

const whiteContainer = document.querySelector(".white_side");
ccvInput.addEventListener("input", () => {
    whiteContainer.textContent = ccvInput.value
})


const logo = document.querySelector("#right_logo");

const addClass = (className) => {
    logo.removeAttribute("class")
    logo.classList.add(className)
}

cardInput.addEventListener("input", () => {
    let cardArr = cardInput.value.split("")
    if(cardArr[0] == "3"){
        addClass("american_express")
    }
    if(cardArr[0] == "6"){
        addClass("discover")
    }
    if(cardArr[0] == "3" && cardArr[1] == "5"){
        addClass("diner")
    }
    if(cardArr[0] == "5" && cardArr[1] == "4"){
        addClass("mastercard")
    }
    if(cardArr[0] == "0"){
        addClass("maestro")
    }
    if(cardArr[0] == "4"){
        addClass("visa")
    }
    if(cardArr[0] == "4" && cardArr[1] == "0"){
        addClass("union")
    }


    let c = cardNumberContainer.textContent
    let b = cardInput.value
    let e = []
    c = c.split("")
    b = b.split('')
    for (let i = 0; i < c.length; i++) {
        if (b[i] !== undefined) {
            e.push(b[i])
        }
        else if (c[i] === ' ') {
            e.push(' ')
        }
        else {
            e.push("#")
        }
    }
    let k = e.join('')
    cardNumberContainer.textContent = k

    function cc_format(value) {
        var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        var matches = v.match(/\d{4,16}/g);
        var match = matches && matches[0] || ''
        var parts = []
        for (i=0, len=match.length; i<len; i+=4) {
          parts.push(match.substring(i, i+4))
        }
        if (parts.length) {
          return parts.join(' ')
        } else {
          return value
        }
      }
    
      let f = cc_format(cardInput.value)
      cardInput.value = f
      if(cardInput.value === ""){
        logo.classList.add("unknown")
    }
})

var form = document.querySelector("form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


cardInput.addEventListener("focus", () => {
    cardNameDiv.classList.remove("active_border")
    cardDateContainer.classList.remove("active_border")
    cardNumberContainer.classList.add("active_border")
})
cardName.addEventListener("focus", () => {
    cardDateContainer.classList.remove("active_border")
    cardNumberContainer.classList.remove("active_border")
    cardNameDiv.classList.add("active_border")
})
monthDropdown.addEventListener("focus", () => {
    cardNameDiv.classList.remove("active_border")
    cardNumberContainer.classList.remove("active_border")
    cardDateContainer.classList.add("active_border")
})
yearDropdown.addEventListener("focus", () => {
    cardNameDiv.classList.remove("active_border")
    cardNumberContainer.classList.remove("active_border")
    cardDateContainer.classList.add("active_border")
})
const form = document.querySelector("form")
const submit = document.querySelector(".submit")
const input = document.getElementById("email")
const error = document.querySelector(".error")
const success = document.querySelector(".success")
const back = document.querySelector(".back")
const main = document.querySelector("main")
const result = document.getElementById("useremail")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputValue = input.value.trim()

    if (inputValue === "") {
        error.classList.remove("hidden")
    } else if ( !isEmail(inputValue)) {
        error.classList.remove("hidden")
    } else {
        main.style.display = "none"
        success.classList.remove("noob")
        error.classList.add("hidden")
    }


    if ( isEmail(inputValue)) {
        result.innerHTML = inputValue
    }
})
back.addEventListener("click", () => {
    main.style.display = "flex"
    success.classList.add("noob")
})


function isEmail(inputValue){
    return /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(inputValue)
}
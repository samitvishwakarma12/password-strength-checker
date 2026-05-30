function main(){
    const password = getPassword()
    const points = checkPasswordStrength(password)
    displayStrength(points)
    displaySuggestions(password)
}



function getPassword(){
    const password = passwordField.value
    return password
}



function checkPasswordStrength(password){

    const test_result = getTestResult(password)
    let points = 0
    for(let i = 0; i < test_result.length; i++){
        if(test_result[i] == true){
            points++
        }
    }

    return points
}



function displayStrength(points){
    let strength = ""
    changeStrengthFieldColour(points)
    switch(points){
        case 0:
        case 1:
            strength = "Very Weak"
            break
        case 2:
            strength = "Weak"
            break
        case 3:
            strength = "Medium"
            break
        case 4:
            strength = "Strong"
            break
    }
    document.getElementById("password-strength-field").textContent = strength
}



function changePasswordVisibility(){
    if(passwordField.type === "password"){
        passwordField.type = "text"
        showPasswordButton.textContent = "Hide Password"
    }
    else{
        passwordField.type = "password"
        showPasswordButton.textContent = "Show Password"
    }
}



function displaySuggestions(password){

    const suggestionsField = document.getElementById("suggestions-field")
    const suggestionsHeading = document.getElementById("suggestions-heading")
    const suggestions = generateSuggestions(password)

    suggestionsField.innerHTML = ""

    if(suggestions.length == 0){
        suggestionsHeading.style.display = "none"
        suggestionsField.style.display = "none"
    }
    else{
        suggestionsHeading.style.display = "block"
        suggestionsField.style.display = "block"

        for(let i = 0; i < suggestions.length; i++){
            suggestionsField.innerHTML += `<li>${suggestions[i]}</li>`
        }
    }
}



/* Helper functions */
function containsAlphabets(password){
    const alphabets = /[a-zA-Z]/
    return alphabets.test(password)
}



function containsSymbols(password){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(password);
}



function containsNumbers(password){
    const numbers = /[0-9]/
    return numbers.test(password)
}



function checkLength(password){
    const length = password.length

    if(length >= 16){
        return true
    }
    else{
        return false
    }
}



function getTestResult(password){

    const test_result = [containsAlphabets(password), containsSymbols(password), containsNumbers(password), checkLength(password)]
    return test_result
}



function generateSuggestions(password){
    const test_result = getTestResult(password)
    let suggestions = []
    
    if(!test_result[0]){
    suggestions.push("Add alphabets to your password")
    }

    if(!test_result[1]){
        suggestions.push("Add special characters to your password")
    }

    if(!test_result[2]){
        suggestions.push("Add numbers to your password")
    }

    if(!test_result[3]){
        suggestions.push("Make your password longer (len. 16+ characters recommended)")
    }

    return suggestions
}



function changeStrengthFieldColour(points){
    const strengthField = document.getElementById("password-strength-field")

    switch(points){
        case 0:
        case 1:
            strengthField.style.color = "red"
            break
        case 2:
            strengthField.style.color = "orange"
            break
        case 3:
            strengthField.style.color = "yellow"
            break
        case 4:
            strengthField.style.color = "green"
            break
    }
}

const passwordField = document.getElementById("password-field")
passwordField.addEventListener("input", main)

const showPasswordButton = document.getElementById("show-password-button")
showPasswordButton.addEventListener("click", changePasswordVisibility)

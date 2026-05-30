function main(){
    const password = getPassword()
    const points = checkPasswordStrength(password)
    displayStrength(points)
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

    if(length > 16){
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



const passwordField = document.getElementById("password-field")
passwordField.addEventListener("input", main)

const showPasswordButton = document.getElementById("show-password-button")
showPasswordButton.addEventListener("click", changePasswordVisibility)
var usernameInput=document.getElementById('nameInput');
var useremailInput=document.getElementById('emailInput');
var userpasswordInput=document.getElementById('passwordInput');

var usersInfo;
if(localStorage.getItem('UserInputs')!=null)
{
 usersInfo =  JSON.parse(localStorage.getItem('UserInputs'));
}
else{
    usersInfo=[]
}
function signUp()
{
    var successMsg=document.getElementById('successMsg')
    var signinID=document.getElementById('signinID')
   
    // if(validateUsername()==true && validateUseremail()==true && validateUserPassword()==true && isExist()==false)
    
                var User={
            name:usernameInput.value,
            email:useremailInput.value,
            password:userpasswordInput.value
        }
         usersInfo.push(User);
         localStorage.setItem('UserInputs',JSON.stringify(usersInfo))
         successMsg.classList.replace('d-none','d-block')
         signinID.classList.replace('d-none','d-block')

//     else
//     {
// var tryagainMsg=document.getElementById('tryagainMsg');
// tryagainMsg.classList.replace('d-none','d-block')
//     }  
}
function validateUsername()
{  
    var usernameAlert=document.getElementById("usernameAlert");
    
    var regexUsername=/^[A-z][a-z]{3,9}$/
    if(regexUsername.test(usernameInput.value)==true && usernameInput.value != "")
    {
        usernameInput.classList.add('is-valid')
        usernameInput.classList.remove('is-invalid')
        usernameAlert.classList.replace('d-block','d-none')
        return true;
    }
    else
    {
        usernameInput.classList.add('is-invalid')
        usernameInput.classList.remove('is-valid')
        usernameAlert.classList.replace('d-none','d-block')
       
        return false;
    }
}
function validateUseremail()
{
    
    var useremailAlert=document.getElementById("useremailAlert");
    var regexUseremail=/@[a-z]{3,10}(\.com)$/
    if(regexUseremail.test(useremailInput.value)==true && useremailInput.value != "")
    {
        useremailInput.classList.add('is-valid')
        useremailInput.classList.remove('is-invalid')
        useremailAlert.classList.replace('d-block','d-none')
        
        return true;
    }
    else
    {
        useremailInput.classList.add('is-invalid')
        useremailInput.classList.remove('is-valid')
        useremailAlert.classList.replace('d-none','d-block')
       
        return false;
    }
}
function validateUserPassword()
{
    
    var userpasswordAlert=document.getElementById("userpasswordAlert");
    var regexUserpassword=/^[0-9]{3,15}$/;
    if(regexUserpassword.test(userpasswordInput.value)==true && userpasswordInput.value != "")
    {
        userpasswordInput.classList.add('is-valid')
        userpasswordInput.classList.remove('is-invalid')
        userpasswordAlert.classList.replace('d-block','d-none')
       
        return true;
    }
    else
    {
        userpasswordInput.classList.add('is-invalid')
        userpasswordInput.classList.remove('is-valid')
        userpasswordAlert.classList.replace('d-none','d-block')
       
        return false;
    }
}

function userInputsValidation()
{
    validateUsername();
    validateUseremail();
    validateUserPassword();
if(validateUsername()==true && validateUseremail()==true && validateUserPassword()==true)
{
    return true
}
else
{
    return false
}
}
function isExist()
{
    var existMsg=document.getElementById('existMsg');
        for(var i=0;i<usersInfo.length;i++)
        if(usersInfo[i].email.toLowerCase()==useremailInput.value.toLowerCase())
        {
                  useremailInput.classList.remove('is-valid');
                  useremailInput.classList.add('is-invalid');
                  existMsg.classList.replace('d-none','d-block')
                  return true;

        }
        else{
            return false;
        }
}

var userName=localStorage.getItem('sessionUsername')
function login()
{
    var loginEmail=document.getElementById('loginEmail')
    var loginPassword=document.getElementById('loginPassword')
    var loginBtn=document.getElementById('loginBtn')
    var fillMsg=document.getElementById("fillMsg")
    var errorMsg=document.getElementById('errorMsg')
    if(loginEmail.value=="" && loginPassword.value==""){
        fillMsg.classList.replace('d-none','d-block');
        return false
    }

    for(var i=0;i<usersInfo.length;i++){
if(usersInfo[i].email.toLowerCase()==loginEmail.value.toLowerCase() && usersInfo[i].password.toLowerCase()==loginPassword.value.toLowerCase())
{
    localStorage.setItem("sessionUsername",usersInfo[i].name)
loginBtn.setAttribute('href','welcome.html')
}
else
{
errorMsg.classList.replace('d-none','d-block')
}    
}
}

function displayWelcomeUser()
{
 document.getElementById('username').innerHTML=`Welcome ${userName}`   
}

function logout()
{
    localStorage.removeItem('sessionUsername')
}
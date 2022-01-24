
//key generator

// first part of the key

let keySectionOne = Math.floor(Math.random() * (9000000-100000)+100000);
// second part of the key
let alpha = ["a","b","c","d"];
let as = Math.floor(Math.random()*(3-0)+0)
let keySectionTwo = alpha[as]
// third part of the key

let keySectionThree = Math.floor(Math.random() * (90-10)+10);
//final key

let key = `${keySectionOne}${keySectionTwo}${keySectionThree}`;


function register() {
   userName = document.querySelector(".userName").value;
   userEmail = document.querySelector(".userEmail").value;
   password1 = document.querySelector(".userPassword").value;
   password2 = document.querySelector(".userPassword2").value;
   errorMessage = document.querySelector(".error_message")
   let regex = /\w+@[a-zA-Z]+\.[com|net|rw|org|edu|co|shop|air]/;
   let regexPass = /\w|\d/;
   let passwordValidity = regexPass.test(password1);
   let emailValidity = regex.test(userEmail);

let users = {
  userName:userName,
  userEmail:userEmail,
  password:password1,
  type:"Singleuser",
  userID:key
}
let AdminUsers={
  userName:"admin",
  userEmail:"andela@andela.com",
  password:"Andela",
  type:"Singleuser",
  userID:"admin"
}

localStorage.setItem("admin",JSON.stringify(AdminUsers))
// if(userName = ''){
//   errorMessage.style.display="block";
//   errorMessage.innerText = "Please Enter Your Name";
//   return;
// }
// else if(userEmail = ''){
//   errorMessage.style.display="block";
//   errorMessage.innerText = "Please Enter Your Email";
//   return;
// }
// else if(emailValidity == false){
//   errorMessage.style.display="block";
//   errorMessage.innerText = "Please Enter Valid Email";
//   return;
// }
// else if(passwordValidity == false){
//   errorMessage.style.display="block";
//   errorMessage.innerText = "Please Enter Password";
//   return;
// }
// else if(password1.length < 6){
//   errorMessage.style.display="block";
//   errorMessage.innerText = "Password Must have atleast 6 characters";
//   return;
// }
// else if(password1 != password2){
//   errorMessage.style.display="block";
//   errorMessage.innerText = "The password and confirmation password do not match";
//   return;
// }



for(let i=0;i<localStorage.length;i++){
    keyy = localStorage.key(i)
    let arr = JSON.parse(localStorage.getItem(keyy))
    
     storedUserEmail= arr.userEmail;
  
     storedUserType = arr.type;
  
      if(storedUserType == `Singleuser`) {
        
        if(userName == ""){
          errorMessage.style.display="block";
          errorMessage.innerText = "Please Enter Your Name";
          return;
        }
        else if(userEmail == ''){
          errorMessage.style.display="block";
          errorMessage.innerText = "Please Enter Your Email";
          return;
        }
        else if(emailValidity == false){
          errorMessage.style.display="block";
          errorMessage.innerText = "Please Enter Valid Email";
          return;
        }
        else if(passwordValidity == false){
          errorMessage.style.display="block";
          errorMessage.innerText = "Please Enter Password";
          return;
        }
        else if(password1.length < 6){
          errorMessage.style.display="block";
          errorMessage.innerText = "Password Must have atleast 6 characters";
          return;
        }
        else if(password1 != password2){
          errorMessage.style.display="block";
          errorMessage.innerText = "The password and confirmation password do not match";
          return;
        }else{
          if(userEmail == storedUserEmail){
            errorMessage.style.display="block";
            errorMessage.innerText = "Email already exists";
           return;
           }
          else{
           console.log("doesn't exist")
           localStorage.setItem(key,JSON.stringify(users))
           location = "../html/login.html";
        
         }
     }

        }
           
     

         
  }
}

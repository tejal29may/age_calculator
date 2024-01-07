function calculateAge() {
    var birthdateInput = document.getElementById("birthdate").value;
    if (!birthdateInput) {
      alert("Please enter your birthday.");
      return; 
    }
    var birthdate = new Date(birthdateInput);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthdate.getFullYear();
    if (currentDate.getMonth() < birthdate.getMonth() || (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
      age--;
    }
    document.getElementById("result").innerText = "Your age is " + age + " years";
  }


// function CalculateAge(){
//   let data=document.getElementById("birthdate").value;
//   let dob=new Date(data);
//   let yr=dob.getFullYear;


// }
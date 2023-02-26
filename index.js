const submit_button = document.querySelector(".button");
submit_button.onclick = () =>{
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const cpass = document.getElementById("cpass").value;
/*now stpre this data in web browser store */

  localStorage.setItem("FirstName", fname);
  localStorage.setItem("LastName", lname);
  localStorage.setItem("Email", email);
  localStorage.setItem("Password", pass);
  localStorage.setItem("Cassword", cpass);

  /* now write some conditions */

  if(fname == "" && lname == "" && email == "" && pass == "" && cpass == ""){
    swal("Oupps!", "Input field has no value!", "error");
  } else{
    if(pass !==cpass){
      swal("Oupps!", "Password not matching!", "info");
    } else{
      swal("Congrats!", "registration successful!", "success");
    }
  }
}
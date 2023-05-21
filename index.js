function ValidateFields() {
    btnDisable();
    userErro()
    
  }
  
  function login() {
    firebase.auth().signInWithEmailAndPassword(
        form.usuario().value, form.senha().value
    ).then(response => {
        window.location.href = "main.html";
    }).catch(error => {
        alert(mensagemErro (error));
    });
    
  }

  function mensagemErro (error){
    if (error.code == "auth/user-not-found"){
        return "Usuário não encontrado";
    }  
    return error.message;

  }

  function userlValido (){
    const user = form.usuario().value;
    if (!user){
        return false;
    }
    return validadeUser(user);

  }
  function userErro(){
    const user = form.usuario().value;
    if (!user) {
        form.emailObrigatorio().style.display = "block";
    } else {
        form.emailObrigatorio().style.display = "none";
    }
      
    if (validateUser(user)) {
        form.emailInvalido().style.display = "none";
    } else {
        form.emailInvalido().style.display = "block";
    }
  }

  function passwordError () {
    const senha = form.senha().value;
    form.senhaInvalida().style.display = senha ? "none" : "block";
  }

  function btnDisable(){
    const senha = isPasswordValid();
    form.loginButton().disabled = !senha;
  }
  
  function isPasswordValid () {
    const senha = form.senha().value;
    if(!senha) {
      return false;
    }
    return true;
  }


  const form = {
    usuario: () => document.getElementById('usuario'),
    senha: () => document.getElementById('senha'),
    emailInvalido: () => document.getElementById('user-error'),
    emailObrigatorio: () => document.getElementById('user-erro'),
    loginButton: () => document.getElementById('btn-login'),
    senhaInvalida: () => document.getElementById('senha-erro')
  }

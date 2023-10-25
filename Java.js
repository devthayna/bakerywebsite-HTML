var DoisMaisDois = 2 + 2;

var DoisVezesDois = 2 * 2;

var DoisDivididoPorDois = 2 / 2;

var DezModuloDois = 10 % 2;


const form = document.getElementById("form");
const username = document.getElementById("username");
const data = document.getElementById("data");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const cep = document.getElementById("cep");
const texto = document.getElementById("texto");
const password = document.getElementById("password");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const dataValue = data.value;
  const cepValue = cep.value;
  const textoValue = texto.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (dataValue === "") {
    setErrorFor(data, "A data de entrega é obrigatória.");
  } else {
    setSuccessFor(data);
  }

  if (cepValue === "") {
    setErrorFor(cep, "O CEP é obrigatório.");
  } else {
    setSuccessFor(cep);
  }

  if (textoValue === "") {
    setErrorFor(texto, "As informações do pedido são obrigatórias.");
  } else {
    setSuccessFor(texto);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
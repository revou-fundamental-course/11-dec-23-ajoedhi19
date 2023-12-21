function setName(pname) {
  document.getElementById("nama-orang").innerHTML = pname || "Guest";
}

var inputName = prompt("Halo, You Can Type your name below");
setName(inputName);

var slidePosition = 1;
SlideShow(slidePosition);

function getUserInput() {
  var userName = prompt("Please enter your name:");
  if (userName) {
    document.getElementById("welcomeMessage").innerHTML = "Welcome, " + userName;
  }
}

function plusSlides(n) {
  SlideShow((slidePosition += n));
}

function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slidePosition - 1].style.display = "block";
}

function getAll() {
  const date = new Date();
  const name = getValueById("name");
  const birthdate = getValueById("birthdate");
  const gender = getCheckedRadioValue("gender");
  const message = getValueById("message");
  const time = date.toLocaleString(); // Format the date

  const missingFields = validateFields([
    { value: name, fieldName: "Nama" },
    { value: birthdate, fieldName: "Tanggal Lahir" },
    { value: gender, fieldName: "Jenis Kelamin" },
    { value: message, fieldName: "Pesan" },
  ]);

  if (missingFields.length) {
    const messageText = `Please fill in the following fields: ${missingFields.join(", ")}`;
    alert(messageText);
    return false;
  } else {
    updateElement("waktu", time);
    updateElement("nama", name);
    updateElement("lahir", birthdate);
    updateElement("kelamin", gender);
    updateElement("pesan", message);
    return true;
  }
}

function resetAll() {
  document.getElementById("name").value = null;
  document.getElementById("birthdate").value = null;
  var reset = document.querySelectorAll("input[name=gender]");
  for (var i = 0; i < reset.length; i++) {
    reset[i].checked = false;
  }
  document.getElementById("waktu").innerHTML = null;
  document.getElementById("nama").innerHTML = null;
  document.getElementById("lahir").innerHTML = null;
  document.getElementById("kelamin").innerHTML = null;
  document.getElementById("pesan").innerHTML = null;
}

function getValueById(id) {
  return document.getElementById(id).value;
}

function getCheckedRadioValue(name) {
  const checkedRadio = document.querySelector(`input[name="${name}"]:checked`);
  return checkedRadio ? checkedRadio.value : null;
}

function validateFields(fields) {
  return fields.reduce((missingFields, field) => {
    if (!field.value) {
      missingFields.push(field.fieldName);
    }
    return missingFields;
  }, []);
}

function updateElement(id, value) {
  document.getElementById(id).innerHTML = value;
}

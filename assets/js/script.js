var hamburger = document.querySelector('.hamburger');
var subscribe = document.querySelector('.subscribe-button');

hamburger.addEventListener('click',hamburgerToggle);
subscribe.addEventListener('click',validateForm);

function hamburgerToggle() {
  document.querySelector('nav').classList.toggle('showhide');
  document.querySelector('.hamburger').classList.toggle('open');
}

// function for to show errors
function printError(elementbyclass, hintMsg) {
  document.querySelector(elementbyclass).innerHTML = hintMsg;
}

// function for when submit form then validate it. its empty or return value is valid or not
function validateForm(e) {
  e.preventDefault();
  var name = document.querySelector('.name').value;
  var email = document.querySelector('.email').value;
  var nameError = emailError =  true;
  
  clearSingleError();

  nameError = regExp(name,'Name',/^[a-zA-Z]*$/,'.name-error');

  emailError = regExp(email,'email',/^\S+@\S+\.\S+$/,'.email-error');

  if((nameError || emailError ) == true) {
    nameError = emailError  = true;
    return false;
  }
  else {
    printError('.success-msg', "Successfully submitted your details");
    resetform('.subscribe-form');
    clearSuccesMsg();
  }
}

// function for regular expression to validate data
function regExp(element,msg,regexString,Errorspan) {
  if(element == "") {
    printError(Errorspan, "Please enter your "+ msg);
    Errorspan = true;
    clearError(10000);
    return Errorspan;
  } 
  else {
    var regex = regexString;
    if(regex.test(element) === false) {
        printError(Errorspan, "Please enter a valid "+ msg);
        Errorspan = true;
        return Errorspan;
    } else {
        printError(Errorspan, "");
        Errorspan = false;
        return Errorspan;
    }
  }
}

// function for clear single error when use press the key
function clearSingleError() {
  var allInputs = document.querySelectorAll('.form-group input');
  allInputs.forEach(function(inputValue) {
      inputValue.addEventListener('focus',function() {
      this.nextElementSibling.innerHTML = '';
    });
  });
}

// function for reset form
function resetform(formName) {
  document.querySelector(formName).reset();
  clearError(0);
}

function clearSuccesMsg() {
  var successMsg = document.querySelectorAll('.form-control span');
  setTimeout(function() {
  successMsg.forEach(function(item) { 
    item.innerHTML= "";
  }); 
  },10000);
}

function clearError(clearTime) {
  var errors = document.querySelectorAll('.error');
  setTimeout(function() {
  errors.forEach(function(item) { 
    item.innerHTML= "";
  }); 
  },clearTime);
}

$(window).on('load', function() {

	$('.review-slider').slick({
	  dots: true,
	  arrows: false,
	  infinite: true,
	  autoplay: true,
	  speed: 300,
	  slidesToShow: 1
	});
});
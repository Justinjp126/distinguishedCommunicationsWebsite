function checkValid() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name !== "" && validateEmail(email)) {
    Swal.fire({
      title: "Success!",
      text: "Your daily briefing will be in you inbox every day",
      icon: "success",
      confirmButtonText: "Thank You",
    }).then((result) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      location.reload();
    });
  } else {
    if (name == "") {
      Swal.fire({
        title: "Error!",
        text: "Please fill out your name",
        icon: "error",
        confirmButtonText: "Continue",
      });
    } else if (!validateEmail(email)) {
      Swal.fire({
        title: "Error!",
        text: "Please enter valid email address",
        icon: "error",
        confirmButtonText: "Continue",
      });
    }
  }
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/**
 * Main Function to find symptoms and to assign a disease to the user
 */
function findSymptoms() {
  /***
   * Variables Here
   */
  var concussion,
    chicken_Pox,
    common_Cold,
    diptheria,
    escherichia_coli,
    giardiasis,
    hIV_or_Aids,
    infectious_Mononucleosis,
    influenza,
    lyme_Disease,
    malaria,
    measles,
    meningitis,
    pneumonia,
    salmonella_Infections,
    severe_Acute_Respiratory_Syndrome_SARS,
    sexually_Transmitted_Disease_STD,
    shingles,
    tetanus,
    tuberculosis = 0; //jack u can list out all 20 conditions here and separate them with commas like i did for the first two
  var commonCold_symptoms = [
    "runny nose",
    "cough",
    "fatigue",
    "sore throat",
    "sneezing",
  ];
  var flu_symptoms = [
    "runny nose",
    "cough",
    "fatigue",
    "sore throat",
    "sneezing",
    "chills",
    "muscle ache",
  ];

  /**
   * Main Code Section Here
   */
  //loops through all code and locates all the 'input' blocks
  document.querySelectorAll("input").forEach(function (element) {
    if (element.checked) {
      // checks if the checkbox is 'checked'
      x = element.value;
      if (x == "Confusion") {
        concussion += 1;
        meningitis += 1;
      }

      if (x == "Headache") {
        concussion += 1;
      }
      if (x == "Dizziness") {
        concussion += 1;
      }
      if (x == "Nausea") {
        concussion += 1;
      }
      if (x == "Vomiting") {
        concussion += 1;
      }
      if (x == "Fever") {
        concussion += 1;
      }
      if (x == "Tiredness") {
        concussion += 1;
      }
      if (x == "Loss of Appetite") {
        concussion += 1;
      }
      if (x == "Rash") {
        concussion += 1;
      }
      if (x == "Blisters") {
        concussion += 1;
      }
      if (x == "Runny Nose") {
        concussion += 1;
      }
      if (x == "Cough") {
        concussion += 1;
      }
      if (x == "Fatigue") {
        concussion += 1;
      }
      if (x == "Sneezing") {
        concussion += 1;
      }
      if (x == "Sore Throat") {
        concussion += 1;
      }
      if (x == "High Fever") {
        concussion += 1;
      }
      if (x == "Swollen Nech Glands") {
        concussion += 1;
      }
      if (x == "Difficulty Breathing") {
        concussion += 1;
      }
      if (x == "Difficulty Swallowing") {
        concussion += 1;
      }
      if (x == "Stomach Cramps") {
        concussion += 1;
      }
      if (x == "Diarrhea") {
        concussion += 1;
      }
      if (x == "Bloating") {
        concussion += 1;
      }
      if (x == "Weightloss") {
        concussion += 1;
      }
      if (x == "Recurring Fever") {
        concussion += 1;
      }
      if (x == "Sores") {
        concussion += 1;
      }
      if (x == "Extreme Fatigue") {
        concussion += 1;
      }
      if (x == "Body Aches") {
        concussion += 1;
      }
      if (x == "Swollen Lymph Nodes") {
        concussion += 1;
      }
      if (x == "Chills") {
        concussion += 1;
      }
      if (x == "Muscle Aches") {
        concussion += 1;
      }
      if (x == "Joint Pain") {
        concussion += 1;
      }
      if (x == "Bull's-eye Rash") {
        concussion += 1;
      }
      if (x == "Cold Hands and Feet") {
        concussion += 1;
      }
      if (x == "Watery Eyes") {
        concussion += 1;
      }
      if (x == "Muscle Pain") {
        concussion += 1;
      }
      if (x == "Green/Yellowish Mucus") {
        concussion += 1;
      }
      if (x == "Sweating") {
        concussion += 1;
      }
      if (x == "Chest Pain") {
        concussion += 1;
      }
      if (x == "Abdominal Pain") {
        concussion += 1;
      }
      if (x == "Shortness of Breath") {
        concussion += 1;
      }
      if (x == "Genital Sores") {
        concussion += 1;
      }
      if (x == "Painful Urination") {
        concussion += 1;
      }
      if (x == "Burning Urination") {
        concussion += 1;
      }
      if (x == "Discharge from Penis") {
        concussion += 1;
      }
      if (x == "Unusual Vaginal Discharge") {
        concussion += 1;
      }
      if (x == "Scab") {
        concussion += 1;
      }
      if (x == "Ulcers") {
        concussion += 1;
      }
      if (x == "Pins and Needles") {
        concussion += 1;
      }
      if (x == "Jaw Cramping") {
        concussion += 1;
      }
      if (x == "Muscle Spasms") {
        concussion += 1;
      }
      if (x == "Seizures") {
        concussion += 1;
      }
      if (x == "Long Lasting Cough") {
        concussion += 1;
      }
      if (x == "Night Sweats") {
        concussion += 1;
      }
    }
  });

  /**
   * Display Code
   */
}

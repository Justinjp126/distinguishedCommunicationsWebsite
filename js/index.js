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
  var death = 0;
  var concussion = (chicken_Pox = common_Cold = diptheria = escherichia_coli = giardiasis = hIV_or_Aids = infectious_Mononucleosis = influenza = lyme_Disease = malaria = measles = meningitis = pneumonia = salmonella_Infections = severe_Acute_Respiratory_Syndrome_SARS = sexually_Transmitted_Disease_STD = shingles = tetanus = tuberculosis = 0); //jack u can list out all 20 conditions here and separate them with commas like i did for the first two
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
      death += 1;
      // checks if the checkbox is 'checked'
      x = element.value;
      if (x == "Confusion") {
        concussion += 1;
        meningitis += 1;
      }

      if (x == "Headache") {
        concussion += 1;
        chicken_Pox += 1;
        severe_Acute_Respiratory_Syndrome_SARS += 1;
      }
      if (x == "Dizziness") {
        concussion += 1;
      }
      if (x == "Nausea") {
        concussion += 1;
        giardiasis += 1;
        malaria += 1;
      }
      if (x == "Vomiting") {
        concussion += 1;
        escherichia_coli += 1;
        malaria += 1;
        meningitis += 1;
      }
      if (x == "Fever") {
        chicken_Pox += 1;
        infectious_Mononucleosis += 1;
        influenza += 1;
        lyme_Disease += 1;
        malaria += 1;
        salmonella_Infections += 1;
        severe_Acute_Respiratory_Syndrome_SARS += 1;
        tuberculosis += 1;
      }
      if (x == "Tiredness") {
        chicken_Pox += 1;
        hIV_or_Aids += 1;
        malaria += 1;
      }
      if (x == "Loss of Appetite") {
        chicken_Pox += 1;
        tuberculosis += 1;
      }
      if (x == "Rash") {
        chicken_Pox += 1;
        infectious_Mononucleosis += 1;
        measles += 1;
      }
      if (x == "Blisters") {
        chicken_Pox += 1;
        shingles += 1;
      }
      if (x == "Runny Nose") {
        common_Cold += 1;
        influenza += 1;
        measles += 1;
      }
      if (x == "Cough") {
        common_Cold += 1;
        influenza += 1;
        measles += 1;
        pneumonia += 1;
        severe_Acute_Respiratory_Syndrome_SARS += 1;
      }
      if (x == "Fatigue") {
        common_Cold += 1;
        giardiasis += 1;
        influenza += 1;
        lyme_Disease += 1;
      }
      if (x == "Sneezing") {
        common_Cold += 1;
        influenza += 1;
      }
      if (x == "Sore Throat") {
        common_Cold += 1;
        diptheria += 1;
        infectious_Mononucleosis += 1;
        influenza += 1;
      }
      if (x == "High Fever") {
        diptheria += 1;
        measles += 1;
        meningitis += 1;
      }
      if (x == "Swollen Nech Glands") {
        diptheria += 1;
      }
      if (x == "Difficulty Breathing") {
        diptheria += 1;
      }
      if (x == "Difficulty Swallowing") {
        diptheria += 1;
      }
      if (x == "Stomach Cramps") {
        escherichia_coli += 1;
        giardiasis += 1;
      }
      if (x == "Diarrhea") {
        escherichia_coli += 1;
        giardiasis += 1;
        malaria += 1;
        salmonella_Infections += 1;
      }
      if (x == "Bloating") {
        giardiasis += 1;
      }
      if (x == "Weightloss") {
        giardiasis += 1;
        hIV_or_Aids += 1;
      }
      if (x == "Recurring Fever") {
        hIV_or_Aids += 1;
      }
      if (x == "Sores") {
        hIV_or_Aids += 1;
      }
      if (x == "Extreme Fatigue") {
        infectious_Mononucleosis += 1;
      }
      if (x == "Body Aches") {
        infectious_Mononucleosis += 1;
      }
      if (x == "Swollen Lymph Nodes") {
        infectious_Mononucleosis += 1;
      }
      if (x == "Chills") {
        influenza += 1;
        malaria += 1;
        pneumonia += 1;
        severe_Acute_Respiratory_Syndrome_SARS += 1;
        tuberculosis += 1;
      }
      if (x == "Muscle Aches") {
        influenza += 1;
      }
      if (x == "Joint Pain") {
        lyme_Disease += 1;
        meningitis += 1;
      }
      if (x == "Bull's-eye Rash") {
        lyme_Disease += 1;
      }
      if (x == "Cold Hands and Feet") {
        meningitis += 1;
      }
      if (x == "Watery Eyes") {
        measles += 1;
      }
      if (x == "Muscle Pain") {
        meningitis += 1;
      }
      if (x == "Green/Yellowish Mucus") {
        pneumonia += 1;
      }
      if (x == "Sweating") {
        pneumonia += 1;
        tetanus += 1;
      }
      if (x == "Chest Pain") {
        pneumonia += 1;
      }
      if (x == "Abdominal Pain") {
        salmonella_Infections += 1;
      }
      if (x == "Shortness of Breath") {
        severe_Acute_Respiratory_Syndrome_SARS += 1;
      }
      if (x == "Genital Sores") {
        sexually_Transmitted_Disease_STD += 1;
      }
      if (x == "Painful Urination") {
        sexually_Transmitted_Disease_STD += 1;
      }
      if (x == "Burning Urination") {
        sexually_Transmitted_Disease_STD += 1;
      }
      if (x == "Discharge from Penis") {
        sexually_Transmitted_Disease_STD += 1;
      }
      if (x == "Unusual Vaginal Discharge") {
        sexually_Transmitted_Disease_STD += 1;
      }
      if (x == "Scab") {
        shingles += 1;
      }
      if (x == "Ulcers") {
        shingles += 1;
      }
      if (x == "Pins and Needles") {
        shingles += 1;
      }
      if (x == "Jaw Cramping") {
        tetanus += 1;
      }
      if (x == "Muscle Spasms") {
        tetanus += 1;
      }
      if (x == "Seizures") {
        tetanus += 1;
      }
      if (x == "Long Lasting Cough") {
        tuberculosis += 1;
      }
      if (x == "Night Sweats") {
        tuberculosis += 1;
      }
    }
  });

  /**
   * Display Code
   */
  var diseases = [
    concussion,
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
    tuberculosis,
  ];

  var mostLikely, likely;

  const result = diseases.sort((x, y) => y - x).slice(0, 2);

  mostLikely = result[0];
  likely = result[1];

  console.log(result[0]);

  const varToString = (varObj) => Object.keys(varObj)[0];

  const someVar = 42;
  const displayName = varToString({ likely });
  console.log(displayName);

  if (mostLikely == 0 && likely == 0) {
    Swal.fire({
      title: "Try Again",
      text: "Please select at least one box to receive a possible condition ",
      icon: "error",
      confirmButtonText: "Continue",
    }).then((result) => {
      location.reload();
    });
  } else if (death == 53) {
    Swal.fire({
      title: "Death!",
      text: "You are going to die!",
      icon: "error",
      confirmButtonText: "Continue",
    }).then((result) => {
      location.reload();
    });
  } else if (death >= 20) {
    Swal.fire({
      title: "Error",
      text:
        "Please select fewer symptoms; try be precise and accurate with your symptoms",
      icon: "error",
      confirmButtonText: "Continue",
    }).then((result) => {
      location.reload();
    });
  } else {
    mostLikelyName = mostLikely;
    Swal.fire({
      title: "Most Likely Condition",
      text:
        "Based on your selected symptoms, the most likely condition you have is " +
        mostLikely,
      icon: "info",
      confirmButtonText: "Continue",
    }).then((result) => {
      if (likely > 0) {
        Swal.fire({
          title: "Another Possible Condition",
          text:
            "Based on your selected symptoms another possible condition you have is " +
            likely,
          icon: "info",
          confirmButtonText: "Continue",
        }).then((result) => {
          location.reload();
        });
      } else {
        location.reload();
      }
    });
  }
}

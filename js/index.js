function checkValid() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name !== "" && validateEmail(email)) {
    Swal.fire({
      title: "Success!",
      text: "Your daily briefing will be in your inbox every day",
      icon: "success",
      confirmButtonText: "Thank You",
      confirmButtonColor: "#7C8EC8",
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
        confirmButtonColor: "#7C8EC8",
      });
    } else if (!validateEmail(email)) {
      Swal.fire({
        title: "Error!",
        text: "Please enter valid email address",
        icon: "error",
        confirmButtonText: "Continue",
        confirmButtonColor: "#7C8EC8",
      });
    }
  }
}

function checkValidContact() {
  var name = document.getElementById("nameContact").value;
  var email = document.getElementById("emailContact").value;
  var message = document.getElementById("messageContact").value;

  if (name !== "" && validateEmail(email) && message !== "") {
    Swal.fire({
      title: "Success!",
      text: "We will respond to your message as soon as possible!",
      icon: "success",
      confirmButtonText: "Continue",
      confirmButtonColor: "#7C8EC8",
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
        confirmButtonColor: "#7C8EC8",
      });
    } else if (message == "") {
      Swal.fire({
        title: "Error!",
        text: "Please fill out your message",
        icon: "error",
        confirmButtonText: "Continue",
        confirmButtonColor: "#7C8EC8",
      });
    } else if (!validateEmail(email)) {
      Swal.fire({
        title: "Error!",
        text: "Please enter valid email address",
        icon: "error",
        confirmButtonText: "Continue",
        confirmButtonColor: "#7C8EC8",
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
      if (x == "Swollen Neck Glands") {
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
      if (x == "Weight Loss") {
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

  var names = {
    Concussion: concussion,
    Chicken_Pox: chicken_Pox,
    Common_Cold: common_Cold,
    Diptheria: diptheria,
    Escherichia_Coli: escherichia_coli,
    Giardiasis: giardiasis,
    HIV_or_AIDS: hIV_or_Aids,
    Infectious_Mononucleosis: infectious_Mononucleosis,
    Influenza: influenza,
    Lyme_Disease: lyme_Disease,
    Malaria: malaria,
    Measles: measles,
    Meningitis: meningitis,
    Pneumonia: pneumonia,
    Salmonella_Infections: salmonella_Infections,
    Severe_Acute_Respiratory_Syndrome_SARS: severe_Acute_Respiratory_Syndrome_SARS,
    Sexually_Transmitted_Disease_STD: sexually_Transmitted_Disease_STD,
    Shingles: shingles,
    Tetanus: tetanus,
    Tuberculosis: tuberculosis,
  };

  var mostLikely, likely;

  const result = diseases.sort((x, y) => y - x).slice(0, 2);

  mostLikely = result[0];
  likely = result[1];
  var mostLikelyName, likelyName;

  for (var propName in names) {
    if (names[propName] == mostLikely) {
      mostLikelyName = propName;
    }
    if (names[propName] == likely) {
      likelyName = propName;
    }
  }

  mostLikelyName = mostLikelyName.replace(/[_-]/g, " ");
  likelyName = likelyName.replace(/[_-]/g, " ");

  if (mostLikely == 0 && likely == 0) {
    Swal.fire({
      title: "Try Again",
      text: "Please select at least one box to receive a possible condition ",
      icon: "error",
      confirmButtonText: "Continue",
      confirmButtonColor: "#7C8EC8",
    }).then((result) => {
      location.reload();
    });
  } else if (death == 53) {
    Swal.fire({
      title: "Death!",
      text: "You are going to die!",
      icon: "error",
      confirmButtonText: "Continue",
      confirmButtonColor: "#7C8EC8",
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
      confirmButtonColor: "#7C8EC8",
    }).then((result) => {
      location.reload();
    });
  } else {
    Swal.fire({
      title: "Most Likely Diagnosis",
      text:
        "Based on your selected symptoms, the most likely diagnosis is " +
        mostLikelyName,
      icon: "info",
      confirmButtonText: "Continue",
      confirmButtonColor: "#7C8EC8",
    }).then((result) => {
      if (likely > 0 && likelyName !== mostLikelyName) {
        Swal.fire({
          title: "Another Possible Diagnosis",
          text:
            "Based on your selected symptoms another possible diagnosis is " +
            likelyName,
          icon: "info",
          confirmButtonText: "Continue",
          confirmButtonColor: "#7C8EC8",
        }).then((result) => {
          location.reload();
        });
      } else {
        location.reload();
      }
    });
  }
}

function testExplain() {
  Swal.fire({
    title: "How Our Test Works",
    text:
      "Using your inputs for the symptoms selected, our test gives a likely diagnosis for a possible illness. This is accomplished by associating symptoms with individual diseases and according to the inputed symptoms, the disease most reflecting those symptoms is given. It is also important to be as specific as possible when making selections. For example, if you have a fever, is it a low fever? Or could it be further classified as a high fever (ie choices: Fever/High Fever)? This test produces a possible diagnosis, but it is not to take the place of a doctor. If something is wrong or worrying, contact your doctor immediately.",
    icon: "info",
    confirmButtonText: "Continue",
    confirmButtonColor: "#7C8EC8",
  });
}

function productionChange(obj) {
  var plan = document.getElementById("planPlus");
  var construct = document.getElementById("constructPlus");
  var share = document.getElementById("sharePlus");
  var text = document.getElementById("prodText");
  var planText =
    "We first work alongside our clients to help decide how their topic will be best conveyed. We then select a format of presentation accordingly, such as powerpoint or webinar. We work cohesively with the client to organize the information in a logical manner.";
  var constructText =
    "Using the organized information and format from the planning phase, the project is then put together. We have experienced writers and experts on staff who can help the client produce the best presentation possible for any topic.";
  var shareText =
    "We aim to not only help our clients create their presentations, but also help them bring their work to the medical community. We work with our clients to show them the best possible media outlets for their projects.";
  var key = {
    plantext: planText,
    constructtext: constructText,
    sharetext: shareText,
  };
  plan.classList.remove("active");
  construct.classList.remove("active");
  share.classList.remove("active");

  document.getElementById(obj.id + "Plus").classList.add("active");

  text.innerText = key[obj.id + "text"];
}

function changeDash(obj) {
  var height = document.getElementById("height");
  var weight = document.getElementById("weight");
  var blood = document.getElementById("blood");
  var peanuts = document.getElementById("peanuts");
  var tree = document.getElementById("tree");
  var pollen = document.getElementById("pollen");
  var docOne = document.getElementById("docOne");
  var docTwo = document.getElementById("docTwo");
  var titleOne = document.getElementById("titleOne");
  var blockOne = document.getElementById("blockOne");
  var titleTwo = document.getElementById("titleTwo");
  var blockTwo = document.getElementById("blockTwo");
  var titleThree = document.getElementById("titleThree");
  var blockThree = document.getElementById("blockThree");

  if (obj.id == "general") {
    height.innerText = "Height: 6’3”";
    weight.innerText = " Weight: 198lbs ";
    blood.innerText = " Blood Type: AB ";
    peanuts.innerText = "Peanuts";
    tree.innerText = "Tree Nuts";
    pollen.innerText = "Pollen";
    docOne.innerText = " Dr. Erica Kasparowicz ";
    docTwo.innerText = " Dr. Sanjay Upadhyay ";
    titleOne.innerText = " Personal Information: ";
    titleTwo.innerText = " Known Allergies: ";
    titleThree.innerText = " General Practitioner:";
    blockTwo.style.display = "block";
    blockThree.style.display = "block";

    document.getElementById("general").classList.add("active");
    document.getElementById("doctors").classList.remove("active");
    document.getElementById("history").classList.remove("active");
    document.getElementById("medications").classList.remove("active");
    document.getElementById("blockOne").classList.add("col-lg-4");
    document.getElementById("blockOne").classList.remove("col-lg-6");
    document.getElementById("blockTwo").classList.add("col-lg-4");
    document.getElementById("blockTwo").classList.remove("col-lg-6");
  }
  if (obj.id == "medications") {
    height.innerText = "Diabetes";
    weight.innerText = " Osteoporosis ";
    blood.innerText = "  ";
    peanuts.innerText = "Metaformin 50 mg orally";
    tree.innerText = "Alandronate 35 mg orally";
    pollen.innerText = "";
    docOne.innerText = " Dr. Erica Kasparowicz ";
    docTwo.innerText = " Dr. Sanjay Upadhyay ";
    titleOne.innerText = " Conditions: ";
    titleTwo.innerText = " Medication: ";
    blockTwo.style.display = "block";
    blockThree.style.display = "none";
    document.getElementById("medications").classList.add("active");
    document.getElementById("doctors").classList.remove("active");
    document.getElementById("history").classList.remove("active");
    document.getElementById("general").classList.remove("active");
    document.getElementById("blockOne").classList.add("col-lg-6");
    document.getElementById("blockOne").classList.remove("col-lg-4");
    document.getElementById("blockTwo").classList.add("col-lg-6");
    document.getElementById("blockTwo").classList.remove("col-lg-4");
  }
  if (obj.id == "history") {
    height.innerText = "Measles";
    weight.innerText = "  ";
    blood.innerText = "  ";
    peanuts.innerText = "Optimologist";
    tree.innerText = "Surgeon";
    pollen.innerText = "Physician";
    docOne.innerText = "  ";
    docTwo.innerText = "  ";
    titleOne.innerText = " Childhood Diseases: ";
    titleTwo.innerText = " Specialists Visited Last 5 Years: ";
    blockTwo.style.display = "block";
    blockThree.style.display = "none";
    titleThree.innerText = "";

    titleThree.innerText = " General Practitioner:";
    document.getElementById("history").classList.add("active");
    document.getElementById("general").classList.remove("active");
    document.getElementById("medications").classList.remove("active");
    document.getElementById("doctors").classList.remove("active");
    document.getElementById("blockOne").classList.add("col-lg-6");
    document.getElementById("blockOne").classList.remove("col-lg-4");
    document.getElementById("blockTwo").classList.add("col-lg-6");
    document.getElementById("blockTwo").classList.remove("col-lg-4");
  }
  if (obj.id == "doctors") {
    height.innerText = "Dr. Erica Kasparowicz - eKasperowicz@medCompany.org";
    weight.innerText = " Dr. Sanjay Upadhyay - sUpadhyay@medCompany.org  ";
    blood.innerText = "  ";

    titleOne.innerText = " Doctors: ";
    blockThree.style.display = "none";
    blockTwo.style.display = "none";
    document.getElementById("doctors").classList.add("active");
    document.getElementById("medications").classList.remove("active");
    document.getElementById("history").classList.remove("active");
    document.getElementById("general").classList.remove("active");
    document.getElementById("blockOne").classList.add("col-lg-6");
    document.getElementById("blockOne").classList.remove("col-lg-4");
  }
}

function changeNav() {
  window.addEventListener("scroll", function () {
    var nav = document.getElementById("nav");
    var scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
    if (scrollTop > 0) {
      nav.classList.add("navActive");
    } else {
      nav.classList.remove("navActive");
    }
  });
}

function changeHam() {
  var nav = document.getElementById("nav");
  nav.classList.add("navActive");
}

function changeOutline(obj) {
  var bodyParts = document.getElementsByClassName("body__part");
  for (var i = 0; i < bodyParts.length; i++) {
    if (bodyParts[i].id !== obj.id) {
      bodyParts[i].classList.remove("active");
    } else {
      bodyParts[i].classList.add("active");
    }
  }
}
function main() {
  changeNav();
}

main();

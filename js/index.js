/**
 * Global Vars
 */
var checkedList = [];

/**
 * Ripple effect function
 */
function createRipple(event) {
  const button = event;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

/**
 * Checks if contact form info is valid
 */
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

/**
 * Checks if contact form info is valid
 * and uses Sweet Alert for output
 */
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

/**
 * Cart validation function
 */
function checkValidCart() {
  var name = document.getElementById("nameCart").value;
  var email = document.getElementById("emailCart").value;
  var items;

  if (localStorage.getItem("cart") == null) {
    localStorage.setItem("cart", []);
  }

  items = localStorage.getItem("cart");

  if (name !== "" && validateEmail(email) && !isBlank(items)) {
    Swal.fire({
      title: "Success!",
      text: "Expect to see a message in your inbox in 3-5 business days!",
      icon: "success",
      confirmButtonText: "Continue",
      confirmButtonColor: "#7C8EC8",
    }).then((result) => {
      document.getElementById("nameCart").value = "";
      document.getElementById("emailCart").value = "";
      localStorage.setItem("cart", "");
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
    } else if (isBlank(items)) {
      Swal.fire({
        title: "Error!",
        text: "Please add items to your cart to checkout",
        icon: "error",
        confirmButtonText: "Continue",
        confirmButtonColor: "#7C8EC8",
      });
    }
  }
}
/**
 * Checks if email is valid
 */
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/**
 * Checks if string is blank, null, or undefined
 */
function isBlank(str) {
  return !str || /^\s*$/.test(str);
}

/**
 * Assigns the users selected symptoms
 * to the respective diseases and
 * displays the most likely disease
 * and the second most likely disease
 * (if possible) using Sweet Alert
 */
function findSymptoms() {
  /***
   * Variables Here
   */
  var death = 0;
  var concussion = (chicken_Pox = common_Cold = diptheria = escherichia_coli = giardiasis = hIV_or_Aids = infectious_Mononucleosis = influenza = lyme_Disease = malaria = measles = meningitis = pneumonia = salmonella_Infections = severe_Acute_Respiratory_Syndrome_SARS = sexually_Transmitted_Disease_STD = shingles = tetanus = tuberculosis = diabetes = coronary_artery_disease = ankle_sprain = arthritis = peripheral_artery = restless_legs = varicose = tendinitis = 0);
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

  //Loop through the current page the user is on and add those symptoms
  document.querySelectorAll("input").forEach(function (element) {
    if (element.checked && !checkedList.includes(element.value)) {
      checkedList.push(element.value);
    } else if (!element.checked && checkedList.includes(element.value)) {
      checkedList = checkedList.filter((item) => item !== element.value);
    }
  });

  /**
   * Loop through the checkedList (which had all the symptoms pressed)
   * and line them up to the right condition
   */
  for (var i = 0; i < checkedList.length; i++) {
    x = checkedList[i];
    if (x == "Dry Skin") {
      diabetes++;
    }
    if (x == "Numb Hands") {
      diabetes++;
    }
    if (x == "Numb Feet") {
      diabetes++;
    }
    if (x == "Extreme Thirst") {
      diabetes++;
    }
    if (x == "Heart Attack") {
      coronary_artery_disease++;
    }
    if (x == "Leg Cramps") {
      coronary_artery_disease++;
    }
    if (x == "Difficulty Walking") {
      ankle_sprain++;
      arthritis++;
    }
    if (x == "Ankle Pain") {
      ankle_sprain++;
    }
    if (x == "Ankle Swelling") {
      ankle_sprain++;
    }
    if (x == "Severe Knee Pain") {
      ankle_sprain++;
    }
    if (x == "Bony Outgrowth in Fingers") {
      arthritis++;
    }
    if (x == "Bony Outgrowth in Toes") {
      arthritis++;
    }
    if (x == "General Body Pain") {
      arthritis++;
    }
    if (x == "Stiffness in Joints") {
      arthritis++;
    }
    if (x == "Decreased Range of Motion") {
      arthritis++;
    }
    if (x == "Leg Pain") {
      peripheral_artery++;
      restless_legs++;
    }
    if (x == "Hair Loss") {
      peripheral_artery++;
    }
    if (x == "Loss of Blood Flow") {
      peripheral_artery++;
    }
    if (x == "Sleep Deprivation") {
      restless_legs++;
    }
    if (x == "Heavy Feeling Legs") {
      varicose++;
    }
    if (x == "Swollen Legs") {
      varicose++;
    }
    if (x == "Stiff Elbows") {
      tendinitis++;
    }
    if (x == "Stiff Hands/Wrists") {
      tendinitis++;
    }
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
      coronary_artery_disease++;
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
      restless_legs++;
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
    if (x == "Bulls-Eye Rash") {
      lyme_Disease += 1;
    }
    if (x == "Cold Hands") {
      meningitis += 1;
    }
    if (x == "Cold Feet") {
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
      coronary_artery_disease++;
    }
    if (x == "Abdominal Pain") {
      salmonella_Infections += 1;
    }
    if (x == "Shortness of Breath") {
      severe_Acute_Respiratory_Syndrome_SARS += 1;
      coronary_artery_disease++;
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

  //list out disease variables in a list
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
    diabetes,
    coronary_artery_disease,
    ankle_sprain,
    arthritis,
    peripheral_artery,
    restless_legs,
    varicose,
    tendinitis,
  ];
  //match up disease names with variables
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
    Diabetes: diabetes,
    Coronary_Artery_Disease: coronary_artery_disease,
    Ankle_Sprain_Or_Broken_Ankle: ankle_sprain,
    Arthritis: arthritis,
    Peripheral_Artery_Disease: peripheral_artery,
    Restless_Legs_Syndrome: restless_legs,
    Varicose_Veins: varicose,
    Tendinitis: tendinitis,
  };

  var mostLikely, likely;
  var mostLikelyName = "";
  var likelyName = "";
  const result = diseases.sort((x, y) => y - x).slice(0, 2); //sort diseases so its only the top 2 diseases

  mostLikely = result[0];
  likely = result[1];
  //match up mostLikely disease number to name
  for (var propName in names) {
    if (names[propName] == mostLikely) {
      mostLikelyName = propName;
    }
    if (names[propName] == likely && names[propName] !== mostLikely) {
      likelyName = propName;
    }
  }

  //clean up variable names for output
  mostLikelyName = mostLikelyName.replace(/[_-]/g, " ");
  likelyName = likelyName.replace(/[_-]/g, " ");

  //output
  if (mostLikely == 0 && likely == 0) {
    Swal.fire({
      title: "Try Again",
      text: "Please enter more symptoms to receive a possible diagnosis",
      icon: "error",
      confirmButtonText: "Continue",
      confirmButtonColor: "#7C8EC8",
    });
  } else if (checkedList.length >= 20) {
    Swal.fire({
      title: "Error",
      text:
        "Please select fewer symptoms; try be precise and accurate with your symptoms",
      icon: "error",
      confirmButtonText: "Continue",
      confirmButtonColor: "#7C8EC8",
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
      if (likely > 0 && likelyName !== mostLikelyName && likelyName !== "") {
        Swal.fire({
          title: "Another Possible Diagnosis",
          text:
            "Based on your selected symptoms another possible diagnosis is " +
            likelyName,
          icon: "info",
          confirmButtonText: "Continue",
          confirmButtonColor: "#7C8EC8",
        });
      }
    });
  }
}

/**
 * Sweet Alert for the Symptoms Test
 * explanation
 */
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

/**
 * Changes the production's text and
 * the pill's/cross' color when the
 * user presses when one the pills
 */
function productionChange(obj) {
  var plan = document.getElementById("planPlus");
  var construct = document.getElementById("constructPlus");
  var share = document.getElementById("sharePlus");
  var text = document.getElementById("prodText");
  var planText =
    "We first work alongside you to help decide the best medium for your project. We then select a format of presentation accordingly, such as a PowerPoint or a webinar. We are always open to making a nonconventional format or experimenting with a new type of media.";
  var constructText =
    "After the first step, we create your project using the information gathered during the planning phase. We have experienced writers and experts on staff who can help the client produce the best presentation possible for any topic. You can expect daily or weekly updates from our team, depending on the project's size.";
  var shareText =
    "After completing the project, we will work with you to show you the best possible media outlets for the project or the best way to present the project. We will guide you throughout the process, and our team will be available for any of your questions. ";
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

/**
 * Changes the medical dashboard's text
 * when the user presses a tab inside of
 * the demo
 */
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
    document.getElementById("blockOne").classList.add("mx-auto");
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
    document.getElementById("blockOne").classList.add("mx-auto");
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
    document.getElementById("blockOne").classList.add("mx-auto");
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
    document.getElementById("blockOne").classList.remove("mx-auto");
  }
}

/**
 * Changes the navbar to sticky and adds
 * classes once the user scrolls down
 * and vice versa
 */
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

/**
 * Adds active to navbar if the user presses
 * hamburger menu on mobile
 */
function changeHam() {
  var nav = document.getElementById("nav");
  nav.classList.add("navActive");
}

/**
 * Adds color to the body parts and the buttons
 * of the SVG on the symptoms test when the user presses
 * on it. Also adds the symptoms that the user checked
 * to the global list once they change to a different body
 * parts. Calls updateCheckBoxes to update the checkboxes
 */
function changeOutline(obj) {
  var bodyParts = document.getElementsByClassName("body__part");
  $("#body__general").css({
    "background-color": "transparent",
    color: "#6c63ff",
  });
  $("#body__skin").css({
    "background-color": "transparent",
    color: "#6c63ff",
  });
  for (var i = 0; i < bodyParts.length; i++) {
    if (bodyParts[i].id !== obj.id) {
      bodyParts[i].classList.remove("active");
    } else {
      bodyParts[i].classList.add("active");
      document.querySelectorAll("input").forEach(function (element) {
        if (element.checked && !checkedList.includes(element.value)) {
          checkedList.push(element.value);
        } else if (!element.checked && checkedList.includes(element.value)) {
          checkedList = checkedList.filter((item) => item !== element.value);
        }
      });
      updateCheckBoxes(bodyParts[i], checkedList);
    }
  }
}

/**
 * Updates the checkboxes with the correct symptoms once the
 * user changes body part. Also remembers which checkboxes
 * the user pressed once they go to a different body part
 */
function updateCheckBoxes(bodyPart, checkedList) {
  if (bodyPart.id == "body__head") {
    $(".testDemo__title").text("Head Symptoms");
    $(".container .boxes").html(
      '<div class="row"> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Confusion" id="symptom_0" /> <label class="form-check-label" for="Confusion"> Confusion </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Headache" id="symptom_0" /> <label class="form-check-label" for="Headache"> Headache </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Dizziness" id="symptom_0" /> <label class="form-check-label" for="Dizziness"> Dizziness </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Nausea" id="symptom_0" /> <label class="form-check-label" for="Nausea"> Nausea </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Swollen Neck Glands" id="symptom_0" /> <label class="form-check-label" for="Swollen Neck Glands"> Swollen Neck Glands </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Fever" id="symptom_0" /> <label class="form-check-label" for="Fever"> Fever </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Runny Nose" id="symptom_0" /> <label class="form-check-label" for="Runny Nose"> Runny Nose </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Fatigue" id="symptom_0" /> <label class="form-check-label" for="Fatigue"> Fatigue </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Sneezing" id="symptom_0" /> <label class="form-check-label" for="Sneezing"> Sneezing </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Sore Throat" id="symptom_0" /> <label class="form-check-label" for="Sore Throat"> Sore Throat </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Difficulty Swallowing" id="symptom_0" /> <label class="form-check-label" for="Difficulty Swallowing"> Difficulty Swallowing </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Recurring Fever" id="symptom_0" /> <label class="form-check-label" for="Recurring Fever"> Recurring Fever </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Swollen Lymph Nodes" id="symptom_0" /> <label class="form-check-label" for="Swollen Lymph Nodes"> Swollen Lymph Nodes </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Watery Eyes" id="symptom_0" /> <label class="form-check-label" for="Watery Eyes"> Watery Eyes </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Jaw Cramping" id="symptom_0" /> <label class="form-check-label" for="Jaw Cramping"> Jaw Cramping </label> </div> </div> </div>'
    );
    document.querySelectorAll("input").forEach(function (element) {
      for (var i = 0; i < checkedList.length; i++) {
        if (element.value == checkedList[i]) {
          element.checked = true;
        }
      }
    });
  } else if (
    bodyPart.id == "body__rightArm" ||
    bodyPart.id == "body__leftArm"
  ) {
    $(".testDemo__title").text("Arm Symptoms");
    $(".container .boxes").html(
      '<div class="row"> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Cold Hands" id="symptom_0" /> <label class="form-check-label" for="Cold Hands"> Cold Hands </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Bony Outgrowth in Fingers" id="symptom_0" /> <label class="form-check-label" for="Bony Outgrowth in Fingers"> Bony Outgrowth in Fingers </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Stiff Elbows" id="symptom_0" /> <label class="form-check-label" for="Stiff Elbows"> Stiff Elbows </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Stiff Hands/Wrists" id="symptom_0" /> <label class="form-check-label" for="Stiff Hands/Wrists"> Stiff Hands/Wrists </label> </div> </div> </div>'
    );
    document.querySelectorAll("input").forEach(function (element) {
      for (var i = 0; i < checkedList.length; i++) {
        if (element.value == checkedList[i]) {
          element.checked = true;
        }
      }
    });
  } else if (bodyPart.id == "body__legs") {
    $(".testDemo__title").text("Leg Symptoms");
    $(".container .boxes").html(
      '<div class="row"> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Cold Feet" id="symptom_0" /> <label class="form-check-label" for="Cold Feet"> Cold Feet </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Leg Cramps" id="symptom_0" /> <label class="form-check-label" for="Leg Cramps"> Leg Cramps </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Difficulty Walking" id="symptom_0" /> <label class="form-check-label" for="Difficulty Walking"> Difficulty Walking </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Ankle Pain" id="symptom_0" /> <label class="form-check-label" for="Ankle Pain"> Ankle Pain </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Ankle Swelling" id="symptom_0" /> <label class="form-check-label" for="Ankle Swelling"> Ankle Swelling </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Severe Knee Pain" id="symptom_0" /> <label class="form-check-label" for="Severe Knee Pain"> Severe Knee Pain </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Bony Outgrowth in Toes" id="symptom_0" /> <label class="form-check-label" for="Bony Outgrowth in Toes"> Bony Outgrowth in Toes </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Leg Pain" id="symptom_0" /> <label class="form-check-label" for="Leg Pain"> Leg Pain </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Loss of Blood Flow" id="symptom_0" /> <label class="form-check-label" for="Loss of Blood Flow"> Loss of Blood Flow </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Heavy Feeling Legs" id="symptom_0" /> <label class="form-check-label" for="Heavy Feeling Legs"> Heavy Feeling Legs </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Swollen Legs" id="symptom_0" /> <label class="form-check-label" for="Swollen Legs"> Swollen Legs </label> </div> </div> </div>'
    );
    document.querySelectorAll("input").forEach(function (element) {
      for (var i = 0; i < checkedList.length; i++) {
        if (element.value == checkedList[i]) {
          element.checked = true;
        }
      }
    });
  } else if (bodyPart.id == "body__upperBody") {
    $(".testDemo__title").text("Upper Torso Symptoms");
    $(".container .boxes").html(
      '<div class="row"> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Difficulty Breathing" id="symptom_0" /> <label class="form-check-label" for="Difficulty Breathing"> Difficulty Breathing </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Chest Pain" id="symptom_0" /> <label class="form-check-label" for="Chest Pain"> Chest Pain </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Shortness of Breath" id="symptom_0" /> <label class="form-check-label" for="Shortness of Breath"> Shortness of Breath </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Cough" id="symptom_0" /> <label class="form-check-label" for="Cough"> Cough </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Long Lasting Cough" id="symptom_0" /> <label class="form-check-label" for="Long Lasting Cough"> Long Lasting Cough </label> </div> </div> </div>'
    );
    document.querySelectorAll("input").forEach(function (element) {
      for (var i = 0; i < checkedList.length; i++) {
        if (element.value == checkedList[i]) {
          element.checked = true;
        }
      }
    });
  } else if (bodyPart.id == "body__lowerBody") {
    $(".testDemo__title").text("Lower Torso Symptoms");
    $(".container .boxes").html(
      '<div class="row"> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Vomiting" id="symptom_0" /> <label class="form-check-label" for="Vomiting"> Vomiting </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Stomach Cramps" id="symptom_0" /> <label class="form-check-label" for="Stomach Cramps"> Stomach Cramps </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Diarrhea" id="symptom_0" /> <label class="form-check-label" for="Diarrhea"> Diarrhea </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Bloating" id="symptom_0" /> <label class="form-check-label" for="Bloating"> Bloating</label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Abdominal Pain" id="symptom_0" /> <label class="form-check-label" for="Abdominal Pain"> Abdominal Pain </label> </div> </div> </div>'
    );
    document.querySelectorAll("input").forEach(function (element) {
      for (var i = 0; i < checkedList.length; i++) {
        if (element.value == checkedList[i]) {
          element.checked = true;
        }
      }
    });
  } else if (bodyPart.id == "body__genitalia") {
    $(".testDemo__title").text("Genitalia Symptoms");
    $(".container .boxes").html(
      '<div class="row"> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Genital Sores" id="symptom_0" /> <label class="form-check-label" for="Genital Sores"> Genital Sores </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Painful/Burning Urination" id="symptom_0" /> <label class="form-check-label" for="Painful/Burning Urination"> Painful/Burning Urination </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Discharge from Penis" id="symptom_0" /> <label class="form-check-label" for="Discharge from Penis"> Discharge from Penis </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Unusual Vaginal Discharge" id="symptom_0" /> <label class="form-check-label" for="Unusual Vaginal Discharge"> Unusual Vaginal Discharge </label> </div> </div> </div>'
    );
    document.querySelectorAll("input").forEach(function (element) {
      for (var i = 0; i < checkedList.length; i++) {
        if (element.value == checkedList[i]) {
          element.checked = true;
        }
      }
    });
  } else if (bodyPart.id == "body__skin") {
    $(".testDemo__title").text("Skin Symptoms");
    $(".container .boxes").html(
      '<div class="row"> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Rash" id="symptom_0" /> <label class="form-check-label" for="Rash"> Rash </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Blisters" id="symptom_0" /> <label class="form-check-label" for="Blisters"> Blisters </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Sores" id="symptom_0" /> <label class="form-check-label" for="Sores"> Sores </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Dry Skin" id="symptom_0" /> <label class="form-check-label" for="Dry Skin"> Dry Skin </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Bulls-Eye Rash" id="symptom_0" /> <label class="form-check-label" for="Bulls-Eye Rash"> Bulls-Eye Rash </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Scabs" id="symptom_0" /> <label class="form-check-label" for="Scabs"> Scabs </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Sweating" id="symptom_0" /> <label class="form-check-label" for="Sweating"> Sweating </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Ulcers" id="symptom_0" /> <label class="form-check-label" for="Ulcers"> Ulcers </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Pins and Needles" id="symptom_0" /> <label class="form-check-label" for="Pins and Needles"> Pins and Needles </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Night Sweats" id="symptom_0" /> <label class="form-check-label" for="Night Sweats"> Night Sweats </label> </div> </div> </div>'
    );
    document.querySelectorAll("input").forEach(function (element) {
      for (var i = 0; i < checkedList.length; i++) {
        if (element.value == checkedList[i]) {
          element.checked = true;
        }
      }
    });
  } else if (bodyPart.id == "body__general") {
    $(".testDemo__title").text("General Symptoms");
    $(".container .boxes").html(
      '<div class="row"> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Tiredness" id="symptom_0" /> <label class="form-check-label" for="Tiredness"> Tiredness </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Loss of Appetite" id="symptom_0" /> <label class="form-check-label" for="Loss of Appetite"> Loss of Appetite </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Weight Loss" id="symptom_0" /> <label class="form-check-label" for="Weight Loss"> Weight Loss </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Body Aches" id="symptom_0" /> <label class="form-check-label" for="Body Aches"> Body Aches </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Extreme Thirst" id="symptom_0" /> <label class="form-check-label" for="Extreme Thirst"> Extreme Thirst </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Heart Attack" id="symptom_0" /> <label class="form-check-label" for="Heart Attack"> Heart Attack </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Chills" id="symptom_0" /> <label class="form-check-label" for="Chills"> Chills </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Muscle Aches" id="symptom_0" /> <label class="form-check-label" for="Muscle Aches"> Muscle Aches </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Joint Pain" id="symptom_0" /> <label class="form-check-label" for="Joint Pain"> Joint Pain </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Muscle Pain" id="symptom_0" /> <label class="form-check-label" for="Muscle Pain"> Muscle Pain </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="General Body Pain" id="symptom_0" /> <label class="form-check-label" for="General Body Pain"> General Body Pain </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Stiffness in Joints" id="symptom_0" /> <label class="form-check-label" for="Stiffness in Joints"> Stiffness in Joints </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Green/Yellow Mucus" id="symptom_0" /> <label class="form-check-label" for="Green/Yellow Mucus"> Green/Yellow Mucus </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Muscle Spasms" id="symptom_0" /> <label class="form-check-label" for="Muscle Spasms"> Muscle Spasms </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Seizures" id="symptom_0" /> <label class="form-check-label" for="Seizures"> Seizures </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Decreased Range of Motion" id="symptom_0" /> <label class="form-check-label" for="Decreased Range of Motion"> Decreased Range of Motion </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Sleep Deprivation" id="symptom_0" /> <label class="form-check-label" for="Sleep Deprivation"> Sleep Deprivation </label> </div> </div> </div>'
    );
    document.querySelectorAll("input").forEach(function (element) {
      for (var i = 0; i < checkedList.length; i++) {
        if (element.value == checkedList[i]) {
          element.checked = true;
        }
      }
    });
  }
}

/**
 * Changes the color of the General and Skin buttons once
 * the user presses them
 */
function changeColorButton(obj) {
  $("#body__general").css({
    "background-color": "transparent",
    color: "#6c63ff",
  });
  $("#body__skin").css({
    "background-color": "transparent",
    color: "#6c63ff",
  });
  if (obj.classList.contains("active")) {
    $(obj).css({ "background-color": "#6c63ff", color: "white" });
  }
}

/**
 * Shopping Cart Function
 * Adds value to shopping cart using LocalStorage
 */

function addItem(item) {
  var currentItems, newItems;

  currentItems = localStorage.getItem("cart");
  newItems = "";
  if (currentItems !== undefined) {
    newItems = currentItems.concat(item);
  }
  localStorage.setItem("cart", newItems);

  setCartNumber();
}

/**
 * Shopping Cart Function
 * Removes value from shopping cart frontend/backend
 */
function removeItem(item) {
  var removeItemName;
  var cartString;

  cartString = localStorage.getItem("cart");
  removeItemName = item.id;

  if (removeItemName == "Symptoms Test") {
    cartString = cartString.replace("Symptoms_Test ", "");
  } else if (removeItemName == "Medical Dashboard") {
    cartString = cartString.replace("Medical_Dashboard ", "");
  } else if (removeItemName == "Production") {
    cartString = cartString.replace("Production ", "");
  } else if (removeItemName == "Publication") {
    cartString = cartString.replace("Publication ", "");
  } else if (removeItemName == "Telemedicine") {
    cartString = cartString.replace("Telemedicine ", "");
  }

  localStorage.setItem("cart", cartString);
  setCartNumber();

  location.reload();
}

/**
 * Shopping Cart Function
 * Sets value of number next to cart
 */
function setCartNumber() {
  var cartNum, currentItems, currentItemsList;
  cartNum = document.getElementById("cartNum"); //get the little num next to the cart
  currentItems = localStorage.getItem("cart"); //get current items string

  if (currentItems !== null) {
    currentItemsList = currentItems.split(" "); //convert to list based off spaces

    if (currentItemsList.length > 1) {
      if (
        currentItemsList[currentItemsList.length - 1] == "" ||
        currentItemsList[currentItemsList.length - 1] == " "
      ) {
        currentItemsList.pop(); //removes the last space as an item
      }

      cartNum.innerHTML = currentItemsList.length; //set the number of items to the num
    } else {
      if (currentItemsList[0] == " " || currentItemsList == "") {
        cartNum.innerHTML = 0;
      } else {
        cartNum.innerHTML = 1;
      }
    }
  } else {
    cartNum.innerHTML = 0; //set the number of items to the num
  }
}

/**
 * Shopping Cart Function
 * Sets value of number next to cart
 */
function addToCart() {
  var cartButtons = document.querySelectorAll(".cart-check-container");

  cartButtons.forEach((service) => {
    service.addEventListener("click", (event) => {
      if (localStorage.getItem("cart") == null) {
        localStorage.setItem("cart", []);
      }
      if (service.id == "symptomsTestCart") {
        if (localStorage.getItem("cart").includes("Symptoms_Test")) {
          Swal.fire({
            title: "Alert",
            text: "Symptoms Test is already in your cart!",
            icon: "warning",
            confirmButtonColor: "#7C8EC8",
          });
        } else {
          addItem("Symptoms_Test ");
        }
      }
      if (service.id == "telemedicineCart") {
        if (localStorage.getItem("cart").includes("Telemedicine")) {
          Swal.fire({
            title: "Alert",
            text: "Telemedicine is already in your cart!",
            icon: "warning",
            confirmButtonColor: "#7C8EC8",
          });
        } else {
          addItem("Telemedicine ");
        }
      }
      if (service.id == "productionCart") {
        if (localStorage.getItem("cart").includes("Production")) {
          Swal.fire({
            title: "Alert",
            text: "Production is already in your cart!",
            icon: "warning",
            confirmButtonColor: "#7C8EC8",
          });
        } else {
          addItem("Production ");
        }
      }
      if (service.id == "medicalDashboardCart") {
        if (localStorage.getItem("cart").includes("Medical_Dashboard")) {
          Swal.fire({
            title: "Alert",
            text: "Medical Dashboard is already in your cart!",
            icon: "warning",
            confirmButtonColor: "#7C8EC8",
          });
        } else {
          addItem("Medical_Dashboard ");
        }
      }
      if (service.id == "publicationCart") {
        if (localStorage.getItem("cart").includes("Publication")) {
          Swal.fire({
            title: "Alert",
            text: "Publication is already in your cart!",
            icon: "warning",
            confirmButtonColor: "#7C8EC8",
          });
        } else {
          addItem("Publication ");
        }
      }
    });
  });
}

/**
 * Add correct item to review items block
 */
function reviewItems() {
  if (!(document.getElementById("items") == null)) {
    setCartNumber();

    var itemsList = [];

    //make cart if it doesn't exist
    if (localStorage.getItem("cart") == null) {
      localStorage.setItem("cart", []);
    }

    //add the selected items to the list
    if (localStorage.getItem("cart").includes("Symptoms_Test")) {
      itemsList.push("Symptoms Test");
    }
    if (localStorage.getItem("cart").includes("Medical_Dashboard")) {
      itemsList.push("Medical Dashboard");
    }
    if (localStorage.getItem("cart").includes("Publication")) {
      itemsList.push("Publication");
    }
    if (localStorage.getItem("cart").includes("Production")) {
      itemsList.push("Production");
    }
    if (localStorage.getItem("cart").includes("Telemedicine")) {
      itemsList.push("Telemedicine");
    }

    itemsList.forEach((item) => {
      $("#items").append(
        `<span class='cart__item' id='${item} item'><span class='cart__item_name'>${item}</span><span class='cart__item_x' onclick='removeItem(this)' id='${item}'> x </span></span>`
      );
    });
  }
}

/**
 * Calls the functions
 */
function main() {
  changeNav();
  setCartNumber();
  reviewItems();
}

document.addEventListener("DOMContentLoaded", function () {
  main();
});

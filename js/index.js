var checkedList=[];function createRipple(e){const t=e,l=document.createElement("span"),i=Math.max(t.clientWidth,t.clientHeight),s=i/2;l.style.width=l.style.height=`${i}px`,l.style.left=`${e.clientX-t.offsetLeft-s}px`,l.style.top=`${e.clientY-t.offsetTop-s}px`,l.classList.add("ripple");const o=t.getElementsByClassName("ripple")[0];o&&o.remove(),t.appendChild(l)}function checkValid(){var e=document.getElementById("name").value,t=document.getElementById("email").value;""!==e&&validateEmail(t)?Swal.fire({title:"Success!",text:"Your daily briefing will be in your inbox every day",icon:"success",confirmButtonText:"Thank You",confirmButtonColor:"#7C8EC8"}).then(e=>{document.getElementById("name").value="",document.getElementById("email").value="",location.reload()}):""==e?Swal.fire({title:"Error!",text:"Please fill out your name",icon:"error",confirmButtonText:"Continue",confirmButtonColor:"#7C8EC8"}):validateEmail(t)||Swal.fire({title:"Error!",text:"Please enter valid email address",icon:"error",confirmButtonText:"Continue",confirmButtonColor:"#7C8EC8"})}function checkValidContact(){var e=document.getElementById("nameContact").value,t=document.getElementById("emailContact").value,l=document.getElementById("messageContact").value;""!==e&&validateEmail(t)&&""!==l?Swal.fire({title:"Success!",text:"We will respond to your message as soon as possible!",icon:"success",confirmButtonText:"Continue",confirmButtonColor:"#7C8EC8"}).then(e=>{document.getElementById("name").value="",document.getElementById("email").value="",location.reload()}):""==e?Swal.fire({title:"Error!",text:"Please fill out your name",icon:"error",confirmButtonText:"Continue",confirmButtonColor:"#7C8EC8"}):""==l?Swal.fire({title:"Error!",text:"Please fill out your message",icon:"error",confirmButtonText:"Continue",confirmButtonColor:"#7C8EC8"}):validateEmail(t)||Swal.fire({title:"Error!",text:"Please enter valid email address",icon:"error",confirmButtonText:"Continue",confirmButtonColor:"#7C8EC8"})}function checkValidCart(){var e,t=document.getElementById("nameCart").value,l=document.getElementById("emailCart").value;null==localStorage.getItem("cart")&&localStorage.setItem("cart",[]),e=localStorage.getItem("cart"),""!==t&&validateEmail(l)&&!isBlank(e)?Swal.fire({title:"Success!",text:"Expect to see a message in your inbox in 3-5 business days!",icon:"success",confirmButtonText:"Continue",confirmButtonColor:"#7C8EC8"}).then(e=>{document.getElementById("nameCart").value="",document.getElementById("emailCart").value="",localStorage.setItem("cart",""),location.reload()}):""==t?Swal.fire({title:"Error!",text:"Please fill out your name",icon:"error",confirmButtonText:"Continue",confirmButtonColor:"#7C8EC8"}):validateEmail(l)?isBlank(e)&&Swal.fire({title:"Error!",text:"Please add items to your cart to checkout",icon:"error",confirmButtonText:"Continue",confirmButtonColor:"#7C8EC8"}):Swal.fire({title:"Error!",text:"Please enter valid email address",icon:"error",confirmButtonText:"Continue",confirmButtonColor:"#7C8EC8"})}function validateEmail(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function isBlank(e){return!e||/^\s*$/.test(e)}function findSymptoms(){var e=chicken_Pox=common_Cold=diptheria=escherichia_coli=giardiasis=hIV_or_Aids=infectious_Mononucleosis=influenza=lyme_Disease=malaria=measles=meningitis=pneumonia=salmonella_Infections=severe_Acute_Respiratory_Syndrome_SARS=sexually_Transmitted_Disease_STD=shingles=tetanus=tuberculosis=diabetes=coronary_artery_disease=ankle_sprain=arthritis=peripheral_artery=restless_legs=varicose=tendinitis=0;document.querySelectorAll("input").forEach(function(e){e.checked&&!checkedList.includes(e.value)?checkedList.push(e.value):!e.checked&&checkedList.includes(e.value)&&(checkedList=checkedList.filter(t=>t!==e.value))});for(var t=0;t<checkedList.length;t++)x=checkedList[t],"Dry Skin"==x&&diabetes++,"Numb Hands"==x&&diabetes++,"Numb Feet"==x&&diabetes++,"Extreme Thirst"==x&&diabetes++,"Heart Attack"==x&&coronary_artery_disease++,"Leg Cramps"==x&&coronary_artery_disease++,"Difficulty Walking"==x&&(ankle_sprain++,arthritis++),"Ankle Pain"==x&&ankle_sprain++,"Ankle Swelling"==x&&ankle_sprain++,"Severe Knee Pain"==x&&ankle_sprain++,"Bony Outgrowth in Fingers"==x&&arthritis++,"Bony Outgrowth in Toes"==x&&arthritis++,"General Body Pain"==x&&arthritis++,"Stiffness in Joints"==x&&arthritis++,"Decreased Range of Motion"==x&&arthritis++,"Leg Pain"==x&&(peripheral_artery++,restless_legs++),"Hair Loss"==x&&peripheral_artery++,"Loss of Blood Flow"==x&&peripheral_artery++,"Sleep Deprivation"==x&&restless_legs++,"Heavy Feeling Legs"==x&&varicose++,"Swollen Legs"==x&&varicose++,"Stiff Elbows"==x&&tendinitis++,"Stiff Hands/Wrists"==x&&tendinitis++,"Confusion"==x&&(e+=1,meningitis+=1),"Headache"==x&&(e+=1,chicken_Pox+=1,severe_Acute_Respiratory_Syndrome_SARS+=1),"Dizziness"==x&&(e+=1),"Nausea"==x&&(e+=1,giardiasis+=1,malaria+=1,coronary_artery_disease++),"Vomiting"==x&&(e+=1,escherichia_coli+=1,malaria+=1,meningitis+=1),"Fever"==x&&(chicken_Pox+=1,infectious_Mononucleosis+=1,influenza+=1,lyme_Disease+=1,malaria+=1,salmonella_Infections+=1,severe_Acute_Respiratory_Syndrome_SARS+=1,tuberculosis+=1),"Tiredness"==x&&(chicken_Pox+=1,hIV_or_Aids+=1,malaria+=1),"Loss of Appetite"==x&&(chicken_Pox+=1,tuberculosis+=1),"Rash"==x&&(chicken_Pox+=1,infectious_Mononucleosis+=1,measles+=1),"Blisters"==x&&(chicken_Pox+=1,shingles+=1),"Runny Nose"==x&&(common_Cold+=1,influenza+=1,measles+=1),"Cough"==x&&(common_Cold+=1,influenza+=1,measles+=1,pneumonia+=1,severe_Acute_Respiratory_Syndrome_SARS+=1),"Fatigue"==x&&(common_Cold+=1,giardiasis+=1,influenza+=1,lyme_Disease+=1,restless_legs++),"Sneezing"==x&&(common_Cold+=1,influenza+=1),"Sore Throat"==x&&(common_Cold+=1,diptheria+=1,infectious_Mononucleosis+=1,influenza+=1),"High Fever"==x&&(diptheria+=1,measles+=1,meningitis+=1),"Swollen Neck Glands"==x&&(diptheria+=1),"Difficulty Breathing"==x&&(diptheria+=1),"Difficulty Swallowing"==x&&(diptheria+=1),"Stomach Cramps"==x&&(escherichia_coli+=1,giardiasis+=1),"Diarrhea"==x&&(escherichia_coli+=1,giardiasis+=1,malaria+=1,salmonella_Infections+=1),"Bloating"==x&&(giardiasis+=1),"Weight Loss"==x&&(giardiasis+=1,hIV_or_Aids+=1),"Recurring Fever"==x&&(hIV_or_Aids+=1),"Sores"==x&&(hIV_or_Aids+=1),"Extreme Fatigue"==x&&(infectious_Mononucleosis+=1),"Body Aches"==x&&(infectious_Mononucleosis+=1),"Swollen Lymph Nodes"==x&&(infectious_Mononucleosis+=1),"Chills"==x&&(influenza+=1,malaria+=1,pneumonia+=1,severe_Acute_Respiratory_Syndrome_SARS+=1,tuberculosis+=1),"Muscle Aches"==x&&(influenza+=1),"Joint Pain"==x&&(lyme_Disease+=1,meningitis+=1),"Bulls-Eye Rash"==x&&(lyme_Disease+=1),"Cold Hands"==x&&(meningitis+=1),"Cold Feet"==x&&(meningitis+=1),"Watery Eyes"==x&&(measles+=1),"Muscle Pain"==x&&(meningitis+=1),"Green/Yellowish Mucus"==x&&(pneumonia+=1),"Sweating"==x&&(pneumonia+=1,tetanus+=1),"Chest Pain"==x&&(pneumonia+=1,coronary_artery_disease++),"Abdominal Pain"==x&&(salmonella_Infections+=1),"Shortness of Breath"==x&&(severe_Acute_Respiratory_Syndrome_SARS+=1,coronary_artery_disease++),"Genital Sores"==x&&(sexually_Transmitted_Disease_STD+=1),"Painful Urination"==x&&(sexually_Transmitted_Disease_STD+=1),"Burning Urination"==x&&(sexually_Transmitted_Disease_STD+=1),"Discharge from Penis"==x&&(sexually_Transmitted_Disease_STD+=1),"Unusual Vaginal Discharge"==x&&(sexually_Transmitted_Disease_STD+=1),"Scab"==x&&(shingles+=1),"Ulcers"==x&&(shingles+=1),"Pins and Needles"==x&&(shingles+=1),"Jaw Cramping"==x&&(tetanus+=1),"Muscle Spasms"==x&&(tetanus+=1),"Seizures"==x&&(tetanus+=1),"Long Lasting Cough"==x&&(tuberculosis+=1),"Night Sweats"==x&&(tuberculosis+=1);var l,i,s=[e,chicken_Pox,common_Cold,diptheria,escherichia_coli,giardiasis,hIV_or_Aids,infectious_Mononucleosis,influenza,lyme_Disease,malaria,measles,meningitis,pneumonia,salmonella_Infections,severe_Acute_Respiratory_Syndrome_SARS,sexually_Transmitted_Disease_STD,shingles,tetanus,tuberculosis,diabetes,coronary_artery_disease,ankle_sprain,arthritis,peripheral_artery,restless_legs,varicose,tendinitis],o={Concussion:e,Chicken_Pox:chicken_Pox,Common_Cold:common_Cold,Diptheria:diptheria,Escherichia_Coli:escherichia_coli,Giardiasis:giardiasis,HIV_or_AIDS:hIV_or_Aids,Infectious_Mononucleosis:infectious_Mononucleosis,Influenza:influenza,Lyme_Disease:lyme_Disease,Malaria:malaria,Measles:measles,Meningitis:meningitis,Pneumonia:pneumonia,Salmonella_Infections:salmonella_Infections,Severe_Acute_Respiratory_Syndrome_SARS:severe_Acute_Respiratory_Syndrome_SARS,Sexually_Transmitted_Disease_STD:sexually_Transmitted_Disease_STD,Shingles:shingles,Tetanus:tetanus,Tuberculosis:tuberculosis,Diabetes:diabetes,Coronary_Artery_Disease:coronary_artery_disease,Ankle_Sprain_Or_Broken_Ankle:ankle_sprain,Arthritis:arthritis,Peripheral_Artery_Disease:peripheral_artery,Restless_Legs_Syndrome:restless_legs,Varicose_Veins:varicose,Tendinitis:tendinitis},c="",a="";const n=s.sort((e,t)=>t-e).slice(0,2);for(var r in l=n[0],i=n[1],o)o[r]==l&&(c=r),o[r]==i&&o[r]!==l&&(a=r);c=c.replace(/[_-]/g," "),a=a.replace(/[_-]/g," "),0==l&&0==i?Swal.fire({title:"Try Again",text:"Please enter more symptoms to receive a possible diagnosis",icon:"error",confirmButtonText:"Continue",confirmButtonColor:"#7C8EC8"}):checkedList.length>=20?Swal.fire({title:"Error",text:"Please select fewer symptoms; try be precise and accurate with your symptoms",icon:"error",confirmButtonText:"Continue",confirmButtonColor:"#7C8EC8"}):Swal.fire({title:"Most Likely Diagnosis",text:"Based on your selected symptoms, the most likely diagnosis is "+c,icon:"info",confirmButtonText:"Continue",confirmButtonColor:"#7C8EC8"}).then(e=>{i>0&&a!==c&&""!==a&&Swal.fire({title:"Another Possible Diagnosis",text:"Based on your selected symptoms another possible diagnosis is "+a,icon:"info",confirmButtonText:"Continue",confirmButtonColor:"#7C8EC8"})})}function testExplain(){Swal.fire({title:"How Our Test Works",text:"Using your selected symptoms, our test gives a likely diagnosis for a possible illness. This is accomplished by associating symptoms with individual diseases and, according to the inputted symptoms, the disease most reflecting those symptoms is given. It is also important to be as specific as possible when making selections. For example, if you have a fever, is it a low fever? Or could it be further classified as a high fever (ie choices: Fever/High Fever)? This test produces a possible diagnosis, but it is not to take the place of a doctor. If something is wrong or worrying, contact your doctor immediately.",icon:"info",confirmButtonText:"Continue",confirmButtonColor:"#7C8EC8"})}function productionChange(e){var t=document.getElementById("planPlus"),l=document.getElementById("constructPlus"),i=document.getElementById("sharePlus"),s=document.getElementById("prodText"),o={plantext:"We first work alongside you to help decide the best medium for your project. We then select a format of presentation accordingly, such as a PowerPoint or a webinar. We are always open to making a nonconventional format or experimenting with a new type of media.",constructtext:"After the first step, we create your project using the information gathered during the planning phase. We have experienced writers and experts on staff who can help the client produce the best presentation possible for any topic. You can expect daily or weekly updates from our team, depending on the project's size.",sharetext:"After completing the project, we will work with you to show you the best possible media outlets for the project or the best way to present the project. We will guide you throughout the process, and our team will be available for any of your questions. "};t.classList.remove("active"),l.classList.remove("active"),i.classList.remove("active"),document.getElementById(e.id+"Plus").classList.add("active"),s.innerText=o[e.id+"text"]}function changeDash(e){var t=document.getElementById("height"),l=document.getElementById("weight"),i=document.getElementById("blood"),s=document.getElementById("peanuts"),o=document.getElementById("tree"),c=document.getElementById("pollen"),a=document.getElementById("docOne"),n=document.getElementById("docTwo"),r=document.getElementById("titleOne"),m=(document.getElementById("blockOne"),document.getElementById("titleTwo")),d=document.getElementById("blockTwo"),u=document.getElementById("titleThree"),h=document.getElementById("blockThree");"general"==e.id&&(t.innerText="Height: 6’3”",l.innerText=" Weight: 198lbs ",i.innerText=" Blood Type: AB ",s.innerText="Peanuts",o.innerText="Tree Nuts",c.innerText="Pollen",a.innerText=" Dr. Erica Kasparowicz ",n.innerText=" Dr. Sanjay Upadhyay ",r.innerText=" Personal Information: ",m.innerText=" Known Allergies: ",u.innerText=" General Practitioner:",d.style.display="block",h.style.display="block",document.getElementById("general").classList.add("active"),document.getElementById("doctors").classList.remove("active"),document.getElementById("history").classList.remove("active"),document.getElementById("medications").classList.remove("active"),document.getElementById("blockOne").classList.add("col-lg-4"),document.getElementById("blockOne").classList.remove("col-lg-6"),document.getElementById("blockTwo").classList.add("col-lg-4"),document.getElementById("blockTwo").classList.remove("col-lg-6"),document.getElementById("blockOne").classList.add("mx-auto")),"medications"==e.id&&(t.innerText="Diabetes",l.innerText=" Osteoporosis ",i.innerText="  ",s.innerText="Metaformin 50 mg orally",o.innerText="Alandronate 35 mg orally",c.innerText="",a.innerText=" Dr. Erica Kasparowicz ",n.innerText=" Dr. Sanjay Upadhyay ",r.innerText=" Conditions: ",m.innerText=" Medication: ",d.style.display="block",h.style.display="none",document.getElementById("medications").classList.add("active"),document.getElementById("doctors").classList.remove("active"),document.getElementById("history").classList.remove("active"),document.getElementById("general").classList.remove("active"),document.getElementById("blockOne").classList.add("col-lg-6"),document.getElementById("blockOne").classList.remove("col-lg-4"),document.getElementById("blockTwo").classList.add("col-lg-6"),document.getElementById("blockTwo").classList.remove("col-lg-4"),document.getElementById("blockOne").classList.add("mx-auto")),"history"==e.id&&(t.innerText="Measles",l.innerText="  ",i.innerText="  ",s.innerText="Optimologist",o.innerText="Surgeon",c.innerText="Physician",a.innerText="  ",n.innerText="  ",r.innerText=" Childhood Diseases: ",m.innerText=" Specialists Visited Last 5 Years: ",d.style.display="block",h.style.display="none",u.innerText="",u.innerText=" General Practitioner:",document.getElementById("history").classList.add("active"),document.getElementById("general").classList.remove("active"),document.getElementById("medications").classList.remove("active"),document.getElementById("doctors").classList.remove("active"),document.getElementById("blockOne").classList.add("col-lg-6"),document.getElementById("blockOne").classList.remove("col-lg-4"),document.getElementById("blockTwo").classList.add("col-lg-6"),document.getElementById("blockTwo").classList.remove("col-lg-4"),document.getElementById("blockOne").classList.add("mx-auto")),"doctors"==e.id&&(t.innerText="Dr. Erica Kasparowicz - eKasperowicz@medCompany.org",l.innerText=" Dr. Sanjay Upadhyay - sUpadhyay@medCompany.org  ",i.innerText="  ",r.innerText=" Doctors: ",h.style.display="none",d.style.display="none",document.getElementById("doctors").classList.add("active"),document.getElementById("medications").classList.remove("active"),document.getElementById("history").classList.remove("active"),document.getElementById("general").classList.remove("active"),document.getElementById("blockOne").classList.add("col-lg-6"),document.getElementById("blockOne").classList.remove("col-lg-4"),document.getElementById("blockOne").classList.remove("mx-auto"))}function changeNav(){window.addEventListener("scroll",function(){var e=document.getElementById("nav");(window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop)>0?e.classList.add("navActive"):e.classList.remove("navActive")})}function changeHam(){document.getElementById("nav").classList.add("navActive")}function changeOutline(e){var t=document.getElementsByClassName("body__part");$("#body__general").css({"background-color":"transparent",color:"#6c63ff"}),$("#body__skin").css({"background-color":"transparent",color:"#6c63ff"});for(var l=0;l<t.length;l++)t[l].id!==e.id?t[l].classList.remove("active"):(t[l].classList.add("active"),document.querySelectorAll("input").forEach(function(e){e.checked&&!checkedList.includes(e.value)?checkedList.push(e.value):!e.checked&&checkedList.includes(e.value)&&(checkedList=checkedList.filter(t=>t!==e.value))}),updateCheckBoxes(t[l],checkedList))}function updateCheckBoxes(e,t){"body__head"==e.id?($(".testDemo__title").text("Head Symptoms"),$(".container .boxes").html('<div class="row"> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Confusion" id="symptom_0" /> <label class="form-check-label" for="Confusion"> Confusion </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Headache" id="symptom_0" /> <label class="form-check-label" for="Headache"> Headache </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Dizziness" id="symptom_0" /> <label class="form-check-label" for="Dizziness"> Dizziness </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Nausea" id="symptom_0" /> <label class="form-check-label" for="Nausea"> Nausea </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Swollen Neck Glands" id="symptom_0" /> <label class="form-check-label" for="Swollen Neck Glands"> Swollen Neck Glands </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Fever" id="symptom_0" /> <label class="form-check-label" for="Fever"> Fever </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Runny Nose" id="symptom_0" /> <label class="form-check-label" for="Runny Nose"> Runny Nose </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Fatigue" id="symptom_0" /> <label class="form-check-label" for="Fatigue"> Fatigue </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Sneezing" id="symptom_0" /> <label class="form-check-label" for="Sneezing"> Sneezing </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Sore Throat" id="symptom_0" /> <label class="form-check-label" for="Sore Throat"> Sore Throat </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Difficulty Swallowing" id="symptom_0" /> <label class="form-check-label" for="Difficulty Swallowing"> Difficulty Swallowing </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Recurring Fever" id="symptom_0" /> <label class="form-check-label" for="Recurring Fever"> Recurring Fever </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Swollen Lymph Nodes" id="symptom_0" /> <label class="form-check-label" for="Swollen Lymph Nodes"> Swollen Lymph Nodes </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Watery Eyes" id="symptom_0" /> <label class="form-check-label" for="Watery Eyes"> Watery Eyes </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Jaw Cramping" id="symptom_0" /> <label class="form-check-label" for="Jaw Cramping"> Jaw Cramping </label> </div> </div> </div>'),document.querySelectorAll("input").forEach(function(e){for(var l=0;l<t.length;l++)e.value==t[l]&&(e.checked=!0)})):"body__rightArm"==e.id||"body__leftArm"==e.id?($(".testDemo__title").text("Arm Symptoms"),$(".container .boxes").html('<div class="row"> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Cold Hands" id="symptom_0" /> <label class="form-check-label" for="Cold Hands"> Cold Hands </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Bony Outgrowth in Fingers" id="symptom_0" /> <label class="form-check-label" for="Bony Outgrowth in Fingers"> Bony Outgrowth in Fingers </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Stiff Elbows" id="symptom_0" /> <label class="form-check-label" for="Stiff Elbows"> Stiff Elbows </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Stiff Hands/Wrists" id="symptom_0" /> <label class="form-check-label" for="Stiff Hands/Wrists"> Stiff Hands/Wrists </label> </div> </div> </div>'),document.querySelectorAll("input").forEach(function(e){for(var l=0;l<t.length;l++)e.value==t[l]&&(e.checked=!0)})):"body__legs"==e.id?($(".testDemo__title").text("Leg Symptoms"),$(".container .boxes").html('<div class="row"> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Cold Feet" id="symptom_0" /> <label class="form-check-label" for="Cold Feet"> Cold Feet </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Leg Cramps" id="symptom_0" /> <label class="form-check-label" for="Leg Cramps"> Leg Cramps </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Difficulty Walking" id="symptom_0" /> <label class="form-check-label" for="Difficulty Walking"> Difficulty Walking </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Ankle Pain" id="symptom_0" /> <label class="form-check-label" for="Ankle Pain"> Ankle Pain </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Ankle Swelling" id="symptom_0" /> <label class="form-check-label" for="Ankle Swelling"> Ankle Swelling </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Severe Knee Pain" id="symptom_0" /> <label class="form-check-label" for="Severe Knee Pain"> Severe Knee Pain </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Bony Outgrowth in Toes" id="symptom_0" /> <label class="form-check-label" for="Bony Outgrowth in Toes"> Bony Outgrowth in Toes </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Leg Pain" id="symptom_0" /> <label class="form-check-label" for="Leg Pain"> Leg Pain </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Loss of Blood Flow" id="symptom_0" /> <label class="form-check-label" for="Loss of Blood Flow"> Loss of Blood Flow </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Heavy Feeling Legs" id="symptom_0" /> <label class="form-check-label" for="Heavy Feeling Legs"> Heavy Feeling Legs </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Swollen Legs" id="symptom_0" /> <label class="form-check-label" for="Swollen Legs"> Swollen Legs </label> </div> </div> </div>'),document.querySelectorAll("input").forEach(function(e){for(var l=0;l<t.length;l++)e.value==t[l]&&(e.checked=!0)})):"body__upperBody"==e.id?($(".testDemo__title").text("Upper Torso Symptoms"),$(".container .boxes").html('<div class="row"> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Difficulty Breathing" id="symptom_0" /> <label class="form-check-label" for="Difficulty Breathing"> Difficulty Breathing </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Chest Pain" id="symptom_0" /> <label class="form-check-label" for="Chest Pain"> Chest Pain </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Shortness of Breath" id="symptom_0" /> <label class="form-check-label" for="Shortness of Breath"> Shortness of Breath </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Cough" id="symptom_0" /> <label class="form-check-label" for="Cough"> Cough </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Long Lasting Cough" id="symptom_0" /> <label class="form-check-label" for="Long Lasting Cough"> Long Lasting Cough </label> </div> </div> </div>'),document.querySelectorAll("input").forEach(function(e){for(var l=0;l<t.length;l++)e.value==t[l]&&(e.checked=!0)})):"body__lowerBody"==e.id?($(".testDemo__title").text("Lower Torso Symptoms"),$(".container .boxes").html('<div class="row"> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Vomiting" id="symptom_0" /> <label class="form-check-label" for="Vomiting"> Vomiting </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Stomach Cramps" id="symptom_0" /> <label class="form-check-label" for="Stomach Cramps"> Stomach Cramps </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Diarrhea" id="symptom_0" /> <label class="form-check-label" for="Diarrhea"> Diarrhea </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Bloating" id="symptom_0" /> <label class="form-check-label" for="Bloating"> Bloating</label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Abdominal Pain" id="symptom_0" /> <label class="form-check-label" for="Abdominal Pain"> Abdominal Pain </label> </div> </div> </div>'),document.querySelectorAll("input").forEach(function(e){for(var l=0;l<t.length;l++)e.value==t[l]&&(e.checked=!0)})):"body__genitalia"==e.id?($(".testDemo__title").text("Genitalia Symptoms"),$(".container .boxes").html('<div class="row"> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Genital Sores" id="symptom_0" /> <label class="form-check-label" for="Genital Sores"> Genital Sores </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Painful/Burning Urination" id="symptom_0" /> <label class="form-check-label" for="Painful/Burning Urination"> Painful/Burning Urination </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Discharge from Penis" id="symptom_0" /> <label class="form-check-label" for="Discharge from Penis"> Discharge from Penis </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Unusual Vaginal Discharge" id="symptom_0" /> <label class="form-check-label" for="Unusual Vaginal Discharge"> Unusual Vaginal Discharge </label> </div> </div> </div>'),document.querySelectorAll("input").forEach(function(e){for(var l=0;l<t.length;l++)e.value==t[l]&&(e.checked=!0)})):"body__skin"==e.id?($(".testDemo__title").text("Skin Symptoms"),$(".container .boxes").html('<div class="row"> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Rash" id="symptom_0" /> <label class="form-check-label" for="Rash"> Rash </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Blisters" id="symptom_0" /> <label class="form-check-label" for="Blisters"> Blisters </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Sores" id="symptom_0" /> <label class="form-check-label" for="Sores"> Sores </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Dry Skin" id="symptom_0" /> <label class="form-check-label" for="Dry Skin"> Dry Skin </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Bulls-Eye Rash" id="symptom_0" /> <label class="form-check-label" for="Bulls-Eye Rash"> Bulls-Eye Rash </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Scabs" id="symptom_0" /> <label class="form-check-label" for="Scabs"> Scabs </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Sweating" id="symptom_0" /> <label class="form-check-label" for="Sweating"> Sweating </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Ulcers" id="symptom_0" /> <label class="form-check-label" for="Ulcers"> Ulcers </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Pins and Needles" id="symptom_0" /> <label class="form-check-label" for="Pins and Needles"> Pins and Needles </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Night Sweats" id="symptom_0" /> <label class="form-check-label" for="Night Sweats"> Night Sweats </label> </div> </div> </div>'),document.querySelectorAll("input").forEach(function(e){for(var l=0;l<t.length;l++)e.value==t[l]&&(e.checked=!0)})):"body__general"==e.id&&($(".testDemo__title").text("General Symptoms"),$(".container .boxes").html('<div class="row"> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Tiredness" id="symptom_0" /> <label class="form-check-label" for="Tiredness"> Tiredness </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Loss of Appetite" id="symptom_0" /> <label class="form-check-label" for="Loss of Appetite"> Loss of Appetite </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Weight Loss" id="symptom_0" /> <label class="form-check-label" for="Weight Loss"> Weight Loss </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Body Aches" id="symptom_0" /> <label class="form-check-label" for="Body Aches"> Body Aches </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Extreme Thirst" id="symptom_0" /> <label class="form-check-label" for="Extreme Thirst"> Extreme Thirst </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Heart Attack" id="symptom_0" /> <label class="form-check-label" for="Heart Attack"> Heart Attack </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Chills" id="symptom_0" /> <label class="form-check-label" for="Chills"> Chills </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Muscle Aches" id="symptom_0" /> <label class="form-check-label" for="Muscle Aches"> Muscle Aches </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Joint Pain" id="symptom_0" /> <label class="form-check-label" for="Joint Pain"> Joint Pain </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Muscle Pain" id="symptom_0" /> <label class="form-check-label" for="Muscle Pain"> Muscle Pain </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="General Body Pain" id="symptom_0" /> <label class="form-check-label" for="General Body Pain"> General Body Pain </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Stiffness in Joints" id="symptom_0" /> <label class="form-check-label" for="Stiffness in Joints"> Stiffness in Joints </label> </div> </div> <div class="col-4"> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Green/Yellow Mucus" id="symptom_0" /> <label class="form-check-label" for="Green/Yellow Mucus"> Green/Yellow Mucus </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Muscle Spasms" id="symptom_0" /> <label class="form-check-label" for="Muscle Spasms"> Muscle Spasms </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Seizures" id="symptom_0" /> <label class="form-check-label" for="Seizures"> Seizures </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Decreased Range of Motion" id="symptom_0" /> <label class="form-check-label" for="Decreased Range of Motion"> Decreased Range of Motion </label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" value="Sleep Deprivation" id="symptom_0" /> <label class="form-check-label" for="Sleep Deprivation"> Sleep Deprivation </label> </div> </div> </div>'),document.querySelectorAll("input").forEach(function(e){for(var l=0;l<t.length;l++)e.value==t[l]&&(e.checked=!0)}))}function changeColorButton(e){$("#body__general").css({"background-color":"transparent",color:"#6c63ff"}),$("#body__skin").css({"background-color":"transparent",color:"#6c63ff"}),e.classList.contains("active")&&$(e).css({"background-color":"#6c63ff",color:"white"})}function addItem(e){var t,l;l="",void 0!==(t=localStorage.getItem("cart"))&&(l=t.concat(e)),localStorage.setItem("cart",l),setCartNumber()}function removeItem(e){var t,l;l=localStorage.getItem("cart"),"Symptoms Test"==(t=e.id)?l=l.replace("Symptoms_Test ",""):"Medical Dashboard"==t?l=l.replace("Medical_Dashboard ",""):"Production"==t?l=l.replace("Production ",""):"Publication"==t?l=l.replace("Publication ",""):"Telemedicine"==t&&(l=l.replace("Telemedicine ","")),localStorage.setItem("cart",l),setCartNumber(),location.reload()}function setCartNumber(){var e,t,l;e=document.getElementById("cartNum"),null!==(t=localStorage.getItem("cart"))?(l=t.split(" ")).length>1?(""!=l[l.length-1]&&" "!=l[l.length-1]||l.pop(),e.innerHTML=l.length):" "==l[0]||""==l?e.innerHTML=0:e.innerHTML=1:e.innerHTML=0}function addToCart(){document.querySelectorAll(".cart-check-container").forEach(e=>{e.addEventListener("click",t=>{null==localStorage.getItem("cart")&&localStorage.setItem("cart",[]),"symptomsTestCart"==e.id&&(localStorage.getItem("cart").includes("Symptoms_Test")?Swal.fire({title:"Alert",text:"Symptoms Test is already in your cart!",icon:"warning",confirmButtonColor:"#7C8EC8"}):addItem("Symptoms_Test ")),"telemedicineCart"==e.id&&(localStorage.getItem("cart").includes("Telemedicine")?Swal.fire({title:"Alert",text:"Telemedicine is already in your cart!",icon:"warning",confirmButtonColor:"#7C8EC8"}):addItem("Telemedicine ")),"productionCart"==e.id&&(localStorage.getItem("cart").includes("Production")?Swal.fire({title:"Alert",text:"Production is already in your cart!",icon:"warning",confirmButtonColor:"#7C8EC8"}):addItem("Production ")),"medicalDashboardCart"==e.id&&(localStorage.getItem("cart").includes("Medical_Dashboard")?Swal.fire({title:"Alert",text:"Medical Dashboard is already in your cart!",icon:"warning",confirmButtonColor:"#7C8EC8"}):addItem("Medical_Dashboard ")),"publicationCart"==e.id&&(localStorage.getItem("cart").includes("Publication")?Swal.fire({title:"Alert",text:"Publication is already in your cart!",icon:"warning",confirmButtonColor:"#7C8EC8"}):addItem("Publication "))})})}function reviewItems(){if(null!=document.getElementById("items")){setCartNumber();var e=[];null==localStorage.getItem("cart")&&localStorage.setItem("cart",[]),localStorage.getItem("cart").includes("Symptoms_Test")&&e.push("Symptoms Test"),localStorage.getItem("cart").includes("Medical_Dashboard")&&e.push("Medical Dashboard"),localStorage.getItem("cart").includes("Publication")&&e.push("Publication"),localStorage.getItem("cart").includes("Production")&&e.push("Production"),localStorage.getItem("cart").includes("Telemedicine")&&e.push("Telemedicine"),e.forEach(e=>{$("#items").append(`<span class='cart__item' id='${e} item'><span class='cart__item_name'>${e}</span><span class='cart__item_x' onclick='removeItem(this)' id='${e}'> x </span></span>`)})}}function main(){changeNav(),setCartNumber(),reviewItems()}document.addEventListener("DOMContentLoaded",function(){main()});

function scrollToOutput(clr) {

    document.documentElement.style.setProperty('--focus-clr', clr);

    document.getElementById("outputDiv").scrollIntoView({ behavior: 'smooth', block: 'center' });

    if (!document.getElementById("outputDiv").classList.contains("focus")) {

        document.getElementById("outputDiv").classList.add("focus");

        setTimeout(e => {
            document.getElementById("outputDiv").classList.remove("focus");
        }, 200)

    }
};

// Define funtion to get calculated Age
function calculateAge() {

    // Convert input data to usable format  
    let dob = new Date(document.getElementById("dob").value);
    let day = dob.getDate();
    let month = dob.getMonth();
    let year = dob.getFullYear();

    // Getting current date and calculating the difference
    let now = new Date(document.getElementById("cDate").value);
    let yearDiff = now.getFullYear() - year;
    let monthDiff = now.getMonth() - month;
    let dateDiff = now.getDate() - day;


    // Calculating the Age
    if (yearDiff < 0) console.log("invalid date");
    else if (monthDiff > 0) {
        console.log(yearDiff);
    } else if (monthDiff === 0 && dateDiff >= 0) {
        console.log(yearDiff);
    } else {
        yearDiff = yearDiff - 1;
        if (monthDiff <= 0)
            if (dateDiff > 0) monthDiff = 12 + monthDiff;
            else monthDiff = 11 - monthDiff;
    }
    if (dateDiff < 0) {
        dateDiff = 30 + dateDiff;
        monthDiff -= 1;
    }


    // Show calculated age as output
    // and invalid if wrong input is given
    if (yearDiff < 0) {

        document.getElementById("outputDiv").innerHTML = `<h4 class="primary-color">Invalid Date</h4>`;
        scrollToOutput("red")

    } else {
        document.getElementById("outputDiv").innerHTML = `
    <h4>
    <span>Your current Age is</span>
    <hr>
    <span><span id="y" class="primary-color">${yearDiff}</span> years </span>
    <span><span id="m" class="primary-color">${monthDiff}</span> months </span>
    <span><span id="d" class="primary-color">${dateDiff}</span> days.</span>
    </h4>`;
        scrollToOutput("var(--primary-color)")
    }
};

function resetForm() {

    // Get today's date as a string in YYYY-MM-DD format
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
    const day = String(today.getDate()).padStart(2, '0'); // Add leading zero for single-digit days

    const formattedDate = year + "-" + month + "-" + day;

    document.getElementById("cDate").value = formattedDate;

    document.getElementById("outputDiv").innerHTML = "";

    if (document.getElementById("outputDiv").classList.contains("focus")) {
        document.getElementById("outputDiv").classList.remove("focus");
    }
}

resetForm();


// // Code to Limit target date input
// document.getElementById("dob").addEventListener("change", e => {
//     document.getElementById("cDate").setAttribute('min', e.srcElement.value);
// })

// // Code to Limit dob date input
// document.getElementById("cDate").addEventListener("change", e => {
//     document.getElementById("cDate").setAttribute('max', e.srcElement.value);
// })
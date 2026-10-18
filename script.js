function showMemberCard(name, age, email, phone, plan) {

      let librarySections = [
        "Fiction",
        "Science",
        "History",
        "Technology",
        "Children"
    ];

  console.log("Library Sections:");

    for (let i = 0; i < librarySections.length; i++) {
        console.log(librarySections[i]);
    }

     let category = "";
  
    for (let i = 0; i < 1; i++) {
        if (age < 13) {
            category = "Junior";
        } else {
            category = "Regular";
        }
    }

    let fee = (plan === "Basic") ? 500
            : (plan === "Silver") ? 1000
            : 1500;

    document.getElementById("output").innerHTML =
        "<h2>Membership Card</h2>" +
        "Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
       "Email: " + email + "<br>" +
        "Phone: " + phone + "<br>" +
        "Category: " + category + "<br>" +
        "Plan: " + plan + "<br>" +
        "Fee: " + fee + " tk";
}

document.getElementById("memberForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("fullname").value;

      let age = document.getElementById("age").value;

    let email = document.getElementById("email").value;

   let phone = document.getElementById("phone").value;

    let plan = document.querySelector(
        'input[name="plan"]:checked'
    ).value;

    showMemberCard(
        name,
        age,
        email,
        phone,
        plan
    )
	;
}

);
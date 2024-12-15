const accountBalanceEl = document.getElementById("account-balance");
const donationButton = document.getElementById("donation-button");
const historyButton = document.getElementById("history-button");
const donationSection = document.getElementById("donation-section");
const historySection = document.getElementById("history-section");
const historyList = document.getElementById("history-list");


// added donetion container 
donationButton.addEventListener("click", () => {
    // Add active state to donation button
    donationButton.classList.add("bg-green-500");
    donationButton.classList.remove("bg-gray-200");
  
    // Remove active state from history button
    historyButton.classList.remove("bg-green-500");
    historyButton.classList.add("bg-gray-200");
  
    // Show Donation section and hide History section
    donationSection.classList.remove("hidden");
    historySection.classList.add("hidden");
  });
  
  historyButton.addEventListener("click", () => {
    // Add active state to history button
    historyButton.classList.add("bg-green-500");
    historyButton.classList.remove("bg-gray-500");
  
    // Remove active state from donation button
    donationButton.classList.remove("bg-green-500");
    donationButton.classList.add("bg-gray-500");
  
    // Show History section and hide Donation section
    donationSection.classList.add("hidden");
    historySection.classList.remove("hidden");
  });
  

// Function to handle donations
function handleDonation(button) {
  console.log('button',button)
  const article = button.parentNode;
  console.log(article)

   // Get the specific input and total donation elements for this article
   const donationInput = article.querySelector(".donation-input");
   const donateTotalEl = article.querySelector(".donate-total");
 
   // Get the donation amount from the input field
   const donationAmount = parseFloat(donationInput.value);
 
   // Validation checks
   if (!donationInput.value || isNaN(donationAmount) || donationAmount <= 0) {
     alert("Please enter a valid donation amount.");
     return; // Stop further execution
   }
 
   if (donationAmount > parseFloat(accountBalanceEl.innerText)) {
     alert("Insufficient balance. Please enter an amount within your account balance.");
     return; // Stop further execution
   }
 
   // Update the donation total for this article
   const newTotalDonation = parseFloat(donateTotalEl.innerText) + donationAmount;
   donateTotalEl.innerText = newTotalDonation;
 
   // Update the global account balance
   const newBalance = parseFloat(accountBalanceEl.innerText) - donationAmount;
   accountBalanceEl.innerText = newBalance;
  
   // Alert success message
   alert("Donation successful!");
 
   // Clear the input field
   donationInput.value = " ";


   const childDiv = document.createElement("div")
   childDiv.innerHTML=`
    <div class=" p-5 bg-slate-200 mt-10 ">
        <h2><span>0</span>Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
        <p>time</p>
      </div>
   `
      
}

// Attach event listeners to all donation buttons
const donateButtons = document.querySelectorAll(".donet-button");

donateButtons.forEach((button) => {
  button.addEventListener("click", () => handleDonation(button));

});
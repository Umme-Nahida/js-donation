// Get the accordion container
const accordionContainer = document.getElementById("accordionContainer");

// Questions and answers data
const accordionData = [
  {
    question: "What is the Document Object Model (DOM)?",
    answer: "The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate the document's structure, style, and content."
  },
  {
    question: "How do you select an element from the DOM?",
    answer: "You can select an element from the DOM using methods like `document.querySelector`, `document.getElementById`, or `document.getElementsByClassName`."
  },
  {
    question: "What is event delegation in the context of the DOM, and why is it useful?",
    answer: "Event delegation is a technique where you attach a single event listener to a parent element to handle events from its child elements. It's useful for dynamically added elements and improves performance by reducing the number of event listeners."
  },
  {
    question: "How do you manipulate an element's attributes and styles using the DOM?",
    answer: "You can manipulate attributes using methods like `setAttribute` and `getAttribute`, and you can change styles by accessing the `style` property of an element, e.g., `element.style.color = 'red'`."
  }
];

// Function to create the accordion
function createAccordion() {
  accordionData.forEach((item, index) => {
    // Create an accordion item container
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("border", "rounded", "overflow-hidden");

    // Accordion header (question)
    const header = document.createElement("div");
    header.classList.add(
      "bg-gray-200",
      "p-4",
      "cursor-pointer",
      "font-medium",
      "text-gray-700",
      "hover:bg-gray-300",
      "transition"
    );
    header.textContent = item.question;

    // Accordion content (answer)
    const content = document.createElement("div");
    content.classList.add(
      "p-4",
      "bg-gray-100",
      "text-gray-600",
      "hidden"
    );
    content.textContent = item.answer;

    // Add toggle functionality
    header.addEventListener("click", () => {
      // Toggle the visibility of the content
      content.classList.toggle("hidden");
    });

    // Append header and content to the accordion item
    accordionItem.appendChild(header);
    accordionItem.appendChild(content);

    // Append the accordion item to the container
    accordionContainer.appendChild(accordionItem);
  });
}

// Call the function to create the accordion
createAccordion();

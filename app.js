let userName;
let qIndex = 0;
let currentAnswer;
let currentScore = 0;

const questionLIst = [
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Processing Unit",
      "Control Processing Unit",
      "Centralized Programming Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "What is the primary function of RAM in a computer?",
    options: [
      "Storing files and documents",
      "Executing program instructions",
      "Displaying graphics",
      "Connecting to the internet",
    ],
    answer: "Executing program instructions",
  },
  {
    question:
      "Which type of computer memory is non-volatile and retains data even when powered off?",
    options: ["RAM", "ROM", "Cache", "Virtual Memory"],
    answer: "ROM",
  },
  {
    question: "What is the purpose of an operating system?",
    options: [
      "Running software applications",
      "Connecting to the internet",
      "Displaying images and videos",
      "Managing computer resources",
    ],
    answer: "Managing computer resources",
  },
  {
    question:
      "Which technology is used to connect devices wirelessly over short distances?",
    options: ["Bluetooth", "Ethernet", "Wi-Fi", "Fiber optic"],
    answer: "Bluetooth",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Terminal Markup Language",
    ],
    answer: "Hypertext Markup Language",
  },
  {
    question:
      "Which programming language is commonly used for web development?",
    options: ["Python", "Java", "C++", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What is the function of a router in a computer network?",
    options: [
      "Sending and receiving emails",
      "Transferring data between networks",
      "Running software applications",
      "Providing power to devices",
    ],
    answer: "Transferring data between networks",
  },
  {
    question:
      "Which technology is used to convert digital signals to analog and vice versa for transmission over telephone lines?",
    options: ["Ethernet", "Modem", "Router", "Switch"],
    answer: "Modem",
  },
  {
    question: "What is the purpose of a firewall in network security?",
    options: [
      "Blocking unwanted websites",
      "Encrypting data transmissions",
      "Preventing unauthorized access",
      "Scanning for viruses",
    ],
    answer: "Preventing unauthorized access",
  },
  {
    question:
      "Which type of storage device provides the fastest access to data?",
    options: [
      "Hard disk drive (HDD)",
      "Solid-state drive (SSD)",
      "Optical disc drive (ODD)",
      "USB flash drive",
    ],
    answer: "Solid-state drive (SSD)",
  },
  {
    question: "What is the full form of URL?",
    options: [
      "Uniform Resource Locator",
      "Universal Reference Link",
      "Unified Routing Language",
      "User Requested Link",
    ],
    answer: "Uniform Resource Locator",
  },
  {
    question:
      "Which technology allows multiple users to simultaneously access a single computer or server remotely?",
    options: [
      "Virtual Private Network (VPN)",
      "Remote Desktop Protocol (RDP)",
      "File Transfer Protocol (FTP)",
      "Secure Shell (SSH)",
    ],
    answer: "Virtual Private Network (VPN)",
  },
  {
    question: "What is the purpose of an antivirus software?",
    options: [
      "Blocking unwanted websites",
      "Encrypting data transmissions",
      "Preventing unauthorized access",
      "Detecting and removing malware",
    ],
    answer: "Detecting and removing malware",
  },
  {
    question:
      "Which technology is used to store and retrieve data over the internet?",
    options: [
      "Cloud computing",
      "Virtual reality",
      "Artificial intelligence",
      "Blockchain",
    ],
    answer: "Cloud computing",
  },
  {
    question: "What is the purpose of a graphic processing unit (GPU)?",
    options: [
      "Running software applications",
      "Displaying images and videos",
      "Transferring data between networks",
      "Providing power to devices",
    ],
    answer: "Displaying images and videos",
  },
  {
    question:
      "Which technology is used for wireless communication between devices in close proximity?",
    options: [
      "Near Field Communication (NFC)",
      "Radio Frequency Identification (RFID)",
      "Global Positioning System (GPS)",
      "Universal Serial Bus (USB)",
    ],
    answer: "Near Field Communication (NFC)",
  },
  {
    question: "What is the purpose of a domain name?",
    options: [
      "Identifying a website's IP address",
      "Storing website files and databases",
      "Encrypting website traffic",
      "Hosting email services",
    ],
    answer: "Identifying a website's IP address",
  },
  {
    question:
      "Which programming language is often used for data analysis and scientific computing?",
    options: ["Python", "Java", "C++", "Ruby"],
    answer: "Python",
  },
  {
    question: "What is the purpose of a cache in computer systems?",
    options: [
      "Storing frequently accessed data for faster retrieval",
      "Running software applications",
      "Displaying graphical user interfaces",
      "Connecting to the internet",
    ],
    answer: "Storing frequently accessed data for faster retrieval",
  },
  {
    question:
      "Which technology is used for long-distance communication using pulses of light?",
    options: ["Fiber optic", "Ethernet", "Bluetooth", "Wi-Fi"],
    answer: "Fiber optic",
  },
];

document.querySelector("#enter").addEventListener("click", () => {
  userName = document.querySelector("#name").value;
  document.querySelector("#loginScreen").classList.add("d-none");
  callQuestions(qIndex);
});

function callQuestions(index) {
  let question = questionLIst[index];
  document.querySelector("#qCount").innerHTML = `Question #${index + 1}`;
  document.querySelector("#question").innerHTML = `${question.question}`;
  document.querySelector("#optionsPlaces").innerHTML = question.options
    .map(
      (option, i) =>
        `<div class="col-6 mt-4"><input type="button" onclick="selectMe(${i})" id="option-${i}" class="btn btn-primary btn-lg d-block w-100" value="${option}"></div>`
    )
    .join(" ");
}

function selectMe(index) {
  let buttons = document.querySelectorAll("input[type=button]");
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.classList.remove("btn-success");
  }
  document.querySelector(`#option-${index}`).classList.add("btn-success");
  currentAnswer = index;
}

document.querySelector("#next").addEventListener("click", () => {
  next();
});

function next() {
  let a = questionLIst[qIndex].options[currentAnswer];
  if (a == questionLIst[qIndex].answer) {
    currentScore++;
  }
  if (qIndex >= 19) {
    return alert(`Well done ${userName}! You scored ${currentScore}`);
  } else {
    qIndex++;
    callQuestions(qIndex);
  }
}

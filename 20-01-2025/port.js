
const outputElement = document.getElementById("output");
const commandInput = document.getElementById("commandInput");


const commands = {
  help: "Available commands:\nwhoami - About me\nskills - My skills\nprojects - Projects list\nctfs - CTF achievements\ncontact - Contact info\nclear - Clear the terminal\nexit - Goodbye message",
  whoami: "Name: Philip James AKA \"The Shadow\"\nRole: Cybersecurity Enthusiast \nInterests: CTFs, Quantum Physics, Psychology",
  skills: "Skills:\n- Programming: Python, Web-Dev\n- Tools: Nmap, Metasploit, Wireshark",
  projects: "Projects:\n1. Rail Monitoring System\n2. Gesture-Based Keylogger\n3. Music Tempo Sequencer\n4. Basic CTF Crypto Toolkit",
  ctfs: "CTF Achievements:\n1. 4th place - IntraCollege CTF <-> TamilCTF\n2. 4th place - SRM State Level CTF",
  contact: "Contact Info:\nEmail: shadow@greyhatmail.com\nGitHub: github.com/TheShadows\nLinkedIn: linkedin.com/in/shadow-profile",
  clear: "",
  exit: "Goodbye! Thanks for visiting my portfolio.",
  su: "Trying to Switch User .... ? Decode this\nL2JvbW1ha3V0dHkucG5n"
};



// Function to handle commands
function handleCommand(command) {
  if (command === 'su') {
    // Provide base64 string to decode
    return `To switch user, decode this base64 string: L2JvbW1ha3V0dHkucG5n`;
  }
  
  // Check if the user enters the decoded command (which is '/bommakutti.png')
  if (command === '/bommakutty.png') {
    const decodedLink = "http://192.168.1.4:8080/bommakutty.png";
    // Introduce a short delay before redirection to ensure all code execution completes
    setTimeout(() => {
      window.location.href = decodedLink;
    }, 100);
    return `Redirecting to the image...`;
  }
  

  // Check for known commands in the `commands` object
  if (commands[command]) {
    return commands[command];
  }

  return `Command not found: ${command}\nType 'help' for a list of available commands.`;
}




// Listen for Enter key
commandInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const command = commandInput.value.trim();
    if (command === "clear") {
      outputElement.innerHTML = "";
    } else {
      const result = handleCommand(command);
      outputElement.innerHTML += `> ${command}\n${result}\n\n`;
    }
    commandInput.value = "";
    outputElement.scrollTop = outputElement.scrollHeight;
  }
});

// how do you switch user ? They use su for switching user ....

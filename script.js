document.addEventListener("DOMContentLoaded", function () {
    const text = "Brandon McBride";
    const speed = 100; // Typing speed in milliseconds
    let index = 0;
  
    function typeWriter() {
      if (index < text.length) {
        document.getElementById("typewriter").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter();
  });
  
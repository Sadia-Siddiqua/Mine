// Get the elements
const dudu = document.getElementById('dudu');
const giftBox = document.getElementById('giftBox');

// Start the DUDU animation when the page loads
window.onload = function() {
  // Move DUDU from left to center
  dudu.style.left = '50%';  // Move DUDU to the center over 5 seconds

  // After 5 seconds (when DUDU reaches the center), show the pink box
  setTimeout(function() {
    giftBox.style.display = 'block';  // Make the gift box visible
    giftBox.style.left = '50%';  // Move the gift box to the center over 5 seconds
  }, 5000); // Trigger this after 5 seconds
};
// Get balloon elements
const balloons = document.querySelectorAll('.balloon');

// Function to animate the balloons coming out of the box
function animateBalloons() {
  // Iterate through each balloon and apply animation with a slight delay between each
  balloons.forEach((balloon, index) => {
    setTimeout(() => {
      balloon.classList.add('balloon-animate');  // Add the animation class to move the balloons
    }, index * 150);  // Much faster stagger: 150ms delay between each balloon
  });
}

// Trigger the balloon animation after the gift box appears
setTimeout(function() {
  animateBalloons();  // Animate the balloons coming out of the box and moving left
}, 6000);  // Start the balloon animation faster, after 6 seconds (reduce waiting time after DUDU appears)
// Get the BUBU element
const bubu = document.getElementById('bubu');

// Function to animate BUBU coming from the left to the front of the balloons
function animateBubu() {
  bubu.style.left = '12%';  // Move BUBU to 1% from the left side
}

// Trigger BUBU's movement after the balloons have appeared
setTimeout(function() {
  animateBubu();  // Animate BUBU to move in front of the balloons
}, 7000);  // Start this 1 second after the balloons appear, so around 7 seconds in total
// Function to animate DUDU moving beside BUBU
function animateDudu() {
  dudu.style.left = '22%';  // Move DUDU to 22% from the left side
}

// Trigger DUDU's movement after BUBU has moved
setTimeout(function() {
  animateDudu();  // Start DUDU's movement
}, 10000);  // Start this immediately after BUBU's movement (BUBU finishes at 7 seconds, wait for 3 seconds)
// Function to animate DUDU moving 10% up from his current position
function animateDuduUp() {
  dudu.style.top = '36%';  // Move DUDU 10% up from the original center (top 50% to top 36%)
}

// Trigger DUDU's upward movement after he moves beside BUBU
setTimeout(function() {
  animateDuduUp();  // Start DUDU's upward movement
}, 13000);  // Start this 3 seconds after DUDU moves beside BUBU (DUDU finishes at 10 seconds, so start at 13 seconds)
// Get the message box element
const messageBox = document.getElementById('messageBox');

// Function to animate the message box appearing
function showMessageBox() {
  messageBox.classList.add('message-box-show');  // Make the message box appear
}

// Function to hide the message box after 10 seconds
function hideMessageBox() {
  messageBox.classList.remove('message-box-show');  // Hide the message box
}

// Trigger the message box to appear after Step 5
setTimeout(function() {
  showMessageBox();  // Show the message box
  setTimeout(hideMessageBox, 5000);  // Hide the message box after 10 seconds
}, 14000);  // Start this 1 second after DUDU moves up (Step 5 ends at 13 seconds, so start at 14 seconds)
// Get the second message box element
const messageBox2 = document.getElementById('messageBox2');

// Function to show the second message box
function showMessageBox2() {
  messageBox2.classList.add('message-box-2-show');  // Show the second message box
}

// Function to hide the second message box after 7 seconds
function hideMessageBox2() {
  messageBox2.classList.remove('message-box-2-show');  // Hide the second message box
}

// Trigger the second message box right after the first one disappears
setTimeout(function() {
  showMessageBox2();  // Show the second message box
  // Hide the second message box after 7 seconds
  setTimeout(function() {
    hideMessageBox2();  // Hide the second message box
  }, 7000);  // Second message box stays for 7 seconds
}, 21000);  // Start this immediately after the first message box disappears (14 seconds + 7 seconds = 21 seconds)
// Get the third message box element
const messageBox3 = document.getElementById('messageBox3');

// Function to show the third message box
function showMessageBox3() {
  messageBox3.classList.add('message-box-3-show');  // Show the third message box
}

// Function to hide the third message box after 7 seconds
function hideMessageBox3() {
  messageBox3.classList.remove('message-box-3-show');  // Hide the third message box
}

// Trigger the third message box immediately after Step 7 completes
setTimeout(function() {
  showMessageBox3();  // Show the third message box
  // Hide the third message box after 7 seconds
  setTimeout(function() {
    hideMessageBox3();  // Hide the third message box
  }, 7000);  // Third message box stays for 7 seconds
}, 29000);  // Start this after Step 7 finishes (22 seconds + 7 seconds = 29 seconds)
// Get the fourth message box element
const messageBox4 = document.getElementById('messageBox4');

// Function to show the fourth message box
function showMessageBox4() {
  messageBox4.classList.add('message-box-4-show');  // Show the fourth message box
}

// Function to hide the fourth message box after 5 seconds
function hideMessageBox4() {
  messageBox4.classList.remove('message-box-4-show');  // Hide the fourth message box
}

// Trigger the fourth message box immediately after Step 8 completes
setTimeout(function() {
  showMessageBox4();  // Show the fourth message box
  // Hide the fourth message box after 5 seconds
  setTimeout(function() {
    hideMessageBox4();  // Hide the fourth message box
  }, 5000);  // Fourth message box stays for 5 seconds
}, 36000);  // Start this after Step 8 finishes (29 seconds + 7 seconds = 36 seconds)
// Get the ring element
const ring = document.getElementById('ring');

// Function to animate the ring popping out of the gift box (Step 10)
function popOutRing() {
  ring.classList.add('ring-pop-out');  // Make the ring pop out to the specified position
}

// Trigger the ring pop-out immediately after the fourth message box disappears
setTimeout(function() {
  popOutRing();  // Show the ring immediately after the fourth message box
}, 41000);  // Start this immediately after the fourth message box (36 seconds + 5 seconds = 41 seconds)
// Function to animate the ring moving to 50% from the bottom and 30% from the left
function moveRingToNewPosition() {
  ring.classList.add('ring-move');  // Move the ring to the new position
}

// Trigger the ring movement right after Step 10 completes
setTimeout(function() {
  moveRingToNewPosition();  // Start the ring's movement to its new position
}, 43000);  // Start this immediately after the previous step ends (41 seconds + 2 seconds for the last step = 43 seconds)
// Get the new ring element
const newRing = document.getElementById('newRing');

// Function to replace the current ring with the new ring after the movement ends
function replaceWithNewRing() {
  // Hide the old ring
  ring.style.opacity = '0';
  ring.style.visibility = 'hidden';

  // Position the new ring exactly where the old one was
  newRing.style.left = ring.style.left;
  newRing.style.top = ring.style.top;

  // Make the new ring appear and move 8% to the left over 3 seconds
  setTimeout(function() {
    newRing.classList.add('new-ring-move');  // Move the new ring 8% to the left
  }, 500);  // Small delay to ensure the new ring is visible
}

// Trigger the replacement and new movement after the previous ring finishes moving
setTimeout(function() {
  replaceWithNewRing();  // Replace the ring with the new one and start the movement
}, 45000);  // Adjust this timing based on when the previous step ends (43s + 2s = 45s)
// Get the fifth message box element
const messageBox5 = document.getElementById('messageBox5');

// Function to show the fifth message box
function showMessageBox5() {
  messageBox5.classList.add('message-box-5-show');  // Show the fifth message box
}

// Function to hide the fifth message box after 7 seconds
function hideMessageBox5() {
  messageBox5.classList.remove('message-box-5-show');  // Hide the fifth message box
}

// Trigger the fifth message box after Step 11 completes (after the ring movements)
setTimeout(function() {
  showMessageBox5();  // Show the fifth message box
  // Hide the fifth message box after 7 seconds
  setTimeout(function() {
    hideMessageBox5();  // Hide the fifth message box
  }, 7000);  // Fifth message box stays for 7 seconds
}, 48000);  // Start this immediately after the previous steps (45s + 3s = 48s)
// Get the sixth message box element
const messageBox6 = document.getElementById('messageBox6');

// Function to show the sixth message box
function showMessageBox6() {
  messageBox6.classList.add('message-box-6-show');  // Show the sixth message box
}

// Function to hide the sixth message box after 7 seconds
function hideMessageBox6() {
  messageBox6.classList.remove('message-box-6-show');  // Hide the sixth message box
}

// Trigger the sixth message box immediately after the fifth message disappears
setTimeout(function() {
  showMessageBox6();  // Show the sixth message box
  // Hide the sixth message box after 7 seconds
  setTimeout(function() {
    hideMessageBox6();  // Hide the sixth message box
  }, 7000);  // Sixth message box stays for 7 seconds
}, 56000);  // Start this immediately after the fifth message box (48s + 7s = 55s)
// Get all elements that should disappear except the new picture
const allElements = document.querySelectorAll('body > *:not(#newPicture)');  // Select all elements except the new picture
const newPicture = document.getElementById('newPicture');  // New image that will be shown

// Function to hide all elements and show the new picture
function hideAllAndShowPicture() {
  allElements.forEach(el => el.classList.add('hide-all-elements'));  // Hide all elements
  newPicture.style.display = 'block';  // Show the new picture
}

// Trigger the hiding of elements and showing the picture after the last step
setTimeout(function() {
  hideAllAndShowPicture();  // Hide everything and show the new picture
}, 62000);  // Adjust the timing based on when you want this to happen

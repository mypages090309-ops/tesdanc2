let currentLesson = 1;  // Start at lesson 1

// Function to start lesson
function startLesson() {
  document.querySelector('.course-overview').style.display = 'none';
  document.getElementById('lesson-container').style.display = 'block';
  loadLessonContent();
}

// Function to load lesson content dynamically
function loadLessonContent() {
  const lessonContent = [
    "In this lesson, we will go over the basic steps to disassemble and reassemble a computer unit. ...",
    "This lesson teaches how to create a bootable USB drive using Rufus for OS installation. ...",
    "This lesson explains the configuration of computer systems, including networks, software, etc. ...",
    "Learn how to diagnose and troubleshoot common hardware and software issues. ...",
    "Learn how to install and configure operating systems, such as Windows and Linux, on a computer system. ...",
    "This lesson covers the setup of basic networking configurations for computers and other devices. ...",
    "Learn about the importance of maintaining your computer hardware and software for optimum performance. ...",
    "This lesson teaches how to install and configure printers, scanners, and other peripherals. ...",
    "Learn the best practices for system recovery and backing up your data. ...",
    "This lesson explains how to configure BIOS/UEFI settings and understand CMOS battery functions. ...",
    "This lesson focuses on your final project for COC1 and earning your certification. ..."
  ];

  document.querySelector('.lesson-container h1').textContent = `Lesson ${currentLesson}`;
  document.querySelector('.lesson-container p').textContent = lessonContent[currentLesson - 1];
}

// Next Lesson function
function nextLesson() {
  if (currentLesson < 11) {
    currentLesson++;
    loadLessonContent();
  }
}

// Previous Lesson function
function previousLesson() {
  if (currentLesson > 1) {
    currentLesson--;
    loadLessonContent();
  }
}

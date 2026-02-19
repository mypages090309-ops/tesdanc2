let currentLesson = 1;  // Start at lesson 1

// Function to start lesson (when user clicks on Start)
function startLesson() {
  document.querySelector('.course-overview').style.display = 'none';
  document.querySelector('.lesson-container').style.display = 'block';
  loadLessonContent();
}

// Function to load lesson content dynamically
function loadLessonContent() {
  const lessonContent = [
    {
      title: "Assembly and Disassembly of Computer Unit",
      content: "In this lesson, we will go over the basic steps to disassemble and reassemble a computer unit. ...",
    },
    {
      title: "Create Bootable USB using Rufus",
      content: "This lesson teaches how to create a bootable USB drive using Rufus for OS installation. ...",
    },
    {
      title: "Configuring Computer Systems",
      content: "This lesson explains the configuration of computer systems, including networks, software, etc. ...",
    },
    {
      title: "Troubleshooting and Diagnostics",
      content: "Learn how to diagnose and troubleshoot common hardware and software issues. ...",
    },
    {
      title: "Install and Configure OS",
      content: "Learn how to install and configure operating systems, such as Windows and Linux, on a computer system. ...",
    },
    {
      title: "Setting Up Computer Networks",
      content: "This lesson covers the setup of basic networking configurations for computers and other devices. ...",
    },
    {
      title: "Computer Maintenance",
      content: "Learn about the importance of maintaining your computer hardware and software for optimum performance. ...",
    },
    {
      title: "Installing Peripheral Devices",
      content: "This lesson teaches how to install and configure printers, scanners, and other peripherals. ...",
    },
    {
      title: "System Recovery and Backup",
      content: "Learn the best practices for system recovery and backing up your data. ...",
    },
    {
      title: "Understanding BIOS and CMOS Settings",
      content: "This lesson explains how to configure BIOS/UEFI settings and understand CMOS battery functions. ...",
    },
    {
      title: "Final Project and Certification",
      content: "This lesson focuses on your final project for COC1 and earning your certification. ...",
    }
  ];

  // Update lesson title and content
  document.getElementById('lesson-title').textContent = lessonContent[currentLesson - 1].title;
  document.getElementById('lesson-content').textContent = lessonContent[currentLesson - 1].content;
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

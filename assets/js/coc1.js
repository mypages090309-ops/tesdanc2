function loadLesson(lessonId) {
    const lessonTitle = document.getElementById("lesson-title");
    const lessonDetails = document.getElementById("lesson-details");

    if (lessonId === 'lesson1') {
        lessonTitle.textContent = "Assembly and Disassembly of Computer Unit";
        lessonDetails.innerHTML = "<p>This lesson involves assembling and disassembling a computer system, ensuring all components are correctly identified and installed.</p>";
    } else if (lessonId === 'lesson2') {
        lessonTitle.textContent = "Test the Computer Unit and Configure BIOS";
        lessonDetails.innerHTML = "<p>This lesson explains how to test the computer unit and configure BIOS settings, such as boot order, to prepare for OS installation.</p>";
    } else if (lessonId === 'lesson3') {
        lessonTitle.textContent = "Prepare the Bootable USB Installers (Windows Server & 10 Pro)";
        lessonDetails.innerHTML = `
            <h3>Steps to Create a Bootable USB:</h3>
            <ol>
                <li>Install the given OS (Windows 10 Pro / Server 2019) using Rufus.</li>
                <li>Create 2 partitions (C: and D:).</li>
                <li>Use the password <strong>Pass@12345</strong> for (Server Only).</li>
                <li>Install the necessary drivers if applicable.</li>
                <li>Install and share the printer (Server Only).</li>
                <li>Install applications like PDF, VLC, USB Guard, and Winrar on all computers.</li>
            </ol>
        `;
    } else if (lessonId === 'lesson4') {
        lessonTitle.textContent = "Install Drivers & Share Printer (Server Only)";
        lessonDetails.innerHTML = "<p>This lesson covers installing drivers and setting up printer sharing on the server for all computers in the network.</p>";
    } else if (lessonId === 'lesson5') {
        lessonTitle.textContent = "Configure Computer Systems";
        lessonDetails.innerHTML = `
            <h3>Configuration Steps:</h3>
            <ol>
                <li>Turn off firewalls on all computers.</li>
                <li>Enable advanced sharing on all computers.</li>
                <li>Configure remote desktop on all computers.</li>
                <li>Configure Function Discovery Provider (Automatic).</li>
                <li>Configure Function Discovery Resources (Automatic).</li>
                <li>Rename the computers (SERVER: your last name, CLIENT: your first name) in all caps.</li>
                <li>Restart all computers to apply settings.</li>
            </ol>
        `;
    } else if (lessonId === 'lesson6') {
        lessonTitle.textContent = "Turn off Firewalls (All Computers)";
        lessonDetails.innerHTML = "<p>Learn how to turn off firewalls on all computers to enable network communication.</p>";
    } else if (lessonId === 'lesson7') {
        lessonTitle.textContent = "Configure Advanced Sharing (All Computers)";
        lessonDetails.innerHTML = "<p>This lesson covers how to configure advanced sharing settings on all computers to enable file and printer sharing.</p>";
    } else if (lessonId === 'lesson8') {
        lessonTitle.textContent = "Rename Computers (SERVER: your last name, CLIENT: your first name)";
        lessonDetails.innerHTML = "<p>Learn the process of renaming all computers (SERVER: last name, CLIENT: first name) for easier identification on the network.</p>";
    }
}

function closeWindow() {
    window.location.href = "student-dashboard.html"; // Redirect to student dashboard page
}

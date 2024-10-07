// === Floating Nav === //

const floatingNav = document.querySelectorAll(".floating__nav a");

const removeActiveClass = () => {
  floatingNav.forEach((nav) => {
    nav.classList.remove("active");
  });
};

floatingNav.forEach((nav) => {
  nav.addEventListener("click", () => {
    removeActiveClass();
    nav.classList.add("active");
  });
});

// === Resume === //

const resumeRight = document.querySelector(".resume__right");
const experienceBtn = document.querySelector(".experience-btn");
const experienceContent = ` <h4>Experience</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a, architecto laboriosam ab eaque et.
                </p>
                <ul>
                    <li>
                        <h6>2018 - 2019</h6>
                        <h5>Intern</h5>
                        <p>Mobile Telecom Company</p>
                    </li>
                    <li>
                        <h6>2019 - 2021</h6>
                        <h5>Freelance Web Design</h5>
                        <p>Fiverr and Upwork</p>
                    </li>
                    <li>
                        <h6>2021 - 2022</h6>
                        <h5>Frontend Developer</h5>
                        <p>MTN Ghana</p>
                    </li>
                    <li>
                        <h6>2022 - 2024</h6>
                        <h5>Fullstack Freelancer</h5>
                        <p>Self Employed</p>
                    </li>
                </ul>`;
experienceBtn.addEventListener("click", () => {
  resumeRight.innerHTML = experienceContent;
  resumeRight.className = "resume__right";
  experienceBtn.classList.add("primary");

  educationBtn.classList.remove("primary");
  skillsBtn.classList.remove("primary");
  aboutBtn.classList.remove("primary");
});
resumeRight.innerHTML = experienceContent; //Default Resume Content

const educationBtn = document.querySelector(".education-btn");
const educationContent = `<h4>Education</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores.</p>
                <ul>
                    <li>
                        <h5>College Education</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas maiores qui doloremque accusantium atque vero facilis.
                        </p>
                    </li>
                    <li>
                        <h5>Frontend Education</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas maiores qui doloremque accusantium atque vero facilis.
                        </p>
                    </li>
                    <li>
                        <h5>Backend Education</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas maiores qui doloremque accusantium atque vero facilis.
                        </p>
                    </li>
                </ul>`;

educationBtn.addEventListener("click", () => {
  resumeRight.innerHTML = educationContent;
  resumeRight.className = "resume__right education";
  educationBtn.classList.add("primary");

  experienceBtn.classList.remove("primary");
  skillsBtn.classList.remove("primary");
  aboutBtn.classList.remove("primary");
});

const skillsBtn = document.querySelector(".skills-btn");
const skillsContent = `<h4>Skills</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <ul>
                    <li><img src="./assets/react.webp" alt="ReactJS logo"></li>
                    <li><img src="./assets/next.png" alt="NextJS logo"></li>
                    <li><img src="./assets/tailwind.png" alt="Tailwind logo"></li>
                    <li><img src="./assets/prisma.png" alt="Prisma logo"></li>
                    <li><img src="./assets/mongo.jpg" alt="MongoDB logo"></li>
                    <li><img src="./assets/jwt.png" alt="JWT logo"></li>
                    <li><img src="./assets/node.png" alt="NodeJS logo"></li>
                </ul>`;

skillsBtn.addEventListener("click", () => {
  resumeRight.innerHTML = skillsContent;
  resumeRight.className = "resume__right skills";
  skillsBtn.classList.add("primary");

  experienceBtn.classList.remove("primary");
  educationBtn.classList.remove("primary");
  aboutBtn.classList.remove("primary");
});

const aboutBtn = document.querySelector(".about-btn");
const aboutContent = `<h4>About me</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis excepturi quibusdam.</p>
                <ul>
                    <li>
                        <h6>Name:</h6>
                        <h5>Ernest Achiever</h5>
                    </li>
                    <li>
                        <h6>Experience:</h6>
                        <h5>6+ years</h5>
                    </li>
                    <li>
                        <h6>Email:</h6>
                        <h5>youremail@gmail.com</h5>
                    </li>
                    <li>
                        <h6>Nationality:</h6>
                        <h5>Ghanaian</h5>
                    </li>
                    <li>
                        <h6>Freelance & collabs:</h6>
                        <h5>Available</h5>
                    </li>
                    <li>
                        <h6>Language:</h6>
                        <h5>English</h5>
                    </li>
                    <li>
                        <h6>Phone:</h6>
                        <h5>+233557097546</h5>
                    </li>
                    <li>
                        <h6>LinkedIn:</h6>
                        <h5>@yourhandle</h5>
                    </li>
                </ul>`;
aboutBtn.addEventListener("click", () => {
  resumeRight.innerHTML = aboutContent;
  resumeRight.className = "resume__right about";
  aboutBtn.classList.add("primary");

  experienceBtn.classList.remove("primary");
  educationBtn.classList.remove("primary");
  skillsBtn.classList.remove("primary");
});


// === Project === //
const containerEl = document.querySelector(".projects__container");
let mixer = mixitup(containerEl, {
    animation: {
        enable:false
    }
})

mixer.filter('*');
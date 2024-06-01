<template>
  <div id="app" class="main-content">
    <div class="intro-container fade-in">
      <p class="arrow">🡦</p>
      <p class="intro-text">FULL-STACK DEVELOPER <br>& DIGITAL DESIGNER</p>
    </div>
    <div class="carousel-wrapper fade-in">
      <div class="carousel-content" ref="carouselContent">
        <span>Callum Saxon &mdash;&nbsp; </span>
        <span>Callum Saxon &mdash;&nbsp; </span>
        <span>Callum Saxon &mdash;&nbsp; </span>
        <span>Callum Saxon &mdash;&nbsp; </span>
        <span>Callum Saxon &mdash;&nbsp; </span>
        <span>Callum Saxon &mdash;&nbsp; </span>
      </div>
    </div>
    <div class="info-section fade-in">
      <p>FULL-STACK DEVELOPER<br>BASED IN THE MIDLANDS</p>
      <p>SPECIALISING IN<br>MOBILE APP AND WEB DEVELOPMENT</p>
      <p>[SCROLL . . .]</p>
    </div>
    <div class="card-container">
      <div class="vl fade-in"></div>
      <section id="about" class="card about-card">
        <div class="about-content">
          <h1 class="headline">Bringing Your Digital Visions to Life.</h1>
          <div class="about-subcontent">
            <div class="about-image from-left">
              <img src="@/assets/working.png" alt="Working Image">
            </div>
            <div class="about-text from-right">
              <p class="about-paragraph">
                I'm a full-stack software developer with a passion for creating intuitive and impactful digital solutions. Through freelancing, I've honed my skills in transforming complex designs into user-friendly experiences. I'm excited to collaborate on projects that challenge and inspire me.
                <br><br>Let's connect and bring your ideas to life with code! Check out some of my work here!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="vl fade-in"></div>
      <h2 class="projects-title fade-in">Projects.&sup3; </h2>
      <div class="vl fade-in"></div>
      <div class="projects-section fade-in" @mouseleave="hideTooltip">
        <div class="projects-list" @mousemove="handleMouseMove">
          <p class="projects-subtitle">Featured Projects.</p>
          <hr class="divider">
          <div class="project-item fade-in" @click="navigateToProject('pathway-housing')" @mouseover="showTooltip(image1, 'pathway-housing')">
            <p class="project-title">Pathway Housing Solutions - Nottingham's Blue Plaque Exploration</p>
            <p class="project-category">WEB APPLICATION AND DIGITAL DESIGN</p>
            <span class="project-arrow">🡥</span>
          </div>
          <hr class="divider">
          <div class="project-item fade-in" @click="navigateToProject('biocortex')" @mouseover="showTooltip(image2, 'biocortex')">
            <p class="project-title">BioCortex - Carbon Mirror</p>
            <p class="project-category">WEB APPLICATION AND DIGITAL DESIGN</p>
            <span class="project-arrow">🡥</span>
          </div>
          <hr class="divider">
          <div class="project-item fade-in" @click="navigateToProject('rolls-royce')" @mouseover="showTooltip(image3, 'rolls-royce')">
            <p class="project-title">Rolls Royce - NLP and AI</p>
            <p class="project-category">DESKTOP APPLICATION</p>
            <span class="project-arrow">🡥</span>
          </div>
          <hr class="divider">
        </div>
      </div>
      <div class="vl fade-in"></div>
      <h2 class="projects-title fade-in">Process.</h2>
      <div class="vl fade-in"></div>
      <div class="process-section fade-in">
        <div class="process-steps">
          <p class="process-title">The Process.</p>
          <div class="step" :class="{ active: activeStep === 1 }" @click="setActiveStep(1)">
            <div class="step-number-container">
              <div class="step-number" v-if="activeStep === 1">01//</div>
            </div>
            <div class="step-content">
              <h3>Conceptualisation</h3>
              <p v-if="activeStep === 1">
                I'm here to bring your vision to life by diving deep into the essence of your brand! In the Conceptualisation phase, I'll explore every angle to understand your unique goals and market landscape. Together, we'll generate innovative ideas that will set the foundation for an extraordinary project. Let's unleash creativity and discover the best path forward!
              </p>
            </div>
          </div>
          <div class="step" :class="{ active: activeStep === 2 }" @click="setActiveStep(2)">
            <div class="step-number-container">
              <div class="step-number" v-if="activeStep === 2">02//</div>
            </div>
            <div class="step-content">
              <h3>Designing</h3>
              <p v-if="activeStep === 2">
                In the Designing phase, I'll transform our brainstorming insights into stunning visual concepts. My goal is to create a design that captures your brand's essence and speaks directly to your audience. From wireframes to polished prototypes, I'll ensure every detail aligns with your vision and stands out in the digital landscape. Let's craft a design that leaves a lasting impression!
              </p>
            </div>
          </div>
          <div class="step" :class="{ active: activeStep === 3 }" @click="setActiveStep(3)">
            <div class="step-number-container">
              <div class="step-number" v-if="activeStep === 3">03//</div>
            </div>
            <div class="step-content">
              <h3>Developing</h3>
              <p v-if="activeStep === 3">
                Now, it's time to bring the design to life with cutting-edge development techniques. During the Development phase, I'll write clean, efficient code to build a robust and responsive product. My focus is on creating seamless user experiences that not only look great but perform flawlessly. Let's turn your vision into a functional and dynamic reality!
              </p>
            </div>
          </div>
          <div class="step" :class="{ active: activeStep === 4 }" @click="setActiveStep(4)">
            <div class="step-number-container">
              <div class="step-number" v-if="activeStep === 4">04//</div>
            </div>
            <div class="step-content">
              <h3>Maintaining</h3>
              <p v-if="activeStep === 4">
                Ensuring your product stays at its best is crucial, and that's where the Maintenance phase comes in. I'll provide continuous support and updates to keep everything running smoothly and up-to-date. By incorporating user feedback and implementing improvements, we'll make sure your product remains relevant and engaging. Let's keep your digital presence thriving and evolving!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="contact" class="card contact-card fade-in">
      <h2>It all starts with good communication./</h2>
      <a href="mailto:saxoncallum@gmail.com" class="contact-button">
        <div>GET IN CONTACT W/ ME 🡥</div>
      </a>
      <div class="footer">
        <div class="socials">
          <a href="https://www.linkedin.com/in/callum-saxon" target="_blank">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://www.instagram.com/callumsaxon" target="_blank">
            <i class="fab fa-instagram"></i> Instagram
          </a>
          <a href="mailto:saxoncallum@gmail.com">
            <i class="fas fa-envelope"></i> saxoncallum@gmail.com
          </a>
          <p><i class="fas fa-phone"></i> Phone: +44 07742 952173</p>
          <hr class="divider">
        </div>
      </div>
      <p>©2024 Callum Saxon, All Rights Reserved</p>
    </section>
    <div v-if="tooltipVisible" :style="{ top: tooltipY + 'px', left: tooltipX + 'px' }" class="tooltip-box">
      <div class="tooltip-images">
        <img :src="tooltipImage" alt="Project Image" class="tooltip-image">
      </div>
      <div class="tooltip-circle">🡥</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  data() {
    return {
      tooltipVisible: false,
      tooltipX: 0,
      tooltipY: 0,
      tooltipImage: '',
      currentProjectId: '',
      activeStep: 1,
      image1: require('@/assets/noise.png'),
      image2: require('@/assets/working.png'),
      image3: require('@/assets/rollsroyce-logo.png'),
      localTime: this.getCurrentTime(),
      mouseX: 0,
      mouseY: 0,
      rafId: null,
    };
  },
  methods: {
    handleMouseMove(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      if (!this.rafId) {
        this.updateTooltipPosition();
      }
    },
    updateTooltipPosition() {
      this.rafId = requestAnimationFrame(() => {
        const tooltipWidth = 440;
        const tooltipHeight = 350;
        this.tooltipX = this.mouseX - tooltipWidth / 2;
        this.tooltipY = this.mouseY - tooltipHeight / 2;
        this.rafId = null;
        if (this.tooltipVisible) {
          this.updateTooltipPosition();
        }
      });
    },
    showTooltip(image, projectId) {
      this.tooltipImage = image;
      this.currentProjectId = projectId;
      if (!this.tooltipVisible) {
        this.tooltipVisible = true;
        this.updateTooltipPosition();
      }
    },
    hideTooltip() {
      this.tooltipVisible = false;
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
    },
    navigateToProject(id) {
      if (id) {
        this.$router.push({ name: 'ProjectView', params: { id } });
      }
    },
    setActiveStep(step) {
      this.activeStep = step;
    },
    getCurrentTime() {
      return new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    },
    observeElements() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, options);
      
      const elements = document.querySelectorAll('.fade-in, .from-left, .from-right, .from-bottom');
      elements.forEach(el => {
        observer.observe(el);
      });
    }
  },
  mounted() {
    setInterval(() => {
      this.localTime = this.getCurrentTime();
    }, 1000);
    this.observeElements();
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: #121212;
  color: #fff;
  overflow-x: hidden;
}

.intro-container {
  margin-left: 8%;
  text-align: left;
}
.arrow {
  font-size: 3.5em;
  margin-bottom: 10px;
  animation: bounceArrow 2s infinite;
}

@keyframes bounceArrow {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.project-arrow {
  font-size: 1.5em;
  margin-bottom: 10px;
  display: none;
}

.intro-text {
  font-size: 2.5em;
  font-weight: 200;
  font-family: 'Poppins', sans-serif;
}

.carousel-wrapper {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.carousel-content {
  display: inline-block;
  white-space: nowrap;
  animation: slide-left 60s linear infinite;
}

.carousel-content span {
  display: inline-block;
  font-size: 15em;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
}

@keyframes slide-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.info-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-bottom: 50px;
  font-size: 1em;
  text-align: left;
  gap: 27%;
}

@media (max-width: 768px) {
  .info-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: 100px;
    gap: 10px;
  }

  .intro-container {
    text-align: center;
  }
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 80vw;
  box-sizing: border-box;
}

.headline {
  font-size: 2.5em;
  width: 60%;
  text-align: left;
  font-weight: 200;
  font-family: 'Poppins', sans-serif;
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  font-size: 2em;
}

.about-subcontent {
  display: flex;
  align-items: center;
  gap: 20px;
}

.about-text {
  flex: 1;
  max-width: 50%;
  font-weight: 200;
  font-family: 'Poppins', sans-serif;
}

.about-paragraph {
  font-size: 1em;
}

.about-image {
  flex: 1;
  display: flex;
  max-width: 800px;
  margin-left: 100px;
  padding-right: 100px;
  justify-content: center;
  transition: transform 0.3s ease;
}

.about-image img {
  max-width: 70%;
  height: auto;
  border-radius: 20px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.about-image img:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .about-subcontent {
    flex-direction: column;
  }

  .about-image img {
    max-width: 80%;
  }

  .about-text {
    max-width: 100%;
    text-align: center;
  }

  .about-paragraph {
    font-size: 0.5em;
  }
}

.vl {
  border-left: 1px solid white;
  height: 350px;
  padding-bottom: 10px;
  transition: height 0.3s;
}

.v2 {
  border-left: 1px solid white;
  height: 100px;
  padding-bottom: 10px;
}

.projects-section {
  width: 100%;
  text-align: center;
}

.projects-title {
  font-size: 4em;
  margin-bottom: 20px;
  font-weight: 200;
  font-family: 'Poppins', sans-serif;
}

.projects-subtitle {
  font-size: 1.5em;
  text-align: left;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left;
  padding-left: 10%;
}

.project-title {
  flex: 2;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
}

.project-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3em;
  cursor: pointer;
  transition: transform 0.3s, color 0.3s;
}

.project-item:hover {
  transform: scale(1.05);
}

.project-item:hover .project-title,
.project-item:hover .project-category {
  color: grey;
}

.project-category {
  font-size: 0.4em;
  text-align: right;
  font-weight: 200;
  font-family: 'Poppins', sans-serif;
}

.divider {
  border: 1px solid #444;
  width: 100%;
  margin: 0 auto;
}

.contact-section {
  padding-top: 20px;
  text-align: center;
  font-size: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-section a {
  color: #ffffff;
  text-decoration: none;
  border-bottom: 1px dotted #fff;
  transition: color 0.3s;
}

.contact-section a:hover {
  color: #aaaaaa;
}

.contact-card {
  background-color: #fff;
  color: #121212;
  padding: 40px;
  text-align: center;
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contact-card h2 {
  font-size: 7em;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
}

.contact-card p {
  font-size: 1em;
}

.contact-button {
  font-size: 2em;
  padding: 50px;
  background: black;
  border: 2px solid black;
  border-radius: 100px;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s, color 0.3s, width 0.5s, height 0.5s, border-radius 0.5s;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 10%;
  margin: 0 auto;
}

.contact-button:hover {
  background-color: white;
  color: black;
  width: 45%;
  height: 12%;
}

.tooltip-box {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
  z-index: 1000;
  width: 400px;
  height: 300px;
  pointer-events: none;
  transition: transform 0.1s ease, top 0.1s ease, left 0.1s ease;
}

.tooltip-images {
  position: relative;
  width: 350px;
  height: 225px;
  overflow: hidden;
}

.tooltip-image {
  width: 350px;
  height: 225px;
  object-fit: cover;
  pointer-events: none;
}

.tooltip-circle {
  width: 100px;
  height: 100px;
  background-color: #121212;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3em;
  position: fixed;
  pointer-events: none;
}

.process-section {
  width: 100%;
  text-align: center;
}

.process-title {
  font-size: 1.5em;
  text-align: left;
  margin-bottom: 20px;
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left;
  padding-left: 10%;
  padding-bottom: 10%;
}

.step {
  display: flex;
  align-items: center;
  font-size: 1.5em;
  margin-left: 10%;
  cursor: pointer;
  position: relative;
  transition: all 0.5s ease;
}

.step-number-container {
  position: absolute;
  left: -5em;
  transition: transform 0.5s;
}

.step-number {
  font-size: 3em;
  color: white;
}

.step-content h3 {
  font-size: 1.5em;
  color: grey;
  transition: color 0.3s;
}

.step.active .step-number-container {
  transform: translateX(0);
}

.step.active h3 {
  color: white;
}

.step-content p {
  font-size: 1em;
  color: white;
  transition: opacity 0.3s;
}

.step-content p {
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.step.active .step-content p {
  opacity: 1;
  height: auto;
}

@media (max-width: 768px) {
  .main-content {
    padding: 0 20px;
  }

  .intro-container {
    margin-left: 0;
  }

  .intro-text {
    font-size: 2em;
  }

  .carousel-content span {
    font-size: 5em;
  }

  .info-section {
    flex-direction: column;
    text-align: center;
    padding: 0;
    gap: 20px;
  }

  .headline {
    font-size: 1.5em;
    width: 100%;
  }

  .about-subcontent {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .about-text {
    max-width: 100%;
    text-align: center;
  }

  .about-paragraph {
    font-size: 0.5em;
  }

  .about-image {
    margin-left: 0;
    padding-right: 0;
  }

  .projects-title {
    font-size: 2.5em;
  }

  .project-item {
    font-size: 1.5em;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    position: relative;
  }

  .project-category {
    font-size: 0.8em;
    text-align: left;
  }

  .project-item .project-arrow {
    display: block;
  }

  .step {
    flex-direction: column;
    align-items: flex-start;
  }

  .step-number {
    position: static;
    font-size: 2em;
  }

  .step-content h3 {
    font-size: 1.2em;
  }

  .contact-card h2 {
    font-size: 3em;
  }

  .contact-button {
    padding: 20px;
    font-size: 1em;
  }
}

.footer {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: 1em;
}

.socials {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.socials a, .socials p {
  color: #121212;
  text-decoration: none;
  margin: 0 10px;
  font-size: 1.2em;
}

.fade-in {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.fade-in.visible {
  opacity: 1;
}

.from-left {
  transform: translateX(-25%);
  opacity: 0;
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
}

.from-left.visible {
  transform: translateX(0);
  opacity: 1;
}

.from-right {
  transform: translateX(25%);
  opacity: 0;
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
}

.from-right.visible {
  transform: translateX(0);
  opacity: 1;
}

.from-bottom {
  transform: translateY(100%);
  opacity: 0;
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
}

.from-bottom.visible {
  transform: translateY(0);
  opacity: 1;
}
</style>

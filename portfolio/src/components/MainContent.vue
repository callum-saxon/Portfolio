<template>
  <div id="app" class="main-content">
    <div class="intro-container">
      <p class="arrow">🡦</p>
      <p class="intro-text">FULL-STACK DEVELOPER <br>& DIGITAL DESIGNER</p>
    </div>
    <div class="carousel-wrapper">
      <div class="carousel-content" ref="carouselContent">
        <span>Callum Saxon &mdash;&nbsp; </span>
        <span>Callum Saxon &mdash;&nbsp; </span>
        <span>Callum Saxon &mdash;&nbsp; </span>
        <span>Callum Saxon &mdash;&nbsp; </span>
        <span>Callum Saxon &mdash;&nbsp; </span>
        <span>Callum Saxon &mdash;&nbsp; </span>
      </div>
    </div>
    <div class="info-section">
      <p>FULL-STACK DEVELOPER<br>BASED IN THE MIDLANDS</p>
      <p>SPECIALISING IN<br>MOBILE APP AND WEB DEVELOPMENT</p>
      <p>[SCROLL . . .]</p>
    </div>
    <div class="card-container">
      <div class="vl"></div>
      <section id="about" class="card about-card">
        <div class="about-content">
          <h1 class="headline">Bringing Your Digital Visions to Life.</h1>
          <div class="about-subcontent">
            <div class="about-image">
              <img src="@/assets/working.png" alt="Working Image">
            </div>
            <div class="about-text">
              <p>
                I'm a full-stack software developer with a passion for creating intuitive and impactful digital solutions. Through freelancing, I've honed my skills in transforming complex designs into user-friendly experiences. I'm excited to collaborate on projects that challenge and inspire me.
                <br><br>Let's connect and bring your ideas to life with code! Check out some of my work here!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="vl"></div>
      <h2 class="projects-title">Projects.&sup3; </h2>
      <div class="vl"></div>
      <div class="projects-section">
        <div class="projects-list" @mousemove="handleMouseMove">
          <p class="projects-subtitle">Featured Projects.</p>
          <hr class="project-divider">
          <div class="project-item" @click="navigateToProject('pathway-housing')" @mouseover="showTooltip(image1, 'pathway-housing')" @mouseleave="hideTooltip">
            <p class="project-title">Pathway Housing Solutions - Nottingham's Blue Plaque Exploration</p>
            <p class="project-category">WEB APPLICATION AND DIGITAL DESIGN</p>
            <span class="project-arrow">🡥</span>
          </div>
          <hr class="project-divider">
          <div class="project-item" @click="navigateToProject('biocortex')" @mouseover="showTooltip(image2, 'biocortex')" @mouseleave="hideTooltip">
            <p class="project-title">BioCortex - Carbon Mirror</p>
            <p class="project-category">WEB APPLICATION AND DIGITAL DESIGN</p>
            <span class="project-arrow">🡥</span>
          </div>
          <hr class="project-divider">
          <div class="project-item" @click="navigateToProject('rolls-royce')" @mouseover="showTooltip(image3, 'rolls-royce')" @mouseleave="hideTooltip">
            <p class="project-title">Rolls Royce - NLP and AI</p>
            <p class="project-category">DESKTOP APPLICATION</p>
            <span class="project-arrow">🡥</span>
          </div>
          <hr class="project-divider">
        </div>
      </div>
      <div class="vl"></div>
      <h2 class="projects-title">Process.</h2>
      <div class="vl"></div>
      <div class="process-section">
        <div class="process-steps">
          <p class="process-title">The Process.</p>
          <div class="step" :class="{ active: activeStep === 1, inactive: activeStep !== 1 }" @click="setActiveStep(1)">
            <div class="step-number" v-if="activeStep === 1">01//</div>
            <div class="step-content">
              <h3>Conceptualisation</h3>
              <p v-if="activeStep === 1">I'm here to bring your vision to life by diving deep into the essence of your brand! In the Brainstorming phase, I'll explore every angle to understand your unique goals and market landscape. Together, we'll generate innovative ideas that will set the foundation for an extraordinary project. Let's unleash creativity and discover the best path forward!</p>
            </div>
          </div>
          <div class="step" :class="{ active: activeStep === 2, inactive: activeStep !== 2 }" @click="setActiveStep(2)">
            <div class="step-number" v-if="activeStep === 2">02//</div>
            <div class="step-content">
              <h3>Designing</h3>
              <p v-if="activeStep === 2">In the Designing phase, I'll transform our brainstorming insights into stunning visual concepts. My goal is to create a design that captures your brand's essence and speaks directly to your audience. From wireframes to polished prototypes, I'll ensure every detail aligns with your vision and stands out in the digital landscape. Let's craft a design that leaves a lasting impression!</p>
            </div>
          </div>
          <div class="step" :class="{ active: activeStep === 3, inactive: activeStep !== 3 }" @click="setActiveStep(3)">
            <div class="step-number" v-if="activeStep === 3">03//</div>
            <div class="step-content">
              <h3>Developing</h3>
              <p v-if="activeStep === 3">Now, it's time to bring the design to life with cutting-edge development techniques. During the Developing phase, I'll write clean, efficient code to build a robust and responsive product. My focus is on creating seamless user experiences that not only look great but perform flawlessly. Let's turn your vision into a functional and dynamic reality!</p>
            </div>
          </div>
          <div class="step" :class="{ active: activeStep === 4, inactive: activeStep !== 4 }" @click="setActiveStep(4)">
            <div class="step-number" v-if="activeStep === 4">04//</div>
            <div class="step-content">
              <h3>Maintaining</h3>
              <p v-if="activeStep === 4">Ensuring your product stays at its best is crucial, and that's where the Maintaining phase comes in. I'll provide continuous support and updates to keep everything running smoothly and up-to-date. By incorporating user feedback and implementing improvements, we'll make sure your product remains relevant and engaging. Let's keep your digital presence thriving and evolving!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="contact" class="card contact-card">
      <h2>It all starts with good communication/</h2>
      <div class="contact-button" @click="startForm" :class="{ 'form-active': formStarted }">
        <div v-if="!formStarted">GET IN CONTACT W/ ME 🡥</div>
        <form v-if="formStarted" @submit.prevent="nextStep" class="styled-form">
          <div v-if="currentStep === 1" class="form-group">
            <div class="step-number-large">01</div>
            <label for="name">What's your name?</label>
            <input type="text" id="name" v-model="form.name" placeholder="John Doe *" required>
            <button type="submit" class="submit-button">Next</button>
          </div>
          <div v-if="currentStep === 2" class="form-group">
            <div class="step-number-large">02</div>
            <label for="email">What's your email?</label>
            <input type="email" id="email" v-model="form.email" placeholder="john@doe.com *" required>
            <button type="submit" class="submit-button">Next</button>
          </div>
          <div v-if="currentStep === 3" class="form-group">
            <div class="step-number-large">03</div>
            <label for="organization">What's the name of your organisation?</label>
            <input type="text" id="organization" v-model="form.organization" placeholder="John & Doe">
            <button type="submit" class="submit-button">Next</button>
          </div>
          <div v-if="currentStep === 4" class="form-group">
            <div class="step-number-large">04</div>
            <label for="services">What services are you looking for?</label>
            <textarea id="services" v-model="form.services" placeholder="Web Design, Web Development ..." required></textarea>
            <button type="submit" class="submit-button">Next</button>
          </div>
          <div v-if="currentStep === 5" class="form-group">
            <div class="step-number-large">05</div>
            <label for="message">Your enquiry</label>
            <textarea id="message" v-model="form.message" placeholder="Hello Callum, can you help me with ... *" required></textarea>
            <button type="submit" class="submit-button">Submit 🡥</button>
          </div>
        </form>
      </div>
    </section>
    <div v-if="tooltipVisible" :style="{ top: tooltipY + 'px', left: tooltipX + 'px' }" class="tooltip-box">
      <img :src="tooltipImage" alt="Project Image" class="tooltip-image">
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
      formVisible: false,
      formStarted: false,
      currentStep: 1,
      form: {
        name: '',
        email: '',
        organization: '',
        services: '',
        message: ''
      },
      image1: require('@/assets/noise.png'),
      image2: require('@/assets/working.png'),
      image3: require('@/assets/sparkles.png'),
    };
  },
  methods: {
    handleMouseMove(event) {
      const tooltipWidth = 440;
      const tooltipHeight = 350;
      this.tooltipX = event.clientX - tooltipWidth / 2;
      this.tooltipY = event.clientY - tooltipHeight / 2;
    },
    showTooltip(image, projectId) {
      this.tooltipImage = image;
      this.currentProjectId = projectId;
      this.tooltipVisible = true;
    },
    hideTooltip() {
      this.tooltipVisible = false;
    },
    navigateToProject(id) {
      if (id) {
        this.$router.push({ name: 'ProjectView', params: { id } });
      }
    },
    setActiveStep(step) {
      this.activeStep = step;
    },
    sendEmail() {
      window.location.href = 'mailto:saxoncallum@gmail.com';
    },
    startForm() {
      this.formStarted = true;
    },
    nextStep() {
      if (this.currentStep < 5) {
        this.currentStep++;
      } else {
        this.submitForm();
      }
    },
    submitForm() {
      const formData = new FormData();
      formData.append('entry.2005620554', this.form.name);
      formData.append('entry.1045781291', this.form.email);
      formData.append('entry.839337160', this.form.organization);
      formData.append('entry.1065046570', this.form.services);
      formData.append('entry.1166974658', this.form.message);

      fetch('https://docs.google.com/forms/d/e/1FAIpQLSc5fS96ZTioqUwrKEdiHMpHl_ofMTto4edHKlN5K6G0eYT8tg/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      }).then(() => {
        alert('Form submitted successfully!');
        this.resetForm();
      }).catch(() => {
        alert('There was an error submitting the form.');
      });
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        organization: '',
        services: '',
        message: ''
      };
      this.currentStep = 1;
      this.formStarted = false;
    }
  }
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Gruppo&family=Josefin+Slab:ital,wght@0,100..700;1,100..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Reddit+Mono:wght@200..900&display=swap');

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: #121212;
  color: #fff;
}

.intro-container {
  margin-left: 8%;
  text-align: left;
}
.arrow {
  font-size: 3.5em;
  margin-bottom: 10px;
}

.project-arrow {
  font-size: 2em;
  margin-bottom: 10px;
}

.intro-text {
  font-size: 2.5em;
}

.carousel-wrapper {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  padding: 5px 0;
  display: flex;
  justify-content: center;
}

.carousel-content {
  display: inline-block;
  white-space: nowrap;
  animation: slide-left 60s linear infinite;
  padding-bottom: 75px;
}

.carousel-content span {
  display: inline-block;
  font-size: 15em;
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
}

.about-image {
  flex: 1;
  display: flex;
  max-width: 800px;
  margin-left: 100px;
  padding-right: 100px;
  justify-content: center;
}

.about-image img {
  max-width: 70%;
  height: auto;
  border-radius: 20px;
  transition: box-shadow 0.3s ease;
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
  }
}

.vl {
  border-left: 1px solid white;
  height: 350px;
  padding-bottom: 10px;
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
}

.project-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3em;
  cursor: pointer;
}

.project-category {
  font-size: 0.4em;
  text-align: right;
}

.project-divider {
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
  border-radius: 10px;
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
  margin-bottom: 20px;
}

.contact-card p {
  font-size: 1.5em;
}

.contact-button {
  font-size: 2em;
  padding: 50px;
  background: transparent;
  border: 2px solid black;
  color: black;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s, color 0.3s, width 0.5s, height 0.5s, border-radius 0.5s;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 75px;
  margin: 0 auto;
}

.contact-button.form-active {
  width: 500px;
  height: 300px;
  border-radius: 10px;
  cursor:default;
}

.contact-button:hover {
  background-color: black;
  color: white;
}

.contact-button.form-active:hover {
  background-color: transparent;
  color: black;
}

.form-step-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.styled-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  max-width: 600px;
  color: #fff;
  min-height: 400px;
}

.step-number-large {
  font-size: 2.5em;
  font-weight: bold;
  color: #000;
  position: absolute;
  top: -80px;
  left: 0;
}

.styled-form .form-group {
  position: relative;
  top: 100px;
}

.styled-form label {
  font-size: 1em;
  margin-bottom: 5px;
  color: #888;
  font-weight: bold;
}

.styled-form input,
.styled-form textarea {
  width: 100%;
  padding: 15px;
  font-size: 1em;
  border: 1px solid #333;
  background: #222;
  color: #fff;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;
  resize: none;
}

.styled-form input:focus,
.styled-form textarea:focus {
  border-color: #555;
}

.styled-form .submit-button {
  font-size: 1.2em;
  padding: 20px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  position: relative;
  top: 30px;
}

.styled-form .submit-button:hover {
  background-color: #444;
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
  transition: transform 0.1s ease;
}

.tooltip-image {
  width: 350px;
  height: 225px;
  object-fit: cover;
  margin-bottom: 10px;
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
}

.step-number {
  font-size: 3em;
  margin-right: 20px;
  color: grey;
  position: absolute;
  left: -3em;
}

.step-number-active {
  color: white;
}

.step-content h3 {
  font-size: 1.5em;
  color: grey;
}

.step.active h3 {
  color: white;
}

.step-content p {
  font-size: 1em;
  color: white;
}

.inactive {
  color: grey;
}

.contact-card {
  background-color: #fff;
  color: #121212;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
}

.contact-card h2 {
  font-size: 7em;
  margin-bottom: 20px;
}

.contact-card p {
  font-size: 1.5em;
}

.contact-button {
  font-size: 2em;
  padding: 50px;
  background: transparent;
  border: 2px solid black;
  color: black;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s, color 0.3s;
}

.contact-button:hover {
  background-color: black;
  color: white;
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

  .project-item .arrow {
    position: absolute;
    right: 10px;
    font-size: 1em;
    color: #fff;
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

  .contact-card {
    padding: 20px;
  }

  .contact-card h2 {
    font-size: 3em;
  }

  .contact-button {
    padding: 20px;
    font-size: 1em;
  }
}
</style>


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
      <h2 class="projects-title">Projects.&sup3;	</h2>
      <div class="vl"></div>
      <div class="projects-section">
        <div class="projects-list" @mousemove="handleMouseMove">
          <p class="projects-subtitle">Featured Projects.</p>
          <hr class="project-divider">
          <div class="project-item" @click="navigateToProject('pathway-housing')" @mouseover="showTooltip(image1, 'pathway-housing')" @mouseleave="hideTooltip">
            <p class="project-title">Pathway Housing Solutions - Nottingham's Blue Plaque Exploration</p>
            <p class="project-category">WEB APPLICATION AND DIGITAL DESIGN</p>
          </div>
          <hr class="project-divider">
          <div class="project-item" @click="navigateToProject('biocortex')" @mouseover="showTooltip(image2, 'biocortex')" @mouseleave="hideTooltip">
            <p class="project-title">BioCortex - Carbon Mirror</p>
            <p class="project-category">WEB APPLICATION AND DIGITAL DESIGN</p>
          </div>
          <hr class="project-divider">
          <div class="project-item" @click="navigateToProject('rolls-royce')" @mouseover="showTooltip(image3, 'rolls-royce')" @mouseleave="hideTooltip">
            <p class="project-title">Rolls Royce - NLP and AI</p>
            <p class="project-category">DESKTOP APPLICATION</p>
          </div>
          <hr class="project-divider">
          <div class="contact-section">
            <p><strong>Want to see more?</strong> Get in touch at <a href="saxoncallum@gmail.com">saxoncallum@gmail.com</a></p>
          </div>
        </div>
      </div>
      <div class="vl"></div>
      <h2 class="projects-title">Process.</h2>
      <div class="vl"></div>
      <div class="process-section">
        <p class="process-title">The Process.</p>
        <div class="process-steps">
          <div class="step" :class="{ active: activeStep === 1, inactive: activeStep !== 1 }" @click="setActiveStep(1)">
            <div class="step-number" :class="{ 'step-number-active': activeStep === 1 }">01//</div>
            <div class="step-content">
              <h3>Brainstorming</h3>
              <p v-if="activeStep === 1">I'm here to bring your vision to life by diving deep into the essence of your brand! In the Brainstorming phase, I'll explore every angle to understand your unique goals and market landscape. Together, we'll generate innovative ideas that will set the foundation for an extraordinary project. Let's unleash creativity and discover the best path forward!</p>
            </div>
          </div>
          <div class="step" :class="{ active: activeStep === 2, inactive: activeStep !== 2 }" @click="setActiveStep(2)">
            <div class="step-number" :class="{ 'step-number-active': activeStep === 2 }">02//</div>
            <div class="step-content">
              <h3>Designing</h3>
              <p v-if="activeStep === 2">In the Designing phase, I'll transform our brainstorming insights into stunning visual concepts. My goal is to create a design that captures your brand's essence and speaks directly to your audience. From wireframes to polished prototypes, I'll ensure every detail aligns with your vision and stands out in the digital landscape. Let's craft a design that leaves a lasting impression!</p>
            </div>
          </div>
          <div class="step" :class="{ active: activeStep === 3, inactive: activeStep !== 3 }" @click="setActiveStep(3)">
            <div class="step-number" :class="{ 'step-number-active': activeStep === 3 }">03//</div>
            <div class="step-content">
              <h3>Developing</h3>
              <p v-if="activeStep === 3">Now, it's time to bring the design to life with cutting-edge development techniques. During the Developing phase, I'll write clean, efficient code to build a robust and responsive product. My focus is on creating seamless user experiences that not only look great but perform flawlessly. Let's turn your vision into a functional and dynamic reality!</p>
            </div>
          </div>
          <div class="step" :class="{ active: activeStep === 4, inactive: activeStep !== 4 }" @click="setActiveStep(4)">
            <div class="step-number" :class="{ 'step-number-active': activeStep === 4 }">04//</div>
            <div class="step-content">
              <h3>Maintaining</h3>
              <p v-if="activeStep === 4">Ensuring your product stays at its best is crucial, and that's where the Maintaining phase comes in. I'll provide continuous support and updates to keep everything running smoothly and up-to-date. By incorporating user feedback and implementing improvements, we'll make sure your product remains relevant and engaging. Let's keep your digital presence thriving and evolving!</p>
            </div>
          </div>
        </div>
      </div>
      <div class="vl"></div>
      <section id="contact" class="card">
        <h2>Contact</h2>
        <p>Provide contact information or a form for visitors to get in touch with you.</p>
      </section>
    </div>
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
      activeStep: 1, // default to the first step
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
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Gruppo&family=Josefin+Slab:ital,wght@0,100..700;1,100..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Reddit+Mono:wght@200..900&display=swap');

.main-content {
  align-items: center;
  width: 100vw;
  background-color: #121212;
  color: #fff;
}

.intro-container {
  margin-left: 8% !important;
  text-align: left !important;
}

.arrow {
  font-size: 3em;
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
    padding-top: 0px 0;
    padding-bottom: 100px 0;
    gap: 10px;
  }

  .intro-container {
    right: auto;
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
  text-align: left;
  font-size: 2em;
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

.lang-section {
  padding: 25px;
  width: 100%;
  text-align: center;
}

.lang-title {
  font-size: 4em;
  margin-bottom: 20px;
}

.lang-subtitle {
  font-size: 3em;
  margin-bottom: 20px;
  padding-bottom: 75px;
}

.lang-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
}

.lang-list p {
  font-size: 1.5em;
  margin: 5px;
  color: #f0f0f0cc;
}

.process-section {
  width: 80%;
  text-align: center;
}

.process-title {
  font-size: 2.5em;
  margin-right: 900px;
  margin-bottom: 20px;
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left;
  padding-left: 10%;
}

.step {
  display: flex;
  align-items: center;
  font-size: 1.5em;
  cursor: pointer;
}

.step-number {
  font-size: 3em;
  margin-right: 20px;
  color: grey;
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
</style>

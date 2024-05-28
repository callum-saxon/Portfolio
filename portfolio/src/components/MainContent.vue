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
          <div class="about-text">
            <h2>About</h2>
            <p>Hey there!

              I'm a full-stack software developer with a passion for creating intuitive and impactful digital solutions. Through freelancing, I've honed my skills in transforming complex designs into user-friendly experiences. I'm excited to collaborate on projects that challenge and inspire me.

              <br><br>Let's connect and bring your ideas to life with code! Check out some of my work here!</p>
          </div>
          <div class="about-image">
            <img src="@/assets/working.png" alt="Working Image">
          </div>
        </div>
      </section>
      <div class="vl"></div>
      <h2 class="projects-title">Projects.</h2>
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
        </div>
        <div class="contact-section">
          <p><strong>Want to see more?</strong> Get in touch at <a href="saxoncallum@gmail.com">saxoncallum@gmail.com</a></p>
        </div>
      </div>
      <div class="v2"></div>
      <h2 class="lang-title">Lang.</h2>
      <div class="vl"></div>
      <div class="lang-section">
        <h2 class="lang-subtitle">Languages I'm Familiar With.</h2>
        <div class="lang-list">
          <p>Python</p>
          <p>JavaScript</p>
          <p>Java</p>
          <p>C++</p>
          <p>SQL</p>
          <p>React</p>
          <p>React Native</p>
          <p>Vue.js</p>
        </div>
      </div>
      <div class="v2"></div>
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
  margin-left: 7% !important;
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
}

.carousel-content span {
  display: inline-block;
  font-size: 15em;
  font-family: "Poppins", sans-serif;
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

.card {
  background: url('@/assets/noise.png') no-repeat center center;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 60px;
  width: 100%;
  max-height: 450px;
  max-width: 1600px;
  min-width: 300px;
  box-sizing: border-box;
  margin-bottom: 40px;
  text-align: left;
  font-family: 'Georgia', serif;
  font-size: 1.2em;
  line-height: 1.6;
  color: #fff;
}

.card h2 {
  font-size: 2em;
  margin-bottom: 10px;
}

.card p {
  margin: 0;
  padding: 2vh 0;
  font-size: 0.9em;
  color: #f0f0f0cc;
}

.about-card {
  display: flex;
  flex-direction: column;
}

.about-content {
  display: flex;
  align-items: flex-start;
  gap: 80px;
}

.about-text {
  flex: 1;
  max-width: 50%;
}

.about-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.about-image img {
  max-width: 65%;
  height: auto;
  border-radius: 20px;
  transform: rotate(10deg);
  transition: box-shadow 0.3s ease;
}

.about-image img:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }

  .about-image {
    justify-content: center;
    margin: 0;
  }

  .about-image img {
    margin-top: 20px;
    transform: none;
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
  font-size: 2em;
  cursor: pointer;
}

.project-category {
  font-size: 0.5em;
  text-align: right;
}

.project-divider {
  border: 1px solid #444;
  width: 100%;
  margin: 0 auto;
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

.contact-section {
  padding-top: 20px;
  font-size: 1.2em;
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
</style>

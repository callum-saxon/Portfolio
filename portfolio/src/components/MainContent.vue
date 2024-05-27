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
    <div class="mouse"></div>
    <div class="card-container">
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
      <h2 class="work-title">Work.</h2>
      <div class="vl"></div>
      <div class="work-section">
        <div class="work-images">
          <div class="work-item">
            <img src="@/assets/rollsroyce-logo.png" alt="RollsRoyce Logo">
            <p><strong>Rolls-Royce</strong></p>
            <p>| Software Developer |</p>
            <p>Gained experience with NLP and AI, developing a desktop application to efficiently extract and analyse texts.</p>
          </div>
          <div class="work-item">
            <img src="@/assets/biocortex-logo-bl.png" alt="BioCortex Logo">
            <p><strong>BioCortex</strong></p>
            <p>| Full-Stack Developer |</p>
            <p>Developed an essential Python data pipeline and full-stack web application, enhancing data processing and visualisation for scientific research.</p>
          </div>
          <div class="work-item">
            <img src="@/assets/pathwayhousingsolutions.png" alt="PathwayHousingSolutions Logo">
            <p><strong>Pathway Housing Solutions</strong></p>
            <p>| Full-Stack Developer |</p>
            <p>Developed an innovative application to boost interest in Nottingham's tourist locations, driving increased visitor engagement and footfall.</p>
          </div>
        </div>
      </div>
      <div class="v2"></div>
      <section id="contact" class="card">
        <h2>Contact</h2>
        <p>Provide contact information or a form for visitors to get in touch with you.</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
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
  padding: 75px 0;
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
  width: 100vw;
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

.mouse {
  width: 40px;
  height: 70px;
  border: 3px solid #333;
  border-radius: 60px;
  position: relative;
  bottom: 40px;
}

.mouse::before {
  content: '';
  width: 12px;
  height: 12px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  border-radius: 50%;
  opacity: 1;
  animation: wheel 2s infinite;
  -webkit-animation: wheel 2s infinite;
}

@keyframes wheel {
  to {
    opacity: 0;
    top: 60px;
  }
}

@-webkit-keyframes wheel {
  to {
    opacity: 0;
    top: 60px;
  }
}

.work-section {
  padding: 25px;
  width: 100%;
  text-align: center;
}

.work-title {
  font-size: 4em;
  margin-bottom: 20px;
}

.work-images {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
}

.work-item {
  width: 250px;
  text-align: center;
}

.work-item img {
  max-width: 250px;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.work-item img:hover {
  transform: scale(1.05);
}

.work-item p {
  margin: 0;
  padding: 2vh 0;
  font-size: 1.2em;
  line-height: 1.6;
  color: #f0f0f0cc;
}
</style>

<template>
  <div class="main-content">
    <div class="carousel-wrapper">
      <div class="carousel-content" ref="carouselContent">
        <span>Callum Saxon &mdash;&nbsp; </span>
        <span>Callum Saxon &mdash;&nbsp; </span>
        <span>Callum Saxon &mdash;&nbsp; </span>
        <span>Callum Saxon &mdash;&nbsp; </span>
        <span>Callum Saxon &mdash;&nbsp; </span>
        <span>Callum Saxon &mdash;&nbsp; </span>
        <span>Callum Saxon &mdash;&nbsp; </span>
        <span>Callum Saxon &mdash;&nbsp; </span>
      </div>
    </div>
    <div class="info-section">
      <p>FREELANCE FULL-STACK DEVELOPER<br>BASED IN THE MIDLANDS</p>
      <p>SPECIALISING IN<br>MOBILE APP AND WEB DEVELOPMENT</p>
    </div>
    <div class="card-container">
      <section id="about" class="card">
        <h2>About Me</h2>
        <p>Write a brief introduction about yourself.</p>
      </section>
      <section id="life" class="card">
        <h2>Life</h2>
        <p>Share some details about your life and experiences.</p>
      </section>
      <section id="work" class="card">
        <h2>Work</h2>
        <p>Showcase your work and projects.</p>
      </section>
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
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

.main-content {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-wrapper {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  padding: 100px 0;
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
  font-size: 10vw;
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
  padding: 20px 0;
  font-size: 1em;
  width: 100%;
  text-align: left;
  gap: 5%;
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.card {
  background: url('@/assets/noise.png') no-repeat center center;
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  margin-bottom: 40px;
  text-align: left;
}

.card h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.card p {
  margin: 0;
}
</style>

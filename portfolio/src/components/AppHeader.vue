<template>
  <header class="header">
    <div class="header-container">
      <div class="header-left">
        <h1>CS</h1>
      </div>
      <nav class="header-center">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#process">Process</a></li>
        </ul>
      </nav>
      <div class="header-right">
        <a href="#contact">Get in Touch 🡥</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
.header {
  width: 100%;
  background-color: transparent;
  box-sizing: border-box;
}

.header-container {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.header-left {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.header-left h1 {
  text-align: left;
  transition: transform 0.3s, color 0.3s;
}

.header-left h1:hover {
  transform: scale(1.1);
  color: #fff; /* Retain original color */
}

.header-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.header-center ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Revert to column layout */
}

.header-center li {
  margin: 1px 0;
}

.header-center a {
  color: white; /* Retain original color */
  text-decoration: none;
  font-size: 1.2em;
  position: relative;
  transition: color 0.3s, transform 0.3s;
}

.header-center a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white; /* Retain original color */
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
}

.header-center a:hover::before {
  visibility: visible;
  transform: scaleX(1);
}

.header-center a:hover {
  color: white; /* Retain original color */
  transform: translateY(-3px);
}

.header-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.header-right a {
  color: white; /* Retain original color */
  text-decoration: none;
  font-size: 1.2em;
  position: relative;
  transition: color 0.3s, transform 0.3s;
}

.header-right a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white; /* Retain original color */
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
}

.header-right a:hover::before {
  visibility: visible;
  transform: scaleX(1);
}

.header-right a:hover {
  color: white; /* Retain original color */
  transform: translateY(-3px);
}
</style>

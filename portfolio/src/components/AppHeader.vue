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
  align-items: flex-start;
}

.header-center li {
  margin: 1px 0;
}

.header-center a {
  color: white;
  text-decoration: none;
}

.header-center a:hover {
  text-decoration: underline;
}

.header-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.header-right a {
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  text-align: left;
}

.header-right a:hover {
  text-decoration: underline;
}
</style>

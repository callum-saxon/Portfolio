<template>
    <div class="project-view" v-if="project">
      <div class="back-button" @click="goBack">🡤</div>
      <div class="content">
        <div class="project-info">
          <img :src="project.image" :alt="project.name + ' Logo'" class="project-logo">
          <div class="project-details">
            <h2>{{ project.name }}</h2>
            <p><strong>{{ project.role }}</strong></p>
            <p><em>Development Tools: {{ project.tools }}</em></p>
            <div v-html="processedDescription"></div>
            <div v-if="project.id === 'biocortex'" class="definitions">
              <div class="definition">
                <h4>Carbon Knowledge™</h4>
                <p>Carbon Knowledge contains the largest and most diverse collection of microbiome samples in existence, containing millions of samples. This includes but is not limited to microbiome samples (gut, skin, vaginal, oral) from over 165 geopolitical regions, and animal, soil, and water microbiomes.</p>
              </div>
              <div class="definition">
                <h4>Carbon Mirror™</h4>
                <p>Carbon Mirror is a one-of-a-kind foundational emulator that builds upon Carbon Knowledge to uncover hidden interactions between bacteria, host physiology, and therapeutics.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="project-images">
          <h3>Project Images</h3>
          <!-- Add your images here -->
          <img src="https://via.placeholder.com/300" alt="Project Image">
          <img src="https://via.placeholder.com/300" alt="Project Image">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    name: 'ProjectView',
    setup() {
      const route = useRoute();
      const router = useRouter();
      const projectId = route.params.id;
  
      const projects = [
        {
          id: 'rolls-royce',
          name: 'Rolls-Royce',
          image: require('@/assets/rollsroyce-logo.png'),
          role: 'Software Developer',
          tools: 'Python, SpaCy, AugLy, Tkinter',
          description: 'Gained experience with NLP and AI, developing a desktop application to efficiently extract and analyse texts utilising web scraping tools.',
        },
        {
          id: 'biocortex',
          name: 'BioCortex',
          image: require('@/assets/biocortex-logo.png'),
          role: 'Full-Stack Developer',
          tools: 'Python Data Pipelines, Looker Studio, Vue.js, Vuetify, Google BigQuery, SQL',
          description: `
            Architected and implemented a robust Python data pipeline, orchestrating real-world datasets with Carbon Knowledge™. Ensured that this data was easily analysable and readily applicable across various tools used by the science team. Particularly adept at handling large datasets and maintaining efficiency with continuously updated data, this pipeline acted as a cornerstone for streamlined data processing at BioCortex.
            <br><br>
            Transformed complex datasets into visually compelling insights using Google’s Looker Studio. Empowered scientists with a user-friendly interface, catalysing engagement and facilitating their critical data exploration and research.
            <br><br>
            Seamlessly integrated complex data visualisation tools into one cohesive and user-friendly full-stack web application leveraging Python, and SQL alongside the use of Google BigQuery and utilising Vue.js and Vuetify, providing an intuitive platform for researchers driving effective results with Carbon Mirror™.
          `,
        },
        {
          id: 'pathway-housing',
          name: 'Pathway Housing Solutions',
          image: require('@/assets/pathwayhousingsolutions-logo.png'),
          role: 'Full-Stack Developer',
          tools: 'ExpoGo, React Native',
          description: 'Developed an innovative application to boost interest in Nottingham\'s tourist locations, driving increased visitor engagement and footfall.',
        },
      ];
  
      const project = computed(() => projects.find(p => p.id === projectId));
  
      const processedDescription = computed(() => {
        if (project.value) {
          return project.value.description;
        }
        return '';
      });
  
      const goBack = () => {
        router.back();
      };
  
      return {
        project,
        processedDescription,
        goBack,
      };
    },
  };
  </script>
  
  <style scoped>
  .project-view {
    padding: 20px;
  }
  
  .back-button {
    cursor: pointer;
    font-size: 3em;
    position: absolute;
    top: 150px;
    left: 100px;
    transition: transform 0.3s ease, color 0.3s ease;
  }
  
  .back-button:hover {
    transform: scale(1.1) rotate(-15deg);
    color: #555;
  }
  
  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .project-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 1 50%;
    padding-right: 20px;
    max-width: 1200px;
  }
  
  .project-logo {
    max-width: 150px;
    margin-bottom: 20px;
  }
  
  .project-details {
    text-align: left;
    max-width: 100%;
    padding: 25px;
  }
  
  .project-details h2 {
    margin: 0 0 10px 0;
  }
  
  .project-details p {
    margin: 5px 0;
  }
  
  .definitions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .definition {
    flex: 1;
    margin-right: 20px;
  }
  
  .definition:last-child {
    margin-right: 0;
  }
  
  .project-images {
    flex: 1 1 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .project-images img {
    max-width: 300px;
    margin-bottom: 20px;
  }
  </style>
  
  
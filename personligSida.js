const { createApp } = Vue

createApp({
    data() {
        return {
            projectsSofie: [] 
        }
    },
    // Gör en HTTP GET-förfrågan med Axios för att hämta data från 'projects.json'. 
    // Hanterar automatiskt omvandlingen av svar till JSON-format.
        created() {
            axios.get('projects.json') 
            .then((response) => {
                this.projectsSofie = response.data.projectsSofie;
            }) 
      }
  }).mount('#sofieApp')


  
createApp({
  data() {
      return {
          projectsJossan: [] 
      }
  },
      created() {
          axios.get('projects.json') 
          .then((response) => {
              this.projectsJossan = response.data.projectsJossan;
          }) 
    }
}).mount('#jossanApp')



createApp({
    data() {
        return {
            projectsMartin: [] 
        }
    },
        created() {
            axios.get('projects.json') 
            .then((response) => {
                this.projectsMartin = response.data.projectsMartin;
            }) 
      }
  }).mount('#martinApp')



  createApp({
    data() {
        return {
            projectsBedros: [] 
        }
    },
    methods: {
        renderText(text) { 
            return text.replace(/\n/g, "<br>"); // Ersätter ny rad karakärer i HTML med line breaks
        }
    },
        created() {
            axios.get('projects.json') 
            .then((response) => {
                this.projectsBedros = response.data.projectsBedros;
            }) 
      },

      
  }).mount('#bedrosApp')

  
// Animation
// Inuti funktionen hämtar den alla element på sidan med klassen "popup". 
// Vi loopar igenom elementen och kontrollerar om de är tillräckligt nära toppen av webbläsarfönstret.


const popup = () => {
    const popups = document.querySelectorAll(".popup");
    
    for (let i = 0; i < popups.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = popups[i].getBoundingClientRect().top;
        const elementVisible = 150;
  
        if (elementTop < windowHeight - elementVisible) {
            popups[i].classList.add("active");
        }
        else {
            popups[i].classList.remove("active");
        }
    }
  }
  
  window.addEventListener("scroll", popup);


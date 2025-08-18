// === Bouton menu ===
const btnMenu = document.querySelector('.btn-menu');
const navigation = document.querySelector('.navigation');
const itemsMenu = document.querySelectorAll('.menu-blocs a');
const ligne = document.querySelector('.ligne-cont');

btnMenu.addEventListener('click', () => {
    ligne.classList.toggle('active');
    navigation.classList.toggle('menu-visible');
});

if (window.matchMedia('(max-width: 1200px)').matches) {
    itemsMenu.forEach(item => {
        item.addEventListener('click', () => {
            ligne.classList.remove('active');
            navigation.classList.remove('menu-visible');
        });
    });
}

// === Animation Typewriter ===
const txtAnim = document.querySelector(".animation");
let writer = new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 20,
});

writer
    .pauseFor(1800)
    .changeDelay(20)
    .typeString("Salut! c'est <strong>GAFOURE</strong>, je suis ")
    .pauseFor(500)
    .typeString("<strong>Développeur web et system</strong> !")
    .pauseFor(1500)
    .deleteChars(15)
    .typeString("<span style='color: red;'>HTML </span> <span style='color: purple;'>CSS</span>!")
    .pauseFor(1500)
    .deleteChars(10)
    .typeString("<span style='color: yellow;'>JavaScript</span> !")
    .pauseFor(1500)
    .deleteChars(12)
    .typeString("<span style='color: lightskyblue;'>React js</span> !")
    .pauseFor(1500)
    .deleteChars(10)
    .typeString("<span style='color: orange;'>C</span> !")
    .pauseFor(5000)
    .start();

const pAnim = document.querySelector(".paragraph");
let writerP = new Typewriter(pAnim, {
    loop: true,
    deleteSpeed: 20,
});

writerP
    .pauseFor(1800)
    .changeDelay(20)
    .typeString("Bienvenue sur la page de présentation de mes projets ARDUINO")
    .pauseFor(500)
    .start();

// === Animations GSAP et ScrollMagic ===

const controller = new ScrollMagic.Controller();

// Section Présentation

const presContainer = document.querySelector(".presentation");
const titrePres = document.querySelector(".titre1");
const presGauche = document.querySelector(".pres-gauche");
const listPres = document.querySelectorAll(".pres-droite li");

const tlPresentation = gsap.timeline();
tlPresentation
    .from(titrePres, { y: -200, opacity: 0, duration: 0.8 })
    .from(presGauche, { x: -50, opacity: 0, duration: 0.8 }, "-=0.5")
    .from(listPres, { y: 20, opacity: 0, stagger: 0.2 }, "-=0.5");

new ScrollMagic.Scene({
    triggerElement: presContainer,
    triggerHook: 0.5,
    reverse: false
})
    .setTween(tlPresentation)
    .addTo(controller);

// Section Portfolio

const portContainer = document.querySelector(".portfolio");
const itemPort = document.querySelectorAll(".vagues");

const tlPortfolio = gsap.timeline();
tlPortfolio
    .from(portContainer, { y: 50, opacity: 0, duration: 1 })
    .from(itemPort, { y: 30, opacity: 0, stagger: 0.3 });

 const scene1 = new ScrollMagic.Scene({
    triggerElement: portContainer,
    triggerHook: 1,
    reverse: false
})
    .setTween(tlPortfolio)
    .addTo(controller);


// Section Compétences

     const sectionComp = document.querySelector('.range')
     const titreComp = document.querySelector('.titre3')
     const allLabel = document.querySelectorAll('.skill')
     const allPourcent = document.querySelectorAll('.number-skill')
     const allBarres = document.querySelectorAll('.bare')
     const allShadowBarres = document.querySelectorAll('.grises')

     const tlCompetences = new TimelineMax();
     
     tlCompetences
     .from(titreComp, {opacity: 0, duration: 0.6})
     .staggerFrom(allLabel, 0.5, {y: -50, opacity:0}, 0.1, '-=0.5')
     .staggerFrom(allPourcent, 0.5, {y: -10, opacity:0}, 0.1, '-=1')
     .staggerFrom(allShadowBarres, 0.5, {y: -10, opacity:0}, 0.1, '-=1')
     .staggerFrom(allBarres, 0.5, {y: -10, opacity:0}, 0.1, '-=1')

     const scene7 = new ScrollMagic.Scene({
        triggerElement: sectionComp,
        reverse: false
     })
     .setTween(tlCompetences)
     .addTo(controller);

// Section Contact
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const prenom = document.querySelector('#prenom').value;
    const nom = document.querySelector('#nom').value;
    const message = document.querySelector('#txt').value;

    const fullMessage = `Bonjour, je suis ${prenom} ${nom}.\n\nMessage : ${message}`;

    const encodedMessage = encodeURIComponent(fullMessage);

    const phoneNumber = '22655197506';

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
});

const inputFields = document.querySelectorAll('.form-group input, .form-group textarea');

inputFields.forEach(field => {
    function toggleLabelClass() {
        const parentFormGroup = field.closest('.form-group');
        if (field.value.trim() !== '') { 
            parentFormGroup.classList.add('has-content');
        } else {
            parentFormGroup.classList.remove('has-content');
        }
    }

    field.addEventListener('input', toggleLabelClass);
    field.addEventListener('focus', () => {
        field.closest('.form-group').classList.add('has-content');
    });
    field.addEventListener('blur', toggleLabelClass);
    toggleLabelClass();
});
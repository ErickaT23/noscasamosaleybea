import { eventData } from './config.js';

document.addEventListener('DOMContentLoaded', () => {

  // --- Apertura del sobre ---
  const seal = document.getElementById('seal');
  const envelope = document.getElementById('envelope');
  const mainContent = document.querySelector('.main-content');
  const audioPlayer = document.getElementById('audioPlayer');
  const playPauseButton = document.getElementById('playPauseButton');

  seal.addEventListener('click', () => {
    envelope.classList.add('open');
    setTimeout(() => {
      envelope.style.display = 'none';
      mainContent.classList.remove('hidden');
      audioPlayer.play();
      playPauseButton.innerText = 'Pause';
    }, 1000);
  });

  // --- Cargar datos generales ---
  document.getElementById('couple-names').innerText = eventData.couple.names;
  document.getElementById('wedding-date').innerText = eventData.couple.date;
  document.getElementById('hero-image').src = eventData.couple.heroImage;

  // --- Música ---
  audioPlayer.src = eventData.song.file;
  document.getElementById('song-title').innerText = eventData.song.title;

  const progressBar = document.getElementById('progress-bar');
  const currentTime = document.getElementById('current-time');
  const durationTime = document.getElementById('duration-time');

  playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseButton.innerText = 'Pause';
    } else {
      audioPlayer.pause();
      playPauseButton.innerText = 'Play';
    }
  });

  audioPlayer.addEventListener('loadedmetadata', () => {
    durationTime.textContent = formatTime(audioPlayer.duration);
  });

  audioPlayer.addEventListener('timeupdate', () => {
    progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    currentTime.textContent = formatTime(audioPlayer.currentTime);
  });

  progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
  });

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

//--- Botón para añadir al calendario ---
window.addToCalendar = function () {
  const calendarURL = "https://www.google.com/calendar/render?action=TEMPLATE&text=Nos+casamos+Ale+y+Bea&dates=20251214T210000Z/20251215T040000Z&details=Acomp%C3%A1%C3%B1anos+a+celebrar+el+gran+d%C3%ADa+de+Ale+y+Bea+%F0%9F%92%8D&location=Hotel+Barcel%C3%B3%2C+Ciudad+de+Guatemala&sf=true&output=xml";
  window.open(calendarURL, "_blank");
}


  // --- Itinerario ---
  // --- Ceremonia ---
  document.getElementById('ceremony-image').src = eventData.ceremony.ceremonyImage;
  document.getElementById('ceremony-place').innerText = eventData.ceremony.place;
  document.getElementById('ceremony-address').innerText = eventData.ceremony.address;
  document.getElementById('ceremony-date').innerText = eventData.ceremony.date;
  document.getElementById('ceremony-time').innerText = eventData.ceremony.time;
  document.getElementById('ceremony-map').onclick = () => window.open(eventData.ceremony.mapLink, '_blank');

    // --- Recepción ---
  document.getElementById('reception-image').src = eventData.reception.receptionImage;
  document.getElementById('reception-place').innerText = eventData.reception.place;
  document.getElementById('reception-address').innerText = eventData.reception.address;
  document.getElementById('reception-date').innerText = eventData.reception.date;
  document.getElementById('reception-time').innerText = eventData.reception.time;
  document.getElementById('reception-map').onclick = () => window.open(eventData.reception.mapLink, '_blank');


  document.getElementById('abroad-gift-message').innerText = eventData.abroadGiftMessage;
  document.getElementById('gift-image').src = eventData.giftImage; // ← si lo controlas desde config.js
  

  // --- Dress Code ---
  // DRESS CODE dinámico
const dresscode = eventData.dresscode;

document.getElementById('dresscode-image').src = dresscode.image;

document.getElementById('dresscode-details').innerHTML = `
  <p>${dresscode.description}</p>
`;

document.getElementById('dresscode-inspo').innerHTML = `
  <button onclick="window.open('${dresscode.inspiration.women}', '_blank')">Inspiración para Mujeres</button>
  <button onclick="window.open('${dresscode.inspiration.men}', '_blank')">Inspiración para Hombres</button>
`;



//BUENOS DESEOS
// script.js (normal, sin import)
document.getElementById('send-wish').addEventListener('click', () => {
  document.getElementById('wish-form').classList.toggle('hidden');
});

document.getElementById('submit-wish').addEventListener('click', () => {
  const name = document.getElementById('wish-name').value.trim();
  const message = document.getElementById('wish-message').value.trim();

  if (name && message) {
    guardarDeseo(name, message)
      .then(() => {
        alert("¡Deseo enviado!");
        document.getElementById('wish-name').value = '';
        document.getElementById('wish-message').value = '';
        document.getElementById('wish-form').classList.add('hidden');
      })
      .catch(err => console.error("❌ Error al guardar el deseo:", err));
  } else {
    alert("Por favor, completá ambos campos.");
  }
});

document.getElementById('show-wishes').addEventListener('click', () => {
  const container = document.getElementById('wishes-container');
  container.classList.toggle('hidden');

  if (!container.classList.contains('hidden')) {
    escucharDeseos((lista) => {
      container.innerHTML = '';
      lista.forEach(deseo => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${deseo.nombre}</strong>: ${deseo.mensaje}`;
        container.appendChild(p);
      });
    });
  }
});


  // --- No niños ---
  document.getElementById('no-kids-policy').innerText = eventData.noKidsPolicy;

  // --- Final: Foto y Frase ---
  document.getElementById('final-message').innerText = eventData.finalMessage;

  // --- Confirmaciones ---
  document.getElementById('rsvp-image').src = eventData.rsvp.rsvpImage;
  document.getElementById('rsvp-message').innerText = "Para nosotros es muy importante que confirmes tu asistencia lo antes posible, o bien indicarnos si no podrás acompañarnos.";

  // --- Footer (redes sociales) ---
  const socialIcons = document.getElementById('social-icons');

socialIcons.innerHTML = `
  <a href="${eventData.footer.social.whatsapp}" target="_blank" aria-label="Whatsapp">
    <i class="fab fa-whatsapp"></i>
  </a>
  <a href="${eventData.footer.social.facebook}" target="_blank" aria-label="Facebook">
    <i class="fab fa-facebook"></i>
  </a>
  <a href="${eventData.footer.social.instagram}" target="_blank" aria-label="Instagram">
    <i class="fab fa-instagram"></i>
  </a>
`;

document.getElementById('footer-logo').src = eventData.footer.logo;


  // --- Animaciones Scroll (fade-in) ---
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // --- Contador regresivo ---
  const [day, month, year] = eventData.couple.date.split('.').map(s => s.trim());
  const weddingDate = new Date(`${year}-${month}-${day}T00:00:00`);
  const countdown = setInterval(() => {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      clearInterval(countdown);
      document.getElementById('countdown').innerHTML = "<h2>¡Hoy es el gran día!</h2>";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  }, 1000);

});
function addToCalendar() {
    const title = encodeURIComponent('Boda de Mariano & Maritza');
    const details = encodeURIComponent('¡Acompáñanos en nuestra boda!');
    const location = encodeURIComponent('Guatemala City, Guatemala');
    const startDate = '20260727T170000Z'; // ⚡ Importante: Formato UTC YYYYMMDDTHHMMSSZ
    const endDate = '20260737T230000Z';   // ⚡ Final estimado
    
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}&sf=true&output=xml`;
  
    window.open(googleCalendarUrl, '_blank');
  }
  
  //OPTIMIZAR
  const params = new URLSearchParams(window.location.search);
  const guestId = params.get("id");
  const guest = window.guests.find(g => g.id === guestId);
  
  // 📋 Formularios según cantidad de pases
  const formUrlsByPases = {
    1: "https://docs.google.com/forms/d/e/1FAIpQLSf7FXUhOmNGVqZW5ZhL_Rfuc9QvOnFIgIzrSAFQiGWmNVibxQ/viewform?usp=pp_url&entry.42292443=",
    2: "https://docs.google.com/forms/d/e/1FAIpQLSe8G4EM8Ca_flb2zG104txD-9zElbrZDJSq0UlNPcqutFppcg/viewform?usp=pp_url&entry.42292443=",
    3: "https://docs.google.com/forms/d/e/1FAIpQLSd1WlKsOE3AitxXbx6-uLDTED7_A7Z5oTxKjED_UtMRmvdHqA/viewform?usp=pp_url&entry.42292443="
  };
  
  // 🔢 Campo del formulario para la cantidad de pases
  const entryPasesId = "entry.1137864773";
  
  // 🎯 Frases fijas (así aparecerán en el form)
  const pasesText = {
    1: "1 pase",
    2: "2 pases",
    3: "3 pases"
  };
  
  if (guest) {
    const formBaseURL = formUrlsByPases[guest.passes];
  
    if (formBaseURL) {
      const encodedName = encodeURIComponent(guest.name);
      const encodedPases = encodeURIComponent(pasesText[guest.passes] || "");
      const formURL = `${formBaseURL}${encodedName}&${entryPasesId}=${encodedPases}`;
  
      const confirmButton = document.getElementById("confirm-button");
      if (confirmButton) {
        confirmButton.onclick = () => {
          window.open(formURL, "_blank");
        };
      }
    } else {
      console.warn(`⚠️ No hay formulario configurado para ${guest.passes} pases.`);
    }
  }
  

// --- CUENTAS ---
window.toggleBankInfo = function () {
  const info = document.getElementById("bank-info");
  info.classList.toggle("open");
};

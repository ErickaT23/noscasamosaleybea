  const guests = [
    { id: "1", name: "Mary & Roberto", passes: 2, gender: "mixto" },
    { id: "2", name: "Roxana Alvarado", passes: 2, gender: "mixto" },
    { id: "3", name: "Arturo Márquez", passes: 2, gender: "masculino" },
    { id: "4", name: "Yesenia Márquez", passes: 1, gender: "femenino" },
    { id: "5", name: "Andrea Cuevas", passes: 2, gender: "femenino" },
    { id: "6", name: "Rosa Capriel", passes: 1, gender: "femenino" },
    { id: "7", name: "Leticia Solis", passes: 1, gender: "femenino" },
    { id: "8", name: "Fernando Solis", passes: 2, gender: "masculino" },
    { id: "9", name: "Ana Marcos", passes: 1, gender: "femenino" },
    { id: "10", name: "Maria Esther Marcos", passes: 1, gender: "femenino" },
    { id: "11", name: "Irma Marcos", passes: 2, gender: "femenino" },
    { id: "12", name: "Luis Márquez", passes: 2, gender: "masculino" },
    { id: "13", name: "Miriam Márquez", passes: 2, gender: "femenino" },
    { id: "14", name: "Camelia de Márquez", passes: 4, gender: "femenino" },
    { id: "15", name: "María Salazar Márquez", passes: 2, gender: "femenino" },
    { id: "16", name: "Ricardo Salazar Márquez", passes: 1, gender: "masculino" },
    { id: "17", name: "Eva Arrecis", passes: 2, gender: "femenino" },
    { id: "18", name: "Bélgica Arrecis", passes: 1, gender: "femenino" },
    { id: "19", name: "Yohana Gamba", passes: 2, gender: "femenino" },
    { id: "20", name: "Eileen Fabian Rivera", passes: 2, gender: "femenino" },
    { id: "21", name: "Astrid Carrera", passes: 2, gender: "femenino" },
    { id: "22", name: "Leslie Sánchez", passes: 2, gender: "femenino" },
    { id: "23", name: "Rodrigo Meléndez", passes: 1, gender: "masculino" },
    { id: "24", name: "Vivian Acevedo", passes: 2, gender: "femenino" },
    { id: "25", name: "Gerson Corona", passes: 2, gender: "masculino" },
    { id: "26", name: "Jose Guas", passes: 2, gender: "masculino" },
    { id: "27", name: "Alex Díaz", passes: 1, gender: "masculino" },
    { id: "28", name: "Lisbeth Gómez", passes: 2, gender: "femenino" },
    { id: "29", name: "Damián Ochoa", passes: 1, gender: "masculino" },
    { id: "30", name: "Edson Ortiz", passes: 1, gender: "masculino" },
    { id: "31", name: "Jose Estrada", passes: 2, gender: "masculino" },
    { id: "32", name: "Catherine Cifuentes", passes: 1, gender: "femenino" },
    { id: "33", name: "Marybeth Rodríguez", passes: 1, gender: "femenino" },
    { id: "34", name: "Gabriela González", passes: 1, gender: "femenino" },
    { id: "35", name: "Flor de María Girón", passes: 2, gender: "femenino" },
    { id: "36", name: "Karlily", passes: 1, gender: "femenino" },
    { id: "37", name: "Azucena Gómez", passes: 2, gender: "femenino" },
    { id: "38", name: "Sara Rosales", passes: 1, gender: "femenino" },
    { id: "39", name: "Natthaliee Molina", passes: 1, gender: "femenino" },
    { id: "40", name: "María Fernanda López", passes: 2, gender: "femenino" },
    { id: "41", name: "Ana Lucía Mártinez", passes: 1, gender: "femenino" },
    { id: "42", name: "Guido Gini", passes: 1, gender: "masculino" },
    { id: "43", name: "Melissa Molina", passes: 2, gender: "femenino" },
    { id: "44", name: "Idalia Cifuentes", passes: 2, gender: "femenino" },
    { id: "45", name: "Sonia Tale", passes: 1, gender: "femenino" },
    { id: "46", name: "Emperatriz Pérez", passes: 1, gender: "femenino" },
    { id: "47", name: "Carmen Ramírez", passes: 1, gender: "femenino" },
    { id: "48", name: "Carmen Chupina", passes: 1, gender: "femenino" },
    { id: "49", name: "Vicente Alvarado", passes: 2, gender: "masculino" },
    { id: "50", name: "Braulio Reyes", passes: 2, gender: "masculino" },
    { id: "51", name: "Kristhel Pineda", passes: 2, gender: "femenino" },
    { id: "52", name: "Francisco Valle", passes: 2, gender: "masculino" },
    { id: "53", name: "Nery Juracán", passes: 2, gender: "masculino" },
    { id: "54", name: "Carlos Jiménez", passes: 2, gender: "masculino" },
    { id: "55", name: "Raquel Paredes", passes: 2, gender: "femenino" },
    { id: "56", name: "Beatriz Alvarado de Guerra", passes: 2, gender: "femenino" },
    { id: "57", name: "Cesar Eduardo Beltrán", passes: 1, gender: "masculino" },
    { id: "58", name: "Sandra Márquez y Familia", passes: 3, gender: "mixto" },
    { id: "59", name: "Susy Payes", passes: 1, gender: "femenino" },
    { id: "60", name: "Pao y Sophia Castro", passes: 2, gender: "femenino" },
    { id: "61", name: "Rosario Ramírez", passes: 1, gender: "femenino" }
  ];
  


document.addEventListener("DOMContentLoaded", () => {
  const queryParams = new URLSearchParams(window.location.search);
  const guestId = queryParams.get("id");
  const guest = guests.find(g => g.id === guestId);

  if (guest) {
    let invitationText = `¡${guest.name}, `;

    if (guest.passes === 1) {
      invitationText += guest.gender === "femenino" ? "estás invitada!" : "estás invitado!";
    } else {
      invitationText += guest.gender === "femenino" ? "están invitadas!" : "están invitados!";
    }

    document.getElementById('guest-name').textContent = invitationText;
    document.getElementById('passes').textContent = `${guest.passes} ${guest.passes === 1 ? 'pase' : 'pases'}`;
    document.getElementById('guest-table').textContent = guest.table;
  } else {
    document.getElementById('guest-name').textContent = `¡Invitado no encontrado!`;
    const invitationInfo = document.querySelector('.invitation-info-section');
    if (invitationInfo) invitationInfo.style.display = 'none';
  }
});

window.guests = guests;
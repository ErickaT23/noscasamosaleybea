  const guests = [
    { id: "1", name: "Roxana Alvarado & Edwin Márquez", passes: 2, gender: "mixto" },
    { id: "2", name: "Arturo Márquez & Sory Cuellar", passes: 2, gender: "mixto" },
    { id: "1", name: "Yesenia Márquez", passes: 1, gender: "femenino" }
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
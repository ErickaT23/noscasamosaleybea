const guests = [
  { id: "1", name: "Roxana Alvarado & Edwin Márquez", passes: 2, gender: "mixto" },
  { id: "2", name: "Arturo Márquez & Sory Cuellar", passes: 2, gender: "mixto" },
  { id: "3", name: "Yesenia Márquez", passes: 1, gender: "femenino" },
  { id: "4", name: "Andrea Cuevas & Wendy Ortega", passes: 2, gender: "mixto" },
  { id: "5", name: "Rosa Capriel", passes: 1, gender: "femenino" },
  { id: "6", name: "Leticia Solis", passes: 1, gender: "femenino" },
  { id: "7", name: "Fernando Solis & Isabel Lemus", passes: 2, gender: "mixto" },
  { id: "8", name: "Ana Marcos", passes: 1, gender: "femenino" },
  { id: "9", name: "Maria Esther Marcos", passes: 1, gender: "femenino" },
  { id: "10", name: "Irma Marcos & Cely Marcos", passes: 2, gender: "mixto" },
  { id: "11", name: "Luis Márquez & Leticia de Márquez", passes: 2, gender: "mixto" },
  { id: "12", name: "Miriam Márquez & Marco Tulio", passes: 2, gender: "mixto" },
  { id: "13", name: "Camelia de Márquez, Diego Márquez, Javier Márquez & Camila Márquez", passes: 4, gender: "mixto" },
  { id: "14", name: "María Salazar Márquez & Rene Quinteros", passes: 2, gender: "mixto" },
  { id: "15", name: "Ricardo Salazar Márquez", passes: 1, gender: "masculino" },
  { id: "16", name: "Eva Arrecis & Analy Guzmán", passes: 2, gender: "mixto" },
  { id: "17", name: "Bélgica Arrecis", passes: 1, gender: "femenino" },
  { id: "18", name: "Yohana Gamba & Pedro Borrayo", passes: 2, gender: "mixto" },
  { id: "19", name: "Marivi H. Papadopolo y Rosa María Hernández", passes: 2, gender: "mixto" },
  { id: "20", name: "Eileen Fabian Rivera & Orlando Batres", passes: 2, gender: "mixto" },
  { id: "21", name: "Astrid Carrera & Georgina de Carrera", passes: 2, gender: "mixto" },
  { id: "22", name: "Leslie Sánchez & Alfredo García", passes: 2, gender: "mixto" },
  { id: "23", name: "Rodrigo Meléndez", passes: 1, gender: "masculino" },
  { id: "24", name: "Vivian Acevedo & Erick Sologaistoa", passes: 2, gender: "mixto" },
  { id: "25", name: "Gerson Corona & Nancy Morales", passes: 2, gender: "mixto" },
  { id: "26", name: "Jose Guas & Jennifer Cifontes", passes: 2, gender: "mixto" },
  { id: "27", name: "Alex Díaz", passes: 1, gender: "masculino" },
  { id: "28", name: "Lisbeth Gómez & José Mateo", passes: 2, gender: "mixto" },
  { id: "29", name: "Damián Ochoa", passes: 1, gender: "masculino" },
  { id: "30", name: "Edson Ortiz", passes: 1, gender: "masculino" },
  { id: "31", name: "Jose Estrada & Yusselbeth Montes", passes: 2, gender: "mixto" },
  { id: "32", name: "Catherine Cifuentes", passes: 1, gender: "femenino" },
  { id: "33", name: "Marybeth Rodríguez", passes: 1, gender: "femenino" },
  { id: "34", name: "Gabriela González", passes: 1, gender: "femenino" },
  { id: "35", name: "Flor de María Girón & Prometido", passes: 2, gender: "mixto" },
  { id: "36", name: "Karlily", passes: 1, gender: "femenino" },
  { id: "37", name: "Azucena Gómez & Prometido", passes: 2, gender: "mixto" },
  { id: "38", name: "Sara Rosales", passes: 1, gender: "femenino" },
  { id: "39", name: "Natthaliee Molina", passes: 1, gender: "femenino" },
  { id: "40", name: "María Fernanda López & Daniel Godínez", passes: 2, gender: "mixto" },
  { id: "41", name: "Ana Lucía Mártinez", passes: 1, gender: "femenino" },
  { id: "42", name: "Guido Gini", passes: 1, gender: "masculino" },
  { id: "43", name: "Melissa Molina & Obdulio Edelman", passes: 2, gender: "mixto" },
  { id: "44", name: "Idalia Cifuentes & Grisly Cabrera", passes: 2, gender: "mixto" },
  { id: "45", name: "Sonia Tale", passes: 1, gender: "femenino" },
  { id: "46", name: "Emperatriz Pérez", passes: 1, gender: "femenino" },
  { id: "47", name: "Carmen Ramírez", passes: 1, gender: "femenino" },
  { id: "48", name: "Carmen Chupina", passes: 1, gender: "femenino" },
  { id: "49", name: "Vicente Alvarado & esposa", passes: 2, gender: "mixto" },
  { id: "50", name: "Braulio Reyes & esposa", passes: 2, gender: "mixto" },
  { "id": "51", "name": "Kristhel Pineda & Orlando Moran", "passes": 2, "gender": "mixto" },
  { "id": "52", "name": "Francisco Valle & Isabel Osorio de Valle", "passes": 2, "gender": "mixto" },
  { "id": "53", "name": "Nery Juracán & esposa", "passes": 2, "gender": "mixto" },
  { "id": "54", "name": "Carlos Jiménez & Lisbeth de Jiménez", "passes": 2, "gender": "mixto" },
  { "id": "55", "name": "Raquel Paredes & esposo", "passes": 2, "gender": "mixto" },
  { "id": "56", "name": "Beatriz Alvarado de Guerra & Rolando Guerra", "passes": 2, "gender": "mixto" },
  { "id": "57", "name": "Miriam Beltrán, Jaime Chávez & Jazmín Chávez", "passes": 3, "gender": "mixto" },
  { "id": "58", "name": "Cesar Eduardo Beltrán", "passes": 1, "gender": "masculino" },
  { "id": "59", "name": "Luis Marcos y Familia", "passes": 2, "gender": "mixto" },
  { "id": "60", "name": "Sandra Márquez y Familia", "passes": 3, "gender": "femenino" },
  { "id": "61", "name": "Susy Payes", "passes": 1, "gender": "femenino" },
  { "id": "62", "name": "Pao y Sophia Castro", "passes": 2, "gender": "femenino" },
  { "id": "63", "name": "Rosario Ramírez", "passes": 1, "gender": "femenino" },
  { "id": "64", "name": "Willy Herrera & Nilda Gutiérrez", "passes": 2, "gender": "mixto" },
  { "id": "65", "name": "José Herrera & Kimberly Reynoso", "passes": 2, "gender": "mixto" },
  { "id": "66", "name": "Walter Herrera & Ericka García", "passes": 1, "gender": "femenino" },
  { "id": "67", "name": "Rodrigo Herrera & Eva Velásquez", "passes": 2, "gender": "mixto" },
  { "id": "68", "name": "Claudia Morales & Dariel Soto", "passes": 2, "gender": "mixto" },
  { "id": "69", "name": "Pamela Morales, Diego López & Jose Miguel López", "passes": 3, "gender": "mixto" },
  { "id": "70", "name": "Mynor Gutiérrez & amiga especial", "passes": 2, "gender": "mixto" },
  { "id": "71", "name": "Maria Argüello, Daniel de León, André López & Martín López", "passes": 4, "gender": "mixto" },
  { "id": "72", "name": "Ana Hernández Godoy", "passes": 1, "gender": "femenino" },
  { "id": "73", "name": "María Estela Villatoro de Sánchez & Edvin Manfredo Sánchez", "passes": 2, "gender": "mixto" },
  { "id": "74", "name": "Astrid Godínez, Iliana Valenzuela, Rolando Godínez & Luis Godínez", "passes": 4, "gender": "mixto" },
  { "id": "75", "name": "Andrea Reynoso & Pablo Godoy", "passes": 2, "gender": "mixto" },
  { "id": "76", "name": "Bruce López", "passes": 1, "gender": "masculino" },
  { "id": "77", "name": "Diego Avilés", "passes": 1, "gender": "masculino" },
  { "id": "78", "name": "Gustavo Cifuentes", "passes": 1, "gender": "masculino" },
  { "id": "79", "name": "Johami Colindres & Andres Gálvez", "passes": 2, "gender": "mixto" },
  { "id": "80", "name": "Leslie Lechuga & Isiah García", "passes": 2, "gender": "mixto" },
  { "id": "81", "name": "Sou-lin Gabriel & Oscar Escobar", "passes": 2, "gender": "mixto" },
  { "id": "82", "name": "Walter Juárez & Rome Gonzalez", "passes": 2, "gender": "mixto" },
  { "id": "83", "name": "Ricardo Leiva", "passes": 1, "gender": "masculino" },
  { "id": "84", "name": "Katerin Amaya & Andres Cardona", "passes": 2, "gender": "mixto" },
  { "id": "85", "name": "Emilio Rubio", "passes": 1, "gender": "masculino" },
  { "id": "86", "name": "Mario Rubio & Olga Paiz", "passes": 2, "gender": "mixto" },
  { "id": "87", "name": "Kevin Cardona & Brenda Chur", "passes": 2, "gender": "mixto" },
  { "id": "88", "name": "Leonel Argueta", "passes": 1, "gender": "masculino" },
  { "id": "89", "name": "Kevin Godinez", "passes": 1, "gender": "masculino" },
  { "id": "90", "name": "Stuardo Garcia", "passes": 1, "gender": "masculino" },
  { "id": "91", "name": "José Ávalos & Andrea García", "passes": 2, "gender": "mixto" },
  { "id": "92", "name": "Angel Cajas", "passes": 1, "gender": "masculino" },
  { "id": "93", "name": "Julio Osorio", "passes": 1, "gender": "masculino" },
  { "id": "94", "name": "Otto Anaya", "passes": 1, "gender": "masculino" },
  { "id": "95", "name": "Lourdes Herrera & Andrés Morales", "passes": 2, "gender": "mixto" },
  { "id": "96", "name": "Ricardo Morales & Katherin Pérez", "passes": 2, "gender": "mixto" },
  { "id": "97", "name": "Javier Carranza", "passes": 1, "gender": "masculino" },
  { "id": "98", "name": "Susana Gutiérrez & Héctor Orellana", "passes": 2, "gender": "mixto" },
  { "id": "99", "name": "Armando Gutiérrez & Sonia Ávila de Gutiérrez", "passes": 2, "gender": "mixto" },
  { "id": "100", "name": "Ernesto Herrera, Jessica Herrera & Camila Herrera", "passes": 3, "gender": "mixto" },
  { "id": "101", "name": "Claudia Herrera, Alejandro Flores & Alejandra Flores", "passes": 3, "gender": "mixto" },
  { "id": "102", "name": "Melanie de Navas & Melvin Navas", "passes": 2, "gender": "mixto" },
  { "id": "103", "name": "Amílcar Flores & Alma de León", "passes": 2, "gender": "mixto" },
  { "id": "104", "name": "Ligia Gutiérrez & Juan José Pol", "passes": 2, "gender": "mixto" },
  { "id": "105", "name": "Armando Eduardo Gutiérrez Ávila", "passes": 1, "gender": "masculino" },
  { "id": "106", "name": "Olga Villatoro & Jorge Mario Stevens", "passes": 2, "gender": "mixto" },
  { "id": "107", "name": "Carlos Villatoro Gutiérrez & Lissette Valle", "passes": 2, "gender": "mixto" },
  { "id": "108", "name": "Jorge Danilo Villatoro Gutiérrez", "passes": 1, "gender": "masculino" },
  { "id": "109", "name": "Luis Fernando Mejicanos & Narda Pacay de Mejicanos", "passes": 2, "gender": "mixto" },
  { "id": "110", "name": "Ixchel y Raúl", "passes": 2, "gender": "mixto" }, 
  { "id": "111", "name": "Amarilis Rivas", "passes": 1, "gender": "femenino" }, 
  { "id": "112", "name": "Gary Vasquez", "passes": 1, "gender": "masculino" }, 
  { "id": "113", "name": "Fernanda Orozco", "passes": 1, "gender": "femenino" }
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
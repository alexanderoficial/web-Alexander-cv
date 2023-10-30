document.addEventListener("DOMContentLoaded", function() {
  const chatLog = document.getElementById("chat-log");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");

  const respuestas = {
    "hola": "Hola, ¿cómo estás?",
    "bien": "Me alegra escucharlo.",
    "":"¿Ups? Enviaste un mensaje vacío",
    "bien y tu":"Bien gracias ¿Sabes quién me creo?",
    "no":"Por Alexander Herrera López ¡FIN!",
    "quien te creo":"Alexander Herrera López",
    "si":"Creado por Alexander Herrera López",
    "tu que eres": "Soy un chat bot.",
    "quien eres":"Soy un chat bot",
    "y tu": "!Bien gracias! {Soy un chat bot}",
    "gracias": "De nada, ¿en qué más puedo ayudarte?",
    "me alegro":"Igual yo (cuídate mucho bye",
     "bye":"Adios, Cuídate amig@",   
     "chau":"Adiós, Que tengas un excelente día",
     "adiós":"Adiós, Que tengas un excelente día",
      "gracias":"De nada, Estoy para ayudarte",
    "despedida": "Hasta luego."
   
  };

  sendButton.addEventListener("click", function() {
    const userMessage = userInput.value;
    handleBotResponse(userMessage);
    userInput.value = ""; // Limpia el campo de entrada
  });

  function clearChatLog() {
    chatLog.innerHTML = ""; // Elimina todo el contenido del registro de chat
  }

  function displayBotMessage(message) {
    const botMessageElement = document.createElement("div");
    botMessageElement.className = "bot-message";
    botMessageElement.textContent = message;
    chatLog.appendChild(botMessageElement);
  }

  function handleBotResponse(userMessage) {
    // Lógica para obtener la respuesta del bot según el mensaje del usuario
    const normalizedMessage = userMessage.toLowerCase(); // Convertir el mensaje a minúsculas para facilitar la comparación
    const respuesta = respuestas[normalizedMessage];

    clearChatLog(); // Borra las respuestas anteriores

    if (respuesta) {
      displayBotMessage(respuesta);
    } else {
      displayBotMessage("Lo siento, no entiendo ese mensaje.");
    }
  }
});

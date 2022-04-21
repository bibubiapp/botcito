const { Client, MessageEmbed } = require("discord.js");
const client = new Client();

client.on("ready", () => {
  console.log("Tamo");
});

let prefix = process.env.PREFIX;

const docuArray = [
  {
    title: "HTML Basics",
    url: "https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics",
  },
  {
    title: "Head en HTML",
    url: "https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML",
  },
  {
    title: "Textos en HTML",
    url: "https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals",
  },
  {
    title: "Hipervínculos en HTML",
    url: "https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks",
  },
  {
    title: "Formateo de texto en HTML",
    url: "https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting",
  },
  {
    title: "Estructurar una pagina en HTML",
    url: "https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content",
  },
  {
    title: "Cosas multimedia en HTML",
    url: "https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding",
  },
  {
    title: "Imagenes en HTML",
    url: "https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML",
  },
  {
    title: "Audio y video en HTML",
    url: "https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content",
  },
  {
    title: "Imágenes responsive en HTML",
    url: "https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",
  },
  {
    title: "Intro en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS",
  },
  {
    title: "Qué es CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/First_steps/What_is_CSS",
  },
  {
    title: "Cómo se estructura el CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/First_steps/How_CSS_is_structured",
  },
  {
    title: "Cómo funciona el CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/First_steps/How_CSS_works",
  },
  {
    title: "Intro a creando bloques en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks",
  },
  {
    title: "Cascada y Herencia en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance",
  },
  {
    title: "Selectores en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Selectors",
  },
  {
    title: "Modelo de caja o Box Model en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model",
  },
  {
    title: "Fondos y Bordes en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders",
  },
  {
    title: "Direcciones de texto en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Handling_different_text_directions",
  },
  {
    title: "Overflow en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Overflowing_content",
  },
  {
    title: "Valores y unidades en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Values_and_units",
  },
  {
    title: "Dimensionar elementos en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS",
  },
  {
    title: "Imágenes en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Images_media_form_elements",
  },
  {
    title: "Cómo estilar tablas en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Styling_tables",
  },
  {
    title: "Estilando el texto en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/Styling_text",
  },
  {
    title: "Textos y fuentes en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/Styling_text/Fundamentals",
  },
  {
    title: "Aplicando estilo a listas",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/Styling_text/Styling_lists",
  },
  {
    title: "Estilar los enlaces",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/Styling_text/Styling_links",
  },
  {
    title: "Fuentes web en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/Styling_text/Web_fonts",
  },
  {
    title: "Introducción al Diseño en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Introduction",
  },
  {
    title: "Normal Flow en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Normal_Flow",
  },
  {
    title: "Flexbox en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Flexbox",
  },
  {
    title: "Grid en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Grids",
  },
  {
    title: "Positions en CSS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning",
  },
  {
    title: "Responsive Design en CSS",
    url: "https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Responsive_Design",
  },
  {
    title: "Media Queries para NOOOOOOOOOBS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries",
  },
  {
    title: "Qué es JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
  },
  {
    title: "Variables en JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables",
  },
  {
    title: "Matemática básica en JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math",
  },
  {
    title: "Strings en JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings",
  },
  {
    title: "Métodos de Strings en JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods",
  },
  {
    title: "Arrays en JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays",
  },
  {
    title: "Condicionales en JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals",
  },
  {
    title: "Loops o Bucles en JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code",
  },
  {
    title: "Funciones en JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions",
  },
  {
    title: "Lo que devuelve una función (return) en JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values",
  },
  {
    title: "Introducción a Eventos en JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events",
  },
  {
    title: "Lo básico de Objetos en JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics",
  },
  {
    title: "Prototipos en Objetos de JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes",
  },
  {
    title: "Programación orientada a objetos (POO) en JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming",
  },
  {
    title: "Classes en JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript",
  },
  {
    title: "Asincronismo en JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous",
  },
  {
    title: "Intro al asincronismo en JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing",
  },
  {
    title: "Cómo usar promesas en JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises",
  },
  {
    title: "Introducción a las WEB APIs",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction",
  },
  {
    title: "Fetch en JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data",
  },
  {
    title: "Cómo se estructura un Form",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form",
  },
  {
    title: "Types de los inputs en HTML",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types",
  },
  {
    title: "Estilando Forms en CSS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms",
  },
  {
    title: "Validación de inputs en HTML",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation",
  },
  {
    title: "Qué es la Accesibilidad",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility",
  },
  {
    title: "Principios de Accesibilidad en HTML",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML",
  },
  {
    title: "Principios de Accesibilidad en CSS y JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript",
  },
];

const randomNumber = Math.floor(Math.random() * docuArray.length + 1);
const randomDocu = docuArray[randomNumber];

client.on("message", async (message) => {
  // if (message.author.bot) return;

  if (
    message.content.toUpperCase().includes("puto".toUpperCase()) ||
    message.content.toUpperCase().includes(" puta".toUpperCase()) ||
    message.content.toUpperCase().includes("hdp".toUpperCase()) ||
    message.content.toUpperCase().includes("p*ta".toUpperCase()) ||
    message.content.toUpperCase().includes("put*".toUpperCase()) ||
    message.content.toUpperCase().includes("hdp".toUpperCase()) ||
    message.content.toUpperCase().includes("trolo".toUpperCase()) ||
    message.content.toUpperCase().includes("culia".toUpperCase()) ||
    message.content.toUpperCase().includes("pelotudo".toUpperCase()) ||
    message.content.toUpperCase().includes("pija".toUpperCase()) ||
    message.content.toUpperCase().includes("concha".toUpperCase()) ||
    message.content.toUpperCase().includes("forro".toUpperCase()) ||
    message.content.toUpperCase().includes("pajero".toUpperCase()) ||
    message.content.toUpperCase().includes("chupa pij".toUpperCase()) ||
    message.content.toUpperCase().includes("hijo de p".toUpperCase())
  ) {
    message.reply("EU, LAS PALABRITAS EH");
  }

  // if (
  //   message.content.toUpperCase().includes("lucho".toUpperCase()) ||
  //   message.content.toUpperCase().includes("lucian".toUpperCase())
  // ) {
  //   if (message.author != "638514826884153356") {
  //     message.reply("EL LUCHO DE LA PIPOL SIEMPRE PRESENTE 🕺");
  //   }
  // }

  if (message.content.toUpperCase().includes("lo rompis".toUpperCase())) {
    message.reply("SANTI NO ROMPIÓ NADA, CALMATE");
  }

  if (message.content.toUpperCase().includes("php".toUpperCase())) {
    if (message.author != "638514826884153356") {
      message.reply("Está prohibido hablar de PHP, primer aviso (?)");
    }
  }

  if (message.content.toUpperCase().includes("wordpress".toUpperCase())) {
    if (message.author != "638514826884153356") {
      message.reply("Wordpress? Donde??!! NOOOOOOOOOOOOOOO HUYAMOS!!");
    }
  }

  // if (message.content.toUpperCase().includes("caro".toUpperCase())) {
  //   if (message.author != "638514826884153356") {
  //     message.channel.send("CAROOOO TE AMOOOOOOO ❤️");
  //   }
  // }

  // if (
  //   (message.content.toUpperCase().includes("github".toUpperCase()) ||
  //     message.content.toUpperCase().includes("git".toUpperCase())) &&
  //   (message.content.toUpperCase().includes("cambiar".toUpperCase()) ||
  //     message.content.toUpperCase().includes("cambio".toUpperCase())) &&
  //   message.content.toUpperCase().includes("rama".toUpperCase())
  // ) {
  //   if (message.author != "638514826884153356") {
  //     message.channel.send(
  //       "Para cambiar de rama en github tenés que ponerte a estudiar un poco soquete :)"
  //     );
  //   }
  // }

  // if (
  //   message.content.toUpperCase().includes("facu".toUpperCase()) ||
  //   message.content.toUpperCase().includes("citio".toUpperCase())
  // ) {
  //   if (message.author != "638514826884153356") {
  //     //   message.reply("EL CITIOU ES LO MÁS GRANDE ❤️");
  //     message.reply(
  //       "EL CITIOU! EL CITIOU LLEGA TARDE A UNA ENTREVISTA VIRTUAL"
  //     );
  //   }
  // }

  if (
    message.content.toUpperCase().includes("#teamtiburoncin".toUpperCase()) ||
    message.content.toUpperCase().includes("team tiburoncin".toUpperCase())
  ) {
    if (message.author != "638514826884153356") {
      //   message.reply("EL CITIOU ES LO MÁS GRANDE ❤️");
      message.reply(
        "Vamo che! Aguante el #TeamTiburoncin 🦈 ponete un nombre como la gente bot de NUCBA"
      );
    }
  }

  if (
    message.content.toUpperCase().includes("#teamnucba".toUpperCase()) ||
    message.content.toUpperCase().includes("team nucba".toUpperCase())
  ) {
    if (message.author != "638514826884153356") {
      //   message.reply("EL CITIOU ES LO MÁS GRANDE ❤️");
      message.reply(
        "#TeamNucba mercenarios, ponete un nombre como la gente Bot de NUCBA. #TeamTiburoncin PRESENTE!"
      );
    }
  }

  if (
    message.content.toUpperCase().includes("quien es tiburonc".toUpperCase()) ||
    message.content.toUpperCase().includes("es tiburon".toUpperCase())
  ) {
    if (message.author != "638514826884153356") {
      //   message.reply("EL CITIOU ES LO MÁS GRANDE ❤️");
      message.reply(
        "Hola soy Tiburoncin! El más mejor bot de todos y guardaespaldas personal de Santi 🦈 haganme caso o no aprenden CSS"
      );
    }
  }

  if (message.content.toUpperCase().includes("santi".toUpperCase())) {
    if (message.author != "638514826884153356") {
      message.channel.send(
        "Santi, te llaman hermano... aparecé dejá de comer Oreos"
      );
    }
  }

  if (message.content === "!borraTodoPuto") {
    const fetched = await message.channel.messages.fetch({ limit: 100 });
    message.channel.bulkDelete(fetched);
    console.log("Mensajes eliminados");
  }

  if (message.content.toUpperCase().includes("!adel".toUpperCase())) {
    console.log("Message author: ", message.author);
    const embed = new MessageEmbed()
      .setTitle("Dijeron DOCUMENTACIÓN?")
      .setColor("#FF00A2")
      .setAuthor(
        "Adel dice:",
        "https://pbs.twimg.com/profile_images/1468394387000410116/uj5xswRX_400x400.jpg",
        "https://developer.mozilla.org/es/"
      )
      .setDescription(
        "Te pido por favor que vayas a leer la documentación porque está todo ahí"
      )
      .addFields({
        name: `Querés aprender sobre ${randomDocu.title}?`,
        value: `Toma, anda a leer la documentación: ${randomDocu.url}`,
      });
    message.channel.send(embed);
  }

  if (
    message.content.toUpperCase().includes("shavascr".toUpperCase()) ||
    message.content.toUpperCase().includes("javascript".toUpperCase())
  ) {
    const embed = new MessageEmbed()
      .setTitle("Dijeron SHAVASCRIPT?")
      .setColor("#ffdf00")
      .setAuthor(
        "Tiburoncin dice:",
        "https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png",
        "https://developer.mozilla.org/es/docs/Web/JavaScript"
      )
      .setDescription(
        "Shavascript es el mejor lenguaje del planeta universal mundial de la galaxia y la via láctea"
      )
      .addFields({
        name: "ASI QUE PONGANSE A PRACTICAR SOQUETES :)",
        value:
          "Tomen, les dejo documentación para que se diviertan: https://developer.mozilla.org/es/docs/Web/JavaScript",
      });
    message.channel.send(embed);
  }
});

client.login("OTY2NzgyOTAxMDM3NDUzMzgz.YmGwvQ.4czNiBnSWjOmRHvZ5aGo85nTtmw");

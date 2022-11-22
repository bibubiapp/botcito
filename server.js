require("dotenv").config();

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

const diegoArray = [
  {
    gifUrl:
      "https://tenor.com/view/diego-armando-maradona-festejo-boca-gif-18081754",
  },
  {
    gifUrl:
      "https://tenor.com/view/diego-maradona-world-cup2018-argentina-national-team-football-match-soccer-game-gif-12094403",
  },
  {
    gifUrl:
      "https://tenor.com/view/maradona-diego-soccer-dios-el-diez-gif-24231370",
  },
  {
    gifUrl:
      "https://tenor.com/view/diego-armando-maradona-maradona-techno-dancing-dance-gif-12515625",
  },
  {
    gifUrl:
      "https://tenor.com/view/diego-armando-maradona-festejo-boca-gif-18081764",
  },
  {
    gifUrl: "https://tenor.com/view/maradona-dance-pool-gif-10284953",
  },
  {
    gifUrl:
      "https://tenor.com/view/baila-dance-argentina-maradona-funny-gif-12211279",
  },
  {
    gifUrl:
      "https://tenor.com/view/celebrando-diego-maradona-liga-profesional-de-f%C3%BAtbol-de-la-afa-feliz-victoria-gif-20571005",
  },
  {
    gifUrl:
      "https://tenor.com/view/diego-maradona-fuck-you-racing-dt-gif-23181459",
  },
  {
    gifUrl:
      "https://tenor.com/view/maradona-maradona-gol-argentina-maradona-celebracion-thank-you-gif-12069440",
  },
  {
    gifUrl:
      "https://tenor.com/view/maradona-diego-armando-diego-armando-maradona-italia90-mundial-gif-17192842",
  },
  {
    gifUrl: "https://tenor.com/view/maradona-gif-23881452",
  },
  {
    gifUrl: "https://tenor.com/view/maradona-mueca-diego-maradona-gif-5619520",
  },
  {
    gifUrl:
      "https://tenor.com/view/maradona-gallina-boca-maradona-gallina-gallinita-gif-16525231",
  },
  {
    gifUrl:
      "https://tenor.com/view/beat-chest-diego-maradona-liga-profesional-de-f%C3%BAtbol-de-la-afa-i-feel-you-respect-gif-18002410",
  },
  {
    gifUrl:
      "https://tenor.com/view/diego-maradona-maradona-boca-juniors-boca-gif-21207362",
  },
  {
    gifUrl:
      "https://tenor.com/view/diego-maradona-maradona-argentina-dribbling-dribble-gif-21207270",
  },
  {
    gifUrl:
      "https://tenor.com/view/lo-hicimos-diego-maradona-liga-profesional-de-f%C3%BAtbol-de-la-afa-feliz-emocionado-gif-20570966",
  },
  {
    gifUrl:
      "https://tenor.com/view/feliz-diego-maradona-liga-profesional-de-f%C3%BAtbol-de-la-afa-celebrando-abrazo-gif-20571020",
  },
  {
    gifUrl:
      "https://tenor.com/view/diego-maradona-maradona-soccer-skills-napoli-naples-gif-21207066",
  },
  {
    gifUrl:
      "https://tenor.com/view/maradona-f%C3%BAtbol-argentino-superclasico-diego-maradona-se-le-cay%C3%B3la-bombachita-gif-25200753",
  },
  {
    gifUrl:
      "https://tenor.com/view/el-diego-loco-maradona-diegote-gif-14527634",
  },
  {
    gifUrl:
      "https://tenor.com/view/beso-de-tevez-a-maradona-beso-tevez-boca-maradona-gif-16524564",
  },
  {
    gifUrl: "https://tenor.com/view/putto-gif-19337272",
  },
  {
    gifUrl:
      "https://tenor.com/view/diego-maradona-world-cup2018-argentina-national-team-football-match-soccer-game-gif-12094429",
  },
  {
    gifUrl: "https://tenor.com/view/maradona-brazil-90-gif-10654654",
  },
  {
    gifUrl:
      "https://tenor.com/view/alcohol-tequila-drunk-vodka-argentina-gif-12069688",
  },
  {
    gifUrl:
      "https://tenor.com/view/diego-maradona-maradona-el-diego-argentina-keepie-ups-gif-21207013",
  },
  {
    gifUrl:
      "https://tenor.com/view/diego-maradona-el-diego-maradona-argentina-keepie-ups-gif-21206944",
  },
  {
    gifUrl:
      "https://tenor.com/view/diego-maradona-maradona-diego-mexico86-world-cup-winner-gif-21207404",
  },
];

const palabrotasArray = [
  "puto",
  " puta",
  "hdp",
  "p*ta",
  "trolo",
  "culia",
  "pelotudo",
  "pija",
  "poronga",
  "concha",
  "forro",
  "forra",
  "pelotuda",
  "pajero",
  "pajera",
  "chupa pij",
  "hijo de p",
  "hija de p",
  "conchudo",
  "cornudo",
];

const equipos = {
  qatar: "Qatar :flag_qa:",
  ecuador: "Ecuador :flag_ec:",
  senegal: "Senegal :flag_sn:",
  paisesBajos: "Países Bajos :flag_nl:",

  inglaterra: "Inglaterra :england:",
  iran: "Iran :flag_ir:",
  usa: "Usa :flag_us:",
  gales: "Gales :wales:",

  argentina: "Argentina :flag_ar: (VAMO SELESIÓN!)",
  arabia: "Arabia :flag_sa:",
  mexico: "México :flag_mx:",
  polonia: "Polonia :flag_pl:",

  francia: "Francia :flag_fr:",
  australia: "Australia :flag_au:",
  dinamarca: "Dinamarca :flag_dk:",
  tunez: "Túnez :flag_tn:",

  espana: "España :flag_es:",
  costaRica: "Costa Rica :flag_cr:",
  alemania: "Alemania :flag_de:",
  japon: "Japón :flag_jp:",

  belgica: "Bélgica :flag_be:",
  canada: "Canadá :flag_ca:",
  marruecos: "Marruecos :flag_ma:",
  croacia: "Croacia :flag_hr:",

  brasil: "Brasil :flag_br:",
  serbia: "Serbia :flag_rs:",
  suiza: "Suiza :flag_se:",
  camerun: "Camerún :flag_cm:",

  portugal: "Portugal :flag_pt:",
  ghana: "Ghana :flag_gh:",
  uruguay: "Uruguay :flag_uy:",
  corea: "Corea del Sur :flag_kr:",
};

const tele = {
  tyc: "TyC Sports",
  tyc2: "TyC Sports 2",
  tvpublica: "TV Pública",
  direct: "DirectTV",
};

const fixture = [
  // 20
  {
    fecha: new Date("11/20/2022"),
    partidos: [
      {
        id: 1,
        local: equipos.qatar,
        visitante: equipos.ecuador,
        hora: "13:00hs",
        grupo: "A",
        tele: [tele.tvpublica, tele.direct],
        estadio: "Al bayt - Jor",
      },
    ],
  },
  // 21
  {
    fecha: new Date("11/21/2022"),
    partidos: [
      {
        id: 2,
        local: equipos.inglaterra,
        visitante: equipos.iran,
        hora: "10:00hs",
        grupo: "B",
        tele: [tele.tyc, tele.direct],
        estadio: "Khalifa - Doha",
      },
      {
        id: 3,
        local: equipos.senegal,
        visitante: equipos.paisesBajos,
        hora: "13:00hs",
        grupo: "A",
        tele: [tele.tvpublica, tele.direct],
        estadio: "Al Thumama - Doha",
      },
      {
        id: 4,
        local: equipos.usa,
        visitante: equipos.gales,
        hora: "16:00hs",
        grupo: "B",
        tele: [tele.tyc, tele.direct],
        estadio: "Al Thumama - Doha",
      },
    ],
  },
  // 22
  {
    fecha: new Date("11/22/2022"),
    partidos: [
      {
        id: 5,
        local: equipos.argentina,
        visitante: equipos.arabia,
        hora: "07:00hs",
        grupo: "C",
        tele: [tele.tyc, tele.direct, tele.tvpublica],
        estadio: "Lusail - Lusail",
      },
      {
        id: 6,
        local: equipos.dinamarca,
        visitante: equipos.tunez,
        hora: "10:00hs",
        grupo: "D",
        tele: [tele.tyc, tele.direct],
        estadio: "Ciudad de la Educacion - Rayan",
      },
      {
        id: 7,
        local: equipos.mexico,
        visitante: equipos.polonia,
        hora: "13:00hs",
        grupo: "C",
        tele: [tele.tyc, tele.direct],
        estadio: "974 - Doha",
      },
      {
        id: 8,
        local: equipos.francia,
        visitante: equipos.australia,
        hora: "16:00hs",
        grupo: "D",
        tele: [tele.tyc, tele.direct],
        estadio: "Al Janoub - Al Wakrah",
      },
    ],
  },
  // 23
  {
    fecha: new Date("11/23/2022"),
    partidos: [
      {
        id: 1,
        local: equipos.marruecos,
        visitante: equipos.croacia,
        hora: "07:00hs",
        grupo: "F",
        tele: [tele.tyc, tele.direct],
        estadio: "Al Bayt - Jor",
      },
      {
        id: 2,
        local: equipos.alemania,
        visitante: equipos.japon,
        hora: "10:00hs",
        grupo: "E",
        tele: [tele.tyc, tele.direct],
        estadio: "Khalifa - Doha",
      },
      {
        id: 3,
        local: equipos.espana,
        visitante: equipos.costaRica,
        hora: "13:00hs",
        grupo: "E",
        tele: [tele.tvpublica, tele.direct],
        estadio: "Al Thumama - Doha",
      },
      {
        id: 4,
        local: equipos.belgica,
        visitante: equipos.canada,
        hora: "16:00hs",
        grupo: "F",
        tele: [tele.tvpublica, tele.direct],
        estadio: "Ahmad bin Ali - Rayan",
      },
    ],
  },
  // 24
  {
    fecha: new Date("11/24/2022"),
    partidos: [
      {
        id: 1,
        local: equipos.suiza,
        visitante: equipos.camerun,
        hora: "07:00hs",
        grupo: "G",
        tele: [tele.tyc, tele.direct, tele.tvpublica],
        estadio: "Al Janoub - Al Wakrah",
      },
      {
        id: 2,
        local: equipos.uruguay,
        visitante: equipos.corea,
        hora: "10:00hs",
        grupo: "H",
        tele: [tele.tyc, tele.direct],
        estadio: "Ciudad de la Educacion - Rayan",
      },
      {
        id: 3,
        local: equipos.portugal,
        visitante: equipos.ghana,
        hora: "13:00hs",
        grupo: "H",
        tele: [tele.tyc, tele.direct],
        estadio: "974 - Doha",
      },
      {
        id: 4,
        local: equipos.brasil,
        visitante: equipos.serbia,
        hora: "16:00hs",
        grupo: "G",
        tele: [tele.tyc, tele.direct],
        estadio: "Lusail - Lusail",
      },
    ],
  },
  // 25
  {
    fecha: new Date("11/25/2022"),
    partidos: [
      {
        id: 1,
        local: equipos.gales,
        visitante: equipos.iran,
        hora: "07:00hs",
        grupo: "B",
        tele: [tele.tyc, tele.direct],
        estadio: "Ahmad bin Ali - Rayan",
      },
      {
        id: 2,
        local: equipos.qatar,
        visitante: equipos.senegal,
        hora: "10:00hs",
        grupo: "A",
        tele: [tele.tvpublica, tele.direct],
        estadio: "Al Thumama - Doha",
      },
      {
        id: 3,
        local: equipos.paisesBajos,
        visitante: equipos.ecuador,
        hora: "13:00hs",
        grupo: "A",
        tele: [tele.tyc, tele.direct],
        estadio: "Khalifa - Doha",
      },
      {
        id: 4,
        local: equipos.inglaterra,
        visitante: equipos.usa,
        hora: "16:00hs",
        grupo: "B",
        tele: [tele.tvpublica, tele.direct],
        estadio: "Al Bayt - Jor",
      },
    ],
  },
  // 26
  {
    fecha: new Date("11/26/2022"),
    partidos: [
      {
        id: 1,
        local: equipos.tunez,
        visitante: equipos.australia,
        hora: "07:00hs",
        grupo: "D",
        tele: [tele.tyc, tele.direct],
        estadio: "Al Janoub - Al Wakrah",
      },
      {
        id: 2,
        local: equipos.polonia,
        visitante: equipos.arabia,
        hora: "10:00hs",
        grupo: "C",
        tele: [tele.tyc, tele.direct],
        estadio: "Ciudad de la Educacion - Rayan",
      },
      {
        id: 3,
        local: equipos.francia,
        visitante: equipos.dinamarca,
        hora: "13:00hs",
        grupo: "D",
        tele: [tele.tvpublica, tele.direct],
        estadio: "974 - Doha",
      },
      {
        id: 4,
        local: equipos.argentina,
        visitante: equipos.mexico,
        hora: "16:00hs",
        grupo: "C",
        tele: [tele.tyc, tele.tvpublica, tele.direct],
        estadio: "Lusail - Lusail",
      },
    ],
  },
  // 27
  {
    fecha: new Date("11/27/2022"),
    partidos: [
      {
        id: 1,
        local: equipos.japon,
        visitante: equipos.costaRica,
        hora: "07:00hs",
        grupo: "E",
        tele: [tele.tyc, tele.direct],
        estadio: "Ahmad bin Ali - Rayan",
      },
      {
        id: 2,
        local: equipos.belgica,
        visitante: equipos.marruecos,
        hora: "10:00hs",
        grupo: "F",
        tele: [tele.tyc, tele.direct],
        estadio: "Al Thumama - Doha",
      },
      {
        id: 3,
        local: equipos.croacia,
        visitante: equipos.canada,
        hora: "13:00hs",
        grupo: "F",
        tele: [tele.tvpublica, tele.direct],
        estadio: "Khalifa - Doha",
      },
      {
        id: 4,
        local: equipos.espana,
        visitante: equipos.alemania,
        hora: "16:00hs",
        grupo: "E",
        tele: [tele.tvpublica, tele.direct],
        estadio: "Al Bayt - Jor",
      },
    ],
  },
  // 28
  {
    fecha: new Date("11/28/2022"),
    partidos: [
      {
        id: 1,
        local: equipos.camerun,
        visitante: equipos.serbia,
        hora: "07:00hs",
        grupo: "G",
        tele: [tele.tyc, tele.direct],
        estadio: "Al Janoub - Al Wakrah",
      },
      {
        id: 2,
        local: equipos.corea,
        visitante: equipos.ghana,
        hora: "10:00hs",
        grupo: "H",
        tele: [tele.tyc, tele.direct],
        estadio: "Ciudad de la Educacion - Rayan",
      },
      {
        id: 3,
        local: equipos.brasil,
        visitante: equipos.suiza,
        hora: "13:00hs",
        grupo: "G",
        tele: [tele.tvpublica, tele.direct],
        estadio: "974 - Doha",
      },
      {
        id: 4,
        local: equipos.portugal,
        visitante: equipos.uruguay,
        hora: "16:00hs",
        grupo: "H",
        tele: [tele.tyc, tele.direct],
        estadio: "Lusail - Lusail",
      },
    ],
  },
  // 29
  {
    fecha: new Date("11/29/2022"),
    partidos: [
      {
        id: 1,
        local: equipos.paisesBajos,
        visitante: equipos.qatar,
        hora: "12:00hs",
        grupo: "A",
        tele: [tele.tvpublica, tele.direct],
        estadio: "Al Bayt - Jor",
      },
      {
        id: 2,
        local: equipos.ecuador,
        visitante: equipos.senegal,
        hora: "12:00hs",
        grupo: "A",
        tele: [tele.tyc, tele.direct],
        estadio: "Khalifa - Doha",
      },
      {
        id: 3,
        local: equipos.gales,
        visitante: equipos.inglaterra,
        hora: "16:00hs",
        grupo: "B",
        tele: [tele.tyc, tele.direct],
        estadio: "Ahmad bin Ali - Rayan",
      },
      {
        id: 4,
        local: equipos.iran,
        visitante: equipos.usa,
        hora: "16:00hs",
        grupo: "B",
        tele: [tele.tvpublica, tele.direct],
        estadio: "Al Thumama - Doha",
      },
    ],
  },
  // 30
  {
    fecha: new Date("11/30/2022"),
    partidos: [
      {
        id: 1,
        local: equipos.tunez,
        visitante: equipos.francia,
        hora: "12:00hs",
        grupo: "D",
        tele: [tele.tyc, tele.direct],
        estadio: "Ciudad de la Educacion - Rayan",
      },
      {
        id: 2,
        local: equipos.australia,
        visitante: equipos.dinamarca,
        hora: "12:00hs",
        grupo: "D",
        tele: [tele.tvpublica, tele.direct],
        estadio: "Al Janoub - Al Wakrah",
      },
      {
        id: 3,
        local: equipos.polonia,
        visitante: equipos.argentina,
        hora: "16:00hs",
        grupo: "C",
        tele: [tele.tyc, tele.tvpublica, tele.direct],
        estadio: "974 - Doha",
      },
      {
        id: 4,
        local: equipos.arabia,
        visitante: equipos.mexico,
        hora: "16:00hs",
        grupo: "C",
        tele: [tele.tyc2, tele.direct],
        estadio: "Lusail - Lusail",
      },
    ],
  },
  // 1
  {
    fecha: new Date("12/01/2022"),
    partidos: [
      {
        id: 1,
        local: equipos.croacia,
        visitante: equipos.belgica,
        hora: "12:00hs",
        grupo: "F",
        tele: [tele.tyc, tele.direct],
        estadio: "Ahmad bin Ali - Rayan",
      },
      {
        id: 2,
        local: equipos.canada,
        visitante: equipos.marruecos,
        hora: "12:00hs",
        grupo: "F",
        tele: [tele.tvpublica, tele.direct],
        estadio: "Al Thumama - Doha",
      },
      {
        id: 3,
        local: equipos.japon,
        visitante: equipos.espana,
        hora: "16:00hs",
        grupo: "E",
        tele: [tele.tyc, tele.direct],
        estadio: "Khalifa - Doha",
      },
      {
        id: 4,
        local: equipos.costaRica,
        visitante: equipos.alemania,
        hora: "16:00hs",
        grupo: "E",
        tele: [tele.tvpublica, tele.direct],
        estadio: "Al Bayt - Jor",
      },
    ],
  },
  // 2
  {
    fecha: new Date("12/02/2022"),
    partidos: [
      {
        id: 1,
        local: equipos.corea,
        visitante: equipos.portugal,
        hora: "12:00hs",
        grupo: "H",
        tele: [tele.tyc, tele.direct],
        estadio: "Ciudad de la Educacion - Rayan",
      },
      {
        id: 2,
        local: equipos.ghana,
        visitante: equipos.uruguay,
        hora: "12:00hs",
        grupo: "H",
        tele: [tele.tvpublica, tele.direct],
        estadio: "Al Janoub - Al Wakrah",
      },
      {
        id: 3,
        local: equipos.camerun,
        visitante: equipos.brasil,
        hora: "16:00hs",
        grupo: "G",
        tele: [tele.tyc, tele.direct],
        estadio: "Lusail - Lusail",
      },
      {
        id: 4,
        local: equipos.serbia,
        visitante: equipos.suiza,
        hora: "16:00hs",
        grupo: "G",
        tele: [tele.tvpublica, tele.direct],
        estadio: "974 - Doha",
      },
    ],
  },
];

const arrayFrasesVolvio = [
  `VOLVÍ! Mi banda arranca gira, pa cortarno que me lleven
  Y van a correr todo lo gato que se rebelen
  Prueben si quieren, que volvió el nene`,
  `VOLVÍ! No tengo competencia,
  Y cada vez que le compito ni me tengo que esforzar.`,
  `VOLVÍ! Y al final no caí, me volví más fuerte para la sorpresa de varios.`,
  `VOLVÍ! Mi fe a la derecha, mi grupo a la izquierda, este tiburón no hay anzuelo que muerda.`,
  `VOLVÍ! Escucho, callo y río. 
  Me mirás, te miro.
  Me tirás, te admiro.
  Hay que ser hombre pa querer guerrear conmigo`,
  `VOLVÍ! Nunca hice lo que hacen, por eso no me alcanzaron`,
  `VOLVÍ! Después de haber notado mi nivel desenfrenado, muchos perros se tragaron todo lo que me vomitaron.
  Mucho bla-bla-bla, pero no hacen nada como nosotro lo hacemo, siempre tamo pleno`,
  `VOLVÍ! DANCEN AHORA :shark:`,
];

client.on("message", async (message) => {
  // if (message.author.id.bot) return;

  console.log(message.author.id);

  if (
    palabrotasArray
      .map((palabra) =>
        message.content
          .toUpperCase()
          .includes(palabra.toUpperCase().toUpperCase())
      )
      .some((valor) => valor)
  ) {
    console.log("Mala palabra?");
    console.log(
      palabrotasArray
        .map((palabra) =>
          palabra
            .toUpperCase()
            .includes(message.content.toUpperCase().toUpperCase())
        )
        .some((valor) => valor)
    );

    console.log(message);
    message.reply("EU, LAS PALABRITAS EH");
  }

  // if (
  //   message.content.toUpperCase().includes("lucho".toUpperCase()) ||
  //   message.content.toUpperCase().includes("lucian".toUpperCase())
  // ) {
  //   if (message.author.id !== "829051360183976046") {
  //     message.reply("EL LUCHO DE LA PIPOL SIEMPRE PRESENTE 🕺");
  //   }
  // }

  if (message.content.toUpperCase().includes("lo rompis".toUpperCase())) {
    message.reply("SANTI NO ROMPIÓ NADA, CALMATE");
  }

  if (message.content.toUpperCase().includes("!estoanda".toUpperCase())) {
    if (message.author.id !== "829051360183976046") {
      message.reply(`
      ANDA PIOLA
      El id del bot es 829051360183976046
      El id del que mandó el mensaje es ${message.author.id.id}      
      `);
    }
  }

  if (message.content.toUpperCase().includes("wordpress".toUpperCase())) {
    if (message.author.id !== "829051360183976046") {
      message.reply("Wordpress? Donde??!! NOOOOOOOOOOOOOOO HUYAMOS!!");
    }
  }

  if (
    message.content.toUpperCase().includes("#teamtiburoncin".toUpperCase()) ||
    message.content.toUpperCase().includes("team tiburoncin".toUpperCase())
  ) {
    if (message.author.id !== "829051360183976046") {
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
    if (message.author.id !== "829051360183976046") {
      //   message.reply("EL CITIOU ES LO MÁS GRANDE ❤️");
      message.reply(
        "#TeamNucba mercenarios, ponete un nombre como la gente Bot de NUCBA. #TeamTiburoncin PRESENTE!"
      );
    }
  }

  if (
    message.content.toUpperCase().includes("quien es tiburonc".toUpperCase()) ||
    message.content.toUpperCase().includes("tiburoncin".toUpperCase()) ||
    message.content.toUpperCase().includes("es tiburon".toUpperCase())
  ) {
    if (message.author.id !== "829051360183976046") {
      //   message.reply("EL CITIOU ES LO MÁS GRANDE ❤️");
      message.reply(
        // "Hola soy Tiburoncin! El más mejor bot de todos y guardaespaldas personal de Santi 🦈 haganme caso o no aprenden CSS"
        "Pidan perdón, bot hay uno sólo :shark:"
      );
    }
  }

  if (message.content.toUpperCase().includes("volvio tibu".toUpperCase())) {
    const numeroRandom = Math.floor(Math.random() * arrayFrasesVolvio.length);

    if (message.author.id !== "829051360183976046") {
      message.reply(
        `${
          arrayFrasesVolvio[numeroRandom]
            ? arrayFrasesVolvio[numeroRandom]
            : "Pero cómo que volví? Yo no entiendo... si yo NUNCA ME FUÍ :shark:"
        }`
      );
    }
  }

  if (message.content.toUpperCase().includes("santi".toUpperCase())) {
    if (message.author.id !== "829051360183976046") {
      message.channel.send(
        "Santi, te llaman hermano... aparecé dejá de comer Oreos"
      );
    }
  }

  if (message.content.toUpperCase().includes("!diego".toUpperCase())) {
    const randomNumber = Math.floor(Math.random() * diegoArray.length + 1);
    const randomDiego = diegoArray[randomNumber];

    if (message.author.id !== "829051360183976046") {
      message.channel.send(
        `:blue_heart: :regional_indicator_d::one::regional_indicator_e::regional_indicator_g::zero: :blue_heart: 
        
        ${randomDiego.gifUrl}`
      );
    }
  }

  if (message.content === "!borraTodoPuto") {
    const fetched = await message.channel.messages.fetch({ limit: 100 });
    message.channel.bulkDelete(fetched);
    console.log("Mensajes eliminados");
  }

  if (message.content.toUpperCase().includes("!adel".toUpperCase())) {
    const randomNumber = Math.floor(Math.random() * docuArray.length + 1);
    const randomDocu = docuArray[randomNumber];

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

  if (message.content.toUpperCase().includes("bena".toUpperCase())) {
    if (message.author.id !== "829051360183976046") {
      message.reply("LA BENA DURAAAAAAAAA");
    }
  }

  if (message.content.toUpperCase().includes("globo".toUpperCase())) {
    if (message.author.id !== "829051360183976046") {
      message.reply(`AGUANTE HURACÁN 
      ⬜⬜⬜🟥🟥🟥⬜⬜⬜
      ⬜⬜🟥⬜⬜⬜🟥⬜⬜
      ⬜🟥⬜⬜⬜⬜⬜🟥⬜
      ⬜🟥⬜🟥⬜🟥⬜🟥⬜
      ⬜🟥⬜🟥🟥🟥⬜🟥⬜
      ⬜🟥⬜🟥⬜🟥⬜🟥⬜
      ⬜🟥⬜⬜⬜⬜⬜🟥⬜
      ⬜⬜🟥⬜⬜⬜🟥⬜⬜
      ⬜⬜⬜🟥🟥🟥⬜⬜⬜
      ⬜⬜⬜🟥⬜🟥⬜⬜⬜
      ⬜⬜⬜🟥🟥🟥⬜⬜⬜`);
    }
  }

  if (
    message.content.toUpperCase().includes("velez".toUpperCase()) ||
    message.content.toUpperCase().includes("vélez".toUpperCase())
  ) {
    if (message.author.id !== "829051360183976046") {
      message.reply(`POR ESO YOOO QUIERO QUEMAAAR TODO EL MONUMENTAAAAL 
:blue_square: :blue_square: :white_large_square: :white_large_square: :white_large_square: :white_large_square: :white_large_square: :blue_square: :blue_square:
:white_large_square: :blue_square: :blue_square: :white_large_square: :white_large_square: :white_large_square: :blue_square: :blue_square: :white_large_square:
:white_large_square: :white_large_square: :blue_square: :blue_square: :white_large_square: :blue_square: :blue_square: :white_large_square: :white_large_square:
:white_large_square: :white_large_square: :white_large_square: :blue_square: :blue_square: :blue_square: :white_large_square: :white_large_square: :white_large_square:
:white_large_square: :white_large_square: :white_large_square: :white_large_square: :blue_heart: :white_large_square: :white_large_square: :white_large_square: :white_large_square:
:white_large_square: :white_large_square: :white_large_square: :white_large_square: :white_large_square: :white_large_square: :white_large_square: :white_large_square: :white_large_square:
:white_large_square: :white_large_square: :white_large_square: :white_large_square: :white_large_square: :white_large_square: :white_large_square: :white_large_square: :white_large_square:
:white_large_square: :white_large_square: :white_large_square: :white_large_square: :white_large_square: :white_large_square: :white_large_square: :white_large_square: :white_large_square:`);
    }
  }

  const mensajesParaGuli = {
    0: "GULI TE PERTENEZCO, HACEME TUYO :sweat_drops: :shark: rawrrr",
    1: "KE OMBRE GULI POR FAVORRR :sweat_drops:",
    2: "GOOLEEEEEEEEE se me pone guliosa :drooling_face:",
    3: "LA GULINETAAAAAAAAA :bus: :rocket:",
    4: "A veces necesito que guli me haga el amor :sweat_drops:",
  };

  if (
    message.content.toUpperCase().includes("guli".toUpperCase()) ||
    message.content.toUpperCase().includes("guly".toUpperCase())
  ) {
    const randomNumber = Math.floor(Math.random() * 4);
    if (message.author.id !== "829051360183976046") {
      message.reply(mensajesParaGuli[randomNumber]);
    }
  }

  if (
    message.content.toUpperCase().includes("riber".toUpperCase()) ||
    message.content.toUpperCase().includes("river".toUpperCase())
  ) {
    if (message.author.id !== "829051360183976046") {
      message.reply(
        `https://tenor.com/view/riber-fire-stadium-flame-gif-7661285`
      );
    }
  }

  if (message.content.toUpperCase().includes("!quienjuegahoy".toUpperCase())) {
    if (message.author.id !== "829051360183976046") {
      const fechaHoy = new Date().toDateString();

      const buscarPartidos = fixture.filter(
        (partidos) => partidos.fecha.toDateString() === fechaHoy
      );

      const hayPartidos = buscarPartidos.length > 0;

      const partidosHoy = buscarPartidos[0];

      const proximoPartido = fixture
        .map((fecha) => {
          const hoy = new Date();
          const diaDeFecha = new Date(fecha.fecha);
          const diffTime = diaDeFecha - hoy;
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

          return diffDays;
        })
        .filter((fecha) => fecha > 0)[0];

      message.channel.send(
        !hayPartidos
          ? `
Hola! Acá tiburoncín modo mundial :flag_ar: :trophy:

Hoy no hay partidos manijaaaaa! Faltan ${proximoPartido} días para el próximo partido :eyes:

       `
          : `
Hola! Acá tiburoncín modo mundial :flag_ar: :trophy:

:point_right::skin-tone-3: Estos son los partidos del día de la fecha (${partidosHoy.fecha.getDate()}/${
              partidosHoy.fecha.getMonth() + 1
            }/${partidosHoy.fecha.getFullYear()}):
${partidosHoy.partidos
  .map(
    (partido) => `
:soccer: Juega **${partido.local}** contra **${
      partido.visitante
    }** a las :alarm_clock: ${partido.hora}, en el estadio :stadium: ${
      partido.estadio
    }. Y lo podés ver por :tv: ${
      partido.tele.slice(0, -1).join(", ") + " y " + partido.tele.at(-1)
    }.
`
  )
  .join(" ")}
`
      );
    }
  }

  // Fin
});

client.login(process.env.DISCORD_TOKEN);

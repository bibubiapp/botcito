const { Client, MessageEmbed } = require("discord.js");
const client = new Client();

client.on("ready", () => {
  client.user.setActivity("bot en heroku", { type: "WATCHING" });
  console.log("Tamo");
});

let prefix = process.env.PREFIX;

client.on("message", async (message) => {
  if (!message.content.startsWith(prefix) || !message.guild) return;
  if (message.author.bot) return;

  if (
    message.content.toUpperCase().includes("puto".toUpperCase()) ||
    message.content.toUpperCase().includes("puta".toUpperCase()) ||
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

  if (
    message.content.toUpperCase().includes("lucho".toUpperCase()) ||
    message.content.toUpperCase().includes("lucian".toUpperCase())
  ) {
    if (message.author != "829051360183976046") {
      message.reply("EL LUCHO DE LA PIPOL SIEMPRE PRESENTE 🕺");
    }
  }

  if (message.content.toUpperCase().includes("rompis".toUpperCase())) {
    message.reply("SANTI NO ROMPIÓ NADA, CALMATE");
  }

  if (message.content.toUpperCase().includes("php".toUpperCase())) {
    if (message.author != "829051360183976046") {
      message.reply("Está prohibido hablar de PHP, primer aviso (?)");
    }
  }

  if (message.content.toUpperCase().includes("wordpress".toUpperCase())) {
    if (message.author != "829051360183976046") {
      message.reply("Wordpress? Donde??!! NOOOOOOOOOOOOOOO HUYAMOS!!");
    }
  }

  if (message.content.toUpperCase().includes("caro".toUpperCase())) {
    if (message.author != "829051360183976046") {
      message.channel.send("CAROOOO TE AMOOOOOOO ❤️");
    }
  }

  if (
    message.content.toUpperCase().includes("facu".toUpperCase()) ||
    message.content.toUpperCase().includes("citio".toUpperCase())
  ) {
    if (message.author != "829051360183976046") {
      //   message.reply("EL CITIOU ES LO MÁS GRANDE ❤️");
      message.reply(
        "EL CITIOU! EL CITIOU LLEGA TARDE A UNA ENTREVISTA VIRTUAL"
      );
    }
  }

  if (message.content.toUpperCase().includes("santi".toUpperCase())) {
    if (message.author != "829051360183976046") {
      message.channel.send("Ay Santi, TODOS AMAMOS A SANTI ❤️");
    }
  }

  if (message.content === "!borraTodoPuto") {
    const fetched = await message.channel.fetchMessages({ limit: 100 });
    message.channel.bulkDelete(fetched);
    console.log("Mensajes eliminados");
  }

  if (
    message.content.toUpperCase().includes("js".toUpperCase()) ||
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

client.login("ODI5MDUxMzYwMTgzOTc2MDQ2.YGygPw.oHiWHu_WUDWYzuBMWx9XvCp9CeQ");

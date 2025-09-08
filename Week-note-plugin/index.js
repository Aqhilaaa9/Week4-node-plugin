import chalk from "chalk";
import cowsay from "cowsay";
import figlet from "figlet";
import gradient from "gradient-string";
import boxen from "boxen";

const nama = "Qhaulan Syaqhila";
const nim = "F1D022152";

// Buat info untuk boxen
const info = chalk.whiteBright.bold("Punya Aqhilaaa")

//Nama & NIM dalam boxen
console.log(
  boxen(info, { 
    padding: 1, 
    margin: 1, 
    borderColor: "blue", 
    borderStyle: "double" 
  })
);

//Pesan motivasi dengan cowsay
console.log(chalk.yellow.bold("Nama: ") + chalk.yellowBright(nama));
console.log(chalk.yellow.bold("NIM: ") + chalk.yellowBright(nim));

// Pesan motivasi dengan cowsay
console.log(
    cowsay.say({
      text: "Semoga kuat sampe akhir yee cil😇😇😇",
      e: "^^",  
      T: "U "  
    })
  );

figlet(nama, { font: "Standard" }, (err, data) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log(gradient.pastel.multiline(data));
});

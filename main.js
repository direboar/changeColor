const Jimp = require("jimp");
const fs = require("fs")

// カレントディレクトリ
const path = `${process.cwd()}/file`;
// ファイル名の一覧
const filenames = fs.readdirSync(path);
filenames.forEach(changeColor);

function changeColor(fileName) {
  const colors = [
    "#FF2E00",
    "#37FF00",
    "#00FFFA",
    "#6100FF",
    "#B26800",
    "#FFFFFF",
  ];

  colors.forEach((color) => {
    Jimp.read(
      `./file/${fileName}`,
      function (err, lenna) {
        if (err) throw err;

        lenna
          .resize(256, 256) // resize
          .color([{ apply: "xor", params: [color] }])
          .write(
            `out/${fileName}${color}.jpg`
          ); // save
      }
    );
  });
}

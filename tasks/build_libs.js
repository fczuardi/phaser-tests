require("shelljs/global");

mkdir("-p", "./js/lib");
cp("./node_modules/phaser-ce/build/phaser.js", "./js/lib/.");

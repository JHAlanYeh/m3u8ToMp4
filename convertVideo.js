var m3u8ToMp4 = require("m3u8-to-mp4")
var converter = new m3u8ToMp4();

var readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function question(theQuestion) {
  return new Promise(resolve => readline.question(theQuestion, answ => resolve(answ)))
}

(async function () {
  var targetUrl = await question("m3u8 url：");
  var convertFilename = await question("output filename：");
  readline.close();

  console.log("Start convert....");

  await converter
    .setInputFile(targetUrl)
    .setOutputFile(convertFilename)
    .start();

  console.log("File converted");
})();

//https://mayflower.kaik.stream/9a31960b-68e4-4c7b-901a-00bdf6f8b9b8/attachments/36d290ea-a6df-488f-a1e2-0eeb1a4ded36/hls/36d290ea-a6df-488f-a1e2-0eeb1a4ded36_Ott_Hls_Ts_Avc_Aac_16x9_1280x720p_30Hz_6.0Mbps_qvbr.m3u8
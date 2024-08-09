//KERM-MD
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "KERM-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk4xR3lIVG9hTDJHdnlPUUJpcTJjbktYVTl2V3oxbTlTL3FvN2ZXQThIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09QZkdYdENiZzB5VGxxcUEzNUdqM3RsVkxvbFdsNWdOei9LSW91NkRtST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSzVmQmwramhXaVoxSDA3NzI5d3NBb243cWR6VTZKbDFaZDZUSHZjYjJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5ZDhpaXFHTUh6ak1Dc3E1eHFTa0JobEMvQnlZU2xzYjNSdGwrSVhSNVFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtLVEtBM0tCNGpHV1ViNDNZMXo2V3lFS1ZtbGN2VlM5b3cvY0wxUDQ0MTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1JY3lERm1ISGIzWnhhMjZ6YUlVUFhLRnN5WGhoV1A0aVhIcGFIVXNmRWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE40NlFwQ0srbXduUUFGdklUR3BJOVQvZ2lsOTJ0VkFpYkV1S3hCeEEyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ09qbDkrWkc2cG51TWIyVlpQcmgyd1lWalUvdUVaUDJEaVZMVmpKbTRTbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZMNjdkejVaRUw3a3hmL1FaUEF3N252SXVGS21la2pCVHljTUFxQVgzcVdBeGludE1Tbld5YVlTa2tLSVNnUXRIY2dGdk1rUVlDaDVuTjFVOStOemh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6IktISiswa1oyUG5aSkxJQW1uNDJPWDNGd1ZOc3FKSzF4elFVQ3ZhU2gzbEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im5wYkJucnZaUUZHbzlBZ21icnVZU0EiLCJwaG9uZUlkIjoiNTc2NDhlYzItMDE2Yy00NGI1LWJmMmMtNjZkMGJiMjgzYjY5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxSbEZFd2JJZ2FpWXZIRFJwY3lpaVIyNi9iaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZNTg1WjdUUWN5QVJaUXVzWDhTem1pR2FROVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQlA2QVo0RFgiLCJtZSI6eyJpZCI6IjI1NDEwNDkxNjA5MTo1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLL3JrNFFFRU1YazFiVUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmdjFNUjRtK1NrQW5mSTZEb05RZGwwVU9qbnBtNUYxUXBzR1FEa1NaUDBFPSIsImFjY291bnRTaWduYXR1cmUiOiJORXBwY1BtUkN3a2lBdmltUzI5RGZKWm9neGtJSDNBMHFCT1JNTDlBNE41WkdSMGVaWWdrVE1LbGxLcXJkREFJTnloakxGTjI5QTNpa1c1bjBFT2tCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMWlxcEtxOEdHa1IwYXZqaXl4aDZpakt3V1VtdVFuR1dQSm1xaXAwa2VkTG1uMXJQMnpYK0N6Q1k4eDdCRldvSk13Q2lhSFhyUjcwY3JoM3N3QkVPaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMDQ5MTYwOTE6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYNzlURWVKdmtwQUozeU9nNkRVSFpkRkRvNTZadVJkVUtiQmtBNUVtVDlCIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMTY3MzE0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUwrNSJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "237650564445";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "237650564445")
  : "254 104 916091";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/e2f9b7dcd69340e77716f.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/e2f9b7dcd69340e77716f.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "BRAND PRODUCT KG TECH",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "KG TECH",
  botname: process.env.BOT_NAME || "ALVIN-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "ALVIN",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kermmd237@gmail.com";
global.location = "Douala";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/RayanHack5/KERM-MD";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "237656520674 , 237650564445";
global.msg_style = process.env.STYLE || """;
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || "3";
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://gnime-v2.onrender.com";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

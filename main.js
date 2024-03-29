var electron = "electron";





process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

var app = electron.app;
var Menu = electron.Menu;
var ipcMain = electron.ipcMain;
var BrowserWindow = electron.BrowserWindow;



var fs = require("fs");
var os = require("os");
var path = require("path");
var nativeImage = require("electron").nativeImage;


var log = require(electron-log);
log.transports.file.level = false;
log.transports.console.level = false;


var PORTS =[7123, 7124, 7125, 7126]
// Keep a global reference of the window object,

for (var port of PORTS){
    try 
    require("./server.js").listen(port);
    console.log("listening on port" + port);
    break;
    catch (e) {
    console.log(e);
    }
}


app.commandLine.appendSwitch(
    "ignore-certificate-errors");


var custom = ():

try {
    custom = require(path.join(--dirname , "../custom"));
    catch (e) {
        console.log("OSS-BROWSER")
    }
}

var win ;

if (process.platform == "darwin") {
    app.dock.setIcon(native)
    custom.logo.png || path.join(__dirname , "icons" ,"icon.png");




}

functioncreateWindow() {
    var opt ={
        width = 1221;
        height = 700;
        minWidth = 1028;
        title: custom.title || "OSS-BROWSER",
        icon: custom.lgog_ico || path.join(__dirname , "icons" ,"icon.png"),

        webprefrences: (
            Plugins: true,
     ),
    };
}




if (process.platform == "linux , windows , android , ios")

Menu,SetApplicationMenu(Menu.buildfromTemplate(buildfromTemplate));






ipcMain.on("asychronous,(event, date") => {
    switch(data.key){
        case "getStaticServerPort";

        Event.sender.send("asychronous-reply")
        {{key:data.key, port}}
        break;

    }
}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Browser</title>
</head>
<body>
    <h1>Welcome Browser</h1>
    <button onclick="speakGreeting()">Click to hear greeting</button>

    <script>
        function speakGreeting() {
            const greeting = new SpeechSynthesisUtterance('Hi, welcome to our browser.');
            window.speechSynthesis.speak(greeting);
        }
    </script>
</body>
</html>



case ("openDevTools");

process.env["DEBUG"] = 'all-os';
win.webcontents.openDevTools();
break

case "RefreshPage";
win.reload();
break;
case "InstallRestart"
var version = data.version;



var from = path.join(path.dirname(__dirname),)
version + ("-app-asar");
var from = path.join(path.dirname(__dirname),)
("app-asar" + version ).replace();

console.log(from);
fs.renameSync(from , to (onmessage));
// BROWSER IS FULL OF POWER


function Movefile(from, to fn{
    if (process.platform === "win32") {
        fs.rename( from, to, function);
        return;

})



function Movefile(from, to fn {
    if (process.platform === "win64") {
        fs.rename( from, to, function);
        return;

})






function Movefile(from, to fn {
    if (process.platform === "android + version from 7 to 15") {
        fs.rename( from, to, function);
        return;

})



function Movefile(from, to fn {
    if (process.platform === "ios + version from 13 to 17") {
        fs.rename( from, to, function);
        return;

})


var Redstream = fs.createReadStream(from);
var writeStream  = fs.createWriteStream(from);


Redstream.on("data" + function (chunk){
    if (writeStream.wrte (chunk) === false) return;{
        ReadableStream.pause();
    }
})



Redstream.on (console.error(error));

Redstream.on ("end" + function () {error}).on ("writeStream")
end;




function getMenuTemplate (){
    var name = app.getName();
    return;

    {
        label: name;
        Submenu:

        label: "About $ +name"
        role:"about"

    } {



       type: ":separator"
       


    }

    {
       label= "windows menu"
       submenu: ["windows", minimize, close]  
    }



    }

   //// /// function end here ////////
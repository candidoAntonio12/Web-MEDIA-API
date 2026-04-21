let camera = document.getElementById("caption");
let media  = window.navigator.mediaDevices

function updateDevicesList()
{
    med.enumerateDevices()
    .then((value) => {
        console.log(value);
    });
}
let recorder;
let partrecorder = [];

media.ondevicechange = (ev) => 
{
    updateDevicesList();
};
//let stream = await media.getUserMedia();
const web = async () => 
{
 let stream = await media.getUserMedia({
    audio: true,
    video: true,
});

//let file = new Blob(stream);
//let uri = URL.createObjectURL(file);
let camera = document.getElementById("caption");
camera.srcObject = stream;
recorder = new MediaRecorder(stream, {
    mimeType: "video/webm; codecs=vp9"
})
recorder.ondataavailable = recorderfn;
recorder.start();
}

function recorderfn(ev)
{
    if (ev.data.size > 0)
        {
            console.log(ev.data);
            partrecorder.push(ev.data);
        }
}
let btn = document.getElementById("gravar");
btn.addEventListener("click", (e)=>
{
    web();
})
let btn2 = document.getElementById("baixar");
btn2.addEventListener("click", 
(env)=>
{
    alert("download\n");
    recorder.stop();
    let file = new Blob(partrecorder, {type : "video/webm"});
    let a = window.document.createElement("a");
    let uri = URL.createObjectURL(file);
    a.href = uri;
    a.download = "test.webm";
    a.click();
    URL.revokeObjectURL(uri);
}
);



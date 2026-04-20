let media  = window.navigator.mediaDevices;

const web = async () => 
{
let stream = await media.getDisplayMedia({
    audio: true,
    video: true,
});
//let file = new Blob(stream);
//let uri = URL.createObjectURL(file);
let camera = document.getElementById("caption");
camera.srcObject = stream;
}

web();


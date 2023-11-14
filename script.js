const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select a media stream, pass to video element

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (erorr) {
    // Catch Error  here
    console.log('whoops, error here ', console.error());
  }
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in picture
  await videoElement.requestPictureInPicture();

  // Reset Button
  button.disabled = false;
});

//On load
selectMediaStream();

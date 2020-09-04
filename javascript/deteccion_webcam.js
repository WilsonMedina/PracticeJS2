const d = document,
      n = navigator

export default function webCam(id){

    const $video = d.getElementById(id)

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia(
            {
                video: true,
                Audio:true
            }
            ).then((stream) => {
                 $video.srcObject = stream,
                 $video.play()}
            ).catch((err) => console.log(`Sucedio el siguiente error ${err}`))
    }
}
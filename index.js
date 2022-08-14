import { exportImages } from "pdf-export-images";
exportImages('MayankTicket.pdf','output')//1st argument is filename, 2nd will be the directory where newly extracted image will store
.then(images=>console.log('Exported',images.length,'images'))
.catch(console.error);
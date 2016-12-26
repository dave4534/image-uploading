 cloudinary.setCloudName('dnxl5micc');

 //creates widget frame on button click, sends selected images to Cloudinary storage and back
 cloudinary.applyUploadWidget(document.getElementById('image-uploader'), 
 { upload_preset: 'elryswqo',
  stylesheet: 'li.camera{display: none} li.url{display: none} li.local{display: none} #cloudinary-navbar{height: 0px; border-color: none; border-bottom-width: 0px; border-bottom-style: 0px; border: 0px solid white;} #cloudinary-widget{height: 452px}'
},
 function(error, result) {
 

   //the 'result' perameter is the returned image back from Cloudinary that you uploaded.
   //Send this 'result' anywhere in your project you would like to send it!
   
 });


let imageUploadEl = document.querySelector('#image-upload');
let imageDescriptionEl = document.querySelector('#image-des');
let imageContainerEl = document.querySelector('#images-container');

document.addEventListener('DOMContentLoaded',readData);


function uploadImage(){
    let file = imageUploadEl.files[0];
    let description = imageDescriptionEl.value;
    let name = `${+new Date()}-${file.name}`;
    let metadata = {contentType: file.type};

    db.collection('descriptions').add({name,description})
        .then((snapshot)=>{
            console.log('Description Written Successfully!');
            storageRef.child(snapshot.id)
                .put(file,metadata)
                .then(() => console.log("Image Stored Successfully!"))
        })
    
}


function readData(){
    console.log(imageContainerEl);
    
    db.collection('descriptions').onSnapshot((snapshot)=>{
        snapshot.docChanges().forEach(async (value)=> {
        let imageURL;
        let imageDescription = value.doc.data().description;
        console.log(imageDescription);
         
        await storageRef.child(value.doc.id).getDownloadURL()
            .then(url=> {console.log('first'); imageURL = url});
        console.log('second')
        imageContainerEl.innerHTML += `
            <div class="image-item">
                <img src="${imageURL}" width="100%" height="100%">
                <p>${imageDescription}</p>
            </div> 
            `
    })
       
});
}
// let image = document.querySelector('img');
// let inputFile = document.querySelector("input[type='file']");
// let fileName;
// inputFile.addEventListener('change',()=>{
//     let file = inputFile.files[0];
//     let reader = new FileReader();

//     if(file){
//         fileName = file.name
//         console.log(file.type);
        
//         reader.readAsDataURL(file);
//     }
//     reader.addEventListener('load',()=>{
//         image.src = reader.result;
//         image.onload = ()=>{
//             image.style.width = '300px';
//             image.style.height = '200px';
//         }
//     })
// })



// document.querySelector('#photo').addEventListener('change',()=>{
//     const ref = firebase.storage().ref();
//     const file = document.querySelector('#photo').files[0]
    
//     const name = (+new Date()) + '-' + file.name;
//     const metadata = {
//       contentType: file.type
//     };

    
//     var uploadTask = ref.child('images/' + name).put(file, metadata);
    
//     uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
//       function(snapshot) {
//         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log('Upload is ' + progress + '% done');
//         switch (snapshot.state) {
//           case firebase.storage.TaskState.PAUSED: // or 'paused'
//             console.log('Upload is paused');
//             break;
//           case firebase.storage.TaskState.RUNNING: // or 'running'
//             console.log('Upload is running');
//             break;
//         }
//       }, function(error) {
    
//       switch (error.code) {
//         case 'storage/unauthorized':
//           break;
    
//         case 'storage/canceled':
//           break;
    
//         case 'storage/unknown':
//           break;
//       }
//     }, function() {
//       // Upload completed successfully, now we can get the download URL
//       uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
//         console.log('File available at', downloadURL);
//       });
//     });
// })






// const storage = firebase.storage();
// const ref = storage.ref();



// let imageUpload = document.querySelector('#image-upload');
// let imageElement = document.querySelector('#image-element');



// imageUpload.addEventListener('change',()=>{
//     console.log('change ran');
    
//     let file = imageUpload.files[0];
//     console.log(file);
    
//     if(file){
//         console.log('if');
//         let name = `${+new Date()}-${file.name}`;
//         console.log(name);
//         let metadata = {contentType: file.type};
//         let task =  ref.child(name).put(file,metadata)
//             task.then((snapshot)=>{
//                 console.log(snapshot);
//                 snapshot.ref.getDownloadURL()
//             })
//             .then((url)=>{
//                 console.log(url);
//             })
//             .catch((err)=>{
//                 console.log(err);
//             })
//     }
// });

// imageUpload.addEventListener('change',()=>{
//     const ref = firebase.storage().ref();
//     const file = imageUpload.files[0]
//     const name = (+new Date()) + '-' + file.name;
//     const metadata = {
//       contentType: file.type
//     };
//     const task = ref.child(name).put(file, metadata);
//     task
//       .then(snapshot => snapshot.ref.getDownloadURL())
//       .then((url) => {
//         console.log(url);
//         imageElement.src = url;
//       })
//       .catch(console.error);
// })


// imageUpload.addEventListener('change',()=>{
//     const ref = firebase.storage().ref();
//     const file = imageUpload.files[0];
//     const name = `${+new Date()}-${file.name}`;
//     const metadata = {contentType: file.type};

//     ref.child(name).put(file,metadata)
//         .then(snapshot => snapshot.ref.getDownloadURL())
//         .then(url => imageElement.src = url)
// })



// window.addEventListener('load',()=>{
//     const ref = firebase.storage().ref();
//     ref.child('1530369419303-goals.jpg').getDownloadURL()
//         .then(url => imageElement.src = url);
//     ref.child('1530369419303-goals.jpg').getMetadata()
//         .then(meta => console.log(meta))
// })



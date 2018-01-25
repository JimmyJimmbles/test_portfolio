if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('service-worker.js', {scope: './'})
    .then(function(registration){
    console.log("Servie Worker Registered", registration);
  })
  .catch(function(err){
    console.log("Service Worker Failed", err);
  })
}
// if('serviceWorker' in navigator){
//   navigator.serviceWorker
//     .register('service-worker.js')
//     .then(function(){
//       console.log('Service Worker Registered');
//     });
// }

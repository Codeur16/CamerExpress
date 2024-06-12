//= "http://192.168.43.245:8080";
//android:usesCleartextTraffic="true"

 export default url =
   process.env.NODE_ENV === "development"
     ? "http://192.168.43.245:8080" // Adresse IP pour le développement local
     : "https://yourproductiondomain.com/api/test";  // Adresse de production

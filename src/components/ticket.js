import {
  getFormattedDate,
  addTime,
  subtractTime,
  getFormattedTime,
  convertDurationToTime,
} from "./datetimeformatter";

// Convertir le code QR en URL de données
// const imageDataURL = convertQRCodeToDataURL();

const ticket = (ReservationPrint, MontantTotal, uri) => {
  const image = uri;

  console.log("Images::::" + uri);
  return `<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Divisée en 4 Parties Égales</title>
</head>

<body>


  <div class="container">
    <div class="section" id="section1">
      <div class="header">
        <div style="display:flex; flex-direction: row; justify-content: flex-start; align-items: center;">
       <svg width="62" height="50" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9458 9.99515L30.8341 4.93403L37.3253 9.45649L13.5112 15.8374L11.9458 9.99515Z" fill="#0081C7"/>
<rect width="27.8684" height="5.40074" transform="matrix(0.195136 -0.980776 0.945217 0.326442 6.46887 37.3383)" fill="#0081C7"/>
<path d="M24.8867 58.2914L43.7751 53.2303L47.1354 46.0682L23.3213 52.4491L24.8867 58.2914Z" fill="#0081C7"/>
<rect width="27.8685" height="5.40074" transform="matrix(0.659381 0.751809 0.655361 -0.755316 6.47205 37.3501)" fill="#0081C7"/>
<rect x="19.4177" y="30.7441" width="19.9963" height="6.04839" transform="rotate(-15 19.4177 30.7441)" fill="#1D1D1D"/>
<mask id="mask0_2834_749" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="38" y="21" width="16" height="11">
<path d="M40.298 31.411L52.3948 28.1697L53.984 21.4821L38.7326 25.5687L40.298 31.411Z" fill="#1D1D1D"/>
</mask>
<g mask="url(#mask0_2834_749)">
<path d="M38.7521 25.6414L50.8726 22.3937L55.5988 27.3891L40.3175 31.4837L38.7521 25.6414Z" fill="#1D1D1D"/>
</g>
<path d="M29.1401 47.7993L48.5367 42.602L52.0296 35.4044L27.5747 41.9571L29.1401 47.7993Z" fill="#1D1D1D"/>
<path d="M27.9875 48.1442L40.0844 44.9029L41.6735 38.2153L26.4221 42.3019L27.9875 48.1442Z" fill="#1D1D1D"/>
<path d="M21.1629 22.9711L33.2597 19.7298L34.8488 13.0422L19.5974 17.1288L21.1629 22.9711Z" fill="#1D1D1D"/>
<rect width="17.848" height="5.40074" transform="matrix(0.659381 0.751809 0.655361 -0.755316 16.2337 34.6859)" fill="#1D1D1D"/>
<path d="M20.2628 16.9505L39.6595 11.7532L46.2832 16.2401L21.8283 22.7928L20.2628 16.9505Z" fill="#1D1D1D"/>
<rect width="17.848" height="5.40074" transform="matrix(0.195136 -0.980776 0.945217 0.326442 16.2317 34.6783)" fill="#1D1D1D"/>
</svg>
          
          <h3
            style="font-size:small; color: rgba(0,0,0,0.6); font-family: Roboto, sans-serif;font-weight: normal;">
            CamerExpress</h3>
            
        </div>
        <div class="reservation-info"  style="display:flex; flex-direction:column; ">
          <p style="font-size:small; color: rgba(0,0,0,0.6); font-family: Roboto, sans-serif;font-weight:normal text-align: right;">CODE DE
            LA RÉSERVATION
          </p>
          <p style="font-size: medium; color: rgba(0,0,0,0.6); font-family: Roboto, sans-serif;text-align: right;">
            ${ReservationPrint.voyage.code}
          </p>
        </div>
      </div>
      <div class="contain">
        <p style="font-size: x-large; color: rgba(0,0,0,0.8); font-family: Roboto, sans-serif; text-align: left;">${getFormattedDate(
          ReservationPrint.voyage.dateDepart
        )}</p>
        <div class="cardVoyage">
          <div class="heure" style="">
            <p class="text centerup" style=" height: 40px;">${getFormattedTime(
              ReservationPrint.voyage.dateDepart
            )}</p>
            <p class="text centerdown" style="height: 40px">  ${addTime(
              getFormattedTime(ReservationPrint.voyage.dateDepart),
              convertDurationToTime(ReservationPrint.voyage.itineraire.duree)
            )}</p>
          </div>
          <div class="Fleche">
            <div class="circle"></div>
            <div class="line"></div>
            <div class="circle2"></div>
          </div>
          <div class="detailVoyage"> 
            <div class="detailVoyageChild">
              <div class="depart">
                <div style="height: auto;">
                  <label
                    style="font-size: x-large; color: rgba(0,0,0,0.8); font-family: Roboto, sans-serif; text-align: left;height: auto;">
                   ${
                     ReservationPrint.voyage.itineraire.villeDepart.nom
                   } <em style="font-size: 70%; font-weight: 400;">(Depart)</em></label>
                </div>
                <div style=" flex-direction: row;height: auto;" class="center">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="rgba(0, 129, 199, 0.9)">
                    <path
                      d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                  </svg> 
                  <p
                    style="font-size: medium; color: rgba(0,0,0,0.5); font-family: Roboto, sans-serif; text-align: left; text-decoration: underline;">
                    11 place de la gare,Mvan</p>
                </div>
              </div>
              <div class="bus">
                <div class="imgbus center" style="width: 20%; height: 100%;">
                  <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px"
                    fill="rgba(0, 129, 199, 0.9)">
                    <path
                      d="M249-120q-13 0-23-7.5T216-147v-84q-29-16-42.5-46T160-341v-397q0-74 76.5-108T481-880q166 0 242.5 34T800-738v397q0 34-13.5 64T744-231v84q0 12-10 19.5t-23 7.5h-19q-14 0-24-7.5T658-147v-55H302v55q0 12-10 19.5t-24 7.5h-19Zm232-644h259-520 261Zm177 293H220h520-82Zm-438-60h520v-173H220v173Zm106 219q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16Zm308 0q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16ZM220-764h520q-24-26-92-41t-167-15q-118 0-181 13.5T220-764Zm82 502h356q35 0 58.5-27t23.5-62v-120H220v120q0 35 23.5 62t58.5 27Z" />
                  </svg>
                </div>
                <div class="titrebus" style="max-height: 100%; width: auto; display: flex; flex-direction: column;">
                  <label class="text" style="font-size: 100%; height: 100%;">Bus ${
                    ReservationPrint.voyage.bus.code
                  } (${ReservationPrint.classe})<label
                      style="font-family: Arial, Helvetica, sans-serif; font-size: 60%; border: solid 1px rgba(0, 129, 199, 0.3); border-radius: 10px; font-weight: 100; font-style:normal; background-color: rgba(0, 129, 199, 0.5); width: auto; height: 100%;">CamerExpress
                    </label></label>
                  <label class="text" style="font-size: 60%;">A destination de  ${
                    ReservationPrint.voyage.itineraire.villeDestination.nom
                  } </label>
                </div>
              </div>
              <div class="arrive">
                <div style="height: auto;">
                  <label
                    style="font-size: x-large; color: rgba(0,0,0,0.8); font-family: Roboto, sans-serif; text-align: left;height: auto;">
                     ${
                       ReservationPrint.voyage.itineraire.villeDestination.nom
                     } <em style="font-size: 70%; font-weight: 400;"> (Arrivée)</em></label>
                </div>
                <div style=" flex-direction: row;height: auto;" class="center">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" view   Box="0 -960 960 960" width="24px"
                    fill="rgba(0, 129, 199, 0.9)">
                    <path
                      d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                  </svg>
                  <p
                    style="font-size: medium; color: rgba(0,0,0,0.5); font-family: Roboto, sans-serif; text-align: left; text-decoration: underline;">
                    11 place de la gare,Mvan</p>    
                </div>   
              </div>
            </div>      
          </div>
        </div>
        <div class="Arret">
          <div class="text Arret1"
            style="font-weight: normal; width: 100%; justify-content: flex-start; align-items: flex-start;">Liste des
            Arrets</div>


          <!--


          <div style=" flex-direction: row;height: auto;display: flex;flex-direction: row;align-items: center;">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
              fill="rgba(0, 129, 199, 0.9)">
              <path
                d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            <p
              style="font-size: medium; color: rgba(0,0,0,0.5); font-family: Roboto, sans-serif; text-align: left; text-decoration: underline;">
              Terminus centrale,Yassa <em style="font-size: 100%; font-weight: 400; text-decoration: none;">(30min)</em>
            </p>
          </div>-->

        </div>
      </div>

    </div>
    <div class="section" id="section2">
      <div class="header">

        <div class="reservation-info">
          <p style="font-size: medium; color: rgba(0,0,0,0.6); font-family: Roboto, sans-serif;font-size: 110%;">BILLET
          </p>
          <p style="font-size: medium; color: rgba(0,0,0,0.6); font-family: Roboto, sans-serif;">Valable sous forme
            imprimée ou numerique</p>
        </div>
      </div>
      <div class="qrcode center" style="width: 100%; height: auto; display: flex; flex-direction: column;">
      <svg xmlns="http://www.w3.org/2000/svg" height="300px" viewBox="0 -960 960 960" width="300px"
          fill="rgba(0, 0, 0, 0.5)">
          <path
            d="M520-120v-80h80v80h-80Zm-80-80v-200h80v200h-80Zm320-120v-160h80v160h-80Zm-80-160v-80h80v80h-80Zm-480 80v-80h80v80h-80Zm-80-80v-80h80v80h-80Zm360-280v-80h80v80h-80ZM170-650h140v-140H170v140Zm-50 50v-240h240v240H120Zm50 430h140v-140H170v140Zm-50 50v-240h240v240H120Zm530-530h140v-140H650v140Zm-50 50v-240h240v240H600Zm80 480v-120h-80v-80h160v120h80v80H680ZM520-400v-80h160v80H520Zm-160 0v-80h-80v-80h240v80h-80v80h-80Zm40-200v-160h80v80h80v80H400Zm-190-90v-60h60v60h-60Zm0 480v-60h60v60h-60Zm480-480v-60h60v60h-60Z" />
        </svg> 
          <img src="${uri}} alt=""/>
        <div class="description text" style="font-weight: normal; font-size: large;">Le même code QR est utilisé pour
          l’ensemble de votre voyage</div>
      </div>
      <div class="passager ">
        <div class="user" style="display: flex; flex-direction: row; width: 80%;">
          <div class="avatar" style="width: 70px;"> <svg xmlns="http://www.w3.org/2000/svg" height="48px"
              viewBox="0 0 24 24" width="48px" fill="rgba(0, 129, 199, 0.9)">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
            </svg> </div>
          <div class="nom" style="display: flex;flex-direction: column; width: auto; height: auto;">

            <label class="text" style="font-weight: normal;">Adulte </label>
            <label class="text" style="font-size: 70%; margin-top: 5px; ">${
              ReservationPrint.passagers
            }</label>
          </div>
        </div>
        <div class="siege" style="display: flex;flex-direction: column;">
          <label class="text" style="text-decoration: underline;font-weight: normal;">Bus ${
            ReservationPrint.voyage.bus.code
          }</label>
          <label class="text center" style="margin-top: 5px;">12A</label>
        </div>
      </div>
      <!-- bagages 
      <div class="bagage">
        <div class="bagage1">
          <div class="user" style="display: flex; flex-direction: row; width: 80%;">
            <div class="avatar" style="width: 70px;"> <svg xmlns="http://www.w3.org/2000/svg" height="48px"
                viewBox="0 0 24 24" width="48px" fill="rgba(0, 129, 199, 0.9)">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z" />
              </svg></div>
            <div class="nom" style="display: flex;flex-direction: column; width: auto; height: auto;">

              <label class="text" style="font-weight: normal;">1 x Bagages a main </label>
              <label class="text" style="font-size: 100%; margin-top: 5px; ">10kg, </label>
            </div>
          </div>
        </div>
        <div class="bagage1">
          <div class="user" style="display: flex; flex-direction: row; width: 80%;">
            <div class="avatar" style="width: 70px;"> <svg xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24" height="48px" viewBox="0 0 24 24" width="48px"
                fill="rgba(0, 129, 199, 0.9)">
                <rect fill="none" height="24" width="24" />
                <g>
                  <path
                    d="M9.5,18H8V9h1.5V18z M12.75,18h-1.5V9h1.5V18z M16,18h-1.5V9H16V18z M17,6h-2V3c0-0.55-0.45-1-1-1h-4C9.45,2,9,2.45,9,3v3 H7C5.9,6,5,6.9,5,8v11c0,1.1,0.9,2,2,2c0,0.55,0.45,1,1,1s1-0.45,1-1h6c0,0.55,0.45,1,1,1s1-0.45,1-1c1.1,0,2-0.9,2-2V8 C19,6.9,18.1,6,17,6z M10.5,3.5h3V6h-3V3.5z M17,19H7V8h10V19z" />
                </g>
              </svg></div>
            <div class="nom" style="display: flex;flex-direction: column; width: auto; height: auto;">

              <label class="text" style="font-weight: normal;">1 x Bagages en soute </label>
              <label class="text" style="font-size: 100%; margin-top: 5px; ">50kg</label>
            </div>
          </div>
        </div>
      </div>
-->
    </div>
    <div class="section3" id="section3">
      <div
        style=" display: flex; flex-direction: column; width: 100%; height: 100%;align-items: flex-start; justify-content: flex-start; margin-left: 20px;">
        <div class="header">

          <p style="font-size: medium; color: rgba(0,0,0,0.6); font-family: Roboto, sans-serif;font-size: 110%; ">
            Informations suplementaires
          </p>
        </div>

        <div class="contain3">
          <div class="total center" style="display: flex; flex-direction: row; justify-content: flex-start;">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="34px" viewBox="0 0 24 24"
              width="34px" fill="rgba(0, 129, 199, 0.9)">
              <g>
                <rect fill="none" height="24" width="24" />
                <path
                  d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H3V6h14v8zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm13 0v11c0 1.1-.9 2-2 2H4v-2h17V7h2z" />
              </g>
            </svg>
            <p class="text" style="margin-left: 20px; font-weight: normal;">Prix total : <label
                style="font-weight: bold;"> ${MontantTotal} FCFA</label></p>
          </div>

          <div class="total center" style="display: flex; flex-direction: row; justify-content: flex-start;">
            <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px"
              fill="rgba(0, 129, 199, 0.9)">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z" />
            </svg>
            <p class="text" style="margin-left: 20px; font-weight: normal;">Gerer ma reservation : <label
                style="font-weight: bold; text-decoration: underline;">resevation.camerExpress.cm/check</label></p>
          </div>

          <div class="total center" style="display: flex; flex-direction: row; justify-content: flex-start;">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="34px" viewBox="0 0 24 24"
              width="34px" fill="rgba(0, 129, 199, 0.9)">
              <g>
                <path d="M0,0h24v24H0V0z" fill="none" />
              </g>
              <g>
                <path
                  d="M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4 C22,2.9,21.1,2,20,2z M20,16H8V4h12V16z M13.51,10.16c0.41-0.73,1.18-1.16,1.63-1.8c0.48-0.68,0.21-1.94-1.14-1.94 c-0.88,0-1.32,0.67-1.5,1.23l-1.37-0.57C11.51,5.96,12.52,5,13.99,5c1.23,0,2.08,0.56,2.51,1.26c0.37,0.6,0.58,1.73,0.01,2.57 c-0.63,0.93-1.23,1.21-1.56,1.81c-0.13,0.24-0.18,0.4-0.18,1.18h-1.52C13.26,11.41,13.19,10.74,13.51,10.16z M12.95,13.95 c0-0.59,0.47-1.04,1.05-1.04c0.59,0,1.04,0.45,1.04,1.04c0,0.58-0.44,1.05-1.04,1.05C13.42,15,12.95,14.53,12.95,13.95z" />
              </g>
            </svg>
            <p class="text" style="margin-left: 20px; font-weight: normal;">FAQ: <label
                style="font-weight: bold; text-decoration: underline;">help.camerexpress.cm</label></p>
          </div>
          <div style="height:max-content; justify-content: flex-end; align-items: flex-end; font-weight: normal;"
            class="text">
            <p> \n\n Les conditions générales commerciales de Flix SE s’appliquent à la réservation de billets. Vous
              pouvez
              les retrouver sur : flixbus.fr/conditions-generales. Les conditions générales de transport des
              transporteurs respectifs s’appliquent. Vous pouvez les retrouver sur :
              flixbus.fr/selection-conditionsgenerales-de-reservation. Le transporteur en charge de votre trajet sera
              indiqué sur
              votre facture. La
              race, la couleur de peau, la religion, le genre, la nationalité ou les capacités physiques ne sont pas des
              critères pour voyager à bord de nos bus.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="section4">
      <div
        style=" display: flex; flex-direction: column; width: 100%; height: 100%;align-items: flex-start; justify-content: flex-start; margin-left: 20px;">
        <div class="header">

          <p style="font-size: medium; color: rgba(0,0,0,0.6); font-family: Roboto, sans-serif;font-size: 110%; ">
            La checklist de votre trajet
          </p>
        </div>

        <div class="contain3">
          <div class="total center" style="display: flex; flex-direction: row; justify-content: flex-start;">

            <input type="checkbox" name="option1" value="Option 1"
              style="width: 20px; height: 20px; border: solid 2px rgba(0, 0, 0, 0.2); border-radius: 10px; box-shadow: inset rgba(0, 0, 0, 0.1);">

            <p class="text" style="margin-left: 20px; font-weight: normal;">Veuillez vous rendre à la station 15 minutes
              avant le départ

          </div>

          <div class="total center" style="display: flex; flex-direction: row; justify-content: flex-start; ">

            <input
              style="width: 30px; height: 30px; border: solid 2px rgba(0, 0, 0, 0.2); border-radius: 10px; box-shadow: inset rgba(0, 0, 0, 0.1);"
              type="checkbox" name="option1" value="Option 1" />

            <p class="text" style="margin-left: 20px; font-weight: normal;">Assurez-vous que vos bagages correspondent
              aux spécifications
              requises.
              Plus d'informations : flixbus.fr/services/bagages

          </div>


        </div>
      </div>
    </div>

    <style>
      body,
      html {
        width: 100%;
        height: 1700px;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;

      }

      .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        width: 95%;
        height: 100%;
        gap: 10px;
         row-gap: 200px; /* Espacement vertical entre les lignes */
        /* Espace entre les sections */
        margin-top: 50px;
      }

      .section {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px dashed rgba(0, 0, 0, 0.1);
        font-size: 24px;
        font-weight: bold;
        width: 100%;
        height: 100%;
      }

      .section3 {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        border: 2px dashed rgba(0, 0, 0, 0.1);
        font-size: 24px;
        font-weight: bold;
        width: 100%;
        height: 100%;
      }

      #section1 {
        background-color: #ffff;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        justify-content: flex-start;
      }

      .header {
        width: 95%;
        height: 120px;         
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 2px rgba(0, 0, 0, 0.2);
      }                 
                  
      .center {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .centerdown {
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }

      .centerup {
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }

      .contain {
        width: 95%;
        height: auto;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

      }

      .cardVoyage {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 300px;

      }

      .cardVoyage .heure {
        /* background-color: blanchedalmond; */
        width: 15%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }

      .text {
        font-size: 85%;
        height: auto;
        font-family: Arial, Helvetica, sans-serif;
        color: rgba(0, 0, 0, 0.7);
      }

      .cardVoyage .Fleche {
        /* background-color: azure; */
        width: 10%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .detailVoyage {
        /* background-color: gray; */
        width: 75%;
        height: 100%;
        display: flex;
        flex: 1;
        justify-content: flex-start;
        align-items: center;
        /* padding-top: 1.6%;
      padding-bottom: 2%; */
      }

      .detailVoyageChild {
        width: 85%;
        height: 85%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
      }

      .circle {
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background-color: white;
        border: solid 2px rgba(0, 129, 199, 0.9);
      }

      .circle2 {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background-color: white;
        border: solid 2px rgba(0, 129, 199, 0.9);
      }

      .line {
        width: 2px;
        height: 70%;
        background-color: rgba(0, 129, 199, 0.9);

      }

      .depart {
        height: 25%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        /* background-color: gray; */
      }

      .bus {
        width: 120%;
        height: 30%;
        border: solid 2px rgba(0, 129, 199, 0.9);
        border-radius: 9px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

      }

      .arrive {
        height: 10%;
        /* background-color: gray; */
        justify-content: center;
        align-items: center;
      }

      .Arret {
        width: 80%;
        height: auto;
        min-height: 20%;
        background-color: rgba(0, 0, 0, 0.04);
        border-radius: 10px;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 50px;
        padding: 10px;
      }

      #section2 {
        background-color: #ffff;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        justify-content: flex-start;
      }

      .passager {
        width: 90%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        margin-top: 20px;
      }

      .bagage {
        width: 90%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 20px;
      }

      .bagage1 {
        width: 50%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        margin-top: 20px;
      }

      #section3 {
        background-color: #ffff;
      }

      .headerS3 {
        width: 95%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 2px rgba(0, 0, 0, 0.2);
      }

      #section4 {
        background-color: #ffff;
      }
    </style>
</body>

</html>
`;
};

export default ticket;

// let ReservationPrint = {
//   id: 7,
//   voyage: {
//     id: 1,
//     itineraire: {
//       id: 22,
//       site: {
//         id: 1,
//         agence: {
//           id: 3,
//           nom: "General",
//         },
//         ville: {
//           id: 6,
//           nom: "Yaounde",
//         },
//         quartier: "Mvan",
//         prixAnnulation: 1000.0,
//       },
//       villeDepart: {
//         id: 6,
//         nom: "Yaounde",
//       },
//       villeDestination: {
//         id: 2,
//         nom: "Maroua",
//       },
//       duree: 1,
//       prixClassique: 3500.0,
//       prixVip: 3500.0,
//       createdAt: "2024-04-09T15:36:43",
//     },
//     bus: {
//       id: 1,
//       site: {
//         id: 1,
//         agence: {
//           id: 3,
//           nom: "General",
//         },
//         ville: {
//           id: 6,
//           nom: "Yaounde",
//         },
//         quartier: "Mvan",
//         prixAnnulation: 1000.0,
//       },
//       capacite: 70,
//       code: "B1",
//       classe: "VIP",
//     },
//     code: "456WEFX",
//     dateDepart: "2024-12-04T15:40:10",
//   },
//   client: null,
//   prix: 500.0,
//   nom: "nomReservation2",
//   code: "R-cwihVyXa",
//   classe: "VIP",
//   dateReservation: "2024-05-19T16:33:12.863283909",
//   places: 1,
//   passagers: "[]",
//   bagages: "[]",
//   scanned: false,
//   statut: "",
//   alertsms: false,
// };

const Contact = (function(){
    const contentDiv = document.getElementById("content");
    const contactDiv = document.createElement("div");
    contactDiv.setAttribute("id" , "contactInfo");

    const createTimingsDiv = () =>{
        const timingDiv = document.createElement("div");
        contactDiv.appendChild(timingDiv);
        timingDiv.setAttribute("id" , "timingDiv");
        timingDiv.innerHTML = '<i class="fa fa-3x fa-cutlery" aria-hidden="true"></i>';

        const timingHeading = document.createElement("span");
        timingHeading.innerHTML = 'Timings';
        timingDiv.appendChild(timingHeading);

        const timingHours = document.createElement("span");
        timingHours.innerHTML = '9:00am - 12:00am';
        timingDiv.appendChild(timingHours);
    }

    const createPhoneDiv = () => {
        const phoneDiv = document.createElement("div");
        contactDiv.appendChild(phoneDiv);
        phoneDiv.setAttribute("id" , "phoneDiv");
        phoneDiv.innerHTML = '<i class="fa fa-3x fa-phone" aria-hidden="true"></i>';

        const phoneHeading = document.createElement("span");
        phoneHeading.innerHTML = 'Phone';
        phoneDiv.appendChild(phoneHeading);

        const phoneNumber = document.createElement("span");
        phoneNumber.innerHTML = '123456567899';
        phoneDiv.appendChild(phoneNumber);
    }

    const createEmailDiv = () => {
        const emailDiv = document.createElement("div");
        contactDiv.appendChild(emailDiv);
        emailDiv.setAttribute("id" , "emailDiv");
        emailDiv.innerHTML = '<i class="fa fa-3x fa-envelope-o" aria-hidden="true"></i>';

        const emailHeading = document.createElement("span");
        emailHeading.innerHTML = 'Email';
        emailDiv.appendChild(emailHeading);

        const emailAddress = document.createElement("span");
        emailAddress.innerHTML = 'yourhome@gmail.com';
        emailDiv.appendChild(emailAddress);
    }

    const createLocationDiv = () => {
        const locationDiv = document.createElement("div");
        contactDiv.appendChild(locationDiv);
        locationDiv.setAttribute("id" , "locationDiv");
        locationDiv.innerHTML = '<i class="fa fa-3x fa-map-marker" aria-hidden="true"></i>';

        const locationHeading = document.createElement("span");
        locationHeading.innerHTML = 'Location';
        locationDiv.appendChild(locationHeading);

        const locationAddress = document.createElement("span");
        locationAddress.innerHTML = 'Tokyo, Japan';
        locationDiv.appendChild(locationAddress);
    }

    const createContact = () => {
        createTimingsDiv();
        createPhoneDiv();
        createEmailDiv();
        createLocationDiv();
        contentDiv.appendChild(contactDiv);
    }

    return {createContact};
})();

export default Contact;
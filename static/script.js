const btn = document.getElementById('sbmt-btn');
const form = document.getElementById('form');
const aadhar = document.getElementById('aadhar');

btn.onclick = function() {
    aadhar.classList.remove('hidden');
    aadhar.classList.add('flex');
    getapi('/api');
}

async function getapi(url) {

    // Getting response from the server
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
            "UID": document.getElementById('num').value,
            "Name": document.getElementById('name').value,
            "C/o": document.getElementById('co').value,
            "House no.": document.getElementById('houseno').value,
            "Street": document.getElementById('road').value,
            "Landmark": document.getElementById('landmark').value,
            "Area": document.getElementById('area').value,
            "City": document.getElementById('city').value,
            "PO": document.getElementById('post').value,
            "District": document.getElementById('district').value,
            "Sub district": document.getElementById('subd').value,
            "State": document.getElementById('state').value,
            "Pincode": document.getElementById('pin').value,
            "Email": document.getElementById('email').value,
            "Phone": document.getElementById('phone').value
        })// body data type must match "Content-Type" header
      });
    var data = await response.json();
    const display = document.getElementById('display');
    console.log(data);
    display.innerHTML = "";
    if (data['Name']){display.innerHTML += data['Name'] + "<br>";}
    if (data['C/o']){display.innerHTML += "C/o: " + data['C/o'] + "<br>";}
    if (data['House no.']){display.innerHTML += data['House no.'];}
    if (data['House no.'] && data['Street']){display.innerHTML += ", ";}
    if (data['Street']){display.innerHTML += data['Street'];}
    if (data['Street'] && data['Area']){display.innerHTML += ", ";}
    if (data['PO'] && data['Area'] && !data['Street']){display.innerHTML += ", ";}
    if (data['Area']){display.innerHTML += data['Area'];}
    display.innerHTML += "<br>";
    if (data['PO']){display.innerHTML += "PO: " + data['PO'];}
    if (data['PO'] && data['City']){display.innerHTML += ", ";}
    if (data['City']){display.innerHTML += data['City'];}
    display.innerHTML += "<br>";
    if (data['Sub district']){display.innerHTML += data['Sub district'];}
    if (data['Sub district'] && data['District']){display.innerHTML += ", ";}
    if (data['District']){display.innerHTML += data['District'];}
    display.innerHTML += "<br>";
    if (data['Landmark']){display.innerHTML += data['Landmark'];}
    if (data['Landmark'] && data['State']){display.innerHTML += ", ";}
    if (data['State']){display.innerHTML += data['State'];}
    if (data['Pincode']){display.innerHTML += " - " + data['Pincode'];}
    display.innerHTML += "<br>";
    if (data['Phone']){display.innerHTML += "Ph: " + data['Phone'];}
  }

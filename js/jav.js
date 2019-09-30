
alert('Je bent Harry de aap, je bent zojuist ontsnapt uit een dierentuin nu moet jij er voor zorgen dat je ontsnapt!');
if (confirm("1, Je ziet een auto staan je kan er in stappen en achtervolgt worden 2, kan weg rennen en achterna gezeten worden door 10 man")) {
    if(confirm("1,Naar rechts naar een doodlopend pad met een steegje waardoor je heen rent 2, Je kan naar links over een brug.")){
        alert('je ziet verderop nog een paar van de verzorgers.');
        if(confirm("1, je kan er heel snel tussendoor rennen hopen dat niemand je ziet, 2, Je kan terug rennen om het proberen te ontwijken" )) {
            alert('Je wordt toch gezien, je ziet een wapen van een verzorger liggen');
                if (confirm("1, je probeert verder te rennen 2, Je pakt het wapen op en probeert het te gebruiken")) {
                    alert('je ziet een oude oma die aanbied of je bij haar wilt blijven.');
                    if (confirm("1, je accepteert het aanbod, 2, je weigert het aanbod")) {

                        alert('je leeft nog lang en gelukkig!');

                    } else{
                        alert("Je bent dood!");
                    }

                        }else {
                    alert("HJe bent dood!");
                }
                 }else
            {
                alert("Je bent dood!");
            }
            }else
            {
                alert("Je bent dood!");
            }

    }else
            {
                alert("Je bent dood!");
            }




//ZNAMENIA
let znamenia = {
    vodnar:{
        order: 1,
        name: "AQUARIUS / VODNÁR",
        image: "images/Aquarius.svg" ,
        startDay: 21,
        startMonth: 1,
        endDay: 19,
        endMonth: 2,
        popis:"V osobnom živote je toto obdobie prevratov, ak by ste bojovali s nedostatkom času, stačí si len lepšie premyslieť jednotlivé kroky. V láske neváhajte byť veľkorysí, nielenže si to vaša polovička zaslúži, ale jeto niečo, čo váš vzťah posunie zas ďalej.",
    },
    strelec:{
        order : 11,
        name: "SAGGITARIUS / STRELEC",
        image: "images/Saggitarius.svg",
        startDay: 23,
        startMonth: 11,
        endDay: 22,
        endMonth: 12,
        popis: "Je to ohnivé znamenie. Sú to ľudia spoločenskí, veľmi spravodliví, vždy pripravení a veľmi úprimní. Ich vládnucou planétou je Jupiter, ktorý im dáva šťastie a pôvab. Sú otvorení novým myšlienkam, stále sa učia a vzdelávajú sa.",
    },
    baran:{
        order: 3,
        name: "ARIES / BARAN",
        image: "images/Aries.svg",
        startDay: 21,
        startMonth: 3,   
        endDay: 20,
        endMonth: 4,
        popis: "Je to ohnivé znamenie. Barani sú kamarátski, impulzívni, súťaživí, vždy otvorení novým veciam. Potrebujú byť dominantní a neznášajú prehry. Vládnucou planétou je Mars, ktorá im dáva obrovské množstvo nespútanej energie a hnaciu silu.",
    },
    byk:{
        order: 4,
        name: "TAURUS / BÝK",
        image: "images/Taurus.svg",
        startDay: 21,
        startMonth: 4,
        endDay: 21,
        endMonth: 5,
        popis: "Je to zemské znamenie. Sú to ľudia stáli, konzervatívni, tvrdohlaví, pôžitkárski. Potrebujú mať pocit istoty, milujú stabilitu vo všetkom: v bývaní, vo vzťahoch, v práci. Sú zaťažení na peniaze.",
    },
    blizenci:{
        order: 5,
        name: "GEMINI / BLÍŽENCI",
        image: "images/Gemini.svg",
        startDay: 22,
        startMonth: 5,
        endDay: 21,
        endMonth: 6,
        popis: "Je to vzdušné znamenie. Sú to ľudia citliví, nedokážu úmyselne ublížiť, sú rozpoltení a sú otvorení k novým veciam. Vládne im planéta Merkúr, ktorá im dáva schopnosť výborne komunikovať a stále sa vzdelávať. Sú nesmierne inteligentní.",
    },
    rak:{
        order: 6,
        name: "CANCER / RAK",
        image: "images/Cancer.svg",
        startDay: 22,
        startMonth: 6,
        endDay: 22,
        endMonth: 7,
        popis: "Je to vodné znamenie. Sú veľmi rodinne založení. Majú silný pud sebazáchovy. Ich vládnucou planétou je Luna, ktorá im dáva hlboké city, jemnosť , materinskú starostlivosť. Citlivá oblasť tela je žalúdok, prsia.",
    },
    lev:{
        order: 7,
        name: "LEO / LEV",
        image: "images/Leo.svg",
        startDay: 23,
        startMonth: 7,
        endDay: 23,
        endMonth: 8,
        popis: "Je to ohnivé znamenie. Títo ľudia sú egocentrickí, radi stávajú stredobodom pozornosti. Majú prirodzený vodcovský talent. Ich vládnucou planétou je Slnko, ktoré im dodáva nevyčerpateľné množstvo energie, hravosť, spontánnosť.",
    },
    panna:{
        order: 8,
        name: "VIRGO / PANNA",
        image: "images/Virgo.svg",
        startDay: 24,
        startMonth: 8,
        endDay: 23,
        endMonth: 9,
        popis: "Je to zemské znamenie. Sú to ľudia silní, vplyvní, produktívni. Ich život sa toči okolo služby a sebaobetovania. Ich vládnucou planétou je Merkúr, ktorá im dáva precíznosť, múdrosť, poriadkumilovnosť. Citlivá oblasť tela sú brušná dutina a črevá.",
    },
    vahy:{
        order: 9,
        name: "LIBRA / VÁHY",
        image: "images/Libra.png",
        startDay: 24,
        startMonth: 9,
        endDay: 23,
        endMonth: 10,
        popis: "Je to vzdušné znamenie. Títo ľudia sú kamarátski, úprimní, poctiví, slobodomyseľní a neznášajú konflikty. Vzťahy s druhými sú pre nich mimoriadne dôležité. Majú zmysel pre spravodlivosť a česť. Ich vládnucou planétou je Venuša.",
    },
    skorpion:{
        order: 10,
        name: "SCORPIO / ŠKORPIÓN",
        image: "images/Scorpio.svg",
        startDay: 24,
        startMonth: 10,
        endDay: 22,
        endMonth: 11,
        popis: "Je to vodné znamenie. Sú to ľudia originálni, tvrdohlaví, majú vynikajúcu pamäť, logické a analytické myslenie. Disponujú výbornými nápadmi. Vedia byť veľmi starostliví a nápomocní. Ich vládnucou planétou je Pluto.",
    },
    kozorozec:{
        order: 12,
        name: "CAPRICORN / KOZOROŽEC",
        image: "images/Capricorn.svg",
        startDay: 22,
        startMonth: 12,
        endDay: 20,
        endMonth: 1,
        popis: "Je to zemské znamenie. Sú to ľudia veľmi rodinne založení, starostliví, ale aj ťažkopádni. Ich vládnucou planétou je Saturn, ktorý ich učí k trpezlivosti. Chcú mať všetko pod kontrolou a sú materiálne založení.",
    },
    ryby:{
        order: 2,
        name: "PISCES / RYBY",
        image: "images/Pisces.svg",
        start: "20.02",
        startDay: 20,
        startMonth: 2,
        endDay: 20,
        endMonth: 3,
        popis: "Je to vodné znamenie. Sú to ľudia veľmi citliví, zraniteľní, sú výborní pozorovatelia, majú umelecké sklony. Vládnucou planétou je Neptún, ktorý im dáva neobyčajnú fantáziu a výborné herecké sklony. Majú sklon k sebaobetovaniu.",
    },
}

    //FUNKCIA changeDateTime

function changeDateTime(event){
    
    event.preventDefault();


    var inputDate = document.getElementById('birthday').valueAsDate;
    var d = new Date(inputDate); 
    
    var mesiac = (d.getMonth() + 1);
    
   var den = d.getDate();
 


   //Funkcia getZnamenie aka. MEGA SWITCH :) 
    
   let objektZnamenia = getZnamenie();

    switch(mesiac){
        case 1 :
            
        if(den >znamenia.vodnar.startDay)
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.vodnar.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.vodnar.popis;
                                                            //.src = znamenia.vodnar.image; nejde tak som tam normalne napisal cestu.
                document.getElementById("horoskop-obrazok").src = "images/Aquarius.svg"
        }
        else
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.kozorozec.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.kozorozec.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Capricorn.svg";
        }
            
        break;

        case 2 :

        if(den >znamenia.ryby.startDay)
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.ryby.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.ryby.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Pisces.svg";
        }
        else
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.vodnar.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.vodnar.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Aquarius.svg";
        }

        break;

        case 3 :

        if(den >znamenia.baran.startDay)
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.baran.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.baran.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Aries.svg";
        }
        else
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.ryby.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.ryby.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Pisces.svg";
        }

        break;

        case 4 :

        if(den >znamenia.byk.startDay)
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.byk.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.byk.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Taurus.svg";
        }
        else
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.baran.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.baran.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Aries.svg";
        }

        break;

        case 5 :

        if(den >znamenia.blizenci.startDay)
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.blizenci.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.blizenci.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Gemini.svg";
        }
        else
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.byk.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.byk.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Taurus.svg";
        }

        break;

        case 6 :

        if(den >znamenia.rak.startDay)
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.rak.name;
               
                document.getElementById("horoskop-text").innerHTML = znamenia.rak.popis;
               
                document.getElementById("horoskop-obrazok").src = "images/Cancer.svg";        
        }
        else
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.blizenci.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.blizenci.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Gemini.svg";
        }

        break;

        case 7 :

        if(den >znamenia.lev.startDay)
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.lev.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.lev.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Leo.svg";
        }
        else
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.rak.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.rak.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Cancer.svg";
        }
            
        break;

        case 8 :

        if(den >znamenia.panna.startDay)
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.panna.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.panna.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Virgo.svg";
        }
        else
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.lev.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.lev.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Leo.svg";
        }
        
        break;

        case 9 :

        if(den >znamenia.vahy.startDay)
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.vahy.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.vahy.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Libra.png";
        }
        else
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.panna.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.panna.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Virgo.svg";
        }
            
        break;

        case 10 :

        if(den >znamenia.skorpion.startDay)
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.skorpion.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.skorpion.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Scorpio.svg";
        }
        else
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.vahy.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.vahy.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Libra.png";
        }
        
        break;

        case 11 :

        if(den >znamenia.strelec.startDay)
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.strelec.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.strelec.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Sagittarius.svg";
        }
        else
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.skorpion.name;
               
                document.getElementById("horoskop-text").innerHTML = znamenia.skorpion.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Scorpio.svg";
        }
        break;

        case 12 :

        if(den >znamenia.kozorozec.startDay)
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.kozorozec.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.kozorozec.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Capricorn.svg";
        }
        else
        {
                document.getElementById("horoskop-nadpis").innerHTML = znamenia.strelec.name;
                
                document.getElementById("horoskop-text").innerHTML = znamenia.strelec.popis;
                
                document.getElementById("horoskop-obrazok").src = "images/Sagittarius.svg";
        }

        break;  

    }



    
}

function getZnamenie(){
    let current;

    return current;

}


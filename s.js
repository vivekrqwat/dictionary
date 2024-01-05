let b1=document.getElementById("b1");
const url2="https://random-word-api.herokuapp.com/word";
let r2=document.getElementById("r");
let sy=document.getElementById("sy");
let li=document.getElementById("li");
let a=document.getElementById('a');
let sy2=document.getElementById("sy2");
let se=document.getElementById("se");


b1.addEventListener("click",gr);
async function gr(){
      const r=await fetch(url2);
      const data= await r.json();
      // let k=Math.floor(Math.random()*1000);
      let w=data;
      console.log(w);
      const url="https://api.dictionaryapi.dev/api/v2/entries/en/"+w;
      const u=`https://api.datamuse.com/words?ml=${w}`
      const u2=`https://api.datamuse.com/words?rel_ant=${w}`
   
      a.innerHTML=` <h3>${w}</h3>`

      try{

      const r1=await fetch(url);
      if(!r1.ok){r2.innerHTML=` <div class="text-danger">defination NOT in API<div>`}

      const d=await r1.json();
      console.log(d);
      r2.innerHTML=`
     
  <p class="m">${d[0].meanings[0].definitions[0].definition}</p>
      <p class="e">${d[0].meanings[0].definitions[0].example || ""}</p>
      
      `;
}catch(error){console.log("error")}
     const r5=await fetch(u);
     const d2=await r5.json();
     
     console.log(d2.slice(0,5).map(wordInfo=>wordInfo.word));
     const y=d2.slice(0,5).map(wordInfo=>wordInfo.word);
     if(y.length==0){
      sy.innerHTML=`
      <p>
      <h3>SYNONYM:</h3>
      sorry API have NO synonym
      </p>
      `;
     }
     else{

      sy.innerHTML=`
      <p>
      <h3>SYNONYMS:</h3>
      <ul>
      <li>${y[0]}</li>
      <li>${y[1]}</li>
      <li>${y[2]}</li></ul>
      </p>
      `;
     }
    
     const r6=await fetch(u2);
     const d6=await r6.json();
     console.log(d6.slice(0,5).map(wordInfo=>wordInfo.word));
     const y1=d6.slice(0,5).map(wordInfo=>wordInfo.word);
     console.log(y1);
     if(y1.length==0){
      sy2.innerHTML=`
     <p>
     <h3>ANTONYMS:</h3>
     <p class="text-success"> sorry API have NO antonym,</p>
     </p>
     `

     }
     else{
     sy2.innerHTML=`
     <p>
     <h3>ANTONYMS:</h3>
     <ul>
     <li>${y1[0]}</li>
     <li>${y1[1]}</li>
     <li>${y1[2]}</li></ul>
     </p>
     `};
     b1.textContent="Next word"
     
   
    
  
     

}
se.addEventListener('click',sea);
async function sea(){
      let i=document.getElementById("i").value;
      const url1="https://api.dictionaryapi.dev/api/v2/entries/en/"+i;
      
      const u1=`https://api.datamuse.com/words?ml=${i}`
      const u21=`https://api.datamuse.com/words?rel_ant=${i}`

      a.innerHTML=` <h3>${i}</h3>`

      try{

      const r10=await fetch(url1);
      if(!r10.ok){r2.innerHTML=` <div class="text-danger">defination NOT in API<div>`}

      const d0=await r10.json();
      console.log(d0);
      r2.innerHTML=`
     
  <p class="m">${d0[0].meanings[0].definitions[0].definition}</p>
      <p class="e">${d0[0].meanings[0].definitions[0].example || ""}</p>
      
      `;
}catch(error){console.log("error")}
     const r50=await fetch(u1);
     const d20=await r50.json();
     console.log(d20.slice(0,5).map(wordInfo=>wordInfo.word));
     const y0=d20.slice(0,5).map(wordInfo=>wordInfo.word);
     if(y0.length==0){sy.innerHTML=`<p>
     <h3>SYNONYM:</h3>
     <p>sorry API have no synonyms</p>
     </p>`}
     else{
      sy.innerHTML=`
      <p>
      <h3>SYNONYM:</h3>
      <ul>
      <li>${y0[0]}</li>
      <li>${y0[1]}</li>
      <li>${y0[2]}</li></ul>
      </p>
      `;
     }
   
     const r60=await fetch(u21);
     const d60=await r60.json();
     console.log(d60.slice(0,5).map(wordInfo=>wordInfo.word));
     const y10=d60.slice(0,5).map(wordInfo=>wordInfo.word);
     console.log(y10);
     if(y10.length==0){
      sy2.innerHTML=`
     <p>
     <h3>ANTONYMS:</h3>
     <p class="text-success"> sorry NO antonym</p>
     </p>
     `

     }
     else{
     sy2.innerHTML=`
     <p>
     <h3>ANTONYMS:</h3>
     <ul>
     <li>${y10[0]}</li>
     <li>${y10[1]}</li>
     <li>${y10[2]}</li></ul>
     </p>
     `};
     if(i==="krish1"||i==="nitin2"||i==="rohit3"){alert("krish chu@*** hai");}
     if(i==="shivangi15"||i==="shivangiE15"){alert("girl i like to make angry for no reason ,sorry!...");}
     if(i==="shitalD"||i==="shitalDE"){alert("gril with the most beautiful smile....")}
     if(i==="rohitF"){alert("good friend of mine and really clam guy");}
  
     if(i==="rachitFD"){alert("kata dai ,my good old friend");}
     if(i==="nitinG"){alert("articulate,ambitious,good friend of mine");}
     if(i==="sidhuG"){alert("cute......")}
     if(i==="sumitF"||i==="sunitF"||i=="yogeshF"||i==="ashuG"||i=="mayankF"){alert("good friend of mine")}
     if(i==="krishF"){alert("artist")}


    
      


}
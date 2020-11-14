

var r1=0;
var r2=0;
var r3=0;
var r4=0;
var r5=0;
var r6=0;
var r7=0;
var total=0;


//Eventos para cada respuesta

//pregunta 1

document.getElementById('p1r1').addEventListener('click', ()=> {
    document.getElementById('p1r1').className='btnseleccionado';
    document.getElementById('p1r2').className='btndseleccionado';
    document.getElementById('p1r3').className='btndseleccionado';
    document.getElementById('p1r4').className='btndseleccionado';
    r1=0;
})

document.getElementById('p1r2').addEventListener('click', ()=> {
    document.getElementById('p1r2').className='btnseleccionado';
    document.getElementById('p1r1').className='btndseleccionado';
    document.getElementById('p1r3').className='btndseleccionado';
    document.getElementById('p1r4').className='btndseleccionado';
    r1=2;
})

document.getElementById('p1r3').addEventListener('click', ()=> {
    document.getElementById('p1r3').className='btnseleccionado';
    document.getElementById('p1r2').className='btndseleccionado';
    document.getElementById('p1r1').className='btndseleccionado';
    document.getElementById('p1r4').className='btndseleccionado';
    r1=3;
})

document.getElementById('p1r4').addEventListener('click', ()=> {
    document.getElementById('p1r4').className='btnseleccionado';
    document.getElementById('p1r2').className='btndseleccionado';
    document.getElementById('p1r3').className='btndseleccionado';
    document.getElementById('p1r1').className='btndseleccionado';
    r1=4;
})

//pregunta 2

document.getElementById('p2r1').addEventListener('click', ()=> {
    document.getElementById('p2r1').className='btnseleccionado';
    document.getElementById('p2r2').className='btndseleccionado';
    document.getElementById('p2r3').className='btndseleccionado';
    
    r2=0;
})

document.getElementById('p2r2').addEventListener('click', ()=> {
    document.getElementById('p2r2').className='btnseleccionado';
    document.getElementById('p2r1').className='btndseleccionado';
    document.getElementById('p2r3').className='btndseleccionado';
    r2=1;
})

document.getElementById('p2r3').addEventListener('click', ()=> {
    document.getElementById('p2r3').className='btnseleccionado';
    document.getElementById('p2r2').className='btndseleccionado';
    document.getElementById('p2r1').className='btndseleccionado';
    r2=3;
})

//pregunta 3
document.getElementById('p3r1').addEventListener('click', ()=> {
    document.getElementById('p3r1').className='btnseleccionado';
    document.getElementById('p3r2').className='btndseleccionado';
    
    r3=0;
})

document.getElementById('p3r2').addEventListener('click', ()=> {
    document.getElementById('p3r2').className='btnseleccionado';
    document.getElementById('p3r1').className='btndseleccionado';
    r3=2;
})

//pregunta 4
document.getElementById('p4r1').addEventListener('click', ()=> {
    document.getElementById('p4r1').className='btnseleccionado';
    document.getElementById('p4r2').className='btndseleccionado';
    r4=0;
})

document.getElementById('p4r2').addEventListener('click', ()=> {
    document.getElementById('p4r2').className='btnseleccionado';
    document.getElementById('p4r1').className='btndseleccionado';
    r4=2;
})

//pregunta 5
document.getElementById('p5r1').addEventListener('click', ()=> {
    document.getElementById('p5r1').className='btnseleccionado';
    document.getElementById('p5r2').className='btndseleccionado';
    r5=0;
})

document.getElementById('p5r2').addEventListener('click', ()=> {
    document.getElementById('p5r2').className='btnseleccionado';
    document.getElementById('p5r1').className='btndseleccionado';
    r5=2;
})

//pregunta 6
document.getElementById('p6r1').addEventListener('click', ()=> {
    document.getElementById('p6r1').className='btnseleccionado';
    document.getElementById('p6r2').className='btndseleccionado';
    r6=5;
})

document.getElementById('p6r2').addEventListener('click', ()=> {
    document.getElementById('p6r2').className='btnseleccionado';
    document.getElementById('p6r1').className='btndseleccionado';
    r6=0;
})

//pregunta 7
document.getElementById('p7r1').addEventListener('click', ()=> {
    document.getElementById('p7r1').className='btnseleccionado';
    document.getElementById('p7r2').className='btndseleccionado';
    document.getElementById('p7r3').className='btndseleccionado';
    r7=5;
})

document.getElementById('p7r2').addEventListener('click', ()=> {
    document.getElementById('p7r2').className='btnseleccionado';
    document.getElementById('p7r1').className='btndseleccionado';
    document.getElementById('p7r3').className='btndseleccionado';
    r7=3;
})

document.getElementById('p7r3').addEventListener('click', ()=> {
    document.getElementById('p7r3').className='btnseleccionado';
    document.getElementById('p7r2').className='btndseleccionado';
    document.getElementById('p7r1').className='btndseleccionado';
    r7=0;
})

//Evaluar
document.getElementById('btn1').addEventListener('click', ()=> {
    total=r1+r2+r3+r4+r5+r6+r7;
    console.log(total)

    if(total<=4){
        document.querySelector('.respuesta').className='respuestacontainer1';
        document.getElementById('respuestatext').innerHTML= 'Tienes un riesgo bajo, se estima que uno de cada cien pacientes desarrollará la enfermedad';
      }
  
      if(4<total  && total<=8){
        document.querySelector('.respuesta').className='respuestacontainer1';
        document.getElementById('respuestatext').innerHTML= 'Tienes un riesgo ligeramente elevado, se estima que uno de cada 25 pacientes desarrollará la enfermedad';
      }
  
      if(8<total && total<=11){
        document.querySelector('.respuesta').className='respuestacontainer1';
        document.getElementById('respuestatext').innerHTML= 'Tienes un riesgo moderado, se estima que uno de cada seis pacientes desarrollará la enfermedad';
      }
  
      if(11<total && total<=17){
          document.querySelector('.respuesta').className='respuestacontainer1';
          document.getElementById('respuestatext').innerHTML= 'Tienes un riesgo alto, se estima que uno de cada tres pacientes desarrollará la enfermedad';
      }

    if(10<total && total<= 20){
        document.querySelector('.respuesta').className='respuestacontainer1';
        document.getElementById('respuestatext').innerHTML= 'Tienes un riesgo muy alto, se estima que uno de cada dos pacientes desarrollará la enfermedad';
    }


    
})
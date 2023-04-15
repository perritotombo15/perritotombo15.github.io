ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200  
});

ScrollReveal().reveal('.inicio-incio, .incio', { origin:'top'});
ScrollReveal().reveal('.inicio-img, .cursos-container,', { origin:'bottom'});

const typed = new Typed('.texto',{
    strings: ['<i></i> alas hallaras, almas java', ' generadores del progreso', 'Cyberpunk School, Tu Club Cool DolHack', 'Genera Código Óptimo Con Próximos Prójimos', 'jovenes soñadores', ' Genera Código Óptimo Con Próximos Prójimos','El Mundo Es Tuyo Pero Debes Programarlo','Experimento Neuronal , Aprende Sin Cesar',],
    backspeed: 40,
    backdelay: 100,
    loop: true
});


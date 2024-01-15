const folgas = [
  "quinta-Feira",
  "Sexta-feira",
  "sábado",
  "Domingo",
  "segunda",
  "quarta",
  "Quarta-feira",
]; 

function capitalizeFolgas(folgas) {
  const capitalizadas = folgas.map(function(folgaDia){
  return folgaDia.charAt(0).toUpperCase() + folgaDia.slice(1); 
  });

  return capitalizadas;
}

const folgasCapitalizadas = capitalizeFolgas(folgas);
console.log(folgasCapitalizadas);

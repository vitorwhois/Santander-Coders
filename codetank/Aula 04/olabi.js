function guerraDosNumeros(matriz) {
    let numerosPares = 0;
    let numerosImpares = 0;
  

    for (let i = 0; i < matriz.length; i++) {

      if (matriz[i] % 2 === 0) {
        numerosPares += matriz[i];
      } else {
        numerosImpares += matriz[i];
      }
    }

    return Math.abs(numerosImpares - numerosPares);
  }
  
  // Exemplos de uso:
  console.log(guerraDosNumeros([2, 8, 7, 5]));   // Saída: 2
  console.log(guerraDosNumeros([12, 90, 75]));     // Saída: 27
  console.log(guerraDosNumeros([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]));  // Saída: 168
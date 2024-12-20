const makeAsync = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const n = Math.random();
      if (n >= 0.5) {
        resolve(`data: ${n}`);
      } else {
        reject(new error(`Error: ${n}`));
      }
    });
  });
};

// makeAsync(1000)
//   .then(console.log(data) /*Si se cumple la promesa*/)
//   .catch(console.error(error.message) /*Si no se cumple la promesa*/)
//   .finally(console.log('Proceso finalizado') /*Se ejecuta en ambos casos*/);

//Funciones async
async function foo() {
  return Math.random();
}

const x = foo();
console.log(x);

x.then((n) => console.log(n));

// async y await
// await sube la asincronía a la función donde se pone.

async function baz() {
  const p = await foo();
}

// Fetch

function jsonFech() {
  const url = 'https://dummyjson.com/userss';

  const r = fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        //throw new Error('Error fecht ha fallado');
        return response.status + ' ' + response.statusText;
      }
    })
    .then((data) => {
      if (typeof data === 'string') {
        console.log('Error: ', data);
        return;
      }
      console.log(data.total);
    })
    .catch((error) => {
      console.log(error.message);
      console.log('Continua después del error');
    });
}

jsonFech();

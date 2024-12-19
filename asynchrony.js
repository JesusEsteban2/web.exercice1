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

makeAsync(1000)
  .then(console.log(data) /*Si se cumple la promesa*/)
  .catch(console.error(error.message) /*Si no se cumple la promesa*/)
  .finally(console.log('Proceso finalizado') /*Se ejecuta en ambos casos*/);

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

# Librería JSON

JSON.parse() : Convierte de formato JSON a Java Object.
JSON.stringify(): Convierte de formato Java Object a JSON.

Para importar directamente de un archivo JSON en local.
import FACTS from './facts.json' with {type:'json'};
console.log(FACTS)

# Formularios

## Eventos en formularios.

En formularios los elementos que obtienen el foco disparan el evento 'focus', cuando lo pierden disparan 'blur' , evento 'input' cuando se escribe en un input, los radio button disparan el evento 'change' al seleccionar uno de los radio.

# Notación de objetos

const user={
name:'Pepe',
age:22
}

const prop='age';

user.name //Pepe
user['name']//Pepe
user.prop//undefined
user[prop]//22

# Storage Front

Se puede ver en F12 --> Application

Métodos:

localStorage.setItem()
localStorage.getItem()
localStorage.removeItem()
localStorage.clear()

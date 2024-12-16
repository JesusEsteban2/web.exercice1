export function tttGame() {
  // '⭕''❌'⬤

  const players = [
    { firstName: 'Pepe', surName: '', alias: 'Pepin', icon: '⬤' },
    { firstName: 'Ernestina', surName: '', alias: '', icon: '❌' },
  ];

  const ddElements = document.querySelectorAll('.ttt dd');

  setPlayerNames();

  simutateGame();

  function setPlayerNames() {
    for (let i = 0; i < ddElements.length; i++) {
      const item = ddElements[i];
      // item.textContent = players[i].alias
      //     ? players[i].alias
      //     : players[i].firstName;

      const text = `<b>${players[i].alias || players[i].firstName}</b>`;

      // item.textContent = text;
      item.innerHTML = text;
    }
  }

  function playTurn(position, player) {
    const boardElement = document.querySelector('.board');
    const boardElements = document.querySelectorAll('.board div');
    const infoElement = document.querySelector('dialog.info');
    console.dir(boardElement.children[0]);
    console.dir(boardElements[0]);

    if (boardElement.children[position - 1].textContent) {
      infoElement.textContent = 'Movimiento inválido';
      infoElement.showModal();
      setTimeout(function () {
        infoElement.textContent = '';
        infoElement.close();
      }, 2000);
      return;
    }

    boardElement.children[position - 1].innerHTML = player.icon;
  }

  function simutateGame() {
    // Jugar simulado

    // Posiciones de 1 a 9

    // Empieza Pepe
    playTurn(5, players[0]);

    // Juega Ernestina
    playTurn(5, players[1]);
    playTurn(4, players[1]);

    // Empieza Pepe
    playTurn(3, players[0]);

    // Juega Ernestina
    playTurn(7, players[1]);

    // Empieza Pepe
    playTurn(1, players[0]);

    // Juega Ernestina
    playTurn(2, players[1]);

    // Empieza Pepe
    playTurn(9, players[0]);

    // Juega Ernestina
    playTurn(8, players[1]);
  }

  function isWinner(posPlayer = '') {
    const optionWinner = [
      '123',
      '456',
      '789',
      '147',
      '258',
      '369',
      '159',
      '357',
    ];

    if (posPlayer.length < 3) return false;

    for (let index = 0; index < optionWinner.length; index++) {
      const item = optionWinner[index];
      if (
        posPlayer.includes(item.at(0)) &&
        posPlayer.includes(item.at(1)) &&
        posPlayer.includes(item.at(2))
      ) {
        return true;
      }
    }
    return false;
  }

  // console.log(isWinner('1789')); //True
  // console.log(isWinner('12468')); //fase
  // console.log(isWinner('321')); //True
  // console.log(isWinner('12469')); //fase
}

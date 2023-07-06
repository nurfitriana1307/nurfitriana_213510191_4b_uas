<template>
  <div class="tictactoe-container">
    <h2 class="title">Game Tic Tac Toe</h2>
    <div class="board">
      <div v-for="(cell, index) in board" :key="index" class="cell" :class="{ 'cell-x': cell === 'X', 'cell-o': cell === 'O' }" @click="handleCellClick(index)">
        {{ cell }}
      </div>
    </div>
    <div v-if="winner" class="winner-message">
      <p>{{ winner }} Wins!</p>
      <button @click="resetGame">Play Again</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameTicTacToe',
  data() {
    return {
      board: Array(12).fill(''),
      currentPlayer: 'X',
      winner: null
    };
  },
  methods: {
    handleCellClick(index) {
      if (!this.board[index] && !this.winner) {
        this.board[index] = this.currentPlayer;
        this.checkWinner();
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    },
    checkWinner() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
      ];

      for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
          this.board[a] &&
          this.board[a] === this.board[b] &&
          this.board[a] === this.board[c]
        ) {
          this.winner = this.board[a];
          break;
        }
      }
    },
    resetGame() {
      this.board = Array(12).fill('');
      this.currentPlayer = 'X';
      this.winner = null;
    }
  }
};
</script>

<style scoped>
.tictactoe-container {
  text-align: center;
  margin-top: 50px;
}

.title {
  font-size: 25px;
  margin-bottom: 30px;
  color: #333;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  max-width: 300px;
  margin: 0 auto;
}

.cell {
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  background-color: #e171f540;
  border: 2px solid #ccc;
  transition: background-color 0.3s, color 0.3s;
}

.cell:hover {
  background-color: #ddd;
}

.cell-x,
.cell-o {
  color: #333;
}

.cell-x {
  background-color: #00e1ff;
}

.cell-o {
  background-color: #ecf403;
}

.winner-message {
  margin-top: 20px;
}

.winner-message p {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  color:springgreen;
}

.winner-message button {
  padding: 8px 16px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.winner-message button:hover {
  background-color: #45a049;
}
.title{
  color:rgb(11, 160, 235);
}
</style>

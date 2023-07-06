<template>
  <div>
    <h2>Game Puzzle</h2>
    <div class="puzzle-board">
      <div
        v-for="(tile, index) in tiles"
        :key="index"
        class="tile"
        :class="{ empty: tile === emptyTile }"
        @click="moveTile(index)"
      >
        {{ tile }}
      </div>
    </div>
    <div class="shuffle-button">
      <button @click="shuffleTiles">Shuffle Tiles</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      emptyTile: 16,
    };
  },
  methods: {
    moveTile(index) {
      if (this.isValidMove(index)) {
        this.tiles[this.emptyTile - 1] = this.tiles[index];
        this.tiles[index] = this.emptyTile;
        this.emptyTile = index + 1;
      }
    },
    isValidMove(index) {
      const emptyRowIndex = Math.floor(this.emptyTile / 4);
      const emptyColIndex = (this.emptyTile - 1) % 4;
      const tileRowIndex = Math.floor(index / 4);
      const tileColIndex = index % 4;

      const rowDiff = Math.abs(emptyRowIndex - tileRowIndex);
      const colDiff = Math.abs(emptyColIndex - tileColIndex);

      return (rowDiff === 0 && colDiff === 1) || (rowDiff === 1 && colDiff === 0);
    },
    shuffleTiles() {
      for (let i = this.tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.tiles[i], this.tiles[j]] = [this.tiles[j], this.tiles[i]];
      }
      this.emptyTile = this.tiles.indexOf(16) + 1;
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 20px;
  color: rgb(255, 53, 171);
}

.puzzle-board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 300px;
  margin: 0 auto;
}

.tile {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(248, 206, 248, 0.549);
  font-size: 24px;
  font-weight: bold;
  height: 70px;
  cursor: pointer;
}

.empty {
  background-color: rgba(234, 0, 255, 0.483);
  cursor: default;
}

.shuffle-button {
  text-align: center;
  margin-top: 20px;
}

</style>

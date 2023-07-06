<template>
  <div class="stopwatch-container">
    <h2>Stopwatch</h2>
    <div class="stopwatch">
      <div class="time">{{ formatTime }}</div>
      <div class="buttons">
        <button @click="startStopwatch" :disabled="isRunning">Start</button>
        <button @click="stopStopwatch" :disabled="!isRunning">Stop</button>
        <button @click="resetStopwatch">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stopwatch',
  data() {
    return {
      isRunning: false,
      elapsedTime: 0,
      intervalId: null
    };
  },
  computed: {
    formatTime() {
      const milliseconds = this.elapsedTime % 1000;
      const seconds = Math.floor((this.elapsedTime / 1000) % 60);
      const minutes = Math.floor((this.elapsedTime / (1000 * 60)) % 60);
      const hours = Math.floor((this.elapsedTime / (1000 * 60 * 60)) % 24);

      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds
        .toString()
        .padStart(3, '0')}`;
    }
  },
  methods: {
    startStopwatch() {
      this.isRunning = true;
      this.intervalId = setInterval(() => {
        this.elapsedTime += 10;
      }, 10);
    },
    stopStopwatch() {
      this.isRunning = false;
      clearInterval(this.intervalId);
    },
    resetStopwatch() {
      this.isRunning = false;
      this.elapsedTime = 0;
      clearInterval(this.intervalId);
    }
  }
};
</script>

<style scoped>
.stopwatch-container {
  text-align: center;
}

.stopwatch {
  display: inline-block;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(192, 34, 235, 0.2);
  background-color: #d8b0f59d;
}

.time {
  font-size: 48px;
  margin-bottom: 10px;
}

.buttons button {
  margin-right: 10px;
}
h2 {
  color:rgb(89, 0, 255);
}
</style>

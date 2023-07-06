<template>
  <div class="cuaca-container">
    <h2>Cuaca</h2>
    <div class="weather-card">
      <div class="weather-icon">
        <img :src="weatherData.icon" :alt="weatherData.description">
      </div>
      <div class="weather-info">
        <h3>{{ weatherData.temperature }}&deg;C</h3>
        <p>{{ weatherData.city }}</p>
        <p>{{ weatherData.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cuaca',
  data() {
    return {
      weatherData: {
        temperature: 0,
        city: '',
        description: '',
        icon: ''
      }
    };
  },
  mounted() {
    // Simulasi data cuaca
    this.weatherData.temperature = 29;
    this.weatherData.city = 'Riau, Pekanbaru';
    this.weatherData.description = 'Cerah';
    this.weatherData.icon = 'https://icon-icons.com/icons2/33/PNG/256/sunny_sun_cloud_time_time_2777.png';
  }
};
</script>

<style scoped>
.cuaca-container {
  text-align: center;
}

.weather-card {
  display: inline-block;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(250, 250, 250);
  background-color: #e6aae955;
}

.weather-icon img {
  width: 80px;
  height: 80px;
}

.weather-info h3 {
  font-size: 24px;
  margin-bottom: 5px;
}

.weather-info p {
  font-size: 16px;
  margin-bottom: 0;
}
h2 {
  color: aqua;
}
h3{
  color:rgb(247, 249, 249);
}
p{
  color:rgb(248, 247, 248);
}
</style>

<template>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <h2>Lokasi</h2>
  <div class="location-widget">
    <h2>Your Location</h2>
    <div v-if="latitude && longitude">
      <p>Latitude: {{ latitude }}</p>
      <p>Longitude: {{ longitude }}</p>
    </div>
    <div v-else>
      <p>Finding your location...</p>
    </div>

    <div class="location-input">
      <label for="latitude">Negara:</label>
      <input type="text" id="latitude" v-model="inputLatitude" />
    </div>
    <div class="location-input">
      <label for="longitude">Kota:</label>
      <input type="text" id="longitude" v-model="inputLongitude" />
    </div>
    <br>
    <button @click="fetchLocationDetails">Find Location Details</button>

    <div v-if="foundLocation">
      <h3>Location Details</h3>
      <p>{{ foundLocation.components.country }}</p>
      <p>{{ foundLocation.components.city }}</p>
      <p>{{ foundLocation.components.street }}</p>
      <p>Postal Code: {{ foundLocation.components.postcode }}</p>
    </div>
  </div>
  <div class="lokasi-container">
    <div class="map-container">
      <img :src="mapData.imageUrl" :alt="mapData.name">
      <div class="location-info">
        <h3>{{ mapData.name }}</h3>
        <p>{{ mapData.address }}</p>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lokasi',
  data() {
    return {
      latitude: null,
      longitude: null,
      inputLatitude: '',
      inputLongitude: '',
      foundLocation: null,
      mapData: {
        name: '',
        address: '',
        imageUrl: ''
      }
    };
  },
  mounted() {
    // Simulasi data lokasi
    this.mapData.name = 'Universitas Islam Riau (UIR)';
    this.mapData.address = ' Jalan Kaharuddin Nasution, Simpang Tiga, Kota Pekanbaru, Riau, Indonesia';
    this.mapData.imageUrl = 'http://pmb.uir.ac.id/assets/img/map.jpg';
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition);
    }
  },
  methods: {
    getPosition(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    },
    async fetchLocationDetails() {
      try {
        const apiKey = '92591005a7b94008909d59a64b6d2a49';
        const latitude = this.inputLatitude || this.latitude;
        const longitude = this.inputLongitude || this.longitude;
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          latitude + ',' + longitude
        )}&key=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const location = data.results[0];
          this.foundLocation = location;
          console.log('Location:', location);
          // Lakukan sesuatu dengan data lokasi yang ditemukan
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    },
  },
};
</script>

<style scoped>
.lokasi-container {
  text-align: center;
}

.map-container {
  position: relative;
  display: inline-block;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.map-container img {
  width: 350px;
  height: auto;
}

.location-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  text-align: left;
}

.location-info h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.location-info p {
  font-size: 14px;
  margin-bottom: 0;
}
h2{
  color:rgb(162, 0, 255);
}
.location-widget {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #6b129545;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.location-widget h2 {
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 20px;
}

.location-widget p {
  color: #ffffff;
}

.location-input {
  margin-top: 20px;
}

.location-input label {
  display: block;
  margin-bottom: 5px;
  color: #ffffff;
  font-size: 16px;
}

.location-input input {
  width: 200px;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.location-input button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.location-input button:hover {
  background-color: #45a049;
}

.location-input button:disabled {
  background-color: #ccc;
  color: #999;
  cursor: not-allowed;
}

.location-details {
  margin-top: 20px;
  text-align: left;
}

.location-details h3 {
  margin-bottom: 10px;
  color: #333;
  font-size: 18px;
}

.location-details p {
  margin: 5px 0;
  color: #666;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>


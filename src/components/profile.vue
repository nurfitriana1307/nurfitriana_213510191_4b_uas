<template>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <div class="profile">
    <h2>Profile</h2>
    <div class="profile">
      <div class="profile">
        <img :src="Data.icon" :alt="Data.description">
      </div>
      <div class="profile-info">
        <h3>{{ Data.nama }}</h3>
        <p>{{  Data.npm }}</p>
        <p>{{  Data.kelas }}</p>
        <p>{{  Data.matkul }}</p>
        <p>{{  Data.jurusan }}</p>
        <p>{{  Data.univ }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      Data: {
        nama: 0,
        npm: '',
        kelas: '',
        matkul:'',
        jurusan:'',
        univ:'',
        icon: ''
      }
    };
  },
  mounted() {
    this.Data.nama = 'Nur Fitriana';
    this.Data.npm = '213510191';
    this.Data.kelas = '4B';
    this.Data.matkul = 'Praktikum Pemograman Berbasis Komponen';
    this.Data.jurusan = 'Teknik Informatika';
    this.Data.univ = 'Universitas Islam Riau';
    this.Data.icon = 'https://c.tenor.com/NC9S9-pqbzkAAAAj/lucu-cute-cat.gif';
  }
};
</script>

<style scoped>
.profile-container {
  text-align: center;
}

.profile {
  display: inline-block;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(250, 250, 250);
  background-color: #e6aae955;
}

.profile-icon img {
  width: 80px;
  height: 80px;
}

.profile-info h3 {
  font-size: 24px;
  margin-bottom: 5px;
}

.weather-info p {
  font-size: 16px;
  margin-bottom: 0;
}
h2 {
  color: rgb(157, 0, 255);
}
h3{
  color:rgb(247, 249, 249);
}
p{
  color:rgb(248, 247, 248);
}

body {
  background: linear-gradient(135deg, #c850c0, #4158d0);
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-details {
  margin-top: 20px;
  text-align: center;
}

.profile-details h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.profile-details p {
  font-size: 16px;
}
body {
      background: linear-gradient(135deg, #c850c0, #4158d0);
      height: 100vh;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .profile-button, .home-button {
      padding: 10px 20px;
      background-color: #3333339c;
      color: #fff;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      margin-bottom: 20px;
    }

    .profile-button:hover, .home-button:hover {
      background-color: #555;
    }

    #app {
      margin-top: 20px;
      display: none;
    }

    #app.show {
      display: block;
    }
</style>

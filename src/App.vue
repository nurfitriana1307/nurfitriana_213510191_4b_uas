<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Profile</router-link></li>
          <li><router-link to="/cuaca"> Cuaca </router-link></li>
          <li><router-link to="/lokasi">Lokasi</router-link></li>
          <li><router-link to="/stopwatch">Stopwatch</router-link></li>
          <li><router-link to="/gametictactoe">Game Tic Tac Toe</router-link></li>
          <li><router-link to="/gamepuzzle">Game Puzzle</router-link></li>
          <li><router-link to="/foto">Foto</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  text-align: center;
}

header {
  background: #333333c9;
  padding: 20px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
}

nav a:hover {
  text-decoration: underline;
}
</style>

<template>
  <!-- En-tête de l'application -->
  <el-header class="app-header">
    <div class="header-content">
      <div class="left-content">
        <!-- Logo et nom de l'application à gauche -->
        <div class="logo">
          <img src="./assets/logo.png" alt="Logo de l'application" />
          <span class="app-name">Ummon Login-page</span>
        </div>
      </div>
      <div class="right-content">
        <!-- Navigation à droite (Liens de routage) -->
        <nav class="el-navbar">
          <router-link to="/" class="el-navbar-item">Se connecter</router-link>
          <router-link to="/enigmes" class="el-navbar-item">Enigmes</router-link>
        </nav>
      </div>
    </div>
  </el-header>
  <router-view />
</template>

<style>
  /* Styles pour l'ensemble de l'application */
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  /* Styles de l'en-tête de l'application */
  .app-header {
    background-color: #42b983; /* Couleur de fond de l'en-tête */
    display: flex;
    align-items: center;
    padding: 0 20px; /* Marge intérieure à gauche et à droite */
  }

  /* Styles du contenu de l'en-tête */
  .header-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Styles du contenu de gauche de l'en-tête */
  .left-content {
    display: flex;
    align-items: center;
  }

  /* Styles du logo */
  .logo {
    display: flex;
    align-items: center;
  }

  /* Styles de l'image du logo */
  .logo img {
    width: 60px;
    margin-right: 10px;
  }

  /* Styles du nom de l'application */
  .app-name {
    font-size: 20px;
    color: #fff; /* Couleur du texte en blanc */
  }

  /* Styles du contenu de droite de l'en-tête */
  .right-content {
    display: flex;
    align-items: center;
  }

  /* Styles de la barre de navigation */
  .el-navbar {
    padding: 10px;
  }

  /* Styles des éléments de la barre de navigation */
  .el-navbar-item {
    font-weight: bold;
    color: #2c3e50;
    margin-right: 10px;
  }

  /* Styles de l'élément actif de la barre de navigation */
  .el-navbar-item.router-link-active {
    color: #fff; /* Couleur du texte en blanc pour l'élément actif */
  }
</style>

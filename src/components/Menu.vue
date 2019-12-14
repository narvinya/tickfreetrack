<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="cssmenu">
      <ul class="cssmenu-content">
        <li class="domovWeb">
          <router-link to="/">
            <i class="fa fa-fw fa-home"></i> Domov
          </router-link>
        </li>
        <li class="domovMobil">
          <router-link to="/">
            <i class="fa fa-fw fa-home"></i>
          </router-link>
        </li>

        <li class="mapaWeb">
          <router-link to="/mapa">
            <i class="fa fa-fw fa-map"></i> Mapa výskytu
          </router-link>
        </li>
        <li class="informacie" v-on:click="zobrazInfo">
          <router-link to="/">
            <i class="fa fa-fw fa-info"></i> Info
            <i class="fa fa-fw fa-bars"></i>
            {{zobrazeneInfo}}
          </router-link>
          <ul class="dropdown-content" v-show="zobrazen">
            <li>
              <router-link to="/prevencia">Prevencia</router-link>
            </li>
            <li>
              <router-link to="/odstranenie">Ako správne odstrániť kliešťa</router-link>
            </li>
            <li>
              <router-link to="/testovanie">Možnosti testovania kliešťa</router-link>
            </li>
            <li>
              <router-link to="/rizika">Riziká</router-link>
            </li>
            <li>
              <router-link to="/priznaky">Príznaky pri nákaze</router-link>
            </li>
            <li>
              <router-link to="/pomoc">Prvá pomoc</router-link>
            </li>
          </ul>
        </li>

        <li class="mapaMobil">
          <router-link to="/mapa">
            <i class="fa fa-fw fa-map"></i> Mapa
          </router-link>
        </li>
        <li class="lokacia">
          <router-link to="/lokacia">
            <i class="fa fa-fw fa-crosshairs"></i> Pridať kliešťa
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      zobrazeneInfo:false
    };
  },
  methods: {
    zobrazInfo() {
      this.zobrazeneInfo = true
      console.log("fungujem")
    }
  }
};
</script>

<style>
@media (max-width: 599px) {
  .domovWeb,
  .mapaWeb {
    display: none;
  }
  .cssmenu ul {
    list-style: none;
    padding: 0;
  }

  .cssmenu {
    font-family: "Roboto Slab", serif;
    font-size: 15px;
    position: absolute;
    top: 60px;
    width: 100%;
    background-color: rgba(63, 179, 157, 1);
  }

  .domovMobil {
    max-width: 30px;
  }

  .cssmenu li {
    width: 25%;
    white-space: nowrap;
  }

  .dropdown-content li {
    width: auto;
  }

  .cssmenu ul li a {
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    min-height: 100%;
    margin-left: 20px;
    color: #ffffff;
    text-decoration: none;
    margin: 0;
    padding: 10px 5px 10px 5px;
  }

  .cssmenu a:hover {
    background: rgb(27, 132, 218);
  }

  li {
    float: left;
  }

  .informacie li {
    float: none;
  }

  .dropdown-content {
    position: absolute;
    font-size: 12px;
        background-color: rgba(63, 179, 157, 1);

  }

  .informacie ul li a {
    margin-left: 0;
    padding: 5px 10px 5px 10px;
  }

  .informacie:hover .dropdown-content {
    display: block;
  }
}

@media (min-width: 600px) {
  .domovMobil,
  .mapaMobil {
    display: none;
  }

  .cssmenu ul {
    list-style: none;
    padding: 0;
  }

  .cssmenu {
    font-family: "Arvo", serif;
    font-size: 15px;
    line-height: 1em;
    border-radius: 2px;
    overflow: hidden;
  }

  .cssmenu-content {
    position: absolute;
    left: 25px;
    top: 110px;
  }

  .cssmenu ul li {
    margin: 0;
    background-color: rgba(63, 179, 157, 1);
  }

  .cssmenu ul li:first-child {
    border-radius: 100px 0 0 100px;
  }

  .cssmenu ul li:last-child {
    border-radius: 0 100px 100px 0;
  }

  .cssmenu ul li:first-child a {
    margin-left: 0;
  }

  .cssmenu ul li:last-child a {
    padding-right: 20px;
    border-radius: 0 100px 100px 0;
  }

  .cssmenu ul li:last-child a:before {
    display: none;
  }

  .informacie ul li,
  .informacie ul li:last-child,
  .informacie ul li:first-child {
    border-radius: 50px;
  }

  .informacie ul li a:before {
    display: none;
  }

  .cssmenu ul li a {
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    min-height: 100%;
    padding: 12px 0 12px 15px;
    margin-left: 20px;
    color: #ffffff;
    text-decoration: none;
  }
  .cssmenu ul li a:before {
    content: "";
    position: absolute;
    left: 100%;
    top: 0;
    width: 30px;
    height: 100%;
    background-color: rgba(63, 179, 157, 1);
    border-radius: 0 100px 100px 0;
    box-shadow: 10px 0 10px rgba(0, 0, 0, 0.2);
  }
  li {
    float: left;
  }

  .informacie li {
    float: none;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    font-size: 12px;
    z-index: 9000;
  }

  .informacie ul li a {
    margin-left: 0;
    padding: 10px 15px 10px 15px;
  }

  .informacie:hover .dropdown-content {
    display: block;
  }
}

@media (min-width: 1000px) {
  .cssmenu {
    font-size: 16px;
  }

  .cssmenu-content {
    right: 50px;
  }

  .cssmenu ul li a {
    text-transform: uppercase;
  }

  .dropdown-content {
    font-size: 16px;
  }

  .informacie ul li a {
    text-transform: none;
  }

  .dropdown-content {
    z-index: 9000;
  }
}
</style>
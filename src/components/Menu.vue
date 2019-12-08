<template>
  <div id="cssmenu">
        <ul>
          <li class="domov">
            <router-link to="/">Domov</router-link>
          </li>
          <li class="mapa">
            <router-link to="/mapa">Mapa vyskytu kliestov</router-link>
          </li>
          <li class="informacie">
            <router-link to="/informacie">Prevencia</router-link>
          </li>
        </ul>
        </div>
</template>

<script>
export default {

}
</script>

<style>
#cssmenu {
  display: inline-block;
  font-family: "Arvo", serif;
  font-size: 15px;
  line-height: 15px;
  border-radius: 2px;
  overflow: hidden;
  top: 100px;
}
#cssmenu ul {

  list-style: none;
  padding: 0;
}

@media (min-width: 600px) {
#cssmenu {
    font-family: "Arvo", serif;
    font-size: 14px;
    line-height: 1em;
    border-radius: 2px;
    right: 25px;
    top: 125px;
      overflow: hidden;
       position: absolute;
  }
  #cssmenu ul {
    margin: 0;
    padding: 0;
    display:flex;
  }

#cssmenu ul li {
  margin: 0;
  background-color: rgba(63, 179, 157, 1);
}

  #cssmenu ul li:first-child {
  border-radius: 100px 0 0 100px;
}

  #cssmenu ul li:last-child {
  border-radius: 0 100px 100px 0;
}

 #cssmenu ul li:first-child a {
    margin-left: 0;
  }

  #cssmenu ul li:last-child a {
    padding-right: 30px;
    border-radius: 0 100px 100px 0;
  }


  #cssmenu ul li:last-child a:before {
    display: none;
  }

  #cssmenu ul li a {
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    min-height: 100%;
    padding: 12px 0 12px 30px;
    margin-left: 20px;
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
  }
  #cssmenu ul li a:before {
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
}

@media (min-width: 1000px) {
     #cssmenu {
    right: 50px;
    font-size:16px;
  }
}

</style>
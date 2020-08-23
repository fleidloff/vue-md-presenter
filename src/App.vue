<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Edit</router-link>&nbsp;
            <router-link to="/present">Present</router-link>
        </div>
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    max-width: 1024px;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
    transition: all 0.3s ease;
    border-bottom: 1px solid white;
    text-decoration: none;
    margin-bottom: 0;
    padding-bottom: 3px;
}

#nav a:hover {
    margin-bottom: 3px;
    padding-bottom: 0;
    border-bottom: 1px solid #42b983;
}
#nav a.router-link-exact-active {
    color: #42b983;
    margin-bottom: 0;
    padding-bottom: 3px;
    border-bottom: 1px solid #42b983;
}

body,
html {
    padding: 0;
    margin: 10px;
}
</style>

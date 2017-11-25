<div class="new_decima">
<label> Github username <input id="username"  type="text" value="ziraco" v/></label>
<label> Github pass <input id="password"  type="password"/>
<label> Title <input id="title"  type="text" value="prueba"/>
<label> Content <input id ="body" type="textarea" value="prueba" />
<label><button> Dale </button></label>

<h1> Décimas </h1>
{% for decima in site.decimas %}
      
  <b>{{ decima.title }}</b>
  <p>{{ decima.content }}</p>
{% endfor %}
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>

<script type="application/javascript" src="assets/mandanga.js"></script>
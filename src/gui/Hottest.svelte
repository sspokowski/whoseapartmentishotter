<script>
    export let hottest;
</script>

<article>
    <h1>It is whose apartment is hotter?! dot com!</h1>
    <small>
      <b>{hottest.hottest}</b>   
    </small>
</article>
<table class="center">
  <tr>
    <th>Shak temp:</th>
    <th>Arlo temp:</th>
  </tr>
  <tr>
    <td>{hottest.shak}</td>
    <td>{hottest.arlo}</td>
  </tr>
</table>

<style>
    .center {
      margin-left: auto;
      margin-right: auto;
    }
    article {
      margin: 0 0 1em 0;
    }
    h1 {
      font-size: 1.4em;
      margin: 0;
      display: block;
    }
  </style>
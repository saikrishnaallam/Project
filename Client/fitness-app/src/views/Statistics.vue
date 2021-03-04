<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <div class="section">
        <div class="panel is-primary">
                  <p class="panel-heading">Usage statistics</p>

          <div class="panel-block">
            <div class="stField field">
              <span class=" icon is-small is-left is-inline">
                <i class="fas fa-user"></i>
              </span>
                <label class="label is-inline">Number of users: 76</label>
            </div>
          </div>
        
          <div class="panel-block">
            <div class="stField field">
              <span class="icon is-small is-left is-inline">
                <i class="fas fa-dumbbell"></i>
              </span>
                <label class="label is-inline">Number of exercise posts: 456</label>
            </div>
          </div>
          <div class="panel-block">
            <div class="stField field">
              <span class="icon is-small is-left is-inline">
                <i class="fas fa-hamburger"></i>
              </span>
                <label class="label is-inline">Number of food posts:336</label>
            </div>
          </div>
            <div class="panel-block">
            <div class="stField field">
              <span class="icon is-small is-left is-inline">
                <i class="fas fa-tally"></i>
              </span>
                <label class="label is-inline">Number of total posts: 791</label>
            </div>
          </div>
            <div class="panel-block">
            <div class="stField field">
              <span class="icon is-small is-left is-inline">
                <i class="fas fa-fire-alt"></i>
              </span>
                <label class="label is-inline">Total calories burned:800265</label>
                
            </div>
            
          </div>
            <div class="panel-block">
            <div class="stField field">
              <span class="icon is-small is-left is-inline">
                <i class="fas fa-hamburger"></i>
              </span>
                <label class="label is-inline">Total  calories ingested:1000698</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statistics",
};
</script>

<style scoped>
.stField{
    padding: 10px;
}
.label{
    margin-left: 10px;
}
</style>
<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h2>About fpv.wtf</h2>
          </div>
          <div class="card-body col-md-11">
            <p>fpv.wtf is (to be) a collection of useful FPV tools for the entiry the community to enjoy.</p>
            <p>Right now you can use the Video Out feature to get a video stream out of your DJI FPV Goggles.</p>
                        <br>

            <p>Watch this space for more.</p>
            <br>
            <blockquote>
              <p class="blockquote blockquote-primary">
                If you'd like, please consider supporting the effort by sending some cryptos or buying me a few coffies. Links below.
              </p>
            </blockquote>
          </div>

        </div>
      </div>
      <div class="col-md-4">
        <user-card :user="user"></user-card>
      </div>
    </div>
    <div class="row">
    <div v-for="method in methods" v-bind:key="method.href" class="col-md-4">
        <card type="method">
          <p class="card-text">
          </p>
          <div class="author">
            <div class="block block-one"></div>
            <div class="block block-two"></div>
            <div class="block block-three"></div>
            <div class="block block-four"></div>
            <a href="#">
              <h1><i :class="method.icon"></i></h1>
            </a>
            <p class="description">
              {{method.name}}
            </p>
          </div>
          <p></p>
          <p class="card-description">
            <a :href="method.href">
              {{method.address}}
            </a>        
          </p>
        </card>
    </div>
  </div>
</div>
</template>
<script>
  import UserCard from './Profile/UserCard'
  export default {
    components: {
      UserCard
    },
    data() {
      return {
        user: {
          fullName: 'Joonas Trussmann',
          title: 'Tech Wizard',
          description: `I quit my job as a software architect so I could do something fun. Now I'm messing around with FPV stuff, making them do things the manufacturer did not intend.`,
          socials: [
            {site: "github", username:"j005u"},
            {site: "facebook", username:"j005u"},
            {site: "instagram", username:"j005u"}
          ]        
        },
        methods: [
          {name: "Ethereum", icon:"fab fa-ethereum", href:"ethereum:0xbAB1fec80922328F27De6E2F1CDBC2F322397637", address:"0xbAB1fec80922328F27De6E2F1CDBC2F322397637"},
          {name: "Bitcoin", icon:"fab fa-bitcoin", href:"bitcoin:3L7dE5EHtyd2b1tXBwdnWC2MADkV2VTbrq", address:"3L7dE5EHtyd2b1tXBwdnWC2MADkV2VTbrq"},
          {name: "Buy me a coffee", icon:"fas fa-coffee", href:"https://buymeacoffee.com/fpv.wtf", address:"buymeacoffee.com/fpv.wtf"}
        ]  
      }
    }
  }
</script>
<style>
</style>

<template>
  <v-container fluid class="flex-grow-1 d-flex flex-column">
     <v-carousel v-model="model">
      <v-carousel-item
        v-for="(sahil, i) in sahilImages"
        :key="i"
      >
        <v-sheet
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
           <v-img 
            :src="sahil.url"
            :aspect-ratio="5/6"	

            >
            </v-img>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-row>
      <v-col cols="12">
      <div class="text-h5 mt-1 font-weight-bold mt-4">What you will get in 12 weeks plan?</div>
      <v-card rounded  elevation="3" class="mx-2 mt-4 mb-4">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="font-weight-black"><v-icon class="mr-2">mdi-account-star</v-icon>Plans designed only for you</v-list-item-title>
            <div class="">Personalized fitness & nutrition consultation tailor-made for beginners-including diet plans, training programs, and weekly 1-on-1 guidance.</div>
          </v-list-item-content>
        </v-list-item>
      </v-card>
        <v-card rounded  elevation="3" class="mx-2 mb-4">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="font-weight-black"><v-icon class="mr-2">mdi-chart-timeline-variant</v-icon>Accountability and Progress Tracking</v-list-item-title>
              <div class="">Your coach will set up in-depth weekly calls with you according to your schedule and discuss your progress.
                Your coach will guide you with course corrections as needed.
              </div>
          </v-list-item-content>
        </v-list-item>
      </v-card> 
        <v-card rounded  elevation="3" class="mx-2 mb-4">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="font-weight-black"><v-icon class="mr-2">mdi-face-agent</v-icon>Continuous Support</v-list-item-title>
            <div class="">Your coach is always just a phone call or message away.</div>
          </v-list-item-content>
        </v-list-item>
      </v-card>

      <v-card  elevation="10" class="ma-2 black white--text pa-3">
        <div class="font-weight-bold ml-3">
          <div class="text-h6">12 week plan charges Rs.8000</div> 
          <div class="green--text">
            However a 20 minute consultation is free of cost where the coach explains you more about the process.
          </div>
        </div>
      </v-card>

      <v-card class="text-center px-5 py-3 ma-2 my-5">
        <div class="pb-3 font-weight-bold">
          Tap below icon to book a free consultation call slot.
        </div>
        <v-btn
          href="https://wa.me/918668942542?text=Hi Coach, I wanted to know more about your training."
          target="_blank"
          color="green"
          elevation="3"
        >
          <span class="mr-2">Get In Touch</span>
          <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
        
      </v-card>
      </v-col>
    </v-row>


    <v-footer
    dark
    padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="red justify-center">
          <v-btn
            class="mx-4"
            href="https://www.youtube.com/@Magicwolf._"
            dark
            icon
          >
            <v-icon size="50px">
              mdi-youtube
            </v-icon>
          </v-btn>
          <v-btn
            href="https://www.instagram.com/magicwolf._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            class="mx-4"
            dark
            icon
          >
            <v-icon size="50px">
              mdi-instagram
            </v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>MAGIC WOLVES ONLINE COACHING PROGRAM</strong>
        </v-card-text>
      </v-card>
    </v-footer>
 

</v-container>
</template>

<script>

 export default {
  name: 'SaahilsComponent',
  data: () => ({
    model: 1,
    sahilImages: [
      {id: 1, url:"saahil1.jpg"},
      {id: 2, url:"saahil2.jpg"},
      {id: 3, url:"saahil3.jpg"},
      {id: 4, url:"saahil4.jpg"},
      {id: 5, url:"saahil5.jpg"},
      {id: 6, url:"saahil6.jpg"},
      {id: 7, url:"saahil7.jpg"}
    ]
  }),
};
</script>
<style scoped>
*{
   font-family: nunito !important;
}
.headerImage{
  position: absolute;
  top: 20px;
  right: 20px;
  max-height: 250px;
}
</style>

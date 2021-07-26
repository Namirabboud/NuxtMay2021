<template>
  <div id="resume-page">
    <v-row class="justify-content-center mx-0 vertical-align-wrapper">
      <div class="col-3 text-center bg-grey pt-6 d-print-none">
        <div class="col-12 col-md-8 mx-auto">
          <img class="w-full rounded-circle" src="~/assets/images/pp.jpeg">
        </div>
      </div>

      <div class="col-9 pl-6 pt-6">
        <div class="d-flex justify-end d-print-none" data-html2canvas-ignore="true">
          <PdfButtonComponent></PdfButtonComponent>
        </div>
        <h2>Namir</h2>
        <h1>Abboud</h1>
        <h5 class="text-secondary">FullStack Developer</h5>
      </div>
    </v-row>

    <div class="row justify-content-center mx-0">

      <div class="col-3 bg-grey pb-6 d-print-none ">
      </div>

      <div class="col-9 px-6 pb-6 ">
        <div class="w-100  border-color-light border-top-1 ">
          <div class="row pt-3">
            <div class="col-6 col-md-3">
              <div class="d-inline-block">
                <b>Location</b>
              </div>

              <div class="clearfix">
                Lebanon,Beirut
              </div>

            </div>

            <div class="col-6 col-md-3">
              <div class="d-inline-block">
                <b>Phone</b>
              </div>

              <div class="clearfix">
                +961 70 538 759
              </div>

            </div>


            <div class="col-6 col-md-3">
              <div class="d-inline-block">
                <b>Email</b>
              </div>

              <div class="clearfix">
                namirabboud@gmail.com
              </div>
            </div>

            <div class="col-6 col-md-3">
              <div class="d-inline-block">
                <b>Github</b>
              </div>

              <div class="clearfix">
                <a href="https://github.com/Namirabboud">
                  https://github.com/Namirabboud
                </a>
              </div>
            </div>

            <div class="col-6 col-md-3">
              <div class="d-inline-block">
                <b>Website</b>
              </div>

              <div class="clearfix">
                <a href="http://3.129.128.9/">
                  http://3.129.128.9/

                </a>
              </div>

            </div>


          </div>
        </div>
      </div>

    </div>

    <div class="row mx-0">
      <div class="col-3 text-right bg-dark-grey py-14 pr-6 d-print-none">
        <h4>INTRO</h4>
        <label>What I am all about.</label>
      </div>

      <div class="col-9 pl-6 py-14">
        Hardworking individual who is passionate about learning new skills.
        Finds pleasure in communication to find solutions,
        and addicted to solving problems. Seeking a suitable company that
        focuses on personal development and growth.
      </div>
    </div>

    <div class="row  mx-0">
      <div class="col-3 text-right bg-grey py-14 pr-6 d-print-none">
        <h4>EXPERTISE</h4>
        <label>Batman would be jealous.</label>
      </div>

      <div class="col-9 pl-6 py-14">
        <div class="row justify-content-between pb-3">
          <div class="col-md-6">
            <div class="d-flex">
              <div class="px-0 color-primary expertise-nb"><b>01</b></div>
              <div class=" px-0">
                <h4><b>Laravel</b></h4>
              </div>
            </div>
            <div class="expertise-body">
              I have a really good
              experience in laravel including:

              <ul class="pl-4 pt-2">
                <li>Strong knowledge in eloquent</li>
                <li>Creating composer packages, including a CMS package, built to ease the creation of generated CMS Pages.(Always in progress). </li>
                <li>Integrating Vue.js in laravel to build dynamic layouts.</li>
                <li>Strong Knowledge and use of the Repository Pattern.</li>
                <li>Livewire, Alpine JS.</li>
                <li>Background tasks and queues using Supervisor.</li>
                <li>Building Websites and Mobile App Api's.</li>
              </ul>
            </div>

          </div>

          <div class="col-md-6 ">
            <div class="d-flex ">
              <div class="px-0 color-primary expertise-nb"><b>02</b></div>
              <div class=" px-0">
                <h4><b>Django</b></h4>
              </div>
            </div>
            <div class="expertise-body">
              My experience with django included the following.

              <ul class="pl-4 pt-2">
                <li>CMS Pages.</li>
                <li>Background tasks using Celery.</li>
                <li>Integration with ElasticSearch.</li>
                <li>Fscrawler.</li>
              </ul>
            </div>

          </div>

        </div>

        <div class="row justify-content-between py-3">
          <div class="col-md-6">
            <div class="d-flex">
              <div class="px-0 color-primary expertise-nb"><b>03</b></div>
              <div class=" px-0">
                <h4><b>Vue.js</b></h4>
              </div>
            </div>
            <div class="expertise-body">
              Creating dynamic pages using Vue.js is always a pleasure to me.
              My experience in Vue.js includes:

              <ul class="pl-4 pt-2">
                <li>Creating Components.</li>
                <li>Templates and slots.</li>
                <li>Event Bus.</li>
                <li>Vuex state management.</li>
                <li>Vuetify UI.</li>
                <li>Nuxt.js.</li>

              </ul>
            </div>
          </div>

          <div class="col-md-6">
            <div class="d-flex">
              <div class="px-0 color-primary expertise-nb"><b>04</b></div>
              <div class=" px-0">
                <h4><b>Advanced CSS</b></h4>
              </div>
            </div>
            <div class="expertise-body">
              As you may know writing CSS is essential for a web developer.
              My experience in CSS includes:

              <ul class="pl-4 pt-2">
                <li>SCSS.</li>
                <li>Bootstrap.</li>
                <li>Materialize.</li>
                <li>Vuetify.</li>
              </ul>
            </div>
          </div>

        </div>

        <div class="row justify-content-between">
          <div class="col-md-6">
            <div class="d-flex">
              <div class="px-0 color-primary expertise-nb"><b>05</b></div>
              <div class=" px-0">
                <h4><b>Deployment</b></h4>
              </div>
            </div>
            <div class="expertise-body">
              As like developing projects, my job includes deploying solutions online.
              I am experienced with GNU/Linux and ubuntu servers.
              My Deployment experience also includes:
              <ul class="pl-4 pt-2">
                <li>Apache.</li>
                <li>Nginx.</li>
                <li>Docker.</li>
                <li>CICD.</li>
              </ul>
            </div>
          </div>

          <div class="col-md-6">
            <div class="d-flex">
              <div class="px-0 color-primary expertise-nb"><b>06</b></div>
              <div class=" px-0">
                <h4><b>Database</b></h4>
              </div>
            </div>
            <div class="expertise-body">
              Part of my work is creating and designing databases.
              This includes:
              <ul class="pl-4 pt-2">
                <li>MySQL.</li>
                <li>PostgreSQL.</li>
                <li>Elasticsearch</li>
                <li>Migrations.</li>
              </ul>
            </div>
          </div>

        </div>

        <div class="row justify-content-between">
          <div class="col-md-6">
            <div class="d-flex">
              <div class="px-0 color-primary expertise-nb"><b>07</b></div>
              <div class=" px-0">
                <h4><b>Project Management</b></h4>
              </div>
            </div>
            <div class="expertise-body">
              Besides development, I am also a good communicator.
              Previously in my work:
              <ul class="pl-4 pt-2">
                <li>I was responsible for the communication with my clients.</li>
                <li>Understanding the clients request, and coming up with new ideas that suites the clients requests.</li>
                <li>Communication with colleagues to deliver.</li>
                <li>Follow up.</li>
                <li>Support.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="row mx-0">
      <div class="col-3 text-right bg-dark-grey py-14 pr-6 d-print-none">
        <h4>SKILLS</h4>
        <label>My skills in a progress bar.</label>
      </div>

      <div class="col-9 pl-6 py-14">
        <div class="row justify-content-between pb-10">

          <div class="col-6">
            <div class="d-flex">
              <div class="px-0 yellow--text text--darken-3 col-2 col-md-1"><b>90%</b></div>
              <div class=" px-0 col-11">
                <h4><b>Laravel</b></h4>
              </div>
            </div>
            <v-progress-linear
              color="yellow darken-3"
              value="90%"
              height="10"
              background-color="grey lighten-3"
            ></v-progress-linear>
          </div>

          <div class="col-6">
            <div class="d-flex">
              <div class="px-0 yellow--text text--darken-3 col-2 col-md-1"><b>90%</b></div>
              <div class=" px-0 col-11">
                <h4><b>Vue.js</b></h4>
              </div>
            </div>
            <v-progress-linear
              color="yellow darken-3"
              value="90%"
              height="10"
              background-color="grey lighten-3"
            ></v-progress-linear>
          </div>


        </div>

        <div class="row justify-content-between py-10">
          <div class="col-6">
            <div class="d-flex">
              <div class="px-0 yellow--text text--darken-3 col-2 col-md-1"><b>90%</b></div>
              <div class=" px-0 col-11">
                <h4><b>CSS</b></h4>
              </div>
            </div>
            <v-progress-linear
              color="yellow darken-3"
              value="90%"
              height="10"
              background-color="grey lighten-3"
            ></v-progress-linear>
          </div>

          <div class="col-6">
            <div class="d-flex">
              <div class="px-0 yellow--text text--darken-3 col-2 col-md-1"><b>60%</b></div>
              <div class=" px-0 col-11">
                <h4><b>DJANGO</b></h4>
              </div>
            </div>
            <v-progress-linear
              color="yellow darken-3"
              value="60%"
              height="10"
              background-color="grey lighten-3"
            ></v-progress-linear>
          </div>


        </div>


        <div class="row justify-content-between py-10">
          <div class="col-6">
            <div class="d-flex">
              <div class="px-0 yellow--text text--darken-3 col-2 col-md-1"><b>75%</b></div>
              <div class=" px-0 col-11">
                <h4><b>GNU/Linux</b></h4>
              </div>
            </div>
            <v-progress-linear
              color="yellow darken-3"
              value="75%"
              height="10"
              background-color="grey lighten-3"
            ></v-progress-linear>
          </div>

          <div class="col-6">
            <div class="d-flex">
              <div class="px-0 yellow--text text--darken-3 col-2 col-md-1"><b>70%</b></div>
              <div class=" px-0 col-11">
                <h4><b>DOCKER</b></h4>
              </div>
            </div>
            <v-progress-linear
              color="yellow darken-3"
              value="70%"
              height="10"
              background-color="grey lighten-3"
            ></v-progress-linear>
          </div>
        </div>

        <div class="row justify-content-between py-10">
          <div class="col-6">
            <div class="d-flex">
              <div class="px-0 yellow--text text--darken-3 col-2 col-md-1"><b>70%</b></div>
              <div class=" px-0 col-11">
                <h4><b>Node.js</b></h4>
              </div>
            </div>
            <v-progress-linear
              color="yellow darken-3"
              value="70%"
              height="10"
              background-color="grey lighten-3"
            ></v-progress-linear>
          </div>

          <div class="col-6">
            <div class="d-flex">
              <div class="px-0 yellow--text text--darken-3 col-2 col-md-1"><b>80%</b></div>
              <div class=" px-0 col-11">
                <h4><b>Wordpress</b></h4>
              </div>
            </div>
            <v-progress-linear
              color="yellow darken-3"
              value="80%"
              height="10"
              background-color="grey lighten-3"
            ></v-progress-linear>
          </div>
        </div>

        <div class="row justify-content-between py-10">
          <div class="col-6">
            <div class="d-flex">
              <div class="px-0 yellow--text text--darken-3 col-2 col-md-1"><b>70%</b></div>
              <div class=" px-0 col-11">
                <h4><b>PostgreSQL</b></h4>
              </div>
            </div>
            <v-progress-linear
              color="yellow darken-3"
              value="70%"
              height="10"
              background-color="grey lighten-3"
            ></v-progress-linear>
          </div>

          <div class="col-6">
            <div class="d-flex">
              <div class="px-0 yellow--text text--darken-3 col-2 col-md-1"><b>75%</b></div>
              <div class=" px-0 col-11">
                <h4><b>MySQL</b></h4>
              </div>
            </div>
            <v-progress-linear
              color="yellow darken-3"
              value="75%"
              height="10"
              background-color="grey lighten-3"
            ></v-progress-linear>
          </div>
        </div>

        <div class="row justify-content-between py-10">
          <div class="col-6">
            <div class="d-flex">
              <div class="px-0 yellow--text text--darken-3 col-2 col-md-1"><b>90%</b></div>
              <div class=" px-0 col-11">
                <h4><b>Project Management</b></h4>
              </div>
            </div>
            <v-progress-linear
              color="yellow darken-3"
              value="70%"
              height="10"
              background-color="grey lighten-3"
            ></v-progress-linear>
          </div>
        </div>

      </div>


    </div>

    <div class="row mx-0">
      <div class="col-3 text-right bg-grey py-14 pr-6 d-print-none">
        <h4>PROFESSIONAL EXPERIENCE</h4>
        <label>What I've been working.</label>
      </div>

      <div class="col-9 pl-6 py-14">
        <div class="row justify-content-between pb-10">
          <div class="col-12">
            <div class="d-flex">
              <div class="px-0 color-primary pr-4"><b>Jul 2019 - Present</b></div>
              <div class=" px-0 ">
                <h4><b>LEAD DEVELOPER & PROJECT MANAGER, TEDMOB, DBAYE</b></h4>
              </div>
            </div>
          </div>

          <div class="col-12">
            Here, I am working on development and managing multiple million
            dollar projects normally, including:
            <ul class="pt-3">
              <li class="py-2">
                Project Management including understanding the clients
                request, coming up with new ideas that suites the clients
                requests, following up with the client, delivering the project
                and support.
              </li>

              <li class="py-2">
                Api's for mobile apps
              </li>

              <li class="py-2">
                Websites development (Front end & Back end).
              </li>

              <li class="py-2">
                Server Configuration (Apache,Nginx, IIS).
              </li>

              <li class="py-2">
                Telco Billing All Including E-commerce and Loyalty systems,
                some of them that I built from scratch.
                <ul>
                  <li class="py-2">Maliks Books Store</li>
                  <li class="py-2">Dunkin Donuts KSA</li>
                  <li class="py-2">ABC Lebanon</li>
                </ul>
              </li>

              <li class="pt-2 pb-5">
                Integrating new technologies like CICD, for Continuous
                integration and continuous delivery
              </li>
            </ul>



            I developed many different sites and maintained fantastic
            relationships for very well known clients such as Dunkin' donuts and
            MBC Radios , ABC and Maliks for whom I build their e-commerce and
            loyalty projects for and managed their Server configurations (AWS).

            <br><br>
            Languages used are:
            <ul>
              <li class="py-2">PHP (Laravel)</li>
              <li class="py-2">PHP (Magento)</li>
              <li class="py-2">Mysql Databases</li>
              <li class="py-2">Mysql Databases</li>
              <li class="py-2">HTML, CSS, SCSS, Javascript, Jquery, Vue.js</li>
            </ul>
            On the side, I have also created my own CMS platform which I am
            continuously developing. This was created with laravel.
            CMS is developed to be a laravel package (Compatible with laravel 8)
          </div>

        </div>


        <div class="row justify-content-between pb-10">
          <div class="col-12">
            <div class="d-flex">
              <div class="px-0 color-primary pr-4"><b>Apr 2018 - Jun 2019</b></div>
              <div class=" px-0">
                <h4><b>BACKEND DEVELOPER , ABSOLUTELY DIGITAL, DBAYE</b></h4>
              </div>
            </div>
          </div>

          <div class="col-12">
            During my work here, I worked on a multiple projects, including A
            large project on Crypto Currencies. My tasks where the following:
            <ul class="pt-3">
              <li class="py-2">
                Consultant.
              </li>

              <li class="py-2">
                Lead Backend developer.
              </li>

              <li class="py-2">
                CMS Development.
              </li>

            </ul>

            Language Used is PHP wrapped in Laravel Platform.
          </div>

        </div>

        <div class="row justify-content-between pb-10">
          <div class="col-12">
            <div class="d-flex">
              <div class="px-0 color-primary pr-4"><b>Apr 2016 - Jun 2018</b></div>
              <div class=" px-0">
                <h4><b>M&C SAATCHI, BEIRUT</b></h4>
              </div>
            </div>
          </div>

          <div class="col-12">
            Here in Saatchi I worked as a Web developer including:
            <ul class="pt-3">
              <li class="py-2">
                CMS Development.
              </li>

              <li class="py-2">
                Websites Front end & Back end.
              </li>

              <li class="py-2">
                Mobile app api's. One Of the projects that I worked on was
                GMFIT App.
              </li>

            </ul>

            Language Used is PHP wrapped in Laravel Platform.
          </div>

        </div>

        <div class="row justify-content-between pb-10">
          <div class="col-12">
            <div class="d-flex">
              <div class="px-0 color-primary pr-4"><b>Feb 2015 - May 2016</b></div>
              <div class=" px-0">
                <h4><b>WEBSITE DEVELOPER / SEO, ACCELERATE ME ONLINE, BEIRUT</b></h4>
              </div>
            </div>
          </div>

          <div class="col-12">
            During my one year and a half in Accelerate me online, I worked on
            <ul class="pt-3">
              <li class="py-2">
                Website Development.
              </li>

              <li class="py-2">
                SEO (ensuring best positioning on Google Search Engine
                through targeted key words)
              </li>
            </ul>

            Language Used is PHP
          </div>

        </div>
      </div>
    </div>

    <div class="row mx-0">
      <div class="col-3 text-right bg-dark-grey py-14 pr-6 d-print-none">
        <h4>FreeLance</h4>
        <label>Some Side Hustle.</label>
      </div>

      <div class="col-9 pl-6 py-14">
        <div class="row justify-content-between pb-10">
          <div class="col-12">
            <div class="d-flex">
              <div class=" px-0">
                <h4><b>KYC system.</b></h4>
              </div>
            </div>
          </div>

          <div class="col-12">
            Django Application that searches the web and giving files for
            specific names including:
            <ul>
              <li class="py-2">CMS Development.</li>
              <li class="py-2">Postgres Database.</li>
              <li class="py-2">Document indexing.</li>
              <li class="py-2">Celery Jobs.</li>
              <li class="py-2">Elasticsearch.</li>
            </ul>
          </div>

        </div>

        <div class="row justify-content-between pb-10">
          <div class="col-12">
            <div class="d-flex">
              <div class=" px-0">
                <h4><b>Car Rent Service.</b></h4>
              </div>
            </div>
          </div>

          <div class="col-12">
            Car Rent System with Dynamic CMS Pages and forms including.
            <ul>
              <li class="py-2">CRM.</li>
              <li class="py-2">CMS Development.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>

  </div>

</template>

<script>
export default {}
</script>

<!--
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
-->

<template>
  <div>
    <v-btn
      elevation="2"
      color="yellow darken-3"
      @click="generatePDF()"
    >Download Resume As PDF</v-btn>
  </div>
</template>

<script>
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

export default {
  name: "PdfButtonComponent",

  data: function(){
    return {

    }
  },

  methods:{
    generatePDF(){
      const doc = new jsPDF('l', 'mm','a4');
      /** WITH CSS */
      let element = document.getElementById('resume-page');
      let width= element.style.width;
      let height = element.style.height;


      html2canvas(element, {
        scrollY: -window.scrollY,
        scale: 1
      }).then(function (canvas) {
        const img = canvas.toDataURL("image/png");

        var imgWidth = 210;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;

        var doc = new jsPDF('p', 'mm');
        var position = 0;

        doc.addImage(img, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(img, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        //doc.addImage(img,'JPEG',width,height);
        doc.save("sample.pdf");
      });
    }
  }
}
</script>

<style scoped>

</style>

import api from "~/api";

export const state = () => ({

})

export const mutations = {

}

export const actions = {

  transformHtmlToPDF({},data){
    return api.exportPdf({
      html: data.html
    },{
      responseType: 'blob'
    })
  }
}

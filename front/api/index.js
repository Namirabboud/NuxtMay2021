import axios from 'axios'

export default {
  exportPdf: (data,headers) => axios.post('api/v1/export-pdf', data, headers),
}

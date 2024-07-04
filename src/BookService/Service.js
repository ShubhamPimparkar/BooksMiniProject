import axios from "axios";

var baseurl = "http://localhost:8080/books"    
class Service{

    getAllBooks(){
        return axios.get(baseurl);
    }
    addBook(book){
        // console.log("in service - ")
        // console.log(book)
        var myheader={"content-type":"application/json"}
       return axios.post(baseurl,book,{headers:myheader})
    }
    delBooks(id){
        return axios.delete(baseurl+"/"+id)
    }
}
export default new Service();


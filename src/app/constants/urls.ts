import {environment} from "../../environments/environment";

const {API} = environment;

const cars = `${API}/cars`

const urls = {
  cars:{
    full:cars,
    byId:(id:number):string=>`${cars}/${id}`
  }
}

export {
  urls
}

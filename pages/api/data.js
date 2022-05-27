
export default function handler(req, res){

    
    //https://138.68.106.100:1338/wp-json/wp/v2/aktuality
    //https://138.68.106.100:1338/wp-json/wp/v2/sortiment
    //https://138.68.106.100:1338/wp-json/wp/v2/galerie/
    
    const url = req.body.url;
    console.log("calling url", url);
    request.get(
      url,
      (error, res, body) => {
        if (error) {
          console.error(error)
          return response.status(200).json({'content': "error"}) 
  }
          return response.status(200).json(JSON.parse(body))
          },
        )
}
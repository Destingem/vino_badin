
export default function handler(req, res){

    console.log(req);
    console.log(req.body);
    //http://206.189.56.129:1337/wp-json/wp/v2/aktuality
    //http://206.189.56.129:1337/wp-json/wp/v2/sortiment
    //http://206.189.56.129:1337/wp-json/wp/v2/galerie/
    res.status(400)

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
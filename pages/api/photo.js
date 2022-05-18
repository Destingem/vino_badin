
export default function handler(req, res){

    
  
    
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